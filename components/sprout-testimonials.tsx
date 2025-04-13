import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

export function SproutTestimonials() {
    const testimonials = [
        {
            author: {
                name: "Alex Chen",
                handle: "@alexcodes",
                avatar: "/api/placeholder/150/150"
            },
            text: "Sprout has completely changed my coding workflow. I'm so much more focused and my productivity has gone through the roof!",
        },
        {
            author: {
                name: "Mira Patel",
                handle: "@mirasoftware",
                avatar: "/api/placeholder/150/150"
            },
            text: "I love how Sprout keeps me on track without being intrusive. The plant growing as I stay focused is surprisingly motivating.",
        },
        {
            author: {
                name: "Jordan Taylor",
                handle: "@jdevops",
                avatar: "/api/placeholder/150/150"
            },
            text: "Finally, a productivity tool that understands developer flow! Simple, effective, and actually helps me stay in the zone.",
        },
        {
            author: {
                name: "Robin Garcia",
                handle: "@robincodes",
                avatar: "/api/placeholder/150/150"
            },
            text: "Since using Sprout, I've seen a 40% increase in my focused coding time and far fewer distractions. Highly recommend!",
        }
    ]

    return (
        <TestimonialsSection
            title="Loved by developers like you"
            description="Join thousands of developers who are growing with Sprout"
            testimonials={testimonials}
        />
    )
}