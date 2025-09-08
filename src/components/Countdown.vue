<template>
  <div class="flex justify-center items-center text-center gap-4">
    <template v-if="remaining > 0">
      <div v-for="(item, index) of items" :key="index">
        <p class="text-4xl font-bold">{{ item.value }}</p>
        <p>{{ item.label }}</p>
      </div>
    </template>

    <template v-else>
      <slot name="done" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps<{
  date: Date
}>();

let countdownInterval: ReturnType<typeof setInterval>;

const remaining = ref(0);

const items = computed(() => [
  {
    label: 'Días',
    value: Math.floor(remaining.value / (1000 * 60 * 60 * 24)),
  },
  {
    label: 'Horas',
    value: Math.floor((remaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  },
  {
    label: 'Minutos',
    value: Math.floor((remaining.value % (1000 * 60 * 60)) / (1000 * 60)),
  },
  {
    label: 'Segundos',
    value: Math.floor((remaining.value % (1000 * 60)) / 1000),
  }
])

onMounted(() => {
  setRemaining(props.date);

  countdownInterval = setInterval(() => {
    setRemaining(props.date);

    if (remaining.value === 0 && countdownInterval) {
      clearCountdownInterval();
    }
  }, 1000);
});

onUnmounted(() => {
  clearCountdownInterval();
});

function setRemaining(date: Date) {
  const target = date.getTime();
  remaining.value = Math.max(0, target - Date.now())
}

function clearCountdownInterval() {
  if (countdownInterval) clearInterval(countdownInterval);
}
</script>
