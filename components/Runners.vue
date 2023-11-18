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
          <img src="/runners-01.png" />
        </swiper-slide>
        <swiper-slide class="mr-3 shadow-lg">
          <img src="/runners-02.png" />
        </swiper-slide>
        <swiper-slide class="mr-3">
          <img src="/runners-03.png" />
        </swiper-slide>
        <swiper-slide class="mr-3">
          <img src="/runners-04.png" />
        </swiper-slide>

        <swiper-slide class="mr-3">
          <img src="/runners-05.png" />
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <a
        href="https://www.oficialrunnersclub.com.br/"
        target="_blank"
        class="dark:text-white flex items-center gap-1 hover:underline"
      >
        <h1 class="dark:text-white font-semibold text-lg">Runners Club</h1>
        <Icon class="dark:text-white" size="20px" name="tabler:external-link" />
      </a>
      <p class="">
        Sistema construido para uma empresa que realiza eventos e assessorias de
        corrida individualizada. Esse sistema foi desenvolvido com o objetivo de
        fazer inscrições para eventos, vender produtos online, aumentar a
        visibilidade da marca e potencializar os canais de comuinicação.
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

<style>
.swiper-button-prev,
.swiper-button-next {
  color: #cdcdcd;
  padding: 0px 20px;
}
</style>
