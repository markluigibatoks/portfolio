<template>
  <header>
    <base-container class="min-h-[60px]">
      <base-logo>
        <img
          src="../assets/logo.svg"
          alt="logo"
          class="w-14 h-14"
        >
      </base-logo>

      <!-- <div class="head_info">
          <h2>Contact <mark>number</mark></h2>
        </div> -->

      <base-list
        :items="Array.from({length: 2}, (_, i) => i)"
        main-axis="horizontal"
      >
        <template #item>
          <base-logo>
            <img
              src="../assets/logo.svg"
              alt="logo"
            >
          </base-logo>
        </template>
      </base-list>
    </base-container>
  </header>
</template>