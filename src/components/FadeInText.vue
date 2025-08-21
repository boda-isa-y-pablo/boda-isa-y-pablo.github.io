<template>
  <span v-for="(char, i) in characters" :key="i" class="opacity-0 translate-x-[-20px] blur-sm animate-fade-slide"
    :class="spanClass" :style="{
      animationDelay: `${i * props.delayStep}s`,
      animationDuration: `${props.duration}s`,
    }">
    {{ char }}
  </span>
</template>

<style scoped>
@keyframes fade-slide {
  to {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

.animate-fade-slide {
  animation-name: fade-slide;
  animation-fill-mode: forwards;
}
</style>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  text: string;
  delayStep?: number; // seconds between characters
  duration?: number;  // animation duration
  spanClass?: string
}>(), {
  delayStep: 0.05,
  duration: 1,
});

// const characters = computed(() => props.text.split(""));
const characters = computed(() =>
  props.text.split("").map(ch => ch === " " ? "\u00A0" : ch)
);
</script>
