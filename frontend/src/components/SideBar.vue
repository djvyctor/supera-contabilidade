<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/images/logo_sl.png'

const menuAberto = ref(false)
const route = useRoute()

function toggleMenu() {
  menuAberto.value = !menuAberto.value
}

function fecharMenu() {
  menuAberto.value = false
}

const isActive = (path) => route.path === path
const linkBase = 'relative px-3 py-2 text-sm font-medium transition-all duration-300 ease-out flex items-center gap-2 group'
const linkDesktop = 'text-blue-100 hover:text-white'
const linkActiveDesktop = 'text-white'

const iconClass = 'w-5 h-5 shrink-0 transition-transform group-hover:scale-110 duration-300'
</script>

<template>
  <div>
    <header
      class="sticky top-0 z-50 w-full shadow-xl bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 border-b border-white/10 backdrop-blur-sm bg-opacity-95"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">

          <RouterLink to="/" class="flex items-center gap-3 group" @click="fecharMenu">
            <img
              :src="logo"
              alt="Supera contabilidade"
              class="h-10 w-auto object-contain"
            />

            <div class="flex flex-col leading-none">
              <span class="font-bold text-2xl text-white tracking-tight uppercase drop-shadow-md">Supera</span>
              <span class="text-[0.65rem] text-blue-200 uppercase tracking-[0.15em] font-semibold">Soluções Contábeis</span>
            </div>
          </RouterLink>

          <nav class="hidden md:flex items-center gap-1">
            <RouterLink to="/" :class="[linkBase, isActive('/') ? linkActiveDesktop : linkDesktop]">
              <span class="relative z-10">Home</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" :class="{'scale-x-100': isActive('/')}"></span>
            </RouterLink>

            <RouterLink to="/sobre" :class="[linkBase, isActive('/sobre') ? linkActiveDesktop : linkDesktop]">
              <span class="relative z-10">Sobre</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" :class="{'scale-x-100': isActive('/sobre')}"></span>
            </RouterLink>

            <RouterLink to="/servicos" :class="[linkBase, isActive('/servicos') ? linkActiveDesktop : linkDesktop]">
              <span class="relative z-10">Serviços</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" :class="{'scale-x-100': isActive('/servicos')}"></span>
            </RouterLink>

            <RouterLink to="/contato" :class="[linkBase, isActive('/contato') ? linkActiveDesktop : linkDesktop]">
              <span class="relative z-10">Contato</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" :class="{'scale-x-100': isActive('/contato')}"></span>
            </RouterLink>

            <div class="h-6 w-px bg-white/20 mx-4"></div>

            <RouterLink to="/administracao" class="group relative inline-flex items-center gap-2 px-5 py-2.5 overflow-hidden rounded-full bg-white/10 hover:bg-white text-white hover:text-blue-900 font-semibold transition-all duration-300 border border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <svg :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Administração</span>
            </RouterLink>
          </nav>

          <button
            type="button"
            class="md:hidden relative p-2 text-blue-100 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            @click="toggleMenu"
            aria-label="Menu"
          >
            <div class="w-6 h-6 flex flex-col justify-center gap-1.5 overflow-hidden">
              <span class="w-full h-0.5 bg-current transform transition-all duration-300" :class="{'rotate-45 translate-y-2': menuAberto}"></span>
              <span class="w-full h-0.5 bg-current transition-all duration-300" :class="{'opacity-0 translate-x-full': menuAberto}"></span>
              <span class="w-full h-0.5 bg-current transform transition-all duration-300" :class="{'-rotate-45 -translate-y-2': menuAberto}"></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-show="menuAberto" class="fixed inset-0 z-60 md:hidden flex justify-end">

        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="fecharMenu"></div>

        <nav class="relative w-72 h-full bg-linear-to-b from-blue-900 to-slate-900 shadow-2xl border-l border-white/10 flex flex-col p-6 pt-24 gap-2 overflow-y-auto">

          <RouterLink to="/" @click="fecharMenu" class="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-100 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/10" :class="{'bg-white/10 text-white border-white/20': isActive('/')}">
            <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span class="font-medium">Home</span>
          </RouterLink>
          
          <RouterLink to="/sobre" @click="fecharMenu" class="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-100 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/10" :class="{'bg-white/10 text-white border-white/20': isActive('/sobre')}">
            <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span class="font-medium">Sobre</span>
          </RouterLink>

          <RouterLink to="/servicos" @click="fecharMenu" class="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-100 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/10" :class="{'bg-white/10 text-white border-white/20': isActive('/servicos')}">
            <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span class="font-medium">Serviços</span>
          </RouterLink>

          <RouterLink to="/contato" @click="fecharMenu" class="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-100 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/10" :class="{'bg-white/10 text-white border-white/20': isActive('/contato')}">
            <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span class="font-medium">Contato</span>
          </RouterLink>

          <div class="h-px bg-white/10 my-2 mx-4"></div>

          <RouterLink to="/administracao" @click="fecharMenu" class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg transition-all transform active:scale-95 mt-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span>Administração</span>
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>