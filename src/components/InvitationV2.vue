<template>
  <div id="home" class="relative mb-12">

    <img id="imgIntro" :src="introImage" alt="Invitation Intro" class="h-screen w-screen object-cover"
      style="filter: brightness(.6);" />

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center text-gray-100 w-100">
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

  <div id="itinerary" class="mb-12">
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

  <div id="details" class="relative mb-12">
    <img src="/img/gallery/DSC02500.jpg" class="h-screen w-screen object-cover" style="filter: brightness(.8)" />

    <!-- <img src="/img/gallery/DSC02504.jpg" class="h-screen w-screen object-cover"
      style="filter: brightness(.7) grayscale(0.6)" /> -->
    <img src="/img/gallery/DSC02401.jpg" class="w-screen object-cover" style="filter: brightness(.8)" />

    <div class="absolute top-0 left-0 w-full h-full bg-stone-300 opacity-70">
      <!-- overlay -->
    </div>

    <div class="absolute top-0 left-0 pt-14 px-6">
      <p class="text-4xl text-center relative mb-12">
        <span class="anim-fade-in text-5xl font-cute absolute top-0 left-1/7 -translate-y-3/5 -rotate-15">
          los
        </span>
        <FadeInText text="DETALLES" />
      </p>

      <p class="text-center mb-10">
        Para todos nuestros invitados que tengan muchas preguntas, hemos preparado esta sección con toda la
        información.
      </p>

      <section v-for="(section, index) in detailsSections" :key="index" class="text-right mb-12">
        <h1 class="font-bold uppercase">{{ section.title }}</h1>
        <p>
          {{ section.description }}
        </p>
      </section>
    </div>
  </div>

  <div id="gallery" class="px-2 pb-2">
    <p class="text-4xl text-center relative mb-12">
      <FadeInText text="GALERÍA DE FOTOS" />
    </p>

    <p class="text-center mb-12 px-6">
      Porque eres muy importante para nosotros, queremos compartir contigo nuestros momentos preferidos.
    </p>

    <div class="grid grid-cols-2 gap-2">
      <div v-for="(grid, index) of gallery.grids" class="grid gap-2" :class="grid.class" :key="index">
        <div v-for="(img, imgIndex) of grid.images" :key="imgIndex">
          <img class="h-auto max-w-full rounded-lg" :src="img">
        </div>
      </div>
    </div>

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
import { Badge, Church, Gavel, NotebookTabs, Utensils, PartyPopper } from 'lucide-vue-next';
import FadeInText from '@/components/FadeInText.vue';

// const introImage = '/img/gallery/DSC02504.jpg' // caminando de frente (color)
const introImage = '/img/gallery/DSC02518.jpg' // caminando de espaldas 2 (color)

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

const detailsSections: { title: string, description: string }[] = [
  {
    title: '¿Cuál es el código de vestimenta?',
    description: 'Formal: traje para los hombres y vestido largo para las mujeres.'
  },
  {
    title: '¿Puedo tomar fotos con mi teléfono durante la boda?',
    description: '¡Sí! Nos encantaría que tomaras fotos y las compartieras con el código QR que se encontrará en tu mesa. Sin embargo, por favor abstente de tomar fotos durante la ceremonia de la iglesia y no obstruir las tomas del fotógrafo. Después de la fiesta compartiremos las fotos contigo :)'
  },
  {
    title: '¿Dónde me puedo estacionar?',
    description: 'El lugar de la recepción cuenta con estacionamiento privado.'
  },
  {
    title: "¿Los niños son bienvenidos?",
    description: 'Los adultos a divertirse, los niños a descansar. Solo serán admitidos los niños pertenecientes a nuestra familia.'
  },
  {
    title: '¿Puedo llevar acompañantes extras?',
    description: 'No, favor de limitarte al número de invitados brindados.'
  },
  {
    title: '¿Qué tipo de regalos preferimos?',
    description: 'Tu presencia en nuestro día especial es el mejor regalo que podríamos pedir. Sin embargo, si deseas hacernos un obsequio, apreciamos contribuciones a nuestra luna de miel o artículos de nuestra lista de deseos.'
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

const gallery2: Gallery = {
  grids: [
    {
      images: [
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
      ]
    },
    {
      images: [
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
      ]
    },
    {
      images: [
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
      ]
    },
    {
      images: [
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
      ]
    },
  ],
}
</script>
