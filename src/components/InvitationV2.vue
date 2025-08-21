<template>
  <div class="relative">

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

  <div class="h-96">
    <!-- whitespace for testing -->
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
import { CalendarDays, Icon, Church, Phone, Image, Calendar } from 'lucide-vue-next';
import { gemRing } from '@lucide/lab';
import FadeInText from '@/components/FadeInText.vue';

</script>
