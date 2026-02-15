<script setup>
import { ref } from 'vue'

const menuAberto = ref(false)

function toggleMenu() {
  menuAberto.value = !menuAberto.value
}

function fecharMenu() {
  menuAberto.value = false
}

const linkClasses = 'hover:text-slate-300 hover:bg-slate-700/50 rounded px-2 py-1 transition-colors inline-flex items-center gap-2'
const activeClasses = 'text-slate-200 font-medium underline underline-offset-4'

const iconClass = 'w-5 h-5 shrink-0'
</script>

<template>
  <header class="sticky top-0 z-50 bg-slate-800 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-14">
        <!-- Logo  -->
        <RouterLink to="/" class="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-700/80 text-slate-200">
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </span>
          <span class="font-bold text-xl">Supera contabilidade</span>
        </RouterLink>

        <!-- Nav desktop: escondido em mobile, visível a partir de md -->
        <nav class="hidden md:flex items-center gap-1">
          <RouterLink to="/" :class="linkClasses" :active-class="activeClasses">
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sobre
          </RouterLink>
          <RouterLink to="/servicos" :class="linkClasses" :active-class="activeClasses">
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Serviços
          </RouterLink>
          <RouterLink to="/contato" :class="linkClasses" :active-class="activeClasses">
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contato
          </RouterLink>
          <span class="border-l border-slate-600 h-5 mx-1" aria-hidden="true" />
          <RouterLink to="/administracao" :class="linkClasses" :active-class="activeClasses">
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Administração
          </RouterLink>
        </nav>

        <!-- Botão hamburger: só em mobile -->
        <button
          type="button"
          class="md:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
          aria-label="Abrir menu"
          @click="toggleMenu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuAberto" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile: painel que desliza da direita -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-show="menuAberto"
        class="fixed inset-0 z-40 md:hidden"
        aria-hidden="true"
      >
        <div
          class="absolute inset-0 bg-black/50"
          @click="fecharMenu"
        />
        <nav
          class="absolute top-0 right-0 bottom-0 w-64 max-w-[85vw] bg-slate-800 shadow-xl flex flex-col gap-1 p-4 pt-16"
        >
          <RouterLink
            to="/"
            :class="[linkClasses, 'py-3 px-2 rounded-lg w-full justify-start']"
            :active-class="activeClasses"
            @click="fecharMenu"
          >
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sobre
          </RouterLink>
          <RouterLink
            to="/servicos"
            :class="[linkClasses, 'py-3 px-2 rounded-lg w-full justify-start']"
            :active-class="activeClasses"
            @click="fecharMenu"
          >
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Serviços
          </RouterLink>
          <RouterLink
            to="/contato"
            :class="[linkClasses, 'py-3 px-2 rounded-lg w-full justify-start']"
            :active-class="activeClasses"
            @click="fecharMenu"
          >
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contato
          </RouterLink>
          <div class="border-t border-slate-600 my-2" aria-hidden="true" />
          <RouterLink
            to="/administracao"
            :class="[linkClasses, 'py-3 px-2 rounded-lg w-full justify-start']"
            :active-class="activeClasses"
            @click="fecharMenu"
          >
            <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Administração
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
