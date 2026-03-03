export function inView(node: HTMLElement, options: { threshold?: number, duration?: number, delay?: number, y?: number } = {}) {
    const config = { threshold: 0.1, duration: 1000, delay: 0, y: 50, ...options };

    node.style.opacity = '0';
    node.style.transform = `translateY(${config.y}px)`;
    node.style.transition = `opacity ${config.duration}ms ease-out ${config.delay}ms, transform ${config.duration}ms ease-out ${config.delay}ms`;
    node.style.willChange = 'opacity, transform';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                node.style.opacity = '1';
                node.style.transform = 'translateY(0)';
                observer.unobserve(node);
            }
        });
    }, {
        threshold: config.threshold
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
