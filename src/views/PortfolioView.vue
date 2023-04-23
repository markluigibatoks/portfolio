<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

onMounted(() => {
  document.body.style.background = 'none'
  document.body.classList.add('!bg-lavender')
})

const myPortfolio = [
  {
    id: 1,
    name: 'FEM News Homepage',
    categories: ['vuejs', 'tailwindcss'],
    img: '/images/portfolio/fem-news-home-page.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/fem/news-home-page',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/FEMNewsHomePage.vue'
  },
  {
    id: 2,
    name: 'FEM Dropdown',
    categories: ['vuejs', 'tailwindcss'],
    img: '/images/portfolio/fem-dropdown.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/fem/dropdown',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/FEMDropdown.vue'
  },
  {
    id: 3,
    name: 'FEM Notifications',
    categories: ['vuejs', 'tailwindcss'],
    img: '/images/portfolio/fem-notifications.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/fem/notifications',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/FEMNotifications.vue'
  },
  {
    id: 4,
    name: 'FEM Advice Slip',
    categories: ['vuejs', 'tailwindcss'],
    img: '/images/portfolio/fem-advice-slip.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/fem/advice-slip',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/FEMAdviceSlip.vue'
  },
  {
    id: 5,
    name: 'FEM REST Countries API',
    categories: ['vuejs', 'tailwindcss'],
    img: '/images/portfolio/fem-rest-countries-api.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/fem/rest-countries-api',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/FEMRESTCountriesAPI.vue'
  },
  {
    id: 6,
    name: 'Matching Pair',
    categories: ['vuejs', 'pixijs'],
    img: '/images/portfolio/pixi2d-matching-pair.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/pixi2d/matching-pair',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/MatchingPairView.vue'
  },
  {
    id: 7,
    name: 'Particles',
    categories: ['vuejs', 'pixijs'],
    img: '/images/portfolio/pixi2d-particles.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/pixi2d/particles',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/ParticlesView.vue'
  },
  {
    id: 8,
    name: 'Displacement',
    categories: ['vuejs', 'pixijs'],
    img: '/images/portfolio/pixi2d-displacement.png',
    url: 'https://sunny-cannoli-ec7678.netlify.app/pixi2d/displacement',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl/blob/master/src/components/MainView.vue'
  },
  {
    id: 9,
    name: 'FEM Tip Calculator',
    categories: ['nextjs', 'react', 'tailwindcss'],
    img: '/images/portfolio/fem-tip-calculator.png',
    url: 'https://lovely-shortbread-4dbf8e.netlify.app/fem/tip-calculator',
    repositoryUrl: 'https://github.com/markluigibatoks/mrkl-nextjs-hello-world'
  }
]
</script>

<template>
  <the-header
    v-if="isLargeScreen"
    class="dark:section-divider-dark lg:section-divider"
  />
  <the-nav />
  <div class="relative">
    <figure class="relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black/50">
      <img
        src="/images/bnr-portfolio.png"
        alt="a man coding a website"
        class="min-h-[360px] object-cover"
      >
    </figure>
    <base-container class="flex flex-col justify-center w-full h-full absolute top-1/2 left-0 -translate-y-1/2 text-white">
      <h2 class="lg:mb-10 mb-5 font-bold text-4xl">
        Portfolio
      </h2>
      <p class="lg:text-[length:23px] lg:leading-[40px] md:w-1/2 text-justify">
        My portfolio website highlights my expertise in web development.
        Let's connect and collaborate to bring your ideas to life!
      </p>
    </base-container>
  </div>
  <base-container class="py-10 dark:bg-dark dark:text-white bg-lavender">
    <div class="grid grid-cols-12 place-content-center place-items-center gap-x-5 gap-y-20">
      <base-project-card
        v-for="n of myPortfolio"
        :key="n"
        class="lg:col-span-4 md:col-span-6 col-span-12"
        :name="n.name"
        :categories="n.categories"
        :img="n.img"
        :url="n.url"
        :repository-url="n.repositoryUrl"
      />
    </div>
  </base-container>
  <the-footer />
</template>