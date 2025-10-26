<template>
  <div class="bg-rose-50 px-6 py-12">

    <div class="relative w-full max-w-2xl mx-auto">

      <!-- Main card -->
      <div class="relative bg-base-100 shadow-xl rounded-2xl text-center p-6">
        <div class="flex justify-center mb-4">
          <Sparkles class="size-8 text-primary animate-pulse rotate-20 " :stroke-width="1.2" />
        </div>

        <h2 class="text-xl text-primary mb-4">
          <!-- Con todo nuestro cariño -->
          <!-- Un mensaje especial para ti -->
           {{ title }}
        </h2>

        <!-- Message -->
        <p class="text-md text-base-content/80 leading-relaxed italic mb-4">
          <!-- Queridos familiares y amigos,<br />
          por fin ha llegado el gran día en el que
          uniremos nuestras vidas en matrimonio.<br />
          Tu presencia aquí significa el mundo para nosotros y no podríamos estar más felices
          de compartir este momento tan especial contigo.
          En este día tan especial queremos
          darles las gracias por ser parte de nuestra historia y acompañarnos a celebrar
          el amor. 💖  -->
          {{  description }}
        </p>

        <!-- Divider -->
        <div class="divider">🌸</div>

        <!-- Closing line -->
        <p class="font-semibold text-base-content/70 mb-4">
          <!-- ¡Gracias por compartir con nosotros este momento inolvidable! -->
           {{ footer }}
        </p>

        <!-- Signature -->
        <p class="font-fancy text-4xl text-rose-300">
          <!-- Isabel <span class="font-fancy mr-1">&</span> Pablo -->
           {{ signature }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Sparkles } from 'lucide-vue-next'

// const title = 'Un mensaje especial para ti'
// const title = 'Con todo nuestro amor'
const title = 'Queridos familiares y amigos'

const description = `
Hoy celebramos el comienzo de una nueva etapa en nuestras vidas, y no podríamos imaginar este día sin ustedes.
Su presencia nos llena el corazón de alegría y hace que este momento sea aún más significativo.
Gracias por acompañarnos, por su cariño, por ser parte de nuestra historia y por compartir con nosotros la magia de este día. 💖
`

// const description = `
// Queridos familiares y amigos:
// Hoy nuestros caminos se unen para siempre, y tenerlos aquí es un regalo que atesoraremos por siempre.
// Cada sonrisa, cada abrazo y cada palabra suya hacen de este día algo inolvidable.
// Gracias por formar parte de nuestro viaje y celebrar junto a nosotros el amor que nos une. ✨
// `

const footer = 'Con todo nuestro amor,'
// const footer = 'Con cariño,'

const signature = 'Isabel & Pablo'
</script>
