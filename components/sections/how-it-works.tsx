import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-[#263238] py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                <h2 className="text-center font-sans text-3xl font-medium md:text-4xl mb-12">How Sprout Works</h2>
                <FeaturesSectionWithHoverEffects />
            </div>
        </section>
    );
}