<template>
  <header>
    <base-section class="min-h-[60px]">
        <base-logo>
          <img src="" alt=""/>
        </base-logo>

        <!-- <div class="head_info">
          <h2>Contact <mark>number</mark></h2>
        </div> -->

        <base-list
          :items="Array.from({length: 2}, (_, i) => i)"
        >
          <template #item>
            <base-logo>
              <img src="" alt=""/>
            </base-logo>
          </template>
        </base-list>
    </base-section>
  </header>
</template>