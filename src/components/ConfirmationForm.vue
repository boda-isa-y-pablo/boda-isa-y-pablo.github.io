<script lang="ts" setup>
import { MessageCircle, Mail, AlertCircle } from 'lucide-vue-next'
import { computed, ref, type ComputedRef } from 'vue';

export type Attendee = { name: string };

export type SubmitType = 'whatsapp' | 'email';

type FieldValidation = {
  message: string
  valid: ComputedRef<boolean>
}

const props = withDefaults(defineProps<{
  passes?: number
  willAttend?: boolean | null
  attendees?: Attendee[]
  contactPhoneNumber?: string
  notes?: string
}>(), {
  passes: 2,
  willAttend: null,
  attendees: () => [],
  contactPhoneNumber: '',
  notes: ''
})

const emit = defineEmits<{
  (e: 'update:willAttend', value: boolean | null): void
  (e: 'update:attendees', value: Attendee[]): void
  (e: 'update:contactPhoneNumber', value: string): void
  (e: 'update:notes', value: string): void
  (e: 'submit', type: SubmitType): void
}>()

const willAttend = computed<boolean | null>({
  get: () => props.willAttend,
  set: (value: boolean | null) => emit('update:willAttend', value)
});

const willAttendValidation = ref<FieldValidation>({
  message: 'Debes indicar si asistirás o no',
  valid: computed(() => props.willAttend !== null && props.willAttend !== undefined),
});

const attendees = computed<Attendee[]>({
  get: () => props.attendees ?? [],
  set: (value: Attendee[]) => emit('update:attendees', value)
});

const attendeesValidation = ref<FieldValidation>({
  message: attendees.value.length === 0
    ? 'Debes ingresar al menos 1 invitado válido'
    : 'Debes ingresar nombres válidos para todos los invitados',
  valid: computed(() => {
    if (attendees.value.length === 0) {
      return false;
    }

    const validAttendees = attendees.value.filter(a => a.name !== undefined && a.name !== null && a.name.trim().length > 0);
    return validAttendees.length === attendees.value.length;
  }),
});

const contactPhoneNumber = computed<string>({
  get: () => props.contactPhoneNumber ?? '',
  set: (value: string) => emit('update:contactPhoneNumber', value)
});

const contactPhoneNumberValidation = ref<FieldValidation>({
  message: 'Debes ingresar un número telefónico válido',
  valid: computed(() => contactPhoneNumber.value.trim().length >= 10),
});

const notes = computed<string>({
  get: () => props.notes ?? '',
  set: (value: string) => emit('update:notes', value)
});

const validators = computed(() => {
  return [willAttendValidation.value, attendeesValidation.value, contactPhoneNumberValidation.value]
})

const isFormValid = computed(() => {
  return validators.value.every(v => v.valid === true)
})

function onAttendanceCountChange(ev: Event) {
  const valueStr = (ev.target as any).value
  const valueNum = parseInt(valueStr)

  if (valueNum !== undefined && valueNum !== null && !isNaN(valueNum) && valueNum > 0 && valueNum <= props.passes) {
    const currentLength = attendees.value.length

    if (valueNum > currentLength) {
      // Extend: add new empty attendee objects
      for (let i = currentLength; i < valueNum; i++) {
        attendees.value.push({ name: '' })
      }
    } else if (valueNum < currentLength) {
      // Reduce: remove extra attendees
      attendees.value.splice(valueNum)
    }
  }
}

function submit(type: SubmitType) {
  if (!isFormValid.value) {
    errors.value.show()
    return
  }

  emit('submit', type)
}

const errors = ref({
  showing: false,
  timout: 5000,
  messages: computed<string[]>(() => {
    return validators.value.filter(v => v.valid === false).map(v => v.message)
  }),
  show() {
    this.showing = true
    setTimeout(() => {
      this.showing = false
    }, this.timout)
  }
})
</script>

<template>
  <div class="mb-10 ">
    <label class="label text-black" :class="{ 'animate-bounce': willAttend === null }">
      <input class="checkbox" type="checkbox" v-model="willAttend" />
      ¿Asistirás?
      <span v-if="willAttend === null" class="text-xl">🤔</span>
      <span v-else-if="willAttend === true" class="text-xl">😊</span>
      <span v-else-if="willAttend === false" class="text-xl">😢</span>
    </label>
  </div>

  <section v-if="willAttend !== null">

    <p>
      <span v-if="willAttend === false">
        Lamentamos que no puedas asistir. ¡Te extrañaremos!
      </span>
      <span v-else>
        ¡Nos alegra que puedas acompañarnos!
      </span>
    </p>

    <p class="mb-12">Por favor, completa los siguientes datos:</p>

    <div class="mb-6">
      <label class="block mb-2">
        <span v-if="willAttend === true">¿Cuantas personas asistirán? (de 1 a {{ passes }} incluyendote)</span>
        <span v-if="willAttend === false">¿Cuantas personas no podrán asistir? (de 1 a {{ passes }} incluyendote)</span>
      </label>
      <input class="input validator" type="number" min="1" :max="passes" required @input="onAttendanceCountChange" />
      <p class="validator-hint">Debes ingresar un número entre 1 y {{ passes }}</p>
    </div>

    <div class="mb-6">
      <div v-for="(attendee, index) of attendees" :key="index" class="flex gap-2">
        <label class="mt-1 w-40">Invitado/a #{{ index + 1 }}</label>
        <div class="w-full">
          <input class="input validator" type="text" required v-model="attendee.name" />
          <p class="validator-hint">Debes ingresar un nombre válido.</p>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <label class="block mb-2">Teléfono de contacto</label>
      <input class="input validator" type="tel" required v-model="contactPhoneNumber" />
      <p class="validator-hint">Debes ingresar un número telefónico válido</p>
    </div>

    <div class="mb-12">
      <label class="floating-label mb-2">Notas adicionales (opcional)</label>
      <textarea class="textarea h-24" v-model="notes"></textarea>
    </div>
  </section>

  <div v-if="willAttend !== null">
    <p class="mb-6">¿Por que medio nos enviarás tu confirmación?</p>
    <div class="flex justify-center gap-4">
      <button class="btn text-gray-50" style="background-color: rgba(207, 135, 135, 1);" @click="submit('whatsapp')">
        <span class="mb-1">WhatsApp</span>
        <MessageCircle :size="22" />
      </button>
      <button class="btn text-gray-200" style="background-color: rgba(148, 113, 61, 1);" @click="submit('email')">
        <span class="mb-1">Correo</span>
        <Mail :size="22" />
      </button>
    </div>
  </div>

  <div v-if="errors.showing" class="toast toast-center">
    <div class="alert alert-error alert-outline bg-red-50! shadow-lg!">
      <AlertCircle :size="22" class="inline-block mb-1 mr-1" />
      <div>
        <p>Por favor corrige los siguientes errores antes de enviar:</p>
        <ul class="list-disc">
          <li v-for="(msg, index) of errors.messages" :key="index" class="ms-5">{{ msg }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
