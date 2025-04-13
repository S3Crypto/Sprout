export function HowItWorks() {
    const steps = [
        {
            icon: "🌱",
            title: "Set your goal",
            description: "Define what you want to accomplish during your focus session.",
        },
        {
            icon: "⏱️",
            title: "Start your flow timer",
            description: "Begin your focused work session with our mindful timer.",
        },
        {
            icon: "💧",
            title: "Hydrate, stretch, breathe",
            description: "Take mindful breaks to maintain your energy and focus.",
        },
        {
            icon: "🌸",
            title: "Grow your plant",
            description: "Watch your digital plant grow as you maintain consistent focus.",
        },
    ]

    return (
        <section id="how-it-works" className="bg-[#263238] py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                <h2 className="text-center font-sans text-3xl font-medium md:text-4xl">How Sprout Works</h2>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0D1117] text-3xl">
                                {step.icon}
                            </div>
                            <h3 className="mt-4 font-sans text-xl font-medium">{step.title}</h3>
                            <p className="mt-2 text-gray-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}