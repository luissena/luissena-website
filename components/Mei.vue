<template>
  <div class="flex items-center py-10 px-20 gap-10">
    <div class="w-1/2">
      <swiper
        :autoplay="{ delay: 1 }"
        :loop="true"
        :slides-per-view="1.3"
        :navigation="true"
        class="rounded-lg"
        :modules="modules"
      >
        <swiper-slide class="mr-3">
          <img src="/mei360.png" />
        </swiper-slide>
        <swiper-slide class="mr-3 shadow-lg">
          <img src="/mei360-02.png" />
        </swiper-slide>
        <swiper-slide class="mr-3">
          <img src="/mei360-03.png" />
        </swiper-slide>
        <swiper-slide class="mr-3">
          <img src="/mei360-04.png" />
        </swiper-slide>

        <swiper-slide class="mr-3">
          <img src="/mei360-05.png" />
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <!-- <a
        href="https://www.oficialrunnersclub.com.br/"
        target="_blank"
        class="dark:text-white flex items-center gap-1 hover:underline"
      > -->
      <h1 class="dark:text-white font-semibold text-lg">MEI360</h1>
      <!-- <Icon class="dark:text-white" size="20px" name="tabler:external-link" /> -->
      <!-- </a> -->
      <p class="">
        SaaS em processo de construção para auxiliar o microempreendedor
        individual a gerenciar seu negócio. O sistema contará com um dashboard
        que mostra as principais informações do negócio, um sistema de controle
        financeiro, um sistema de controle de estoque, um sistema de controle de
        clientes e um sistema de controle de vendas.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"

import "swiper/css/navigation"

import { Navigation } from "swiper/modules"

const modules = [Navigation]
const modules2 = [Navigation]
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #000;
}
</style>
