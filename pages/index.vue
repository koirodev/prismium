<script setup></script>

<template>
  <div>
    <SectionsBanner />

    <LazySectionsDefault
      class="section_padding_top"
      :title="$t('available_for.title')"
      :description="$t('available_for.description')"
    >
      <div class="grid w-full grid-cols-3 gap-6 max-mt:gap-4 max-mm:gap-2">
        <CardsAvailable
          image="/images/available/js.svg"
          title="JavaScript"
          to="/core"
        />
        <CardsAvailable
          image="/images/available/react.svg"
          title="React"
          to="/react"
        />
        <CardsAvailable
          image="/images/available/vue.svg"
          title="Vue.js"
          to="/vue"
        />
      </div>
    </LazySectionsDefault>

    <LazySectionsDefault
      class="section_padding_top"
      :title="$t('easy_to_use.title')"
      :description="$t('easy_to_use.description')"
    >
      <ElementsCodeTabs from="easy-to-use" />
    </LazySectionsDefault>

    <LazySectionsPresentation class="section_padding_top" />

    <LazySectionsDefault
      class="section_padding_top section_padding_bottom"
      title="Используй <strong>Prismium</strong> в самых неожиданных местах"
    >
      <CardsDemoGif image="/images/demo/filters.gif" title="Фильтры" />
      <CardsDemoGif image="/images/demo/cards.gif" title="Карточки" />
      <CardsDemoGif image="/images/demo/comparison.gif" title="Сравнения" />
    </LazySectionsDefault>
  </div>
</template>
