import "clsx";
import { a as attr_class, e as ensure_array_like, b as attr, s as stringify, c as escape_html } from "../../chunks/index.js";
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let activeSection = "home";
    const navLinks = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "certificates", label: "Certificates" }
    ];
    $$renderer2.push(`<nav${attr_class(`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${stringify("py-6 bg-transparent")}`)}><div class="max-w-6xl mx-auto px-6 flex justify-between items-center"><a href="#home" class="text-2xl font-bold tracking-tighter text-white">&lt;<span class="text-neonCyan">rajif</span> /></a> <div class="hidden md:flex items-center gap-6"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", `#${stringify(link.id)}`)}${attr_class(`text-sm font-medium transition-colors duration-300 hover:text-neonCyan ${stringify(activeSection === link.id ? "text-neonCyan" : "text-gray-400")}`)}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <a href="mailto:rajifraditia@gmail.com" class="hidden md:inline-block px-5 py-2 rounded-full border border-neonCyan/30 text-neonCyan text-sm font-medium hover:bg-neonCyan/10 transition-colors">Let's Talk</a> <button class="md:hidden text-white p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div></nav>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="relative min-h-screen overflow-hidden"><div class="fixed inset-0 z-0 pointer-events-none opacity-40"><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neonCyan/20 blur-[120px] rounded-full mix-blend-screen animate-glow"></div> <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-electricBlue/20 blur-[150px] rounded-full mix-blend-screen" style="animation: glow 3s ease-in-out infinite alternate-reverse;"></div></div> `);
  Navbar($$renderer);
  $$renderer.push(`<!----> <main class="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 md:py-24">`);
  children($$renderer);
  $$renderer.push(`<!----></main></div>`);
}
export {
  _layout as default
};
