import { c as escape_html, e as ensure_array_like, a as attr_class, s as stringify, a3 as head, b as attr, a4 as bind_props, a2 as derived } from "../../chunks/index.js";
import "clsx";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let displayedText = "";
    $$renderer2.push(`<section id="home" class="min-h-[70vh] flex flex-col justify-center items-start pt-20 pb-10"><div class="space-y-6 max-w-4xl w-full"><div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neonCyan/30 bg-neonCyan/5 text-neonCyan text-xs sm:text-sm font-medium tracking-wide"><span class="w-2 h-2 rounded-full bg-neonCyan animate-pulse"></span> <span>Available for Opportunities</span></div> <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight min-h-[3em] sm:min-h-[2.5em] md:min-h-0">Hi, I'm Rajif. <br/> <span class="text-gradient block mt-2 whitespace-normal break-words h-[1.2em] text-2xl sm:text-3xl md:text-4xl">${escape_html(displayedText)}<span class="animate-[pulse_1s_infinite] opacity-100 font-normal">|</span></span></h1> <p class="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mt-4 sm:mt-6">Building scalable AI solutions and bridging the gap between complex
            algorithms and real-world impact.</p> <div class="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 w-full sm:w-auto"><a href="#projects" class="px-6 py-3 rounded-lg bg-neonCyan text-obsidian font-semibold hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-center">View Projects</a> <a href="mailto:rajifraditia@gmail.com" class="px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 text-center">Contact Me</a></div></div></section>`);
  });
}
function AboutMe($$renderer) {
  $$renderer.push(`<section id="about" class="py-20"><div class="glass-card flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group"><div class="absolute -top-32 -right-32 w-64 h-64 bg-neonCyan/10 blur-[80px] rounded-full group-hover:bg-neonCyan/20 transition-all duration-500"></div> <div class="w-full md:w-1/3 flex justify-center"><div class="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-neonCyan/30 p-1 relative"><div class="absolute inset-0 rounded-full border border-electricBlue/20 animate-[spin_10s_linear_infinite]"></div> <div class="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center"><img src="src/lib/assets/project/About_me/Profile_picture.webp" alt="Profile" class="w-full h-full object-cover rounded-full"/></div></div></div> <div class="w-full md:w-2/3 space-y-6 relative z-10"><div class="flex items-center gap-4"><h2 class="text-3xl font-bold text-white">About Me</h2> <div class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"></div></div> <p class="text-gray-300 leading-relaxed text-lg">I am an <span class="text-white font-semibold">Information Systems undergraduate</span> at UIN Jakarta, passionate about building scalable AI solutions
                and bridging the gap between complex algorithms and real-world impact.</p> <p class="text-gray-400 leading-relaxed">My journey in tech is driven by an insatiable curiosity for how
                intelligent systems can solve meaningful problems. Currently
                focusing on Generative AI, edge computing implementations, and
                data science pipelines.</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"><!--[-->`);
  const each_array = ensure_array_like([
    { label: "Experience", value: "1+ Years" },
    { label: "Projects", value: "4" },
    { label: "Certifications", value: "15+" },
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
      year: "2026 - Present",
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
  $$renderer.push(`<section id="skills" class="py-24 px-6 relative border-y border-white/5 svelte-1jvwvzs"><div class="max-w-7xl mx-auto svelte-1jvwvzs"><div class="text-center mb-16 svelte-1jvwvzs"><h2 class="text-3xl md:text-4xl font-bold text-white mb-2 svelte-1jvwvzs">Tech Stack</h2> <div class="w-16 h-1 bg-teal-400 mx-auto rounded svelte-1jvwvzs"></div></div> <div class="marquee-container svelte-1jvwvzs"><div class="marquee-content svelte-1jvwvzs"><div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-python text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Python</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TF" class="w-5 h-5 opacity-80 svelte-1jvwvzs"/> <span class="text-gray-200 svelte-1jvwvzs">TensorFlow</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-teal-400 font-bold svelte-1jvwvzs">Scikit-Learn</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-300 font-bold svelte-1jvwvzs">Pandas</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-sparkles text-yellow-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Google Gemini API</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-600 font-bold svelte-1jvwvzs">C++</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-microchip text-gray-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">ESP32-S3</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-js text-yellow-500 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Vanilla JS</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-css3-alt text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Tailwind CSS</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-white font-bold svelte-1jvwvzs">Streamlit</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-database text-blue-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">BigQuery</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-network-wired text-purple-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">ETL</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-brain text-pink-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Prompt Engineering</span></div></div> <div class="marquee-content svelte-1jvwvzs" aria-hidden="true"><div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-python text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Python</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TF" class="w-5 h-5 opacity-80 svelte-1jvwvzs"/> <span class="text-gray-200 svelte-1jvwvzs">TensorFlow</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-teal-400 font-bold svelte-1jvwvzs">Scikit-Learn</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-300 font-bold svelte-1jvwvzs">Pandas</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-sparkles text-yellow-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Google Gemini API</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-blue-600 font-bold svelte-1jvwvzs">C++</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-microchip text-gray-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">ESP32-S3</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-js text-yellow-500 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Vanilla JS</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fab fa-css3-alt text-blue-400 text-xl svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Tailwind CSS</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><span class="text-white font-bold svelte-1jvwvzs">Streamlit</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-database text-blue-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">BigQuery</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-network-wired text-purple-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">ETL</span></div> <div class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors svelte-1jvwvzs"><i class="fas fa-brain text-pink-400 svelte-1jvwvzs"></i> <span class="text-gray-200 svelte-1jvwvzs">Prompt Engineering</span></div></div></div></div></section>`);
}
function ProjectCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { project } = $$props;
    $$renderer2.push(`<div class="glass-card group cursor-pointer flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 relative border-t-2 border-transparent hover:border-t-neonCyan/60">`);
    if (project.status === "wip") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute top-4 right-4 z-10 px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-full backdrop-blur-md">Work In Progress</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="h-40 w-full rounded-xl bg-gray-900 mb-4 overflow-hidden relative border border-white/5"><div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent z-10 group-hover:opacity-50 transition-opacity"></div> `);
    if (project.image || project.images && project.images.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", project.image || project.images[0])}${attr("alt", project.title)} class="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform duration-700 z-0"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>`);
    }
    $$renderer2.push(`<!--]--></div> <h3 class="text-lg font-bold text-white mb-2 group-hover:text-neonCyan transition-colors">${escape_html(project.title)}</h3> <p class="text-gray-400 text-xs line-clamp-3 mb-4 flex-grow">${escape_html(project.shortDescription)}</p> <div class="flex flex-wrap gap-1.5 mt-auto"><!--[-->`);
    const each_array = ensure_array_like(project.tags.slice(0, 3));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="text-xs font-medium px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:border-neonCyan/30 group-hover:text-neonCyan/80 transition-colors">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (project.tags.length > 3) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-xs font-medium px-2 py-0.5 rounded-full border border-transparent text-gray-500">+${escape_html(project.tags.length - 3)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function CertificateCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { certificate, onOpen = void 0, featured = false } = $$props;
    $$renderer2.push(`<div${attr_class(`${stringify(featured ? "glass p-5 border-l-2 border-transparent hover:border-electricBlue/30 hover:shadow-[0_0_15px_rgba(79,172,254,0.15)] hover:border-l-neonCyan/60 ring-1 ring-neonCyan/30 shadow-[0_0_20px_rgba(0,242,254,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-neonCyan/5 before:to-transparent before:pointer-events-none" : "bg-obsidian border border-white/5 p-4 hover:bg-white/5 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]")} rounded-xl ${stringify(onOpen ? "cursor-pointer" : "cursor-default")} min-h-[120px] transition-all duration-300 flex flex-col gap-3 group relative overflow-hidden`)}>`);
    if (featured) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute top-0 right-0 w-32 h-32 bg-neonCyan/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex items-start gap-4 w-full relative z-10"><div${attr_class(`w-12 h-12 rounded-lg bg-gradient-to-br from-electricBlue/20 to-neonCyan/10 border border-electricBlue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${stringify(featured ? "shadow-[0_0_15px_rgba(0,242,254,0.2)]" : "")}`)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${attr_class(`text-electricBlue ${stringify(featured ? "text-neonCyan" : "")}`)}><path d="M22 8.08L22 15L12 21L2 15L2 8.08"></path><path d="M12 2L22 8.08L12 14.16L2 8.08z"></path></svg></div> <div class="overflow-hidden flex-grow pt-1"><h3 class="text-white font-semibold text-sm sm:text-base group-hover:text-electricBlue transition-colors leading-tight line-clamp-2"${attr("title", certificate.title)}>${escape_html(certificate.title)}</h3> <p class="text-gray-400 text-xs sm:text-sm mt-1.5 truncate">${escape_html(certificate.issuer)}</p></div> <div class="ml-auto flex flex-col items-end gap-2 flex-shrink-0">`);
    if (certificate.category) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 whitespace-nowrap">${escape_html(certificate.category)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (onOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(`opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 ${stringify(certificate.category ? "" : "mt-2")}`)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (certificate.credentialId || certificate.issuedDate) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="pt-3 border-t border-white/5 flex flex-col gap-1 w-full text-xs text-gray-500 relative z-10 mt-auto">`);
      if (certificate.issuedDate) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex justify-between items-center w-full"><span class="opacity-60">Issued:</span> <span class="text-gray-300 font-medium">${escape_html(certificate.issuedDate)}</span></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (certificate.credentialId) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex justify-between items-center w-full"><span class="opacity-60">Credential ID:</span> <span class="text-gray-400 font-mono truncate max-w-[150px] sm:max-w-[180px]"${attr("title", certificate.credentialId)}>${escape_html(certificate.credentialId)}</span></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function InteractiveBadgeCard($$renderer) {
  $$renderer.push(`<div class="glass p-5 rounded-xl cursor-pointer hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col gap-4 group border-l-2 border-transparent hover:border-l-blue-400/60 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div> <div class="flex items-start gap-4 w-full relative z-10"><div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-300/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.1)]"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" class="text-blue-400"><path d="M4 14.5L12 19L20 14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 9.5L12 14L20 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5L4 9.5L12 14L20 9.5L12 5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> <div class="overflow-hidden flex-grow pt-1 text-left"><h3 class="text-white font-semibold text-sm sm:text-base group-hover:text-blue-400 transition-colors leading-tight">Google Cloud Infrastructure Suite</h3> <p class="text-gray-400 text-xs sm:text-sm mt-1.5 truncate">Specialized Skill Matrix</p></div> <div${attr_class(`ml-auto transition-transform duration-300 mt-2 ${stringify("rotate-0 text-gray-400")}`)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></div></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
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
      images = [],
      tags = [],
      link = "",
      type = "project"
    } = $$props;
    let displayImages = derived(() => images && images.length > 0 ? images : image ? [image] : []);
    let currentImageIndex = 0;
    if (isOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm"><div class="glass-card w-full max-w-2xl relative flex flex-col max-h-[85vh] mt-20 !p-0 overflow-hidden"><div class="absolute top-4 right-4 z-[60]"><button class="p-2 rounded-full bg-black/60 hover:bg-neonCyan/20 text-white/90 hover:text-neonCyan transition-all border border-white/10 hover:border-neonCyan/50 backdrop-blur-md" aria-label="Close modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div> <div class="overflow-y-auto w-full flex-col custom-scrollbar p-6"><div class="w-full aspect-video bg-gray-900 rounded-xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center group" role="region" aria-label="Image gallery"><div class="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent z-20 pointer-events-none"></div> `);
      if (displayImages().length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<!--[-->`);
        const each_array = ensure_array_like(displayImages());
        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
          let img = each_array[i];
          $$renderer2.push(`<div${attr_class(`absolute inset-0 transition-opacity duration-500 ${stringify(i === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0")}`)}><img${attr("src", img)} alt="" class="absolute inset-0 w-full h-full object-cover opacity-40 blur-xl scale-110 group-hover:opacity-60 transition-opacity duration-500"/> <img${attr("src", img)}${attr("alt", title)} class="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"/></div>`);
        }
        $$renderer2.push(`<!--]--> `);
        if (displayImages().length > 1) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button class="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/50 hover:bg-neonCyan/40 text-white transition-colors border border-white/10 opacity-0 group-hover:opacity-100 backdrop-blur-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg></button> <button class="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/50 hover:bg-neonCyan/40 text-white transition-colors border border-white/10 opacity-0 group-hover:opacity-100 backdrop-blur-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button> <div class="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5"><!--[-->`);
          const each_array_1 = ensure_array_like(displayImages());
          for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
            each_array_1[i];
            $$renderer2.push(`<button${attr_class(`h-1.5 rounded-full transition-all ${stringify(i === currentImageIndex ? "bg-neonCyan w-6" : "bg-white/40 hover:bg-white/80 w-1.5")}`)}${attr("aria-label", `Go to image ${stringify(i + 1)}`)}></button>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="text-neonCyan/50 flex flex-col items-center gap-2 z-0"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> <span class="text-sm font-medium tracking-wider">${escape_html(type === "project" ? "PROJECT PREVIEW" : "CERTIFICATE")}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="space-y-4"><h3 class="text-xl md:text-2xl font-bold text-white">${escape_html(title)}</h3> <p class="text-gray-300 leading-relaxed text-sm">${escape_html(description)}</p> `);
      if (tags.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex flex-wrap gap-2 pt-2"><!--[-->`);
        const each_array_2 = ensure_array_like(tags);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let tag = each_array_2[$$index_2];
          $$renderer2.push(`<span class="px-2 py-1 text-[11px] md:text-xs font-medium text-electricBlue bg-electricBlue/10 border border-electricBlue/20 rounded-md">${escape_html(tag)}</span>`);
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
      $$renderer2.push(`<!--]--></div></div></div></div></div>`);
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
      title: "Astro AI",
      shortDescription: "End-to-end GenAI assistant integrating ESP32-S3 hardware for edge computing.",
      description: "Astro AI is a comprehensive edge computing solution that brings Generative AI capabilities directly to hardware. By utilizing an ESP32-S3 microcontroller, this system bypasses heavy cloud-compute latency for specific offline tasks while intelligently routing complex queries to the cloud. Designed with energy efficiency and real-time response in mind.",
      tags: ["ESP32-S3", "GenAI", "C++", "Python", "Edge Computing"],
      image: "",
      images: [
        "src/lib/assets/project/Astro/Astro_logo.webp",
        "src/lib/assets/project/Astro/1.webp",
        "src/lib/assets/project/Astro/2.webp",
        "src/lib/assets/project/Astro/3.webp",
        "src/lib/assets/project/Astro/4.webp"
      ],
      link: "",
      status: "wip"
    },
    {
      id: 2,
      title: "Vye YouTube RAG",
      shortDescription: "Intelligent Q&A system synthesizing knowledge from YouTube videos using RAG architecture.",
      description: "Vye is a Retrieval-Augmented Generation (RAG) system built to extract, summarize, and query information directly from YouTube video transcripts. Users can paste a URL and immediately converse with the content of the video, saving hours of watch time. Built with a vector database for semantic search.",
      tags: ["Python", "LangChain", "Vector DB", "RAG", "OpenAI"],
      image: "",
      images: [
        "src/lib/assets/project/Vye/1.webp",
        "src/lib/assets/project/Vye/2.webp",
        "src/lib/assets/project/Vye/3.webp",
        "src/lib/assets/project/Vye/4.webp",
        "src/lib/assets/project/Vye/5.webp",
        "src/lib/assets/project/Vye/6.webp",
        "src/lib/assets/project/Vye/7.webp",
        "src/lib/assets/project/Vye/8.webp",
        "src/lib/assets/project/Vye/9.webp"
      ],
      link: "https://github.com/Chartzh/Vye",
      status: "completed"
    },
    {
      id: 3,
      title: "Daurama",
      shortDescription: "Computer vision web app using Gemini API with gamification for sustainable waste management.",
      description: "Daurama introduces a gamified approach to waste sorting and recycling. Leveraging the Gemini API for advanced computer vision analysis, users can scan waste items to identify correct recycling categories. The platform rewards sustainable actions with points that can be redeemed for eco-friendly products, helping communities build better habits.",
      tags: ["SvelteKit", "Gemini API", "Tailwind CSS", "Computer Vision"],
      image: "",
      images: [
        "src/lib/assets/project/Daurama/1.webp",
        "src/lib/assets/project/Daurama/2.webp",
        "src/lib/assets/project/Daurama/3.webp",
        "src/lib/assets/project/Daurama/4.webp",
        "src/lib/assets/project/Daurama/5.webp",
        "src/lib/assets/project/Daurama/6.webp",
        "src/lib/assets/project/Daurama/7.webp",
        "src/lib/assets/project/Daurama/8.webp",
        "src/lib/assets/project/Daurama/9.webp",
        "src/lib/assets/project/Daurama/10.webp"
      ],
      link: "https://github.com/chartzh/daurama",
      status: "completed"
    },
    {
      id: 4,
      title: "NVIDIA Stock Prediction",
      shortDescription: "Predictive analytics model forecasting stock movements using Linear Regression.",
      description: "A data science pipeline focused on predicting NVIDIA's stock price fluctuations. The project involves extensive exploratory data analysis (EDA), feature engineering (moving averages, RSI, MACD), and training a Linear Regression model. Includes an interactive dashboard to visualize predictions against actual historical data.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      image: "",
      images: [
        "src/lib/assets/project/Nvidia/1.webp",
        "src/lib/assets/project/Nvidia/2.webp",
        "src/lib/assets/project/Nvidia/3.webp",
        "src/lib/assets/project/Nvidia/4.webp",
        "src/lib/assets/project/Nvidia/5.webp",
        "src/lib/assets/project/Nvidia/6.webp",
        "src/lib/assets/project/Nvidia/7.webp",
        "src/lib/assets/project/Nvidia/8.webp",
        "src/lib/assets/project/Nvidia/9.webp",
        "src/lib/assets/project/Nvidia/10.webp"
      ],
      link: "https://github.com/Chartzh/NVIDIA-NVDA-Stock-Price-Prediction",
      status: "completed"
    }
  ];
  const featuredCertificates = [
    {
      id: 1,
      title: "IBM Granite: Code Generation & Optimization",
      issuer: "IBM",
      description: "Advanced optimization and code generation techniques using the IBM Granite model. Demonstrated applied knowledge in creating efficient GenAI-driven code tools.",
      image: "src/lib/assets/certificate/ibm_granite_code_generation.webp",
      link: "https://www.credly.com/badges/ab73f6c2-ae61-4447-baf1-a336bbe9fc40/linked_in_profile",
      credentialId: "-",
      issuedDate: "Sep 2025",
      featured: true
    },
    {
      id: 2,
      title: "Google Cloud: Develop GenAI Apps with Gemini & Streamlit",
      issuer: "Google Cloud",
      description: "Built end-to-end Generative AI applications integrating the Gemini API with Streamlit interfaces. Topics included RAG, semantic search, and prompt engineering.",
      image: "src/lib/assets/certificate/develop_gen_ai_gcsb.webp",
      link: "https://www.skills.google/public_profiles/865d3d78-33f6-4ef3-abfd-04d9ad08ddc6/badges/17765098",
      credentialId: "17765098",
      issuedDate: "Aug 2025",
      featured: true
    },
    {
      id: 3,
      title: "Oracle: Database Programming with SQL",
      issuer: "Oracle",
      description: "Comprehensive database design and SQL programming, including complex queries, ETL concepts, and highly efficient schema structuring.",
      image: "src/lib/assets/certificate/database_programming_sql.webp",
      link: "https://www.linkedin.com/in/rajifraditya/details/certifications/1770273681189/single-media-viewer/?profileId=ACoAAE79HpYBViMoBnFtPVORzeeYKx7-A83c6B0",
      credentialId: "-",
      issuedDate: "Dec 2025",
      featured: true
    }
  ];
  const foundationCertificates = [
    {
      id: 4,
      title: "Python & Data Visualization",
      issuer: "Dicoding Indonesia",
      category: "Data Science",
      issuedDate: "Apr 2025"
    },
    {
      id: 5,
      title: "AI/ML Weekly Class",
      issuer: "GDGoC UIN Jakarta",
      category: "Artificial Intelligence",
      issuedDate: "Jan 2025"
    },
    {
      id: 6,
      title: "UI/UX Weekly Class",
      issuer: "GDGoC UIN Jakarta",
      category: "Product Design",
      issuedDate: "Dec 2024"
    },
    {
      id: 7,
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      category: "Web Development",
      issuedDate: "Oct 2024"
    },
    {
      id: 8,
      title: "Web Development Class",
      issuer: "HITLAB",
      category: "Web Development",
      issuedDate: "Oct 2024"
    },
    {
      id: 9,
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      category: "Artificial Intelligence",
      issuedDate: "Apr 2025"
    }
  ];
  let isModalOpen = false;
  let modalContent = {
    title: "",
    description: "",
    image: "",
    images: [],
    tags: [],
    link: "",
    type: "project"
  };
  function openCertificateModal(cert) {
    modalContent = {
      title: cert.title,
      description: cert.description,
      image: cert.image,
      images: [],
      tags: [],
      link: cert.link,
      type: "certificate"
    };
    isModalOpen = true;
  }
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
    $$renderer2.push(`<!--]--></div></section> <section id="certificates" class="py-20"><div class="flex items-center gap-4 mb-12"><h2 class="text-3xl font-bold text-white">Verified Credentials</h2> <div class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"></div></div> <div class="mb-8"><h3 class="text-xl font-semibold text-neonCyan mb-6 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg> Featured Certifications</h3> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array_1 = ensure_array_like(featuredCertificates);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let cert = each_array_1[$$index_1];
      CertificateCard($$renderer2, {
        certificate: cert,
        onOpen: openCertificateModal,
        featured: cert.featured
      });
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex flex-col gap-12"><div class="w-full"><h3 class="text-lg font-medium text-white/80 mb-4 ml-1">Infrastructure Suite</h3> `);
    InteractiveBadgeCard($$renderer2);
    $$renderer2.push(`<!----></div> <div class="w-full"><h3 class="text-lg font-medium text-white/80 mb-4 ml-1">Engineering Foundations</h3> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
    const each_array_2 = ensure_array_like(foundationCertificates);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let cert = each_array_2[$$index_2];
      CertificateCard($$renderer2, { certificate: cert });
    }
    $$renderer2.push(`<!--]--></div></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      title: modalContent.title,
      description: modalContent.description,
      image: modalContent.image,
      images: modalContent.images,
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
