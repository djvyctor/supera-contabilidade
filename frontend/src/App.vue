<script setup>
import SideBar from './components/SideBar.vue';
</script>

<template>
  <div class="app flex flex-col min-h-screen">
    <SideBar />
    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>