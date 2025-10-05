<script setup lang="ts">
import FadeInText from './FadeInText.vue';
import type { ItineraryItem } from './Itinerary';
import { Icon } from 'lucide-vue-next'

withDefaults(defineProps<{
  itinerary: ItineraryItem[]
  iconColor?: string
}>(), {
  // iconColor: 'rgba(105, 80, 5, 1)', // dorado
  // iconColor: 'rgba(224, 138, 138, 1)', // rosa salmon
  iconColor: 'rgba(207, 135, 135, 1)' // rosa palo
  // iconColor: 'rgba(225, 111, 145, 0.8)', // rosa fuerte opaco
  // iconColor: 'rgba(21, 49, 7, 1)', // verde oscuro
  // iconColor: 'rgba(197, 90, 90, 1)', // rojo suave
  // iconColor: 'rgba(225, 111, 145, 1)', // rosa fuerte
})

</script>

<template>
  <div class="py-20 bg-rose-50 relative overflow-clip">
    <h1 class=" text-4xl text-center mb-20">
      <FadeInText text="ITINERARIO" />
    </h1>

    <ul class="timeline timeline-snap-icon timeline-vertical z-2">
      <li v-for="(item, index) of itinerary">

        <hr v-if="index !== 0" class="bg-gray-300" />

        <div v-if="item.render === 'emoji'" class="timeline-middle size-16 flex justify-center">
          <span class="text-5xl">{{ item.emoji }}</span>
        </div>

        <div v-if="item.render === 'icon'" class="timeline-middle rounded-full p-2"
          :style="{ backgroundColor: iconColor }">
          <component :is="item.icon" :size="28" :strokeWidth="1.5" color="white" />
        </div>


        <div v-if="item.render === 'lucide-lab'" class="timeline-middle rounded-full p-2"
          :style="{ backgroundColor: iconColor }">
          <Icon :iconNode="item.icon" name="" :size="28" :strokeWidth="1.5" color="white" />
        </div>

        <div :class="{
          'timeline-start': index % 2 === 0,
          'timeline-end': index % 2 !== 0,
          'text-end': index % 2 === 0,
        }" class="mb-20 text-lg">
          <p class="font-bold">
            <time>{{ item.time }}</time>
          </p>
          <h2 class="font-bold ">{{ item.title }}</h2>
          <p>
            <a :href="item.addressLink" target="_blank" class="underline">
              {{ item.address }}
            </a>
          </p>
        </div>

        <hr v-if="index !== itinerary.length - 1" class="bg-gray-300" />
      </li>
    </ul>

    <!-- <img src="/img/flowers.png" alt="flowers top left"
      class="z-1 absolute top-0 left-0 -translate-x-60 -translate-y-1/2 rotate-280"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(60%);"> -->

    <img src="/img/flowers.png" alt="flowers top left"
      class="z-1 absolute top-0 left-0 -translate-x-70 translate-y-40 rotate-280"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(40%);">

    <!-- <img src="/img/flowers.png" alt="flowers top right"
      class="z-1 absolute top-0 right-0 translate-x-78 -translate-y-5 rotate-50"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(60%);"> -->


    <img src="/img/flowers.png" alt="flowers top right"
      class="z-1 absolute top-0 right-0 translate-x-78 -translate-y-5 rotate-50"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(40%);">

    <img src="/img/flowers.png" alt="flowers bottom right"
      class="z-1 absolute bottom-0 right-0 translate-x-1/2 translate-y-32 rotate-45"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(40%);">
  </div>
</template>
