<script lang="ts">
    import { inView } from "$lib/actions/inView";
</script>

<section id="about" class="py-20" use:inView={{ y: 50, duration: 800 }}>
    <div
        class="glass-card flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group"
    >
        <!-- Ambient glow inside card -->
        <div
            class="absolute -top-32 -right-32 w-64 h-64 bg-neonCyan/10 blur-[80px] rounded-full group-hover:bg-neonCyan/20 transition-all duration-500"
        ></div>

        <div class="w-full md:w-1/3 flex justify-center">
            <div
                class="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-neonCyan/30 p-1 relative"
            >
                <div
                    class="absolute inset-0 rounded-full border border-electricBlue/20 animate-[spin_10s_linear_infinite]"
                ></div>
                <div
                    class="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center"
                >
                    <span class="text-gray-500 text-4xl">Image</span>
                </div>
            </div>
        </div>

        <div class="w-full md:w-2/3 space-y-6 relative z-10">
            <div class="flex items-center gap-4">
                <h2 class="text-3xl font-bold text-white">About Me</h2>
                <div
                    class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"
                ></div>
            </div>

            <p class="text-gray-300 leading-relaxed text-lg">
                I am an <span class="text-white font-semibold"
                    >Information Systems undergraduate</span
                > at UIN Jakarta, passionate about building scalable AI solutions
                and bridging the gap between complex algorithms and real-world impact.
            </p>

            <p class="text-gray-400 leading-relaxed">
                My journey in tech is driven by an insatiable curiosity for how
                intelligent systems can solve meaningful problems. Currently
                focusing on Generative AI, edge computing implementations, and
                data science pipelines.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {#each [{ label: "Experience", value: "2+ Years" }, { label: "Projects", value: "15+" }, { label: "Certifications", value: "5+" }, { label: "Mentorship", value: "2 Orgs" }] as stat}
                    <div
                        class="bg-white/5 border border-white/5 rounded-lg p-3 text-center transition-colors hover:bg-white/10 hover:border-neonCyan/30"
                    >
                        <div class="text-xl font-bold text-neonCyan">
                            {stat.value}
                        </div>
                        <div
                            class="text-xs text-gray-400 uppercase tracking-wider mt-1"
                        >
                            {stat.label}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
