/**
 * @description
 * Композабл для отправки формы. Отправляет форму на сервер и обрабатывает ответ.
 * Он принимает данные формы и форму в качестве аргументов.
 * Он использует FormData для отправки данных формы на сервер.
 * Он также обрабатывает ошибки и успешные ответы от сервера.
 * В случае успешного ответа форма сбрасывается, а модальное окно закрывается.
 * В случае ошибки отображается сообщение об ошибке.
 * Он также отключает кнопку отправки формы во время отправки.
 * После успешной отправки формы вызывается функция closeAllModals и openModal с аргументом 'Successful'.
 * @example
 * const { submitForm, globalError } = useFormSubmit();
 * const success = await submitForm(form, e.target);
 */

export default function () {
  const config = useRuntimeConfig();
  const { openModal, closeAllModals } = useModal();
  const { $stRefresh } = useNuxtApp();
  
  const globalError = ref(null);

  const submitForm = async (formData, form) => {
    const preparedData = new FormData();
    const button = form?.querySelector('button[type="submit"]');

    button?.setAttribute('disabled', true);

    preparedData.append('subject', formData.subject);
    preparedData.append('name', formData.name);
    preparedData.append('phone', formData.phone);
    preparedData.append('file', formData.resume?.[0]);
    preparedData.append('privacy_policy', formData.privacyPolicy ? '1' : '0');

    try {
      const response = await fetch(`${config.public.apiUrl}/forms`, {
        method: 'POST',
        body: preparedData,
      });

      let data;
      try {
        data = await response.json();
      } catch (e) {
        if (!response.ok) {
          globalError.value = `Ошибка сервера: ${response.status}`;
        } else {
          globalError.value = 'Некорректный ответ от сервера';
        }

        button?.removeAttribute('disabled');
        setTimeout(() => {
          $stRefresh();
        }, 0);

        return false;
      }

      if (!response.ok) {
        globalError.value =
          data?.errors[0] ||
          `Ошибка ${response.status}: ${response.statusText}`;

        button?.removeAttribute('disabled');
        setTimeout(() => {
          $stRefresh();
        }, 0);
        return false;
      }

      if (!data?.success) {
        globalError.value = Array.isArray(data?.errors)
          ? data.errors[0]
          : 'Неизвестная ошибка при отправке формы';

        button?.removeAttribute('disabled');
        setTimeout(() => {
          $stRefresh();
        }, 0);
        return false;
      }

      form?.reset();

      formData.subject = '';
      formData.name = '';
      formData.phone = '';
      formData.resume = null;
      formData.privacyPolicy = true;

      button?.removeAttribute('disabled');
      setTimeout(() => {
        closeAllModals();
        openModal('Successful');
      }, 0);

      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      globalError.value =
        'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.';

      button?.removeAttribute('disabled');
      setTimeout(() => {
        $stRefresh();
      }, 0);
      return false;
    }
  };

  return {
    submitForm,
    globalError,
  };
}
