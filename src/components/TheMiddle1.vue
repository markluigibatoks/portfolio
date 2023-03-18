<script setup>
const servicesOffered = ref([
  {
    name: 'Convert Website',
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

</script>
<template>
  <base-container class="lg:pt-[118px] lg:pb-16 py-10">
    <section>
      <h2 class="lg:mb-[42px] lg:text-[length:50px] lg:text-left mb-5 font-avalon font-bold text-3xl text-center">
        Services Offered
      </h2>

      <article
        v-for="n in servicesOffered"
        :key="n"
        class="lg:min-h-[398px] lg:gap-10 lg:mb-14 lg:flex last:mb-0 mb-5 items-center p-10 w-full rounded-[51px] shadow-4xl shadow-accent/10 bg-white"
      >
        <figure class="lg:h-[323px] p-2 mx-auto flex justify-center items-center max-w-[357px] w-full rounded-[41px] bg-purple">
          <img
            :src="n.img"
            :alt="n.name"
          >
        </figure>

        <div class="text-center lg:text-left">
          <h3 class="lg:mb-6 lg:mt-0 lg:text-[length:30px] mt-5 font-avalon font-bold text-xl">
            {{ n.name.split(' ')[0] }} <span class="text-accent">{{ n.name.split(' ')[1] }}</span>
          </h3>
          <p class="lg:text-[length:23px] lg:leading-[40px]">
            {{ n.content }}
          </p>
        </div>
      </article>
    </section>
  </base-container>
</template>