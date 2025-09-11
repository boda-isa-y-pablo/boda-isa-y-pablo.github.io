<template>
  <div class="w-full max-w-md p-4 bg-white shadow-md rounded-lg flex flex-col gap-4">
    <!-- Title -->
    <h3 class="text-lg font-semibold text-gray-700">{{ title }}</h3>

    <!-- Controls -->
    <div class="flex items-center gap-2">
      <button @click="togglePlay" class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
        {{ isPlaying ? "Pause" : "Play" }}
      </button>
      <button @click="stop" class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700">
        Stop
      </button>
    </div>

    <!-- Progress Tracker -->
    <div class="flex items-center gap-2">
      <input type="range" min="0" :max="duration" step="0.1" v-model="currentTime" @input="seek"
        class="w-full accent-blue-600" />
      <span class="text-xs text-gray-600">
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
      </span>
    </div>

    <!-- Volume Control -->
    <div class="flex items-center gap-2">
      <button @click="toggleMute" class="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
        {{ isMuted ? "Unmute" : "Mute" }}
      </button>
      <input type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume"
        class="w-full accent-blue-600" />
    </div>
  </div>

  <br></br>

  <div class="p-4 bg-white rounded-lg">
    <div class="flex items-center gap-2 debug">
      <button @click="togglePlay" class="px-3 py-1 text-gray-700">
        {{ isPlaying ? "Pause" : "Play" }}
        <PlayCircle/>
      </button>
      <button @click="stop" class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700">
        Stop
      </button>
    </div>

    <p class="text-gray-700">{{ title }}</p>

    <!-- Progress Tracker -->
    <div class="flex items-center gap-2">
      <input type="range" min="0" :max="duration" step="0.1" v-model="currentTime" @input="seek"
        class="w-full accent-blue-600" />
      <span class="text-xs text-gray-600">
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
      </span>
    </div>

    <!-- Volume Control -->
    <div class="flex items-center gap-2">
      <button @click="toggleMute" class="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
        {{ isMuted ? "Unmute" : "Mute" }}
      </button>
      <input type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume"
        class="w-full accent-blue-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, onUnmounted } from "vue";
import { PlayCircle } from 'lucide-vue-next'

const props = defineProps<{
  src: string;
  title: string;
  startSecond?: number;
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
