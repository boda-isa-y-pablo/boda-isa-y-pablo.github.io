<template>
  <transition name="fade">
    <div v-if="opened" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      @click.self="closeDialog">
      <button @click="closeDialog" class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
        aria-label="Close">
        ✕
      </button>

      <img :src="image" alt="Fullscreen Image" class="max-w-full max-h-full object-contain" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

defineProps<{
  image: string;
  opened: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

function closeDialog() {
  emit("close");
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    closeDialog();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
