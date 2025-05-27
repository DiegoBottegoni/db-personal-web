import LogoCarousel from "../../components/LogoCarousel";
import { motion } from "framer-motion";

export default function SkillsPage() {
    return (
        <section className="w-full px-0 py-24  bg-primary-l">
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center uppercase"
                >
                    Tech Skills
                </motion.h2>
            </div>

            {/* Carousel full width */}
            <LogoCarousel />
        </section>

    );
}
