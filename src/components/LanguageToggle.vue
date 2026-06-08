<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggle = () => {
  locale.value = locale.value === 'de' ? 'es' : 'de'
}
</script>

<template>
  <button
    @click="toggle"
    class="fixed top-4 right-4 z-50 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-blush/50 font-body text-sm text-warm hover:bg-blush-light transition-all duration-200 select-none"
    :aria-label="locale === 'de' ? 'Cambiar a español' : 'Zu Deutsch wechseln'"
  >
    <span :class="locale === 'de' ? 'font-semibold opacity-100' : 'opacity-35'">DE</span>
    <span class="text-dusty-rose/60 text-xs">·</span>
    <span :class="locale === 'es' ? 'font-semibold opacity-100' : 'opacity-35'">ES</span>
  </button>
</template>
