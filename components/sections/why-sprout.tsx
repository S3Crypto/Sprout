export function WhySprout() {
    const features = [
        {
            icon: "🎯",
            title: "Focus-first, not feature-bloated",
            description: "Clean, minimal interface designed to keep you in flow, not distract you.",
        },
        {
            icon: "📊",
            title: "Minimal tracking, max clarity",
            description: "We track just enough to help you improve, without overwhelming you with metrics.",
        },
        {
            icon: "🌿",
            title: "Grows with you as you build habits",
            description: "Your digital plant evolves as you develop consistent focus habits.",
        },
        {
            icon: "💻",
            title: "Built for devs",
            description: "VS Code + Local App coming soon for seamless integration into your workflow.",
        },
    ]

    return (
        <section id="why-sprout" className="bg-white py-16 text-[#263238] md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-sans text-3xl font-medium md:text-4xl">Why Sprout</h2>
                        <div className="mt-8 space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF176] text-xl">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-sans text-lg font-medium">{feature.title}</h3>
                                        <p className="mt-1 text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-8xl">🌱</div>
                                    <p className="mt-4 font-mono text-sm text-gray-400">Illustration placeholder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}