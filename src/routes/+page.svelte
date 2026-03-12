<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import TechStack from "$lib/components/TechStack.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import CertificateCard from "$lib/components/CertificateCard.svelte";
    import InteractiveBadgeCard from "$lib/components/InteractiveBadgeCard.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import { inView } from "$lib/actions/inView";

    // --- MOCK DATA ---

    const projects = [
        {
            id: 1,
            title: "Stellar AI",
            shortDescription:
                "End-to-end GenAI assistant integrating ESP32-S3 hardware for edge computing.",
            description:
                "Stellar AI is a comprehensive edge computing solution that brings Generative AI capabilities directly to hardware. By utilizing an ESP32-S3 microcontroller, this system bypasses heavy cloud-compute latency for specific offline tasks while intelligently routing complex queries to the cloud. Designed with energy efficiency and real-time response in mind.",
            tags: ["ESP32-S3", "GenAI", "C++", "Python", "Edge Computing"],
            image: "",
            images: [
                "src/lib/assets/project/Stellar_Phase_1/1.webp",
                "src/lib/assets/project/Stellar_Phase_1/2.webp",
                "src/lib/assets/project/Stellar_Phase_1/3.webp",
                "src/lib/assets/project/Stellar_Phase_1/4.webp",
            ],
            link: "https://github.com",
            status: "wip",
        },
        {
            id: 2,
            title: "Daurama",
            shortDescription:
                "Computer vision web app using Gemini API with gamification for sustainable waste management.",
            description:
                "Daurama introduces a gamified approach to waste sorting and recycling. Leveraging the Gemini API for advanced computer vision analysis, users can scan waste items to identify correct recycling categories. The platform rewards sustainable actions with points that can be redeemed for eco-friendly products, helping communities build better habits.",
            tags: [
                "SvelteKit",
                "Gemini API",
                "Tailwind CSS",
                "Computer Vision",
            ],
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
                "src/lib/assets/project/Daurama/10.webp",
            ],
            link: "https://github.com/chartzh/daurama",
            status: "completed",
        },
        {
            id: 3,
            title: "Vye YouTube RAG",
            shortDescription:
                "Intelligent Q&A system synthesizing knowledge from YouTube videos using RAG architecture.",
            description:
                "Vye is a Retrieval-Augmented Generation (RAG) system built to extract, summarize, and query information directly from YouTube video transcripts. Users can paste a URL and immediately converse with the content of the video, saving hours of watch time. Built with a vector database for semantic search.",
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
                "src/lib/assets/project/Vye/9.webp",
            ],
            link: "https://github.com/Chartzh/Vye",
            status: "completed",
        },
        {
            id: 4,
            title: "NVIDIA Stock Prediction",
            shortDescription:
                "Predictive analytics model forecasting stock movements using Linear Regression.",
            description:
                "A data science pipeline focused on predicting NVIDIA's stock price fluctuations. The project involves extensive exploratory data analysis (EDA), feature engineering (moving averages, RSI, MACD), and training a Linear Regression model. Includes an interactive dashboard to visualize predictions against actual historical data.",
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
                "src/lib/assets/project/Nvidia/10.webp",
            ],
            link: "https://github.com",
            status: "completed",
        },
    ];

    const featuredCertificates = [
        {
            id: 1,
            title: "IBM Granite: Code Generation & Optimization",
            issuer: "IBM",
            description:
                "Advanced optimization and code generation techniques using the IBM Granite model. Demonstrated applied knowledge in creating efficient GenAI-driven code tools.",
            image: "src/lib/assets/certificate/ibm_granite_code_generation.png",
            link: "https://www.credly.com/badges/ab73f6c2-ae61-4447-baf1-a336bbe9fc40/linked_in_profile",
            credentialId: "-",
            issuedDate: "Sep 2025",
            featured: true,
        },
        {
            id: 2,
            title: "Google Cloud: Develop GenAI Apps with Gemini & Streamlit",
            issuer: "Google Cloud",
            description:
                "Built end-to-end Generative AI applications integrating the Gemini API with Streamlit interfaces. Topics included RAG, semantic search, and prompt engineering.",
            image: "src/lib/assets/certificate/develop_gen_ai_gcsb.png",
            link: "https://www.skills.google/public_profiles/865d3d78-33f6-4ef3-abfd-04d9ad08ddc6/badges/17765098",
            credentialId: "17765098",
            issuedDate: "Aug 2025",
            featured: true,
        },
        {
            id: 3,
            title: "Oracle: Database Programming with SQL",
            issuer: "Oracle",
            description:
                "Comprehensive database design and SQL programming, including complex queries, ETL concepts, and highly efficient schema structuring.",
            image: "src/lib/assets/certificate/database_programming_sql.png",
            link: "https://www.linkedin.com/in/rajifraditya/details/certifications/1770273681189/single-media-viewer/?profileId=ACoAAE79HpYBViMoBnFtPVORzeeYKx7-A83c6B0",
            credentialId: "-",
            issuedDate: "Dec 2025",
            featured: true,
        },
    ];

    const foundationCertificates = [
        {
            id: 4,
            title: "Python & Data Visualization",
            issuer: "Dicoding",
            description:
                "Data processing leveraging Python, Pandas, and Matplotlib. Showcased ability to handle complex datasets and present clear data-driven narratives.",
            image: "",
            link: "https://dicoding.com/certificates/1OP82ENWVPQK",
            credentialId: "1OP82ENWVPQK",
            issuedDate: "Apr 2025",
        },
        {
            id: 5,
            title: "Belajar Dasar AI",
            issuer: "Dicoding",
            description:
                "Fundamental concepts of Artificial Intelligence, including machine learning basics, data processing, and AI applications.",
            image: "",
            link: "https://dicoding.com",
            credentialId: "-",
            issuedDate: "Apr 2025",
        },
        {
            id: 6,
            title: "Pemrograman Web",
            issuer: "Dicoding",
            description:
                "Web programming fundamentals covering HTML, CSS, JavaScript, and responsive design principles.",
            image: "",
            link: "https://dicoding.com",
            credentialId: "-",
            issuedDate: "Apr 2025",
        },
        {
            id: 7,
            title: "AI/ML & UI/UX Weekly Classes",
            issuer: "GDGoC",
            description:
                "Consistent practical training in both Machine Learning algorithms and UI/UX fundamental principles. Prototyped multiple applications iteratively.",
            image: "",
            link: "https://gdg.community.dev",
            credentialId: "GDG-CC-1123",
            issuedDate: "Aug 2025",
        },
    ];

    // --- MODAL STATE ---

    let isModalOpen = $state(false);
    let modalContent = $state({
        title: "",
        description: "",
        image: "",
        images: [] as string[],
        tags: [],
        link: "",
        type: "project",
    });

    function openProjectModal(project: any) {
        modalContent = {
            title: project.title,
            description: project.description,
            image: project.image,
            images: project.images || [],
            tags: project.tags,
            link: project.link,
            type: "project",
        };
        isModalOpen = true;
    }

    function openCertificateModal(cert: any) {
        modalContent = {
            title: cert.title,
            description: cert.description,
            image: cert.image,
            images: [],
            tags: [],
            link: cert.link,
            type: "certificate",
        };
        isModalOpen = true;
    }
</script>

<svelte:head>
    <title>Rajif | AI Engineer & Developer</title>
    <meta
        name="description"
        content="Personal tech portfolio of Rajif, showcasing AI engineering, Generative AI, and full-stack development projects."
    />
</svelte:head>

<Hero />

<AboutMe />

<Timeline />

<TechStack />

<section id="projects" class="py-20" use:inView={{ y: 50, duration: 800 }}>
    <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-bold text-white">Featured Projects</h2>
        <div
            class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"
        ></div>
    </div>

    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
    >
        {#each projects as project}
            <ProjectCard {project} onOpen={openProjectModal} />
        {/each}
    </div>
</section>

<section id="certificates" class="py-20" use:inView={{ y: 50, duration: 800 }}>
    <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-bold text-white">Verified Credentials</h2>
        <div
            class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"
        ></div>
    </div>

    <!-- Featured Certificates Grid -->
    <div class="mb-8">
        <h3
            class="text-xl font-semibold text-neonCyan mb-6 flex items-center gap-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                ><path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                ></path></svg
            >
            Featured Certifications
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {#each featuredCertificates as cert}
                <CertificateCard
                    certificate={cert}
                    onOpen={openCertificateModal}
                    featured={cert.featured}
                />
            {/each}
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Infrastructure Suite -->
        <div>
            <h3 class="text-lg font-medium text-white/80 mb-4 ml-1">
                Infrastructure Suite
            </h3>
            <InteractiveBadgeCard />
        </div>

        <!-- Foundations -->
        <div>
            <h3 class="text-lg font-medium text-white/80 mb-4 ml-1">
                Foundations
            </h3>
            <div class="flex flex-col gap-4">
                {#each foundationCertificates as cert}
                    <CertificateCard
                        certificate={cert}
                        onOpen={openCertificateModal}
                    />
                {/each}
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="mt-16 flex justify-center">
        <a
            href="https://www.skills.google/public_profiles/865d3d78-33f6-4ef3-abfd-04d9ad08ddc6"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonCyan/50 rounded-full text-sm font-medium text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] overflow-hidden"
        >
            <!-- Hover sheen effect -->
            <div
                class="absolute inset-0 bg-gradient-to-r from-neonCyan/0 via-neonCyan/10 to-neonCyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
            ></div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                class="text-neonCyan group-hover:scale-110 transition-transform relative z-10"
            >
                <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </svg>

            <span class="relative z-10"
                >Verify all 80+ badges on Google Cloud Skills Boost</span
            >

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="opacity-70 group-hover:translate-x-1 transition-transform relative z-10"
            >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
</section>

<Footer />

<Modal
    bind:isOpen={isModalOpen}
    title={modalContent.title}
    description={modalContent.description}
    image={modalContent.image}
    images={modalContent.images}
    tags={modalContent.tags}
    link={modalContent.link}
    type={modalContent.type as "project" | "certificate"}
/>
