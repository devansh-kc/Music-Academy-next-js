"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/courses/piano.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="piano Image"
        />
      </div>
    ),
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/courses/vocalist.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="vocals"
        />
      </div>
    ),
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/courses/drumming.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Drumming"
        />
      </div>
    ),
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/courses/jazz.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Jazz"
        />
      </div>
    ),
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/courses/edm.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
