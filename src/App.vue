<script setup>
import { ref } from 'vue'
import LanguageToggle from './components/LanguageToggle.vue'
import EnvelopeCover from './components/EnvelopeCover.vue'
import InvitationContent from './components/InvitationContent.vue'

const isOpen = ref(false)

const handleOpen = () => {
  isOpen.value = true
  window.scrollTo({ top: 0 })
}
</script>

<template>
  <div>
    <LanguageToggle />
    <EnvelopeCover v-if="!isOpen" @open="handleOpen" />
    <InvitationContent v-if="isOpen" />
  </div>
</template>
