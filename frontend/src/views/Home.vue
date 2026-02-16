<script setup>
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white -m-6 mb-0">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Sua contabilidade
            <span class="text-blue-300">simplificada</span>
          </h1>
          <p class="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
            Cuidamos da burocracia para que você foque no que realmente importa:
            o crescimento do seu negócio. Soluções contábeis completas e personalizadas.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <RouterLink
              to="/contato"
              class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Fale Conosco
            </RouterLink>
            <RouterLink
              to="/servicos"
              class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nossos Serviços
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section class="bg-white py-20 -mx-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800">Por que escolher a Supera?</h2>
          <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Compromisso com a excelência em cada detalhe do seu negócio</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="text-center p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Atendimento Personalizado</h3>
            <p class="text-slate-600 leading-relaxed">Cada empresa é única. Entendemos suas necessidades e oferecemos soluções sob medida para o seu negócio.</p>
          </div>

          <!-- Card 2 -->
          <div class="text-center p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Tecnologia e Inovação</h3>
            <p class="text-slate-600 leading-relaxed">Utilizamos as ferramentas mais modernas do mercado para garantir agilidade e precisão nos processos.</p>
          </div>

          <!-- Card 3 -->
          <div class="text-center p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Experiência Comprovada</h3>
            <p class="text-slate-600 leading-relaxed">Anos de experiência no mercado contábil, atendendo empresas de diversos portes e segmentos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços Resumidos -->
    <section class="bg-slate-50 py-20 -mx-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800">Nossos Serviços</h2>
          <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Soluções completas para todas as necessidades contábeis da sua empresa</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Serviço 1 -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800 mb-2">Contabilidade Empresarial</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Gestão contábil completa, balanços, demonstrações e relatórios gerenciais.</p>
          </div>

          <!-- Serviço 2 -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800 mb-2">Fiscal e Tributário</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Planejamento tributário, apuração de impostos e obrigações acessórias.</p>
          </div>

          <!-- Serviço 3 -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800 mb-2">Departamento Pessoal</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Folha de pagamento, admissões, rescisões e gestão de benefícios.</p>
          </div>

          <!-- Serviço 4 -->
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800 mb-2">Abertura de Empresas</h3>
            <p class="text-sm text-slate-600 leading-relaxed">Constituição, alterações contratuais e legalização completa do seu negócio.</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink
            to="/servicos"
            class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            Ver todos os serviços
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 -mx-6">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold">Pronto para simplificar sua contabilidade?</h2>
        <p class="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com segurança e tranquilidade.</p>
        <RouterLink
          to="/contato"
          class="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Entre em Contato
        </RouterLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-400 py-12 -mx-6 -mb-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Empresa -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Supera Soluções Contábeis</h3>
            <p class="text-sm leading-relaxed">Soluções contábeis completas para empresas que buscam crescimento com segurança e conformidade.</p>
          </div>

          <!-- Links -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <nav class="flex flex-col gap-2">
              <RouterLink to="/" class="text-sm hover:text-white transition-colors">Home</RouterLink>
              <RouterLink to="/sobre" class="text-sm hover:text-white transition-colors">Sobre</RouterLink>
              <RouterLink to="/servicos" class="text-sm hover:text-white transition-colors">Serviços</RouterLink>
              <RouterLink to="/contato" class="text-sm hover:text-white transition-colors">Contato</RouterLink>
            </nav>
          </div>

          <!-- Contato -->
          <div>
            <h3 class="text-white font-bold text-lg mb-4">Contato</h3>
            <div class="flex flex-col gap-2 text-sm">
              <span>contato@superacont.com</span>
              <span>(00) 0000-0000</span>
              <span>Seg - Sex: 8h às 18h</span>
            </div>
          </div>
        </div>

        <div class="border-t border-slate-800 mt-10 pt-8 text-center text-sm">
          <p>&copy; {{ new Date().getFullYear() }} Supera Soluções Contábeis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
