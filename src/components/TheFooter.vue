<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isSmallScreen = useMediaQuery('(min-width: 640px)')

const socialMedia = ref([
  { name: 'linkedin', url: '#', src: '/images/linkedin.png' },
  { name: 'github', url: '#', src: '/images/github.png' }
])

const servicesOffered = ref([
  {
    name: 'Convert Website',
    content: 'We are excited to post contents on the website. This space is reserved for more information about the company.',
    img: '/images/middle1-img1.png'
  },
  {
    name: 'Responsive Design',
    content: 'We are excited to post contents on the website. This space is reserved for more information about the company.',
    img: '/images/middle1-img2.png'
  },
  {
    name: 'Website Animation',
    content: 'We are excited to post contents on the website. This space is reserved for more information about the company.',
    img: '/images/middle1-img3.png'
  },
  {
    name: 'Website Maintenance',
    content: 'We are excited to post contents on the website. This space is reserved for more information about the company.',
    img: '/images/middle1-img4.png'
  }
])

const contactInfo = ref([
  {
    name: 'Phone',
    content: '123-456-7890',
    img: '/images/phone.png',
    type: 'phone'
  },
  {
    name: 'Email',
    content: 'info@samplemail.com',
    img: '/images/email.png',
    type: 'link'
  },
  {
    name: 'Location',
    content: '123 Address Here, Suite A City Name, State 12345',
    img: '/images/house.png',
    type: 'address'
  }
])

const menu = [
  { name: 'Home', url: '/' },
  { name: 'About Me', url: '/about-me', menu: [
    { name: 'Vision', url: '/about-me#vision' },
    { name: 'Mission', url: '/about-me#mission' }
  ] },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Contact Us', url: '/contact-us' },
  { name: 'Resume', url: '/resume' }
]
</script>

<template>
  <base-container class="lg:pt-[179px] py-10 min-h-[564px] bg-white">
    <section class="md:flex-row md:flex-wrap md:text-left flex flex-col justify-between gap-5 text-center">
      <div class="lg:mx-0 lg:w-fit lg:max-w-[250px] lg:mb-0 md:w-full mx-auto mb-10">
        <figure class="mb-[35px]">
          <img
            src="/images/logo-2.png"
            alt="logo"
            class="mx-auto"
          >
        </figure>
        <p class="lg:text-justify md:text-center max-w-[600px] mx-auto">
          Thanks for visiting my website! Contact me for web development inquiries or connect on social media.
        </p>
      </div>

      <div class="lg:w-fit lg:mb-0 mb-10">
        <h3 class="lg:text-[length:30px] lg:mb-7 mb-3 font-avalon font-bold text-xl">
          Services
        </h3>
        <base-list
          :items="servicesOffered"
          main-axis="vertical"
          :main-axis-spacing="3"
        >
          <template #item="{item}">
            {{ item.name }}
          </template>
        </base-list>
      </div>

      <div class="lg:w-fit lg:mb-0 mb-10">
        <h3 class="lg:text-[length:30px] lg:mb-7 mb-3 font-avalon font-bold text-xl">
          Contact Me
        </h3>

        <ul class="flex flex-col gap-3">
          <li>Phone: <mark>(+63) 915 265 5585</mark></li>
          <li>
            Email: <a
              href="mailto:markluigibatoks@gmail.com"
              class="underline hover:no-underline"
            >markluigibatoks@gmail.com</a>
          </li>
          <li>
            Location: <address class="inline">
              Cebu City, Philippines 6000
            </address>
          </li>
        </ul>
      </div>

      <div class="lg:w-fit">
        <h3 class="lg:text-[length:30px] lg:mb-7 mb-3 font-avalon font-bold text-xl">
          Follow Me
        </h3>
        <base-list
          :items="socialMedia"
          main-axis="horizontal"
          :main-axis-alignment="isLargeScreen ? 'start' : 'center'"
          :main-axis-spacing="3"
        >
          <template #item="{ item }">
            <a :href="item.url">
              <figure>
                <img
                  :src="item.src"
                  alt="logo"
                >
              </figure>
            </a>
          </template>
        </base-list>
      </div>
    </section>
  </base-container>

  <base-container class="bg-lavender">
    <section class="lg:flex lg:text-left lg:py-0 py-5 min-h-[132px] justify-between items-center text-center">
      <base-list
        class="lg:px-0 lg:mb-0 lg:text-[length:20px] order-2 mb-5"
        :items="menu"
        :main-axis="isSmallScreen ? 'horizontal' : 'vertical'"
        :main-axis-spacing="isLargeScreen ? 12 : 2"
        :main-axis-alignment="isSmallScreen ? 'center' : 'start'"
      >
        <template #item="{ item }">
          <a
            href="#"
            class="lg:px-0 lg:py-0 lg:w-fit lg:bg-transparent px-5 py-2 block rounded w-full bg-white"
          >
            {{ item.name }}
          </a>
        </template>
      </base-list>

      <div class="lg:text-[length:20px] order-1">
        &copy; Copyright 2023 | Designed by Caren C
      </div>
    </section>
  </base-container>
</template>