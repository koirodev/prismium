# Типизация Prismium

В этой директории находятся файлы определения типов для библиотеки Prismium. Они могут использоваться как для TypeScript-проектов, так и для обеспечения автокомплита в JavaScript-проектах через JSDoc.

## Структура типов

- `index.d.ts` - Основные типы и интерфейсы библиотеки
- `core.d.ts` - Типы для основного класса Prismium
- `options.d.ts` - Типы для конфигурационных опций
- `managers.d.ts` - Типы для менеджеров (DOM, Icons, Timer, Effects)
- `react.d.ts` - Типы для React компонентов
- `vue.d.ts` - Типы для Vue компонентов

## Использование с TypeScript

```typescript
// При импорте Prismium в TypeScript-проекте
import Prismium from 'prismium';

// Импорт типов для опций
import { PrismiumOptions } from 'prismium';

// Создание экземпляра с типизированными опциями
const options: PrismiumOptions = {
  theme: 'dark',
  effect: 'line-by-line'
};

const accordion = new Prismium('.accordion', options);
```

## Использование с JavaScript + JSDoc

```javascript
/**
 * @typedef {import('prismium').PrismiumOptions} PrismiumOptions
 */

/**
 * @type {PrismiumOptions}
 */
const options = {
  theme: 'dark',
  effect: 'line-by-line'
};

const accordion = new Prismium('.accordion', options);
```

## React-компоненты

```tsx
import { Prismium, PrismiumCurrent, PrismiumContent } from 'prismium/react';

const MyAccordion = () => {
  return (
    <Prismium options={{ theme: 'dark' }}>
      <PrismiumCurrent>Заголовок аккордеона</PrismiumCurrent>
      <PrismiumContent>Содержимое аккордеона</PrismiumContent>
    </Prismium>
  );
};
```

## Vue-компоненты

```vue
<template>
  <Prismium :options="options">
    <PrismiumCurrent>Заголовок аккордеона</PrismiumCurrent>
    <PrismiumContent>Содержимое аккордеона</PrismiumContent>
  </Prismium>
</template>

<script>
import { Prismium, PrismiumCurrent, PrismiumContent } from 'prismium/vue';

export default {
  components: { Prismium, PrismiumCurrent, PrismiumContent },
  data() {
    return {
      options: {
        theme: 'dark',
        effect: 'line-by-line'
      }
    };
  }
};
</script>
```
