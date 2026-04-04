<script lang="ts">
    import { inView } from "$lib/actions/inView";

    const experiences = [
        {
            year: "2026 - Present",
            title: "Google Student Ambassador",
            company: "Google",
            description:
                "Representing UIN Jakarta to empower the student community by bridging the gap between academics and Google's ecosystem, focusing on AI, Machine Learning, and Google Cloud.",
        },
        {
            year: "2026 - Present",
            title: "AI/ML Mentor",
            company: "GDGoC UIN Jakarta",
            description:
                "Mentoring students in artificial intelligence and machine learning fundamentals.",
        },
        {
            year: "2026 - Present",
            title: "AI Engineer Trainee",
            company: "PIJAK (IBM SkillsBuild x Dicoding)",
            description:
                "Intensive training program focusing on AI engineering principles and IBM technologies.",
        },
        {
            year: "2026 - Present",
            title: "Data Science Mentor",
            company: "HitLab",
            description:
                "Guiding learners through data science projects and methodologies.",
        },
        {
            year: "2023 - Present",
            title: "Information Systems Undergraduate",
            company: "UIN Syarif Hidayatullah Jakarta",
            description:
                "Pursuing bachelor's degree with focus on information systems and algorithms.",
        },
    ];
</script>

<section id="experience" class="py-20" use:inView={{ y: 50, duration: 800 }}>
    <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-bold text-white">Experience & Journey</h2>
        <div
            class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"
        ></div>
    </div>

    <div class="relative pl-8 md:pl-0 max-w-4xl mx-auto">
        <!-- Glowing Line -->
        <div
            class="absolute left-8 md:left-1/2 md:-ml-px top-2 bottom-2 w-[2px] bg-white/10 shadow-[0_0_10px_rgba(0,242,254,0.3)]"
        ></div>

        <div class="space-y-12">
            {#each experiences as exp, i}
                <div
                    class="relative flex flex-col md:flex-row {i % 2 === 0
                        ? 'md:flex-row-reverse'
                        : ''} group"
                >
                    <!-- Timeline Node -->
                    <div
                        class="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-obsidian border-2 border-neonCyan shadow-[0_0_10px_rgba(0,242,254,0.8)] mt-2 md:mt-0 transition-transform duration-300 group-hover:scale-150 group-hover:bg-neonCyan"
                    ></div>

                    <!-- Content Panel -->
                    <div
                        class="w-full md:w-1/2 pl-8 md:pl-0 {i % 2 === 0
                            ? 'md:pl-12'
                            : 'md:pr-12 text-left md:text-right'}"
                    >
                        <div
                            class="glass-card hover:-translate-y-1 transition-transform duration-300 relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-neonCyan/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:rounded-2xl {i %
                                2 !==
                            0
                                ? 'before:bg-gradient-to-l'
                                : ''}"
                        >
                            <span
                                class="inline-block px-3 py-1 bg-white/10 text-neonCyan text-sm font-semibold rounded-full mb-3 backdrop-blur-md"
                            >
                                {exp.year}
                            </span>
                            <h3 class="text-xl font-bold text-white">
                                {exp.title}
                            </h3>
                            <h4 class="text-lg text-electricBlue mb-3">
                                {exp.company}
                            </h4>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
