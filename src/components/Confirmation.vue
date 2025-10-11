<script lang="ts" setup>
import { CheckCircle } from 'lucide-vue-next'
import { computed, ref } from 'vue';
import ConfirmationForm, { type Attendee, type SubmitType } from './ConfirmationForm.vue';

const props = defineProps<{
  passes: number
  sendToPhoneNumber: string
  sendToEmail: string
}>()

const formData = ref({
  willAttend: null as boolean | null,
  attendees: [] as Attendee[],
  contactPhoneNumber: '',
  notes: ''
})

const completeMessage = computed(() => {
  const sentences: string[] = []

  if (formData.value.willAttend === undefined || formData.value.willAttend === null) {
    throw new Error('Invalid state: willAttend is null or undefined')
  }
  else {
    if (formData.value.willAttend) {
      sentences.push('¡Hola! 👋 Quiero confirmar mi asistencia a la boda de Isabel & Pablo 👰🏻‍♀️🤵🏻 este 28 de diciembre de 2025 🎉');
    } else {
      sentences.push('¡Hola! 👋 Lamentablemente no podré asistir a la boda de Isabel & Pablo 👰🏻‍♀️🤵🏻 este 28 de diciembre de 2025 😢');
    }

    const validAttendees = formData.value.attendees.filter(a => a.name !== undefined && a.name !== null && a.name.trim().length > 0);

    if (formData.value.willAttend)
      sentences.push(`\n\nAsistirán ${validAttendees.length} persona(s):`)
    else
      sentences.push(`\n\nNo asistirán ${validAttendees.length} persona(s):`)

    sentences.push(...validAttendees.map((a, i) => `\n${i + 1}. ${a.name}`))

    sentences.push(`\n\nNúmero de contacto: ${formData.value.contactPhoneNumber.trim()}`)

    if (formData.value.notes && formData.value.notes.trim().length > 0) {
      sentences.push(`\n\nNotas adicionales:\n${formData.value.notes.trim()}`)
    }
  }

  return sentences.join('')
})

function submit(type: SubmitType) {
  if (type === 'whatsapp') {
    return sendWhatsApp()
  }

  if (type === 'email') {
    return sendEmail()
  }

  function sendWhatsApp() {
    const text = completeMessage.value
    const url = `https://wa.me/${props.sendToPhoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  function sendEmail() {
    const subject = 'Confirmación de asistencia'
    const body = completeMessage.value
    const url = `mailto:${props.sendToEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div class="text-center px-6">

    <div class="flex justify-center mb-6">
      <CheckCircle class="size-12 text-success" />
    </div>

    <h2 class="text-xl mb-4">¡Confirma tu asistencia!</h2>

    <p class="text-gray-500 mb-10">
      Marca la siguiente casilla para indicar si asistirás o no a nuestra boda.
    </p>

    <ConfirmationForm :passes v-model:will-attend="formData.willAttend" v-model:attendees="formData.attendees"
      v-model:contact-phone-number="formData.contactPhoneNumber" v-model:notes="formData.notes" @submit="submit" />

  </div>
</template>
