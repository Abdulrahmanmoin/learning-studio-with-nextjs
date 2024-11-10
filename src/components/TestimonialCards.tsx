"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const skillsAcademyTestimonials = [
    {
        quote:
            'Joining Skills Academy transformed my understanding of creative expression and gave me the confidence to pursue my passion. The instructors are outstanding!',
        name: 'Alex Johnson',
        title: 'Photography Student',
    },
    {
        quote:
            "The community and support at Skills Academy are exceptional. I've grown not just as an artist, but also as a creator, thanks to their comprehensive approach.",
        name: 'Samantha Lee',
        title: 'Digital Art Student',
    },
    {
        quote:
            "This academy provided the tools and encouragement I needed to take my storytelling to the next level. I'm endlessly grateful for the personalized coaching.",
        name: 'Michael Chen',
        title: 'Creative Writing Student',
    },
    {
        quote:
            'As an aspiring graphic designer, finding the right mentor was essential. Skills Academy connected me with a teacher who truly understands my goals.',
        name: 'Emily Taylor',
        title: 'Graphic Design Student',
    },
    {
        quote:
            'The video editing courses here opened my eyes to the finer points of visual storytelling. I highly recommend this for anyone exploring video production!',
        name: 'Chris Morales',
        title: 'Video Editing Student',
    },
];



function TestimonialCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl ">
                    <InfiniteMovingCards
                        items={skillsAcademyTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards