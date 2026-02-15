<script setup>
</script>

<template>
  <header class="sticky top-0 z-50 bg-slate-800 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-14">
        <div class="flex items-center gap-2">
          <span class="font-bold text-xl">Supera contabilidade</span>
        </div>
        <nav class="flex items-center gap-6">
          <RouterLink
            to="/"
            class="hover:text-slate-300 transition-colors"
            active-class="text-slate-200 font-medium underline underline-offset-4"
          >
            Sobre
          </RouterLink>
          <RouterLink
            to="/servicos"
            class="hover:text-slate-300 transition-colors"
            active-class="text-slate-200 font-medium underline underline-offset-4"
          >
            Serviços
          </RouterLink>
          <RouterLink
            to="/contato"
            class="hover:text-slate-300 transition-colors"
            active-class="text-slate-200 font-medium underline underline-offset-4"
          >
            Contato
          </RouterLink>
          <RouterLink
            to="/administracao"
            class="hover:text-slate-300 transition-colors"
            active-class="text-slate-200 font-medium underline underline-offset-4"
          >
            Administração
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>