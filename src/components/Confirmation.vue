<script lang="ts" setup>
import { MessageCircle, CheckCircle } from 'lucide-vue-next'

const props = defineProps<{
  phoneNumber: string
  message: string
}>()

function openWhatsApp() {
  const text = props.message
  const url = `https://wa.me/${props.phoneNumber}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>

<template>
  <div class="text-center px-6">

    <div class="flex justify-center mb-6">
      <CheckCircle class="size-12 text-success" />
    </div>

    <h2 class="text-xl mb-4">¡Confirma tu asistencia!</h2>

    <p class="text-gray-500 mb-10">
      Escríbenos por WhatsApp para confirmar tu asistencia a nuestra boda 🎉
    </p>

    <div class="card-actions justify-center mt-4">
      <button class="btn btn-success gap-2" @click="openWhatsApp">
        <MessageCircle class="w-5 h-5" />
        Quiero confirmar mi asistencia
      </button>
    </div>
  </div>
</template>
