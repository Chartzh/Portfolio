<script lang="ts">
    import { onMount } from "svelte";
    import { inView } from "$lib/actions/inView";

    const roles = [
        "AI Engineer Trainee",
        "Gen AI Developer",
        "Data Science Explorer",
        "Edge Computing Innovator",
    ];

    let currentRoleIndex = $state(0);
    let displayedText = $state("");
    let isDeleting = $state(false);
    let typingSpeed = $state(100);
    let isIntersecting = $state(true); // Default to true so it starts

    onMount(() => {
        let timeoutId: number;

        const type = () => {
            if (!isIntersecting) {
                // If not visible, just check again later without doing work
                timeoutId = setTimeout(type, 500);
                return;
            }

            const currentFullRole = roles[currentRoleIndex];

            if (isDeleting) {
                displayedText = currentFullRole.substring(
                    0,
                    displayedText.length - 1,
                );
                typingSpeed = 50; // Delete faster
            } else {
                displayedText = currentFullRole.substring(
                    0,
                    displayedText.length + 1,
                );
                typingSpeed = 100;
            }

            if (!isDeleting && displayedText === currentFullRole) {
                // Pause before deleting
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && displayedText === "") {
                // Move to next word
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typingSpeed = 500; // Pause before typing new word
            }

            timeoutId = setTimeout(type, typingSpeed);
        };

        timeoutId = setTimeout(type, typingSpeed);

        // Set up Intersection Observer to pause animation when off-screen
        const section = document.getElementById("home");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isIntersecting = entry.isIntersecting;
                });
            },
            { threshold: 0.1 },
        );

        if (section) observer.observe(section);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    });
</script>

<section
    id="home"
    class="min-h-[70vh] flex flex-col justify-center items-start pt-20 pb-10"
    use:inView={{ y: 50, duration: 1000 }}
>
    <div class="space-y-6 max-w-4xl w-full">
        <div
            class="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neonCyan/30 bg-neonCyan/5 text-neonCyan text-xs sm:text-sm font-medium tracking-wide"
        >
            <span class="w-2 h-2 rounded-full bg-neonCyan animate-pulse"></span>
            <span>Available for Opportunities</span>
        </div>

        <h1
            class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight min-h-[3em] sm:min-h-[2.5em] md:min-h-0"
        >
            Hi, I'm Rajif. <br />
            <span
                class="text-gradient block mt-2 whitespace-normal break-words h-[1.2em] text-2xl sm:text-3xl md:text-4xl"
            >
                {displayedText}<span
                    class="animate-[pulse_1s_infinite] opacity-100 font-normal"
                    >|</span
                >
            </span>
        </h1>

        <p
            class="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mt-4 sm:mt-6"
        >
            Building scalable AI solutions and bridging the gap between complex
            algorithms and real-world impact.
        </p>

        <div
            class="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 w-full sm:w-auto"
        >
            <a
                href="#projects"
                class="px-6 py-3 rounded-lg bg-neonCyan text-obsidian font-semibold hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
                View Projects
            </a>
            <a
                href="mailto:rajifraditia@gmail.com"
                class="px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 text-center"
            >
                Contact Me
            </a>
        </div>
    </div>
</section>
