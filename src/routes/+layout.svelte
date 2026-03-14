<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  let { children } = $props();
</script>

<div class="relative min-h-screen overflow-hidden">
  <!-- Interactive Ambient Background -->
  <div class="fixed inset-0 z-0 pointer-events-none opacity-40">
    <svg
      class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] animate-glow"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="glow-cyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#00f2fe" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="url(#glow-cyan)"
        style="mix-blend-mode: screen;"
      />
    </svg>
    <svg
      class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%]"
      style="animation: glow 3s ease-in-out infinite alternate-reverse;"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4facfe" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#4facfe" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="url(#glow-blue)"
        style="mix-blend-mode: screen;"
      />
    </svg>
  </div>

  <Navbar />

  <main class="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-24">
    {@render children()}
  </main>
</div>
