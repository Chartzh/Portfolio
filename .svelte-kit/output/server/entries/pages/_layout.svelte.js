import "clsx";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="relative min-h-screen overflow-hidden"><div class="fixed inset-0 z-0 pointer-events-none opacity-40"><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neonCyan/20 blur-[120px] rounded-full mix-blend-screen animate-glow"></div> <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-electricBlue/20 blur-[150px] rounded-full mix-blend-screen" style="animation: glow 3s ease-in-out infinite alternate-reverse;"></div></div> <main class="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-24">`);
  children($$renderer);
  $$renderer.push(`<!----></main></div>`);
}
export {
  _layout as default
};
