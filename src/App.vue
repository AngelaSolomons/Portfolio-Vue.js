<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { sections, projects, skillGroups, certifications, tracerPaths } from './data'
import ArrowIcon from './components/ArrowIcon.vue'
import CurlyPortrait from './components/CurlyPortrait.vue'
import SectionTitle from './components/SectionTitle.vue'

const scroller = ref(null)
const active = ref('Home')
const menuOpen = ref(false)
const transition = ref(null) // { direction: 'forward' | 'back', shape: number }
const project = ref(null)
const sent = ref(false)

const shellClass = computed(() =>
  transition.value ? `app-shell camera-follow ${transition.value.direction}` : 'app-shell',
)
const tracerClass = computed(() =>
  transition.value
    ? `tracer active shape-${transition.value.shape} ${transition.value.direction}`
    : 'tracer',
)
const tracerPath = computed(() => tracerPaths[transition.value?.shape || 0])

// Scroll to a section, optionally playing the camera + tracer transition.
function goTo(name, withTrace = false, direction) {
  const move = () => {
    document
      .getElementById(name.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
    menuOpen.value = false
  }
  if (withTrace) {
    const currentIndex = Math.max(0, sections.indexOf(active.value))
    const targetIndex = Math.max(0, sections.indexOf(name))
    transition.value = {
      direction: direction || (targetIndex < currentIndex ? 'back' : 'forward'),
      shape: currentIndex,
    }
    window.setTimeout(move, 90)
    window.setTimeout(() => (transition.value = null), 1150)
  } else {
    move()
  }
}

async function submit(event) {
  const form = event.target

  try {
    const response = await fetch('https://formspree.io/f/xwlvdkbr', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      sent.value = true
      form.reset()

      window.setTimeout(() => {
        sent.value = false
      }, 4000)
    } else {
      alert('Something went wrong. Please try again.')
    }
  } catch (error) {
    alert('Unable to send your message. Please try again.')
  }
}

let observer
function onWheel(event) {
  // Desktop: translate vertical wheel movement into horizontal scrolling
  if (window.innerWidth <= 760 || project.value || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
  event.preventDefault()
  scroller.value.scrollLeft += event.deltaY
}
function onKeydown(event) {
  if (event.key === 'Escape') project.value = null
}

onMounted(() => {
  const root = scroller.value
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.dataset.name || 'Home'
      }),
    { root, threshold: 0.6 },
  )
  root.querySelectorAll('.panel').forEach((panel) => observer.observe(panel))
  root.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  scroller.value?.removeEventListener('wheel', onWheel)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div :class="shellClass">
    <!-- Top navigation -->
    <nav class="topbar" aria-label="Main navigation">
      <button class="brand" aria-label="Go to home" @click="goTo('Home', true)">
        <span class="brand-mark">
          <i></i>AngelaS
        </span>

        <!-- <span class="brand-copy">
          <b>Angela Solomons</b>
          <small>Developer + Technologist</small>
        </span> -->
      </button>

      <div :class="menuOpen ? 'nav-links open' : 'nav-links'">
        <button v-for="item in sections.slice(1)" :key="item" :class="{ active: active === item }"
          @click="goTo(item, true)">
          {{ item }}
        </button>
      </div>

      <!-- <a class="cv-button" href="/Angela-Solomons-CV.txt" download>
        Download CV <span>↓</span>
      </a> -->

      <button class="menu-button" :aria-expanded="menuOpen" aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
      </button>
    </nav>

    <main ref="scroller" class="horizontal-scroll">
      <!-- HOME -->
      <section id="home" data-name="Home" class="panel hero-panel">
        <div class="grid-ghost" aria-hidden="true"></div>
        <div class="hero-copy">
          <div class="eyebrow"><span></span>Junior Full-Stack Software Developer</div>
          <h1>Hi, I’m<br /><em>Angela Solomons.</em></h1>
          <p>Bridging code, data, and immersive digital experiences from Cape Town to the world.</p>
          <div class="hero-actions">
            <button class="primary-button" @click="goTo('Projects', true)">View my work
              <ArrowIcon />
            </button>
            <button class="text-button" @click="goTo('About', true, 'forward')">Meet Angela
              <ArrowIcon diagonal />
            </button>
          </div>
          <div class="status-row"><i></i><span>Available for junior opportunities</span><b>CPT · ZA</b></div>
        </div>
        <div class="hero-visual">
          <CurlyPortrait />
        </div>
        <!-- <div class="scroll-hint"><span>Scroll to explore</span><i></i></div> -->

      </section>

      <!-- ABOUT -->
      <section id="about" data-name="About" class="panel about-panel">
        <div class="about-visual">
          <div class="circuit-frame">
            <div class="frame-label"><span>ANGELA.S</span><b>PROFILE_2026</b></div>
            <CurlyPortrait variant="about" />
            <div class="frame-stats"><b>34°02′S</b><span>Cape Town</span></div>
          </div>
        </div>


        <div class="about-content">
          <SectionTitle index="01" eyebrow="About me" title="Building skills through real projects" />
          <p class="lead">I'm an early-career software developer with hands-on experience building full-stack web
            applications through individual and team projects.</p>
          <p class="support">I enjoy solving problems, understanding how systems fit together, and turning ideas into
            functional, user-friendly applications.</p>

          <div class="overview-grid">
            <!-- Card 1 -->
            <article><span>01</span>
              <h3>Full-Stack Development</h3>
              <p>Building across frontend, backend, APIs and databases.</p>
            </article>

            <!-- Card 2 -->
            <article><span>02</span>
              <h3>Problem Solving</h3>
              <p>Turning technical challenges into practical solutions.</p>
            </article>

            <!-- Card 3 -->
            <article><span>03</span>
              <h3>Interactive Engineering</h3>
              <p>Responsive experiences with personality.</p>
            </article>
          </div>
        </div>




      </section>

      <!-- SKILLS -->
      <section id="skills" data-name="Skills" class="panel skills-panel">
        <div class="skills-top">
          <SectionTitle index="02" eyebrow="Capabilities" title="TechStack"
            intro="A practical stack built around modern interfaces, reliable systems, and thoughtful digital production." />
          <div class="skill-index">STACK / 2026 <i></i></div>
        </div>
        <div class="skill-grid">
          <article v-for="group in skillGroups" :key="group.title" class="skill-card">
            <div class="skill-card-head"><span>{{ group.icon }}</span>
              <h3>{{ group.title }}</h3><i></i>
            </div>
            <div class="skill-list">
              <div v-for="(skill, index) in group.skills" :key="skill">
                <b>{{ String(index + 1).padStart(2, '0') }}</b><span>{{ skill }}</span><i></i>
              </div>
            </div>
          </article>
        </div>

      </section>

      <!-- PROJECTS -->
      <section id="projects" data-name="Projects" class="panel projects-panel">
        <div class="projects-head">
          <SectionTitle index="03" eyebrow="Selected work" title="Projects" />
        </div>
        <div class="project-grid">
          <button v-for="(item, index) in projects" :key="item.title" :class="`project-card ${item.accent}`"
            @click="project = item">
            <div class="project-visual">
              <span class="project-number">0{{ index + 1 }}</span>
              <div class="project-code">{{ item.code }}<i></i></div>
              <span class="open-project">
                <ArrowIcon diagonal />
              </span>
            </div>
            <div class="project-info">
              <small>{{ item.kicker }}</small>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div><span v-for="tag in item.tags" :key="tag">{{ tag }}</span></div>
            </div>
          </button>
        </div>

      </section>

      <!-- CERTIFICATIONS -->
      <!-- <section id="certifications" data-name="Certifications" class="panel certs-panel">
        <div class="cert-intro">
          <SectionTitle index="04" eyebrow="Credentials" title="Always learning. Always layering." />
          <p>Technical rigor meets creative fluency—an evolving collection of verified skills and multidisciplinary
            study.</p>
          <div class="cert-seal"><span>04</span><b>Verified<br />credentials</b></div>
        </div>
        <div class="cert-list">
          <article v-for="(cert, index) in certifications" :key="cert.title" :class="`cert-card ${cert.color}`">
            <span class="cert-badge"><i>{{ cert.issuer === 'Cisco' ? 'C' : 'FP' }}</i></span>
            <div><small>{{ cert.issuer }} · Credential 0{{ index + 1 }}</small>
              <h3>{{ cert.title }}</h3><span>{{ cert.type }}</span>
            </div>
            <b>{{ cert.year }}</b>
            <ArrowIcon diagonal />
          </article>
        </div>
        
      </section> -->

      <!-- CONTACT -->
      <section id="contact" data-name="Contact" class="panel contact-panel">
        <div class="contact-copy">
          <SectionTitle index="05" eyebrow="Get in touch" title="Let’s make something worth remembering." />

          <p>
            Message me for any queries, collaborations, or junior development opportunities.
            I’d love to hear what you’re building.
          </p>

          <div class="contact-links">
            <div class="contact-link">
              <!-- <small>Email</small>
              <b>angelasolomons03@gmail.com</b> -->
            </div>

            <a href="https://www.linkedin.com/in/angelasolomons" target="_blank" rel="noreferrer">
              <small>LinkedIn</small>
              <b>/in/angela-solomons</b>
              <ArrowIcon diagonal />
            </a>

            <a href="https://github.com/AngelaSolomons" target="_blank" rel="noreferrer">
              <small>GitHub</small>
              <b>@angela-solomons</b>
              <ArrowIcon diagonal />
            </a>
          </div>

          <div class="location">
            <span></span>
            <div>
              <small>Based in</small>
              <b>Cape Town, South Africa</b>
            </div>
          </div>
        </div>
      <!-- </section> -->
      <form class="contact-form" @submit.prevent="submit">
        <div class="form-head"><span>START A CONVERSATION</span><b>05 — 06</b></div>
        <label><span>Your name</span><input name="name" placeholder="What should I call you?" required /></label>
        <label><span>Email address</span><input type="email" name="email" placeholder="you@company.com"
            required /></label>
        <label><span>Your message</span><textarea name="message" placeholder="Tell me a little about your idea..."
            required></textarea></label>
        <button class="submit-button" type="submit">
          <template v-if="sent">Message noted — thank you</template>
          <template v-else>Send message
            <ArrowIcon />
          </template>
        </button>
        <small class="form-note">I usually reply within 1–2 working days.</small>
      </form>
      <footer><span>© 2026 ANGELA SOLOMONS</span></footer>
      </section>
    </main>

    <!-- Section-change tracer line -->
    <div :class="tracerClass" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="tracer-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#1761FD">
              <animate attributeName="stop-color" values="#1761FD;#FE2790;#3CFE22;#1761FD" dur="1.4s"
                repeatCount="indefinite" />
            </stop>
            <stop offset=".34" stop-color="#FE2790">
              <animate attributeName="stop-color" values="#FE2790;#F4F43A;#4F3DA6;#FE2790" dur="1.4s"
                repeatCount="indefinite" />
            </stop>
            <stop offset=".68" stop-color="#3CFE22">
              <animate attributeName="stop-color" values="#3CFE22;#1761FD;#FA901B;#3CFE22" dur="1.4s"
                repeatCount="indefinite" />
            </stop>
            <stop offset="1" stop-color="#4F3DA6">
              <animate attributeName="stop-color" values="#4F3DA6;#3CFE22;#FE2790;#4F3DA6" dur="1.4s"
                repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <path :d="tracerPath" />
      </svg>
    </div>

    <!-- Project modal -->
    <div v-if="project" class="modal-backdrop" role="presentation" @mousedown.self="project = null">
      <div :class="`project-modal ${project.accent}`" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" aria-label="Close project" @click="project = null">×</button>
        <div class="modal-code">{{ project.code }}<span>{{ project.kicker }}</span></div>
        <div class="modal-content">
          <small>Featured project</small>
          <h2 id="modal-title">{{ project.title }}</h2>
          <div class="modal-details">
            <article><span>01 / Problem</span>
              <p>{{ project.problem }}</p>
            </article>
            <article><span>02 / Technical solution</span>
              <p>{{ project.solution }}</p>
            </article>
            <article><span>03 / Summary</span>
              <p>{{ project.summary }}</p>
            </article>
          </div>
          <div class="modal-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>

          <div class="modal-links">
            <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer">
              GitHub
              <ArrowIcon diagonal />
            </a>

            <a v-if="project.live" :href="project.live" target="_blank" rel="noreferrer">
              Live Site
              <ArrowIcon diagonal />
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
