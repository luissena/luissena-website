<template>
  <section class="flex flex-col gap-10 lg:gap-0">
    <Runners />
    <div
      class="flex flex-col lg:flex-row items-center lg:py-10 lg:px-20 gap-10"
    >
      <div>
        <a
          href="https://www.rodefinancas.com/metodo-qoc"
          target="_blank"
          class="dark:text-white flex items-center gap-1 hover:underline"
        >
          <h1 class="dark:text-white font-semibold text-lg">Método QOC</h1>
          <Icon
            class="dark:text-white"
            size="20px"
            name="tabler:external-link"
          />
        </a>
        <p>
          Landing page desenvolvida para o Método QOC, um método que tem como
          fundamento "Quem organiza, cresce". O objetivo dessa landing page é
          capturar leads e realizar vendas direcionando para o checkout da
          hotmart
        </p>
      </div>
      <img
        class="lg:w-1/2 rounded-lg aspect-video object-contain bg-white"
        src="/qoc.png"
      />
    </div>
    <Mei />
  </section>
</template>
