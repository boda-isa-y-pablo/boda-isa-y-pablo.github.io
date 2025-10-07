<template>
  <div class="bg-rose-50 px-6 py-12">

    <div class="relative w-full max-w-2xl mx-auto">

      <!-- Main card -->
      <div class="relative bg-base-100 shadow-xl rounded-2xl text-center p-6">
        <div class="flex justify-center mb-4">
          <Sparkles class="size-8 text-primary animate-pulse rotate-20 " :stroke-width="1.2" />
        </div>

        <h2 class="text-2xl text-primary mb-4">
          Con todo nuestro cariño
        </h2>

        <!-- Message -->
        <p class="text-base md:text-lg text-base-content/80 leading-relaxed italic max-w-lg mb-4">
          Queridos amigos y familiares,<br />
          en este día tan especial queremos darles las gracias por ser parte de
          nuestra historia y acompañarnos a celebrar el amor. 💖
        </p>

        <!-- Divider -->
        <div class="divider">🌸</div>

        <!-- Closing line -->
        <p class="font-semibold text-base-content/70 mb-4">
          ¡Gracias por compartir con nosotros este momento inolvidable!
        </p>

        <!-- Signature -->
        <p class="font-fancy text-3xl text-rose-300">
          Isabel <span class="font-fancy mr-1">&</span> Pablo
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Sparkles } from 'lucide-vue-next'
</script>
