<template>
  <div class="bg-stone-800/80 text-gray-200 rounded-xl p-4">

    <div class="flex gap-4 mb-2">
      <!-- play/pause, stop -->
      <div class="w-24">
        <div class="flex gap-2">
          <PlayCircle v-if="!isPlaying" @click="togglePlay" />
          <PauseCircle v-else @click="togglePlay" />
          <StopCircle @click="stop" />
        </div>
      </div>

      <!-- title -->
      <div class="w-full">
        <p class="text-sm">{{ title }}</p>
      </div>
    </div>

    <div class="flex gap-4">
      <!-- time -->
      <div class="w-24">
        <p class="text-xs">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</p>
      </div>

      <!-- progress slider -->
      <div class="w-full">
        <input type="range" min="0" :max="duration" step="0.1" v-model="currentTime" @input="seek" class="w-full" />
      </div>
    </div>

    <div class="flex gap-4">
      <!-- volume icon -->
      <div class="w-24">
        <VolumeX v-if="isMuted" @click="toggleMute" />
        <Volume2 v-else @click="toggleMute" />
      </div>

      <!-- volume slider -->
      <div class="w-full">
        <input type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume" class="w-full" />
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, onUnmounted } from "vue";
import { PlayCircle, PauseCircle, StopCircle, Volume2, VolumeX } from 'lucide-vue-next'

const props = defineProps<{
  autoplay?: boolean;
  src: string;
  title: string;
  startSecond?: number;
  startVolume?: number;
}>();

const audio = new Audio(props.src);
const isPlaying = ref(false);
const isMuted = ref(false);
const duration = ref(0);
const currentTime = ref(0);
const volume = ref(1);

onMounted(() => {
  // Set start position if provided
  if (props.startSecond && props.startSecond > 0) {
    audio.currentTime = props.startSecond;
  }

  // Load metadata to get duration
  audio.addEventListener("loadedmetadata", () => {
    duration.value = audio.duration;
  });

  // Sync time
  audio.addEventListener("timeupdate", () => {
    currentTime.value = audio.currentTime;
  });

  // Reset state when ended
  audio.addEventListener("ended", () => {
    isPlaying.value = false;
    currentTime.value = 0;
  });

  if (props.autoplay) {
    togglePlay();
  }

  if (props.startVolume !== undefined && props.startVolume !== null) {
    volume.value = props.startVolume;
    updateVolume();
  }
});

onUnmounted(() => {
  audio.pause();
});

function togglePlay() {
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying.value = !isPlaying.value;
}

function stop() {
  audio.pause();
  audio.currentTime = props.startSecond ? props.startSecond : 0;
  currentTime.value = audio.currentTime;
  isPlaying.value = false;
}

function seek() {
  audio.currentTime = currentTime.value;
}

function updateVolume() {
  audio.volume = volume.value;
  isMuted.value = audio.volume === 0;
}

function toggleMute() {
  isMuted.value = !isMuted.value;
  audio.muted = isMuted.value;
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}
</script>
