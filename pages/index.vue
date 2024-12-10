<template>
  <div>
    <h1 class="text-8xl textarea-primary">Index Page</h1>
    <p>This is the index page of my portfolio.</p>
    <button class="btn btn-primary"> Teste </button>
    <ThemeSelector />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLayout } from '~/store/layout';
import ThemeSelector from '~/components/shared/ThemeSelector.vue';

const layout = useLayout();
const themeClass = computed(() => layout.theme === 'darkTheme' ? 'dark' : 'light');
</script>