import LogoCarousel from "../../components/LogoCarousel";

export default function SkillsPage() {
    return (
        <section className="w-full px-0 py-16 bg-[#EDEDEC] text-foreground">
            {/* Título centrado, con max-w */}
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl font-bold">Tech Skills</h2>
            </div>

            {/* Carousel full width */}
            <LogoCarousel />
        </section>

    );
}
