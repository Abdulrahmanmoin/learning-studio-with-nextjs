"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const skillsAcademyContent = [
    {
      title: 'Unleash Your Creativity: A Personal Journey in Skill Development',
      description:
        'Embark on a journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for growth in creative fields. At our academy, your aspirations meet our dedicated support, creating a path to mastery in your chosen skill.',
    },
    {
      title: 'Expert-Led Workshops',
      description:
        'Join workshops led by experts in various creative fields, where you’ll gain insights and tips from professionals. Whether you’re into digital art or photography, our workshops are designed to elevate your expertise.',
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience with real-time feedback, just like collaborative work on projects. This approach enhances your understanding and mastery of each skill, from design to storytelling techniques.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest trends and tools in creative fields, ensuring you’re always learning with current and effective methods. Say goodbye to outdated resources and welcome an evolving education.',
    }
  ];


const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={skillsAcademyContent}/>
    </div>
  )
}

export default WhyChooseUs
