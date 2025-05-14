# Prismium Typings

This directory contains type definition files for the Prismium library. They can be used in TypeScript projects as well as to provide autocomplete in JavaScript projects through JSDoc.

## Typings Structure

- `index.d.ts` - Main types and interfaces of the library
- `core.d.ts` - Types for the main Prismium class
- `options.d.ts` - Types for configuration options
- `managers.d.ts` - Types for managers (DOM, Icons, Timer, Effects)
- `react.d.ts` - Types for React components
- `vue.d.ts` - Types for Vue components

## Using with TypeScript

```typescript
// When importing Prismium in a TypeScript project
import Prismium from 'prismium';

// Importing types for options
import { PrismiumOptions } from 'prismium';

// Creating an instance with typed options
const prismiumOptions: PrismiumOptions = {
  theme: 'dark',
  effect: 'line-by-line',
};

const accordion = new Prismium('.accordion', prismiumOptions);
```

## React Components

```tsx
import { Prismium, PrismiumCurrent, PrismiumContent } from 'prismium/react';

const MyAccordion = () => {
  return (
    <Prismium options={{ theme: 'dark' }}>
      <PrismiumCurrent>Accordion Header</PrismiumCurrent>
      <PrismiumContent>Accordion Content</PrismiumContent>
    </Prismium>
  );
};
```

## Vue Components

```vue
<template>
  <Prismium :options="options">
    <PrismiumCurrent>Accordion Header</PrismiumCurrent>
    <PrismiumContent>Accordion Content</PrismiumContent>
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
        effect: 'line-by-line',
      },
    };
  },
};
</script>
```
