<script setup>
const props = defineProps({
  variant: { type: String, default: 'hero' }, // 'hero' | 'about'
})
const isHero = props.variant === 'hero'
</script>

<template>
  <div
    :class="['portrait-stage', variant]"
    :aria-label="`Stylised animated portrait of Angela ${isHero ? 'coding' : 'holding a tablet'}`"
  >
    <div class="tech-float float-terminal"><b>&gt;_</b><span>terminal</span></div>
    <div class="tech-float float-data"><b>DB</b><span>data layer</span></div>
    <div class="tech-float float-secure"><b>◇</b><span>secure</span></div>
    <div class="tech-float float-nodes"><i></i><i></i><i></i></div>

    <svg class="portrait" viewBox="0 0 600 620" role="img" aria-hidden="true">
      <defs>
        <linearGradient :id="`tee-${variant}`" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="1" stop-color="#e9e8f2" />
        </linearGradient>
        <linearGradient :id="`screen-${variant}`" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#111115" />
          <stop offset="1" stop-color="#292247" />
        </linearGradient>
      </defs>

      <path class="portrait-circuit circuit-a" d="M34 175h100l38 38h54" />
      <path class="portrait-circuit circuit-b" d="M568 235h-91l-34 34h-45" />
      <circle cx="34" cy="175" r="7" fill="#FE2790" /><circle cx="568" cy="235" r="7" fill="#1761FD" />
      <ellipse cx="306" cy="570" rx="205" ry="30" fill="#111115" opacity=".1" />

      <g class="character-body">
        <path d="M157 540c15-127 73-174 150-174 85 0 145 52 158 174Z" :fill="`url(#tee-${variant})`" stroke="#29223a" stroke-width="5" />
        <path d="M177 422c-49 35-64 102-47 135 14 26 65 14 88-26l35-72Z" fill="#B97958" stroke="#5a342d" stroke-width="5" />
        <path d="M437 422c49 35 64 102 47 135-14 26-65 14-88-26l-35-72Z" fill="#B97958" stroke="#5a342d" stroke-width="5" />
        <path d="M205 416c22-32 53-48 102-48 48 0 82 17 105 51l-30 80H230Z" :fill="`url(#tee-${variant})`" />
        <path d="M260 360v47c12 20 78 20 92 0v-48Z" fill="#B97958" stroke="#5a342d" stroke-width="4" />
      </g>

      <g class="hair-back" fill="#17141d" stroke="#050508" stroke-width="4">
        <circle cx="199" cy="193" r="46" /><circle cx="223" cy="145" r="47" /><circle cx="270" cy="119" r="48" /><circle cx="321" cy="114" r="49" /><circle cx="370" cy="130" r="48" /><circle cx="408" cy="167" r="48" />
        <circle cx="181" cy="240" r="47" /><circle cx="178" cy="291" r="46" /><circle cx="190" cy="342" r="46" /><circle cx="207" cy="389" r="43" />
        <circle cx="426" cy="218" r="47" /><circle cx="432" cy="270" r="48" /><circle cx="425" cy="322" r="47" /><circle cx="410" cy="373" r="44" />
        <circle cx="232" cy="386" r="42" /><circle cx="384" cy="387" r="43" />
      </g>

      <path d="M221 220c4-79 166-80 172 2l-12 97c-7 54-46 81-76 81-34 0-73-28-78-82Z" fill="#B97958" stroke="#5a342d" stroke-width="5" />
      <path d="M231 222c19-78 127-99 161-23-43 2-78-22-93-47-6 41-32 68-68 70Z" fill="#17141d" />

      <g class="curl-front" fill="none" stroke="#050508" stroke-width="15" stroke-linecap="round">
        <path d="M217 170c-25 13-13 38 5 30s14-35-8-32m35-48c-26 4-25 31-5 31s27-27 6-32m42-21c-25-3-31 24-12 31s31-15 16-29m45-4c-21-8-34 16-18 28s33-8 22-24m43 20c-19-14-38 6-25 22s35 3 30-17m33 35c-14-19-38-5-30 15s32 13 33-9" />
        <path d="M195 251c-27 4-27 34-6 38s32-26 10-36m-12 50c-24 11-14 38 8 34s22-34-2-34m230-69c25 7 22 35 1 37s-29-28-7-36m15 53c23 12 11 39-11 33s-19-35 5-32" />
      </g>

      <path d="M251 270c14-13 32-13 46 0m21 0c14-13 32-13 46 0" fill="none" stroke="#4b2928" stroke-width="6" stroke-linecap="round" />
      <g class="glasses" fill="rgba(255,255,255,.2)" stroke="#E9C9C0" stroke-width="6">
        <rect x="240" y="249" width="66" height="50" rx="18" /><rect x="311" y="249" width="66" height="50" rx="18" /><path d="M306 265h5m-71-4-19-6m156 6 18-6" />
      </g>
      <ellipse cx="278" cy="274" rx="6" ry="8" fill="#17141d" /><ellipse cx="341" cy="274" rx="6" ry="8" fill="#17141d" />
      <path d="M309 280l-7 27 15 1" fill="none" stroke="#814a3e" stroke-width="4" stroke-linecap="round" />
      <path d="M277 329c19 20 47 21 67-1-16 6-47 6-67 1Z" fill="#722f45" stroke="#57202f" stroke-width="3" /><path d="M287 332c15 8 33 8 47 0" stroke="#fff" stroke-width="5" stroke-linecap="round" />

      <g v-if="isHero" class="hero-prop">
        <rect x="185" y="445" width="244" height="127" rx="12" :fill="`url(#screen-${variant})`" stroke="#07070a" stroke-width="5" />
        <path d="M264 505l23-21m-23 21 23 21m48-42 23 21-23 21" fill="none" stroke="#3CFE22" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="312" cy="505" r="6" fill="#FE2790" /><path d="M160 574h292" stroke="#111115" stroke-width="13" stroke-linecap="round" />
      </g>
      <g v-else class="about-prop">
        <rect x="217" y="425" width="181" height="130" rx="18" :fill="`url(#screen-${variant})`" stroke="#07070a" stroke-width="6" />
        <path d="M261 472h91M261 493h61M261 514h75" stroke="#1761FD" stroke-width="8" stroke-linecap="round" />
        <circle cx="363" cy="514" r="10" fill="#FE2790" />
        <path d="M193 506c30-11 50 5 63 30m165-29c-30-11-50 5-63 30" fill="none" stroke="#B97958" stroke-width="25" stroke-linecap="round" />
      </g>
    </svg>

    <div class="signal-card signal-card-top"><b>{{ isHero ? 'BUILD' : 'PROFILE' }}</b><span>in progress</span></div>
    <div class="signal-card signal-card-bottom"><i></i><span>{{ isHero ? 'creative systems' : 'Cape Town · ZA' }}</span></div>
  </div>
</template>
