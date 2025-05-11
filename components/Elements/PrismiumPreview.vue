<script setup>
import { useDemoSettings } from '~/stores/demoSettingsStore';

import data from '~/examples/demo-data.json';

import { Prismium, PrismiumCurrent, PrismiumContent } from 'prismium/vue';
import { EffectsModule } from 'prismium/modules';

import 'prismium/scss';
import 'prismium/theme/dark';
import 'prismium/theme/dark-contrast';
import 'prismium/theme/light';
import 'prismium/theme/light-contrast';
import 'prismium/theme/forest';
import 'prismium/theme/ocean';
import 'prismium/theme/sunset';

const demoSettings = useDemoSettings();

const prismiumOptions = {
  theme: demoSettings.theme,
  effect: demoSettings.animation,
  speed: 500,
  autoClose: true,
  autoCloseNested: true,
};

const prismiumModules = [EffectsModule];

const testData = ref(data);
</script>

<template>
  <div
    data-prismium-container
    :dir="demoSettings.direction"
    v-scrollbar="{ scrollbars: { autoHide: 'leave' } }"
  >
    <Prismium
      :class="{ 'prismium-active': !i }"
      :options="prismiumOptions"
      :modules="prismiumModules"
      v-for="(item, i) in testData"
      :key="item.title"
    >
      <PrismiumCurrent selector="button">
        <span v-html="item.title"></span>
        <SvgFiRrPlus data-prismium-icon="open" />
        <SvgFiRrMinus data-prismium-icon="close" />
      </PrismiumCurrent>
      <PrismiumContent>
        <div v-html="item.content"></div>
        <Prismium
          :options="prismiumOptions"
          :modules="prismiumModules"
          v-for="item in item.children"
          :key="item.title"
        >
          <PrismiumCurrent selector="button">
            <span v-html="item.title"></span>
            <SvgFiRrPlus data-prismium-icon="open" />
            <SvgFiRrMinus data-prismium-icon="close" />
          </PrismiumCurrent>
          <PrismiumContent>
            <div v-html="item.content"></div>
            <Prismium
              :options="prismiumOptions"
              :modules="prismiumModules"
              v-for="item in item.children"
              :key="item.title"
            >
              <PrismiumCurrent selector="button">
                <span v-html="item.title"></span>
                <SvgFiRrPlus data-prismium-icon="open" />
                <SvgFiRrMinus data-prismium-icon="close" />
              </PrismiumCurrent>
              <PrismiumContent>
                <div v-html="item.content"></div>
              </PrismiumContent>
            </Prismium>
          </PrismiumContent>
        </Prismium>
      </PrismiumContent>
    </Prismium>
  </div>
</template>
