<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'

const { t } = useI18n()
const emit = defineEmits(['open'])

const coverRef    = ref(null)
const cardRef     = ref(null)
const sealRef     = ref(null)
const petalsRef   = ref(null)
const btnRef      = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  gsap.set([cardRef.value, petalsRef.value, btnRef.value], { opacity: 0 })

  tl.to(coverRef.value, { opacity: 1, duration: 0.4 })
    .fromTo(
      cardRef.value,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.1'
    )
    .fromTo(
      sealRef.value,
      { scale: 0, rotation: -20 },
      { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(2.5)' },
      '-=0.4'
    )
    .to(petalsRef.value, { opacity: 1, duration: 0.6 }, '-=0.3')
    .to(btnRef.value, { opacity: 1, duration: 0.4 }, '-=0.2')
})

const handleOpen = () => {
  const tl = gsap.timeline({ onComplete: () => emit('open') })

  tl.to(sealRef.value, { scale: 0.6, opacity: 0, duration: 0.22, ease: 'power2.in' })
    .to(
      cardRef.value,
      { y: -24, scale: 0.96, opacity: 0, duration: 0.55, ease: 'power2.inOut' },
      '-=0.08'
    )
    .to(coverRef.value, { opacity: 0, duration: 0.3 }, '-=0.2')
}
</script>

<template>
  <div
    ref="coverRef"
    class="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden opacity-0"
    style="background: radial-gradient(ellipse at 25% 20%, #FFF0EF 0%, transparent 55%), radial-gradient(ellipse at 75% 80%, #EEE8FF 0%, transparent 55%), #FFFAF5;"
  >
    <!-- Floating petals -->
    <div ref="petalsRef" class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <span class="petal absolute text-2xl select-none" style="top:8%;  left:7%;  animation-delay:0s;   animation-duration:5.2s">🌸</span>
      <span class="petal absolute text-xl  select-none" style="top:18%; right:9%; animation-delay:0.8s; animation-duration:6s  ">🌷</span>
      <span class="petal absolute text-lg  select-none" style="top:38%; left:4%;  animation-delay:1.5s; animation-duration:4.8s">🌸</span>
      <span class="petal absolute text-2xl select-none" style="top:62%; right:6%; animation-delay:0.3s; animation-duration:5.5s">🌷</span>
      <span class="petal absolute text-xl  select-none" style="top:78%; left:14%; animation-delay:1.2s; animation-duration:5s  ">🌸</span>
      <span class="petal absolute text-lg  select-none" style="top:88%; right:22%;animation-delay:2s;   animation-duration:6.5s">🌷</span>
      <span class="petal absolute text-xl  select-none" style="top:4%;  right:28%;animation-delay:0.6s; animation-duration:4.5s">🌸</span>
      <span class="petal absolute text-lg  select-none" style="top:52%; left:88%; animation-delay:1.8s; animation-duration:5.8s">🌷</span>
    </div>

    <!-- Envelope card -->
    <div ref="cardRef" class="relative w-[min(86vw,340px)]">

      <!-- Envelope top flap -->
      <div
        class="w-full overflow-hidden"
        style="height: 72px;"
        aria-hidden="true"
      >
        <div
          class="w-full h-full"
          style="background: linear-gradient(160deg, #EDD5D2 0%, #E8C5C3 100%); clip-path: polygon(0 0, 100% 0, 50% 100%);"
        ></div>
      </div>

      <!-- Envelope body -->
      <div
        class="relative rounded-b-3xl border border-blush-dark/25 shadow-xl px-8 pt-7 pb-12 -mt-px text-center"
        style="background: linear-gradient(175deg, #F9D5D3 0%, #F5CBCA 100%);"
      >
        <!-- Side-fold shading -->
        <div class="absolute inset-0 rounded-b-3xl overflow-hidden pointer-events-none" aria-hidden="true">
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.25) 0%,transparent 45%);"></div>
          <div style="position:absolute;inset:0;background:linear-gradient(225deg,rgba(255,255,255,0.2) 0%,transparent 45%);"></div>
        </div>

        <!-- Text content -->
        <div class="relative">
          <p class="font-body text-[0.65rem] tracking-[0.3em] uppercase text-dusty-rose/70 mb-3">
            {{ t('cover.tagline') }}
          </p>
          <h1 class="font-display text-[2.1rem] leading-tight text-warm">
            {{ t('cover.names') }}
          </h1>
          <p class="font-body text-xs tracking-widest text-warm/50 mt-2">
            {{ t('cover.date') }}
          </p>
        </div>

        <!-- Wax seal -->
        <div
          ref="sealRef"
          role="button"
          tabindex="0"
          class="seal-animate absolute -bottom-7 left-1/2 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer z-10 border-2 border-white/50"
          style="background: radial-gradient(circle at 38% 35%, #EDA8B8, #B86478);"
          @click="handleOpen"
          @keydown.enter="handleOpen"
          :aria-label="t('cover.openButton')"
        >
          <span class="text-xl select-none" aria-hidden="true">💕</span>
        </div>
      </div>
    </div>

    <!-- Open button -->
    <button
      ref="btnRef"
      @click="handleOpen"
      class="mt-12 font-body text-xs tracking-[0.25em] uppercase text-warm/50 hover:text-dusty-rose transition-colors duration-200 flex flex-col items-center gap-1.5"
    >
      <span>{{ t('cover.openButton') }}</span>
      <span class="text-warm/30 text-base leading-none">↓</span>
    </button>
  </div>
</template>
