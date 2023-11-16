<template>
  <header class="px-10 py-5 flex justify-between items-center">
    <h1 class="text-5xl select-none">&lt&#47&gt</h1>
    <nav>
      <ul class="dark:text-gray-300 text-gray-500 text-lg flex items-center gap-7">
        <li class="dark:hover:text-white hover:text-black " v-for="item in items">
          <router-link v-if="!item.external" active-class="text-white" :to="item.path">{{item.name }}</router-link>
          <a v-else target="_blank" :href="item.path">{{item.name }}</a>
        </li>
        <Icon v-if="theme" @click="switchTheme" class="cursor-pointer" size="25px" name="material-symbols-light:dark-mode-outline" color="dark:white"/>  
        <Icon v-else @click="switchTheme" class="cursor-pointer " size="25px" name="material-symbols-light:light-mode-outline" color="dark:white"/>
      </ul>
    </nav>
  </header>
  
</template>

<script setup lang="ts">

// variable to store the current theme in html

const theme = ref(false)


const switchTheme = () => {
  const html = document.querySelector('html')
  html?.classList.toggle('dark')

  theme.value = !theme.value
}

type NavbarProps = {
  name: string
  path: string
  external?: boolean
}
const items: NavbarProps[] = [
  { name: 'inicio', path: '/' },
  { name: 'blog', path: 'https://medium.com/@luis.senarode', external: true },
  { name: 'projetos', path: '/projects' },
  { name: 'contato', path: '/contact' },
]
</script>