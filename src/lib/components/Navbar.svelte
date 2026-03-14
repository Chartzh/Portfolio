<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    let isScrolled = $state(false);
    let activeSection = $state("home");
    let isMobileMenuOpen = $state(false);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "certificates", label: "Certificates" },
    ];

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;

            // Simple intersection observer logic for active state
            const sections = navLinks.map((link) =>
                document.getElementById(link.id),
            );

            let current = "home";
            sections.forEach((section) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollY >= sectionTop - 150) {
                        current = section.getAttribute("id") || "home";
                    }
                }
            });
            activeSection = current;
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
        ? 'py-4 glass border-b border-white/10 shadow-lg shadow-black/20'
        : 'py-6 bg-transparent'}"
>
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" class="text-2xl font-bold tracking-tighter text-white">
            &lt;<span class="text-neonCyan">rajif</span> /&gt;
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
            {#each navLinks as link}
                <a
                    href="#{link.id}"
                    class="text-sm font-medium transition-colors duration-300 hover:text-neonCyan {activeSection ===
                    link.id
                        ? 'text-neonCyan'
                        : 'text-gray-400'}"
                >
                    {link.label}
                </a>
            {/each}
        </div>

        <a
            href="mailto:rajifraditia@gmail.com"
            class="hidden md:inline-block px-5 py-2 rounded-full border border-neonCyan/30 text-neonCyan text-sm font-medium hover:bg-neonCyan/10 transition-colors"
        >
            Let's Talk
        </a>

        <!-- Mobile Menu Button -->
        <button
            class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-50"
            onclick={toggleMobileMenu}
            aria-label="Toggle menu"
        >
            {#if isMobileMenuOpen}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            {:else}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            {/if}
        </button>
    </div>

    <!-- Mobile Menu Overlay -->
    {#if isMobileMenuOpen}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen pt-20"
            transition:fade={{ duration: 200 }}
            onclick={toggleMobileMenu}
        >
            <div
                class="flex flex-col items-center gap-8 w-full px-6"
                in:fly={{ y: 20, duration: 300, delay: 100 }}
                out:fly={{ y: -20, duration: 200 }}
            >
                {#each navLinks as link}
                    <a
                        href="#{link.id}"
                        class="text-2xl font-bold transition-colors duration-300 {activeSection ===
                        link.id
                            ? 'text-neonCyan'
                            : 'text-gray-300 hover:text-white'}"
                        onclick={toggleMobileMenu}
                    >
                        {link.label}
                    </a>
                {/each}

                <a
                    href="mailto:rajifraditia@gmail.com"
                    class="mt-4 px-8 py-3 rounded-full border border-neonCyan/30 text-neonCyan text-lg font-medium hover:bg-neonCyan/10 transition-colors w-full max-w-xs text-center"
                    onclick={toggleMobileMenu}
                >
                    Let's Talk
                </a>
            </div>
        </div>
    {/if}
</nav>
