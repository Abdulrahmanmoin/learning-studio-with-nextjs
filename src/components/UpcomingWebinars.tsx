"use client";

import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: 'Understanding Creative Fundamentals',
            description:
                'Dive deep into the essentials of creative theory to enhance your skills in various artistic fields.',
            slug: 'understanding-creative-fundamentals',
            isFeatured: true,
        },
        {
            title: 'The Art of Storytelling',
            description:
                'Learn the craft of storytelling from experienced creators and authors.',
            slug: 'the-art-of-storytelling',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Creative Medium',
            description:
                'Advanced techniques to master your chosen creative field, from design to photography.',
            slug: 'mastering-your-creative-medium',
            isFeatured: true,
        },
        {
            title: 'Production Essentials',
            description:
                'Get started with production skills in digital media with this comprehensive overview.',
            slug: 'production-essentials',
            isFeatured: true,
        },
        {
            title: 'Presentation and Public Speaking Techniques',
            description:
                'Enhance your presentation skills with expert tips and strategies.',
            slug: 'presentation-public-speaking-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Marketing for Creatives',
            description:
                'Learn how to promote your work effectively in the digital age.',
            slug: 'digital-marketing-for-creatives',
            isFeatured: true,
        },
    ];


    return (
        <div className='p-12 px-3 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h1 className="text-base text-red-600 font-semibold tracking-wide uppercase">Featured Webinars</h1>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance your creative journey</p>
                </div>

                <div className='mt-10'>
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: webinar.slug,
                            }
                        ))}
                    />
                </div>

                <div className="mt-20 text-center">
                    <Link href={"/"}
                        className="px-4 py-3  rounded-full border-2 border-black text-white bg-red-700 hover:bg-red-800 transition duration-200 text-center"
                    >
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars