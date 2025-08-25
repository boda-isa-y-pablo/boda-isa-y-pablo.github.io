<template>
  <div class="relative mb-12">

    <img id="imgIntro" src="/img/intro.png" alt="Invitation Intro" class="h-screen w-screen object-cover"
      style="filter: brightness(.7) grayscale(0.6)" />

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/6 text-center text-gray-100 w-100">
      <p id="weDo" class="text-8xl mb-12 relative" style="text-shadow: white 2px 2px 12px">
        <span class="font-cute we-do-left inline-block">We</span>
        <span class="mx-4"></span>
        <span class="font-cute we-do-right inline-block">Do</span>
        <img id="heartImg" src="/img/heart.png" alt="heart" class="absolute size-28 left-1/2 top-1/2"
          style="filter: invert() opacity(0.35); scale: .8 1.7; rotate: -12deg;">
      </p>

      <p class="text-4xl mb-6">
        <FadeInText text="ISABEL & PABLO" />
      </p>

      <p class="mb-6">TE INVITAMOS A CELEBRAR NUESTRA BODA</p>

      <div class="flex justify-center items-center gap-4">
        <div class="w-28 border-t-2 border-b-2 border-t-gray-100 py-1">
          <FadeInText text="DOMINGO" />
        </div>
        <div class="text-2xl">
          <p>
            <FadeInText text="DIC" />
          </p>
          <p class="text-4xl mb-1">28</p>
          <p>
            <FadeInText text="2025" />
          </p>
        </div>
        <div class="w-28 border-t-2 border-b-2 border-t-gray-100 py-1">
          <FadeInText text="04:00 PM" />
        </div>
      </div>
    </div>
  </div>

  <div>
    <h1 class="text-4xl text-center mb-12">
      <FadeInText text="ITINERARIO" />
    </h1>

    <div class="px-4">
      <div v-for="(item, index) in itinerary" :key="index" class="text-center flex"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }">
        <div class="w-1/2 h-38 flex-col " :class="{ 'border-l-2': index % 2 !== 0 }">
          <div class="h-1/2 flex justify-center items-end py-2">
            <p class="text-xl">{{ item.time }}</p>
          </div>
          <div class="relative">
            <div class="border-1" :class="{ 'ml-6': index % 2 === 0, 'mr-6': index % 2 !== 0 }"></div>
            <span class="absolute -translate-y-1/2" :class="{
              'right-0': index % 2 === 0,
              'left-0': index % 2 !== 0,
              'translate-x-1/2': index % 2 === 0,
              '-translate-x-1/2': index % 2 !== 0,
            }">
              <Badge :size="26" color="#877030" fill="#a68b3b" />
            </span>
          </div>
          <div class="h-1/2 py-2">
            <p>{{ item.title }}</p>
            <p>{{ item.address }}</p>
          </div>
        </div>
        <div class="w-1/2 flex items-center px-6"
          :class="{ 'justify-end': index % 2 !== 0, 'border-l-2': index % 2 === 0 }">
          <component :is="item.icon" :size="48" :strokeWidth="1" />
        </div>
      </div>
    </div>
  </div>

  <div class="h-64">
    <!-- whitespace -->
  </div>
</template>

<style lang="css" scoped>
#imgIntro {
  animation: img-intro 750ms;
}

@keyframes img-intro {
  0% {
    opacity: 0;
    transform: translateY(5%);
  }

  100% {
    opacity: 1;
    transform: translatY(0%);
  }
}

#weDo {
  animation: we-do-anim 1s ease forwards;
}

@keyframes we-do-anim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.we-do-left {
  animation: we-do-left-anim 1s ease forwards;
}

@keyframes we-do-left-anim {
  0% {
    opacity: 0;
    translate: -50% 0;
  }

  100% {
    opacity: 1;
    translate: none;
  }
}

#weDo .we-do-right {
  animation: we-do-right-anim 1s ease forwards;
}

@keyframes we-do-right-anim {
  0% {
    opacity: 0;
    translate: 50% 0;
  }

  100% {
    opacity: 1;
    translate: none;
  }
}

#heartImg {
  animation: heart-anim 1s ease forwards;
}

@keyframes heart-anim {
  0% {
    opacity: 0;
    translate: -50% 25%;
  }

  100% {
    opacity: 1;
    translate: -50% -50%;
  }
}
</style>

<script setup lang="ts">
import { Badge, Church, Gavel, NotebookTabs, Utensils, PartyPopper } from 'lucide-vue-next';
import FadeInText from '@/components/FadeInText.vue';

const itinerary: { title: string; time: string, address: string, icon: any, }[] = [
  {
    title: 'CEREMONIA RELIGIOSA',
    time: '04:00 PM',
    address: 'Direccion',
    icon: Church,
  },
  {
    title: 'CEREMONIA CIVIL',
    time: '06:00 PM',
    address: 'Direccion',
    icon: Gavel,
  },
  {
    title: 'RECEPCION',
    time: '07:00 PM',
    address: 'Direccion',
    icon: NotebookTabs,
  },
  {
    title: 'CENA',
    time: '08:00 PM',
    address: 'Direccion',
    icon: Utensils,
  },
  {
    title: 'FIESTA',
    time: '09:00 PM',
    address: 'Direccion',
    icon: PartyPopper,
  },
];
</script>
