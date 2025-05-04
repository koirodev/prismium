/**
 * @description Валидация формы.
 */

import { object, string, boolean, mixed } from 'yup';

export default function () {
  const { $stRefresh } = useNuxtApp();

  const forbiddenSymbols = [ 
    '{','}','$','[',']','>','<','?','"',"'",'/','\\','|','`','~',
    ';',':','#','@','!','%','^','&','+','=','*'
  ];
  const forbiddenSymbolsRegex = new RegExp(
    `[${forbiddenSymbols.map((symbol) => `\\${symbol}`).join('')}]`
  );
  const forbiddenSymbolsString = forbiddenSymbols.join('');

  const schema = object({
    name: string()
      .required('Введите имя')
      .min(2, 'Минимальная длина 2 символа')
      .max(100, 'Максимальная длина 100 символов')
      .trim()
      .test(
        'noDangerousSymbols',
        `Введены запрещенные символы: ${forbiddenSymbolsString}`,
        (value) => {
          if (!value) return true;
          return !forbiddenSymbolsRegex.test(value);
        }
      ),
    phone: string()
      .required('Введите телефон')
      .min(18, 'Введите корректный телефон')
      .max(18, 'Введите корректный телефон'),
    resume: mixed()
      .nullable()
      .test('fileSize', 'Размер файла должен быть меньше 5 МБ', (value) => {
        if (!value?.length) return true;

        const maxFileSize = 5;
        for (let i = 0; i < value.length; i++) {
          return value[i].size < maxFileSize * 1024 * 1024;
        }
      })
      .test('fileExtension', 'Неверный формат файла', (value) => {
        if (!value?.length) return true;

        const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'];

        for (let i = 0; i < value.length; i++) {
          if (!value[i].name) return false;
          const extension = value[i].name.split('.').pop().toLowerCase();
          return allowedExtensions.includes(extension);
        }
      }),
    privacyPolicy: boolean().oneOf(
      [true],
      'Согласитесь с политикой конфиденциальности'
    ),
  });

  const form = reactive({
    _name: '',
    phone: '',
    resume: null,
    privacyPolicy: true,
  });

  Object.defineProperty(form, 'name', {
    enumerable: true,
    get() {
      return form._name;
    },
    set(value) {
      form._name = value.replace(forbiddenSymbolsRegex, '');
    }
  });

  const errors = reactive({
    name: '',
    phone: '',
    resume: '',
    privacyPolicy: '',
  });

  watch(
    () => JSON.parse(JSON.stringify(form)),
    (newVal, oldVal) => {
      Object.keys(newVal).forEach((key) => {
        if (newVal[key] !== oldVal[key] && errors[key]) {
          errors[key] = '';
        }
      });
    }
  );

  const validate = async () => {
    Object.keys(errors).forEach((key) => {
      errors[key] = '';
    });

    try {
      await schema.validate(form, { abortEarly: false });

      setTimeout(() => {
        $stRefresh();
      }, 0);

      return true;
    } catch (error) {
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });

      setTimeout(() => {
        $stRefresh();
      }, 0);

      return false;
    }
  };

  return { form, errors, validate };
}
