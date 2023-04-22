<script setup>
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isSmallScreen = useMediaQuery('(min-width: 640px)')
const isDark = useDark()

const socialMedia = ref([
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/mark-luigi-batoctoy-47a4351b1/',
    srcLight: '/images/linkedin.png',
    srcDark: '/images/linkedin.png'
  },
  {
    name: 'github',
    url: 'https://github.com/markluigibatoks/',
    srcLight: '/images/github.png',
    srcDark: '/images/github-dark.png'
  }
])

const servicesOffered = ref([
  {
    name: 'Website Conversion',
    content: "Do you have an outdated website that needs a fresh look or isn't performing the way you want it to? Let me help you convert your website into a modern, user-friendly, and high-performing platform that represents your brand and engages your audience.",
    img: '/images/middle1-img1.png'
  },
  {
    name: 'Responsive Design',
    content: "In today's world, it's essential to have a website that looks great and functions flawlessly on all devices, including desktops, laptops, tablets, and smartphones. I specialize in creating responsive designs that adapt to any screen size, ensuring that your website is accessible to your target audience, no matter how they access it.",
    img: '/images/middle1-img2.png'
  },
  {
    name: 'Website Animation',
    content: "Looking to add some life and personality to your website? I offer website animation services that can make your website stand out from the crowd. Whether you're looking for subtle animations or something more dynamic, I can help you create an engaging and interactive website that keeps your visitors coming back for more.",
    img: '/images/middle1-img3.png'
  },
  {
    name: 'Website Maintenance',
    content: "Keep your website running smoothly with my hassle-free maintenance services. From software updates to security patches, I take care of everything so that you can focus on your business. With regular maintenance, your website stays up-to-date, secure, and optimized for performance, providing a seamless experience for your users.",
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
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Resume', url: '/resume.docx' }
]
</script>

<template>
  <base-container class="dark:bg-emphasis1 dark:text-white lg:pt-[179px] py-10 min-h-[564px] bg-white">
    <section class="md:flex-row md:flex-wrap md:text-left flex flex-col justify-between gap-5 text-center">
      <div class="lg:mx-0 lg:w-fit lg:max-w-[250px] lg:mb-0 md:w-full mx-auto mb-10">
        <figure class="mb-[35px]">
          <img
            src="/images/logo.png"
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
            <a
              href="/#services-offered"
              class="hover:underline"
            >
              {{ item.name }}
            </a>
          </template>
        </base-list>
      </div>

      <div class="lg:w-fit lg:mb-0 mb-10">
        <h3 class="lg:text-[length:30px] lg:mb-7 mb-3 font-avalon font-bold text-xl">
          Contact Me
        </h3>

        <ul class="flex flex-col gap-3">
          <li>Phone: <mark class="dark:text-white">(+63) 915 265 5585</mark></li>
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
            <a
              :href="item.url"
              target="_blank"
              class="hover:opacity-70"
            >
              <figure>
                <img
                  :src="isDark ? item.srcDark : item.srcLight"
                  alt="logo"
                >
              </figure>
            </a>
          </template>
        </base-list>
      </div>
    </section>
  </base-container>

  <base-container class="dark:bg-emphasis3 dark:text-white bg-lavender">
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
            v-if="item.name === 'Resume'"
            href="/resume.pdf"
            download
          >
            Resume
          </a>
          <router-link
            v-else
            :to="item.url"
            class="dark:bg-emphasis2 lg:dark:bg-transparent lg:px-0 lg:py-0 lg:w-fit lg:bg-transparent lg:hover:bg-transparent lg:hover:text-inherit lg:hover:underline hover:bg-accent hover:text-white px-5 py-2 block rounded w-full bg-white"
            exact-active-class="underline"
          >
            {{ item.name }}
          </router-link>
        </template>
      </base-list>

      <div class="lg:text-[length:20px] order-1">
        &copy; Copyright 2023 | Designed by Caren C
      </div>
    </section>
  </base-container>
</template>