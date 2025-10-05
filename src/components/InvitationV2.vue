<template>
  <div id="home" class="relative text-gray-100 text-lg">

    <img id="imgIntro" :src="introImage" alt="Invitation Intro" class="h-screen w-screen object-cover"
      style="filter: brightness(.5);" />

    <div class="absolute top-0 left-1/2 -translate-x-1/2 py-14 text-center w-100">
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

      <p class="anim-fade-in mb-6">
        Te invitamos a celebrar nuestra boda este<br>
        <span class="text-2xl">
          {{ weddingDate.getDate() }} de
          <span class="uppercase">{{ weddingDate.toLocaleString('es-MX', { month: 'long' }) }}</span> de
          {{ weddingDate.getFullYear() }}
        </span>
      </p>

      <p v-if="invitationPasses">Esta invitación vale para {{ invitationPasses }} personas</p>
    </div>

    <div id="countdown" class="anim-fade-in absolute bottom-0 left-0 -translate-y-2/3 w-full py-12 text-center">
      <p class="mb-4">Faltan</p>

      <Countdown :date="weddingDate">
        <template #done>
          <div class="text-center">
            <h2 class="text-3xl font-bold">🎉 The big moment is here!</h2>
            <p class="opacity-70">Thanks for counting down with us.</p>
          </div>
        </template>
      </Countdown>
    </div>

    <div class="anim-fade-in absolute bottom-0 left-0 w-full p-4">
      <AudioPlayer :src="audio.src" :title="audio.title" :start-second="audio.startSecond" :autoplay="audio.autoplay"
        :start-volume="audio.startVolume" />
    </div>
  </div>

  <ItineraryV1 :itinerary />

  <div id="details" class="relative mb-12 text-xl">
    <div class="relative pt-14 px-6 pb-6 z-1">
      <p class="text-4xl text-center relative mb-12">
        <span class="anim-fade-in text-5xl font-cute absolute top-0 left-1/7 -translate-y-3/5 -rotate-15">
          los
        </span>
        <FadeInText text="DETALLES" />
      </p>

      <p class="text-center mb-12">
        Para todos nuestros invitados que tengan muchas preguntas, hemos preparado esta sección con toda la
        información.
      </p>

      <section v-for="(section, index) in detailsSections" :key="index" class="text-right mb-14">
        <h1 class="font-bold uppercase">{{ section.title }}</h1>
        <p>
          {{ section.description }}
        </p>
      </section>
    </div>

    <div class="absolute top-0 left-0 z-0 max-h-full overflow-hidden">
      <img src="/img/gallery/DSC02500.jpg" class="h-screen w-screen object-cover" style="filter: brightness(.8)" />
      <img src="/img/gallery/DSC02401.jpg" class="w-screen object-cover" style="filter: brightness(.8)" />
      <img src="/img/gallery/DSC02421.jpg" class="w-screen object-cover" style="filter: brightness(.8)" />
      <img src="/img/gallery/DSC02524 4-3_v1.jpg" class="w-screen object-cover" style="filter: brightness(.8)" />
      <div id="detailsOverlay" class="absolute top-0 left-0 w-full h-full bg-stone-300 opacity-70"></div>
    </div>
  </div>

  <div id="gallery" class="px-4 pb-4 text-xl mb-12">
    <p class="text-4xl text-center relative mb-12">
      <FadeInText text="GALERÍA" />
    </p>


    <p class="text-center mb-6 px-6">
      Nos encantaría que compartieras con nosotros tus fotos y videos de este inolvidable
      día usando el código QR que encontrarás en tu mesa para subirlos a nuestro album compartido.
    </p>

    <p class="text-center mb-6 px-6">
      Tambien puedes escanear el siguiente código QR o abrir el enlace:
    </p>

    <div class="flex justify-center mb-6">
      <img src="/img/qr-code.png" alt="QR Code" class="w-64" />
    </div>

    <p class="text-center mb-12 px-6">
      🖼️ <a href="https://photos.app.goo.gl/wXozjXAfq6C1dHCC8" target="_blank" class="underline text-rose-400">
        Abrir Galería de Fotos
      </a> 🖼️
    </p>

    <p class="text-center mb-12 px-6">
      Y porque eres muy importante para nosotros, queremos compartir contigo algunos de nuestros momentos preferidos.
    </p>

    <div class="grid grid-cols-2 gap-4">
      <div v-for="(grid, index) of gallery.grids" class="grid gap-4" :class="grid.class" :key="index">
        <div v-for="(img, imgIndex) of grid.images" :key="imgIndex">
          <img class="h-auto max-w-full rounded-lg" :src="img" @click="openImageViewer(img)" />
        </div>
      </div>
    </div>

  </div>

  <ImageViewer :image="selectedImage" :opened="isOpen" @close="isOpen = false" />

  <Confirmation class="mb-24" phone-number="528311354465"
    message="¡Hola! 👋 Quiero confirmar mi asistencia a la boda de Isabel & Pablo 👰🏻‍♀️🤵🏻 este 28 de diciembre de 2025 🎉" />

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

.anim-fade-in {
  animation: fade-in 1s ease forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

<script setup lang="ts">
import FadeInText from '@/components/FadeInText.vue';
import Countdown from './Countdown.vue';
import ImageViewer from './ImageViewer.vue';
import { computed, ref } from 'vue';
import AudioPlayer from './AudioPlayer.vue';
import ItineraryV1 from './ItineraryV1.vue';
import type { ItineraryItem } from './Itinerary';
import { Church, PartyPopper, } from 'lucide-vue-next';
import { gemRing } from '@lucide/lab'
import Confirmation from './Confirmation.vue';

const weddingDate = new Date('2025-12-28T16:00:00');

const invitationQueryParams = computed<URLSearchParams | null>(() => {
  const base64UrlParams = new URLSearchParams(window.location.search);
  const qParam = base64UrlParams.get('q');

  if (qParam == undefined || qParam == null) {
    return null
  }

  const decodedQueryParams = decodeBase64(qParam);

  return new URLSearchParams(decodedQueryParams);

  function decodeBase64(base64: string): string {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
  }
});

const invitationPasses = computed<number | null>(() => {
  if (invitationQueryParams.value == null) {
    return null
  }

  const passesParam = invitationQueryParams.value.get('passes');

  if (passesParam === undefined || passesParam === null) {
    return null
  }

  return parseInt(passesParam)
});

const showCivilCeremony = computed(() => {
  if (invitationQueryParams.value == null) {
    return false
  }

  const civilParam = invitationQueryParams.value.get('civil');

  if (civilParam === undefined || civilParam === null) {
    return false
  }

  return civilParam.trim().toLowerCase() === 'true'
});

const introImage = '/img/gallery/DSC02518.jpg'

const audio = {
  src: '/audio/canon-in-d-pachelbel.mp3',
  title: 'Canon in D - Pachelbel',
  startSecond: 3,
  autoplay: false,
  startVolume: 0.25
}

const fullItinerary = ref<ItineraryItem[]>([
  {
    title: 'Cerenomia Religiosa',
    time: '04:00 PM',
    address: 'Parroquia Medalla Milagrosa',
    addressLink: 'https://maps.app.goo.gl/8dc5CKP2XezksyYMA',
    emoji: '⛪',
    icon: Church,
    // render: 'emoji',
    render: 'icon',
  },
  {
    title: 'Ceremonia Civil',
    time: '06:00 PM',
    address: 'Centro Deportivo ROCO',
    addressLink: 'https://maps.app.goo.gl/EW6gb6XUfTiQeFtw7',
    emoji: '📜',
    // icon: Gavel,
    icon: gemRing,
    // render: 'emoji',
    render: 'lucide-lab',
    hide: () => !showCivilCeremony.value,
  },
  {
    title: 'Recepción',
    time: '07:00 PM',
    address: 'Centro Deportivo ROCO',
    addressLink: 'https://maps.app.goo.gl/EW6gb6XUfTiQeFtw7',
    emoji: '🥂',
    icon: PartyPopper,
    // render: 'emoji',
    render: 'icon',
  }
]);

const itinerary = computed(() => fullItinerary.value.filter(item => item.hide == undefined || !item.hide()));

const detailsSections: { title: string, description: string }[] = [
  {
    title: '¿Cuál es el código de vestimenta?',
    description: 'Formal: traje para los hombres y vestido largo para las mujeres.'
  },
  {
    title: '¿Puedo tomar fotos con mi teléfono durante la boda?',
    description: '¡Sí! Nos encantaría que tomaras fotos y videos de la fiesta y las compartas usando el código QR que se encontrará en tu mesa o en esta invitacion en la sección de galería, sin embargo, por favor permite al fotógrafo encargarse de la ceremonia en la iglesia y ayudanos a no obstruir ninguna toma. Después de la fiesta compartiremos las fotos contigo :)'
  },
  {
    title: '¿Dónde me puedo estacionar?',
    description: 'El lugar de la recepción cuenta con estacionamiento privado.'
  },
  {
    title: "¿Los niños son bienvenidos?",
    description: 'Solo serán admitidos los niños pertenecientes a nuestra familia.'
  },
  {
    title: '¿Puedo llevar acompañantes extras?',
    description: 'En tu invitación encontrarás el número de acompañantes permitidos. Favor de limitarte al número de invitados brindados.'
  },
  {
    title: '¿Qué tipo de regalos preferimos?',
    description: 'Tu presencia en nuestro día especial es el mejor regalo que podríamos pedir, pero si deseas hacernos un obsequio, estaremos aceptando sobres de dinero, además, cualquier regalo es apreciado y agradecido.'
  },
];

type Gallery = { grids: GalleryGrid[] }

type GalleryGrid = { class?: string, images: string[] }

const gallery: Gallery = {
  grids: [
    {
      images: [
        '/img/gallery/DSC02382.jpg',
        '/img/gallery/DSC02399.jpg',
        '/img/gallery/DSC02419.jpg',
      ]
    },
    {
      images: [
        '/img/gallery/DSC02366.jpg',
        '/img/gallery/DSC02408.jpg',
        '/img/gallery/DSC02444.jpg',
      ]
    },
    {
      images: [
        '/img/gallery/DSC02446.jpg',
        '/img/gallery/DSC02427 cropped.jpg',
        '/img/gallery/DSC02482.jpg',
      ]
    },
    {
      images: [
        '/img/gallery/DSC02401.jpg',
        '/img/gallery/DSC02439.jpg',
        '/img/gallery/DSC02421.jpg',
      ]
    },
    {
      images: [
        '/img/gallery/DSC02475 4-3_v1.jpg',
        '/img/gallery/DSC02500.jpg',
        '/img/gallery/DSC02516 4-3_v1.jpg',
      ]
    },
    {
      images: [
        '/img/gallery/DSC02504.jpg',
        '/img/gallery/DSC02431_v1.jpg',
        '/img/gallery/DSC02524 4-3_v1.jpg',
      ]
    },
  ],
}

const selectedImage = ref('');
const isOpen = ref(false);
function openImageViewer(image: string) {
  selectedImage.value = image;
  isOpen.value = true;
}
</script>
