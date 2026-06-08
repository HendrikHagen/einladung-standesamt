<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'

const { t } = useI18n()
const sectionsRef = ref(null)

onMounted(() => {
  if (!sectionsRef.value) return
  gsap.fromTo(
    sectionsRef.value.children,
    { y: 32, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.13, delay: 0.1 }
  )
})
</script>

<template>
  <div
    class="min-h-screen py-12 px-5"
    style="background: radial-gradient(ellipse at 15% 10%, #FFF0EF 0%, transparent 50%), radial-gradient(ellipse at 85% 90%, #EEE8FF 0%, transparent 50%), #FFFAF5;"
  >
    <div ref="sectionsRef" class="max-w-sm mx-auto flex flex-col gap-6">

      <!-- Hero -->
      <section class="text-center pt-2 pb-1">
        <div class="text-3xl tracking-widest mb-5" aria-hidden="true">🌸 💕 🌸</div>
        <h1 class="font-display text-[3rem] leading-[1.1] text-warm">
          {{ t('invitation.names') }}
        </h1>
        <p class="font-body text-xs tracking-[0.3em] uppercase text-dusty-rose/60 mt-3">
          {{ t('invitation.details.date') }}
        </p>
      </section>

      <!-- Decorative divider -->
      <div class="divider-line">
        <span class="text-dusty-rose/50 text-base px-1" aria-hidden="true">✦</span>
      </div>

      <!-- Personal message -->
      <section class="section-card text-center">
        <p class="font-display text-xl italic text-warm leading-snug whitespace-pre-line">
          {{ t('invitation.message') }}
        </p>
        <p class="font-body text-sm text-warm/65 leading-relaxed mt-4">
          {{ t('invitation.bodyText') }}
        </p>
      </section>

      <!-- Details -->
      <section class="section-card">
        <div class="flex flex-col gap-4">

          <!-- Date & Time -->
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-blush flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
              <span class="text-lg">🗓</span>
            </div>
            <div>
              <p class="font-body text-[0.65rem] tracking-[0.25em] uppercase text-dusty-rose/60 mb-0.5">
                {{ t('invitation.details.when') }}
              </p>
              <p class="font-display text-xl text-warm leading-tight">
                {{ t('invitation.details.date') }}
              </p>
              <p class="font-body text-sm text-warm/55 mt-0.5">
                {{ t('invitation.details.time') }}
              </p>
            </div>
          </div>

          <div class="h-px bg-blush/70 mx-2" aria-hidden="true"></div>

          <!-- Location -->
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-lavender flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
              <span class="text-lg">📍</span>
            </div>
            <div>
              <p class="font-body text-[0.65rem] tracking-[0.25em] uppercase text-dusty-rose/60 mb-0.5">
                {{ t('invitation.details.where') }}
              </p>
              <p class="font-display text-xl text-warm leading-tight">
                {{ t('invitation.details.location') }}
              </p>
              <p class="font-body text-sm text-warm/55 mt-0.5 whitespace-pre-line">
                {{ t('invitation.details.address') }}
              </p>
            </div>
          </div>

          <div class="h-px bg-blush/70 mx-2" aria-hidden="true"></div>

          <!-- Afterwards / BBQ -->
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-champagne flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
              <span class="text-lg">🔥</span>
            </div>
            <div>
              <p class="font-body text-[0.65rem] tracking-[0.25em] uppercase text-dusty-rose/60 mb-0.5">
                {{ t('invitation.details.afterTitle') }}
              </p>
              <p class="font-body text-sm text-warm/80 leading-relaxed">
                {{ t('invitation.details.afterDescription') }}
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Closing -->
      <section class="text-center py-4 pb-8">
        <p class="font-display text-lg italic text-warm/60">
          {{ t('invitation.closing') }}
        </p>
        <div class="h-px w-16 bg-blush-dark/30 mx-auto my-4" aria-hidden="true"></div>
        <p class="font-body text-xs tracking-widest uppercase text-dusty-rose/50 mb-1">
          {{ t('invitation.signature') }}
        </p>
        <p class="font-display text-2xl text-warm mt-1">
          {{ t('invitation.names') }}
        </p>
        <div class="text-3xl tracking-widest mt-7" aria-hidden="true">🌷 💕 🌷</div>
      </section>

    </div>
  </div>
</template>
