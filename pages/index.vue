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
      class="section_padding_top"
      :title="$t('presentation.use_prismium.title')"
      :description="$t('presentation.use_prismium.description')"
    >
      <div class="flex flex-col gap-12">
        <CardsDemoGif
          image="/images/demo/filters.gif"
          :title="$t('presentation.use_prismium.filters')"
        />
        <CardsDemoGif
          image="/images/demo/cards.gif"
          :title="$t('presentation.use_prismium.cards')"
          reverse
        />
        <CardsDemoGif
          image="/images/demo/comparison.gif"
          :title="$t('presentation.use_prismium.comparison')"
        />
      </div>
    </LazySectionsDefault>

    <LazySectionsDefault
      class="section_center section_padding_top section_padding_bottom"
      :title="$t('start_using.title')"
    >
      <div class="flex-center w-full flex-col gap-4">
        <AppTerminal
          class="z-10 m-auto max-w-[300px] max-mt:m-0"
          command="npm install prismium"
        />
        <AppButton to="/get-started" icon="fi-rr-rocket">
          {{ $t('common.get_started') }}
        </AppButton>
      </div>
    </LazySectionsDefault>
  </div>
</template>
