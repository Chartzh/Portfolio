import { e as escape_html, $ as ensure_array_like, a0 as attr_class, a1 as stringify, a2 as head, a3 as attr, a4 as bind_props } from "../../chunks/index.js";
import "clsx";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let displayedText = "";
    $$renderer2.push(`<section class="min-h-[70vh] flex flex-col justify-center items-start pt-20 pb-10"><div class="space-y-6 max-w-4xl w-full"><div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neonCyan/30 bg-neonCyan/5 text-neonCyan text-xs sm:text-sm font-medium tracking-wide"><span class="w-2 h-2 rounded-full bg-neonCyan animate-pulse"></span> <span>Available for Opportunities</span></div> <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight min-h-[3em] sm:min-h-[2.5em] md:min-h-0">Hi, I'm Rajif. <br/> <span class="text-gradient block mt-2 whitespace-normal break-words h-[1.2em] text-2xl sm:text-3xl md:text-4xl">${escape_html(displayedText)}<span class="animate-[pulse_1s_infinite] opacity-100 font-normal">|</span></span></h1> <p class="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mt-4 sm:mt-6">Building scalable AI solutions and bridging the gap between complex
            algorithms and real-world impact.</p> <div class="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 w-full sm:w-auto"><a href="#projects" class="px-6 py-3 rounded-lg bg-neonCyan text-obsidian font-semibold hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-center">View Projects</a> <a href="mailto:contact@example.com" class="px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 text-center">Contact Me</a></div></div></section>`);
  });
}
function AboutMe($$renderer) {
  $$renderer.push(`<section id="about" class="py-20"><div class="glass-card flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group"><div class="absolute -top-32 -right-32 w-64 h-64 bg-neonCyan/10 blur-[80px] rounded-full group-hover:bg-neonCyan/20 transition-all duration-500"></div> <div class="w-full md:w-1/3 flex justify-center"><div class="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-neonCyan/30 p-1 relative"><div class="absolute inset-0 rounded-full border border-electricBlue/20 animate-[spin_10s_linear_infinite]"></div> <div class="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center"><span class="text-gray-500 text-4xl">Image</span></div></div></div> <div class="w-full md:w-2/3 space-y-6 relative z-10"><div class="flex items-center gap-4"><h2 class="text-3xl font-bold text-white">About Me</h2> <div class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"></div></div> <p class="text-gray-300 leading-relaxed text-lg">I am an <span class="text-white font-semibold">Information Systems undergraduate</span> at UIN Jakarta, passionate about building scalable AI solutions
                and bridging the gap between complex algorithms and real-world impact.</p> <p class="text-gray-400 leading-relaxed">My journey in tech is driven by an insatiable curiosity for how
                intelligent systems can solve meaningful problems. Currently
                focusing on Generative AI, edge computing implementations, and
                data science pipelines.</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"><!--[-->`);
  const each_array = ensure_array_like([
    { label: "Experience", value: "2+ Years" },
    { label: "Projects", value: "15+" },
    { label: "Certifications", value: "5+" },
    { label: "Mentorship", value: "2 Orgs" }
  ]);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$renderer.push(`<div class="bg-white/5 border border-white/5 rounded-lg p-3 text-center transition-colors hover:bg-white/10 hover:border-neonCyan/30"><div class="text-xl font-bold text-neonCyan">${escape_html(stat.value)}</div> <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">${escape_html(stat.label)}</div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section>`);
}
function Timeline($$renderer) {
  const experiences = [
    {
      year: "2026 - Present",
      title: "AI/ML Mentor",
      company: "GDGoC UIN Jakarta",
      description: "Mentoring students in artificial intelligence and machine learning fundamentals."
    },
    {
      year: "2026 - Present",
      title: "AI Engineer Trainee",
      company: "PIJAK (IBM SkillsBuild x Dicoding)",
      description: "Intensive training program focusing on AI engineering principles and IBM technologies."
    },
    {
      year: "2025 - Present",
      title: "Data Science Mentor",
      company: "HitLab",
      description: "Guiding learners through data science projects and methodologies."
    },
    {
      year: "2023 - Present",
      title: "Information Systems Undergraduate",
      company: "UIN Syarif Hidayatullah Jakarta",
      description: "Pursuing bachelor's degree with focus on information systems and algorithms."
    }
  ];
  $$renderer.push(`<section id="experience" class="py-20"><div class="flex items-center gap-4 mb-12"><h2 class="text-3xl font-bold text-white">Experience &amp; Journey</h2> <div class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"></div></div> <div class="relative pl-8 md:pl-0 max-w-4xl mx-auto"><div class="absolute left-8 md:left-1/2 md:-ml-px top-2 bottom-2 w-[2px] bg-white/10 shadow-[0_0_10px_rgba(0,242,254,0.3)]"></div> <div class="space-y-12"><!--[-->`);
  const each_array = ensure_array_like(experiences);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let exp = each_array[i];
    $$renderer.push(`<div${attr_class(`relative flex flex-col md:flex-row ${stringify(i % 2 === 0 ? "md:flex-row-reverse" : "")} group`)}><div class="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-obsidian border-2 border-neonCyan shadow-[0_0_10px_rgba(0,242,254,0.8)] mt-2 md:mt-0 transition-transform duration-300 group-hover:scale-150 group-hover:bg-neonCyan"></div> <div${attr_class(`w-full md:w-1/2 pl-8 md:pl-0 ${stringify(i % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right")}`)}><div${attr_class(`glass-card hover:-translate-y-1 transition-transform duration-300 relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-neonCyan/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:rounded-2xl ${stringify(i % 2 !== 0 ? "before:bg-gradient-to-l" : "")}`)}><span class="inline-block px-3 py-1 bg-white/10 text-neonCyan text-sm font-semibold rounded-full mb-3 backdrop-blur-md">${escape_html(exp.year)}</span> <h3 class="text-xl font-bold text-white">${escape_html(exp.title)}</h3> <h4 class="text-lg text-electricBlue mb-3">${escape_html(exp.company)}</h4> <p class="text-gray-400 text-sm leading-relaxed">${escape_html(exp.description)}</p></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function TechStack($$renderer) {
  head("1jvwvzs", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" class="svelte-1jvwvzs"/>`);
  });
  $$renderer.push(`<section id="skills" class="py-24 px-6 relative border-y border-white/5 svelte-1jvwvzs"><div class="max-w-7xl mx-auto svelte-1jvwvzs"><div class="text-center mb-16 svelte-1jvwvzs"><h2 class="text-3xl md:text-4xl font-bold text-white mb-2 svelte-1jvwvzs">Tech Stack</h2> <div class="w-16 h-1 bg-teal-400 mx-auto rounded svelte-1jvwvzs"></div></div> <div class="marquee-container svelte-1jvwvzs"><div class="marquee-content svelte-1jvwvzs"><div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-python text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Python</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TF" class="w-5 h-5 opacity-80 svelte-1jvwvzs"/> <span class="text-gray-200 svelte-1jvwvzs">TensorFlow</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-teal-400 font-bold svelte-1jvwvzs">Scikit-Learn</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-300 font-bold svelte-1jvwvzs">Pandas</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-sparkles text-yellow-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Google Gemini API</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-600 font-bold svelte-1jvwvzs">C++</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-microchip text-gray-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">ESP32-S3</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-js text-yellow-500 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Vanilla JS</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-css3-alt text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Tailwind CSS</span></div></div> <div class="marquee-content svelte-1jvwvzs" aria-hidden="true"><div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-python text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Python</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TF" class="w-5 h-5 opacity-80 svelte-1jvwvzs"/> <span class="text-gray-200 svelte-1jvwvzs">TensorFlow</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-teal-400 font-bold svelte-1jvwvzs">Scikit-Learn</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-300 font-bold svelte-1jvwvzs">Pandas</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-sparkles text-yellow-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Google Gemini API</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-600 font-bold svelte-1jvwvzs">C++</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-microchip text-gray-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">ESP32-S3</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-js text-yellow-500 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Vanilla JS</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-css3-alt text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Tailwind CSS</span></div></div></div></div></section>`);
}
function ProjectCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { project } = $$props;
    $$renderer2.push(`<div class="glass-card group cursor-pointer flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 relative border-t-2 border-transparent hover:border-t-neonCyan/60">`);
    if (project.status === "wip") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute top-4 right-4 z-10 px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-full backdrop-blur-md">🚧 WIP</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="h-40 w-full rounded-xl bg-gray-900 mb-4 overflow-hidden relative border border-white/5"><div class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10 group-hover:opacity-50 transition-opacity"></div> <div class="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform duration-700"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div></div> <h3 class="text-xl font-bold text-white mb-2 group-hover:text-neonCyan transition-colors">${escape_html(project.title)}</h3> <p class="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">${escape_html(project.shortDescription)}</p> <div class="flex flex-wrap gap-1.5 mt-auto"><!--[-->`);
    const each_array = ensure_array_like(project.tags.slice(0, 3));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:border-neonCyan/30 group-hover:text-neonCyan/80 transition-colors">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (project.tags.length > 3) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-[10px] font-medium px-2 py-0.5 rounded-full border border-transparent text-gray-500">+${escape_html(project.tags.length - 3)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function CertificateCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { certificate } = $$props;
    $$renderer2.push(`<div class="glass p-4 rounded-xl cursor-pointer hover:bg-white/10 hover:border-electricBlue/30 hover:shadow-[0_0_15px_rgba(79,172,254,0.15)] transition-all duration-300 flex items-center gap-4 group border-l-2 border-transparent hover:border-l-neonCyan/60"><div class="w-12 h-12 rounded-lg bg-gradient-to-br from-electricBlue/20 to-neonCyan/10 border border-electricBlue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-electricBlue"><path d="M22 8.08L22 15L12 21L2 15L2 8.08"></path><path d="M12 2L22 8.08L12 14.16L2 8.08z"></path></svg></div> <div class="overflow-hidden"><h3 class="text-white font-semibold text-sm truncate group-hover:text-electricBlue transition-colors">${escape_html(certificate.title)}</h3> <p class="text-gray-400 text-xs truncate">${escape_html(certificate.issuer)}</p></div> <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></div></div>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="mt-32 pt-10 pb-6 border-t border-white/10 relative overflow-hidden text-center z-10"><div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-neonCyan/50 to-transparent"></div> <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">Let's build something <span class="text-gradient hover:animate-pulse cursor-default">impactful</span> together.</h2> <div class="flex justify-center gap-6 mb-12"><a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="p-3 rounded-full glass hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> <a href="https://github.com" target="_blank" aria-label="GitHub" class="p-3 rounded-full glass hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> <a href="mailto:rajif@example.com" aria-label="Email" class="p-3 rounded-full glass hover:border-neonCyan hover:text-neonCyan hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></div> <p class="text-sm text-gray-500">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Rajif. Built with SvelteKit &amp; Tailwind css.</p></footer>`);
  });
}
function Modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      isOpen = false,
      title,
      description,
      image,
      tags = [],
      link = "",
      type = "project"
    } = $$props;
    if (isOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm"><div class="glass-card w-full max-w-2xl relative overflow-hidden"><button class="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 hover:bg-neonCyan/20 text-white/90 hover:text-neonCyan transition-all border border-white/10 hover:border-neonCyan/50" aria-label="Close modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button> <div class="w-full h-64 bg-gray-900 rounded-xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center group"><div class="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent z-10"></div> `);
      if (image) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", image)}${attr("alt", title)} class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="text-neonCyan/50 flex flex-col items-center gap-2 z-0"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> <span class="text-sm font-medium tracking-wider">${escape_html(type === "project" ? "PROJECT PREVIEW" : "CERTIFICATE")}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="space-y-4"><h3 class="text-2xl font-bold text-white">${escape_html(title)}</h3> <p class="text-gray-300 leading-relaxed text-sm md:text-base">${escape_html(description)}</p> `);
      if (tags.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex flex-wrap gap-2 pt-2"><!--[-->`);
        const each_array = ensure_array_like(tags);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let tag = each_array[$$index];
          $$renderer2.push(`<span class="px-2 py-1 text-xs font-medium text-electricBlue bg-electricBlue/10 border border-electricBlue/20 rounded-md">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="pt-6 flex justify-end gap-3">`);
      if (link) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", link)} target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-lg bg-neonCyan text-obsidian font-semibold hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all flex items-center gap-2">`);
        if (type === "project") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> GitHub / Demo`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Verify Credential`);
        }
        $$renderer2.push(`<!--]--></a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { isOpen });
  });
}
function _page($$renderer) {
  const projects = [
    {
      id: 1,
      title: "Stellar AI",
      shortDescription: "End-to-end GenAI assistant integrating ESP32-S3 hardware for edge computing.",
      description: "Stellar AI is a comprehensive edge computing solution that brings Generative AI capabilities directly to hardware. By utilizing an ESP32-S3 microcontroller, this system bypasses heavy cloud-compute latency for specific offline tasks while intelligently routing complex queries to the cloud. Designed with energy efficiency and real-time response in mind.",
      tags: ["ESP32-S3", "GenAI", "C++", "Python", "Edge Computing"],
      image: "",
      link: "https://github.com",
      status: "wip"
    },
    {
      id: 2,
      title: "Daurama",
      shortDescription: "Computer vision web app using Gemini API with gamification for sustainable waste management.",
      description: "Daurama introduces a gamified approach to waste sorting and recycling. Leveraging the Gemini API for advanced computer vision analysis, users can scan waste items to identify correct recycling categories. The platform rewards sustainable actions with points that can be redeemed for eco-friendly products, helping communities build better habits.",
      tags: ["SvelteKit", "Gemini API", "Tailwind CSS", "Computer Vision"],
      image: "",
      link: "https://github.com",
      status: "completed"
    },
    {
      id: 3,
      title: "Vye YouTube RAG",
      shortDescription: "Intelligent Q&A system synthesizing knowledge from YouTube videos using RAG architecture.",
      description: "Vye is a Retrieval-Augmented Generation (RAG) system built to extract, summarize, and query information directly from YouTube video transcripts. Users can paste a URL and immediately converse with the content of the video, saving hours of watch time. Built with a vector database for semantic search.",
      tags: ["Python", "LangChain", "Vector DB", "RAG", "OpenAI"],
      image: "",
      link: "https://github.com",
      status: "completed"
    },
    {
      id: 4,
      title: "NVIDIA Stock Prediction",
      shortDescription: "Predictive analytics model forecasting stock movements using Linear Regression.",
      description: "A data science pipeline focused on predicting NVIDIA's stock price fluctuations. The project involves extensive exploratory data analysis (EDA), feature engineering (moving averages, RSI, MACD), and training a Linear Regression model. Includes an interactive dashboard to visualize predictions against actual historical data.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      image: "",
      link: "https://github.com",
      status: "completed"
    }
  ];
  const certificates = [
    {
      id: 1,
      title: "IBM AI Foundations",
      issuer: "IBM SkillsBuild",
      description: "Comprehensive understanding of Artificial Intelligence concepts, machine learning fundamentals, and AI ethics. Certified by IBM.",
      image: "",
      link: "https://credly.com"
    },
    {
      id: 2,
      title: "Machine Learning applied to Business",
      issuer: "Dicoding",
      description: "Practical implementation of Machine Learning algorithms to solve real-world business problems and predictive analytics.",
      image: "",
      link: "https://dicoding.com"
    },
    {
      id: 3,
      title: "Google Cloud Computing Foundations",
      issuer: "Google Cloud",
      description: "Core infrastructure, big data, and machine learning on Google Cloud Platform. Demonstrated capability in cloud architecture.",
      image: "",
      link: "https://cloud.google.com"
    }
  ];
  let isModalOpen = false;
  let modalContent = {
    title: "",
    description: "",
    image: "",
    tags: [],
    link: "",
    type: "project"
  };
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Rajif | AI Engineer &amp; Developer</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Personal tech portfolio of Rajif, showcasing AI engineering, Generative AI, and full-stack development projects."/>`);
    });
    Hero($$renderer2);
    $$renderer2.push(`<!----> `);
    AboutMe($$renderer2);
    $$renderer2.push(`<!----> `);
    Timeline($$renderer2);
    $$renderer2.push(`<!----> `);
    TechStack($$renderer2);
    $$renderer2.push(`<!----> <section id="projects" class="py-20"><div class="flex items-center gap-4 mb-12"><h2 class="text-3xl font-bold text-white">Featured Projects</h2> <div class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      ProjectCard($$renderer2, { project });
    }
    $$renderer2.push(`<!--]--></div></section> <section id="certificates" class="py-20"><div class="flex items-center gap-4 mb-12"><h2 class="text-3xl font-bold text-white">Verified Credentials</h2> <div class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
    const each_array_1 = ensure_array_like(certificates);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let cert = each_array_1[$$index_1];
      CertificateCard($$renderer2, { certificate: cert });
    }
    $$renderer2.push(`<!--]--></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      title: modalContent.title,
      description: modalContent.description,
      image: modalContent.image,
      tags: modalContent.tags,
      link: modalContent.link,
      type: modalContent.type,
      get isOpen() {
        return isModalOpen;
      },
      set isOpen($$value) {
        isModalOpen = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
export {
  _page as default
};
