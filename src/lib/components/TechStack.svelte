<script lang="ts">
    import { inView } from "$lib/actions/inView";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
</svelte:head>

<!-- Tech Stack Section -->
<section
    id="skills"
    class="py-24 px-6 relative border-y border-white/5"
    use:inView={{ y: 50, duration: 800 }}
>
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
                Tech Stack
            </h2>
            <div class="w-16 h-1 bg-teal-400 mx-auto rounded"></div>
        </div>

        <div class="marquee-container">
            <div class="marquee-content">
                <!-- Tech Pills -->
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fab fa-python text-blue-400 text-xl"></i>
                    <span class="text-gray-200">Python</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
                        alt="TF"
                        class="w-5 h-5 opacity-80"
                    />
                    <span class="text-gray-200">TensorFlow</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-teal-400 font-bold">Scikit-Learn</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-blue-300 font-bold">Pandas</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-sparkles text-yellow-400"></i>
                    <span class="text-gray-200">Google Gemini API</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-blue-600 font-bold">C++</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-microchip text-gray-400 text-xl"></i>
                    <span class="text-gray-200">ESP32-S3</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fab fa-js text-yellow-500 text-xl"></i>
                    <span class="text-gray-200">Vanilla JS</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fab fa-css3-alt text-blue-400 text-xl"></i>
                    <span class="text-gray-200">Tailwind CSS</span>
                </div>
                <!-- New Skills -->
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-white font-bold">Streamlit</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-database text-blue-400"></i>
                    <span class="text-gray-200">BigQuery</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-network-wired text-purple-400"></i>
                    <span class="text-gray-200">ETL</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-brain text-pink-400"></i>
                    <span class="text-gray-200">Prompt Engineering</span>
                </div>
            </div>

            <!-- Duplicate for seamless loop -->
            <div class="marquee-content" aria-hidden="true">
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fab fa-python text-blue-400 text-xl"></i>
                    <span class="text-gray-200">Python</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
                        alt="TF"
                        class="w-5 h-5 opacity-80"
                    />
                    <span class="text-gray-200">TensorFlow</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-teal-400 font-bold">Scikit-Learn</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-blue-300 font-bold">Pandas</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-sparkles text-yellow-400"></i>
                    <span class="text-gray-200">Google Gemini API</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-blue-600 font-bold">C++</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-microchip text-gray-400 text-xl"></i>
                    <span class="text-gray-200">ESP32-S3</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fab fa-js text-yellow-500 text-xl"></i>
                    <span class="text-gray-200">Vanilla JS</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fab fa-css3-alt text-blue-400 text-xl"></i>
                    <span class="text-gray-200">Tailwind CSS</span>
                </div>
                <!-- New Skills -->
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <span class="text-white font-bold">Streamlit</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-database text-blue-400"></i>
                    <span class="text-gray-200">BigQuery</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-network-wired text-purple-400"></i>
                    <span class="text-gray-200">ETL</span>
                </div>
                <div
                    class="glass px-6 py-3 rounded-full flex items-center gap-3 whitespace-nowrap hover:border-teal-400/50 transition-colors"
                >
                    <i class="fas fa-brain text-pink-400"></i>
                    <span class="text-gray-200">Prompt Engineering</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .marquee-container {
        position: relative;
        overflow: hidden;
        display: flex;
        width: 100%;
        mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
        -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
    }

    .marquee-content {
        display: flex;
        flex-shrink: 0;
        gap: 1.5rem;
        padding-right: 1.5rem;
        animation: scroll 20s linear infinite;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
</style>
