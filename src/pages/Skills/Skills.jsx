import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "../../../@/components/ui/bento-grid";

export function Skills() {
  return (
    <>
      {/* Heading */}
      <h2 className="text-5xl md:py-[40px] py-[30px] lg:py-[60px] text-center md:text-6xl font-extrabold tracking-tight text-white">
        My Skills
      </h2>
      <BentoGrid className="container mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <div
                className={`flex items-center justify-center h-full w-full rounded-xl ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#0F172A]" // Cool dark gradient for even items
                    : "bg-gradient-to-br from-[#4B5563] via-[#6B7280] to-[#374151]" // Neutral gray gradient for odd items
                } p-4 shadow-lg`}
              >
                {item.icon}
              </div>
            }
            icon={null} // Move the icon to the header for styled display
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const items = [
  {
    title: "React",
    description: "Building dynamic and interactive user interfaces with React.",
    icon: <FaReact className="h-16 w-16 text-cyan-400 drop-shadow-md" />, // Cyan accent for React
  },
  {
    title: "Node.js",
    description: "Developing server-side applications with Node.js.",
    icon: <FaNodeJs className="h-16 w-16 text-green-400 drop-shadow-md" />, // Green accent for Node.js
  },
  {
    title: "MongoDB",
    description: "Efficiently managing databases with MongoDB.",
    icon: <FaDatabase className="h-16 w-16 text-green-500 drop-shadow-md" />,
  },
  {
    title: "HTML5",
    description: "Structuring web pages with modern HTML5 standards.",
    icon: <FaHtml5 className="h-16 w-16 text-orange-400 drop-shadow-md" />,
  },
  {
    title: "CSS3",
    description: "Creating responsive designs with CSS3 techniques.",
    icon: <FaCss3Alt className="h-16 w-16 text-blue-400 drop-shadow-md" />,
  },
  {
    title: "JavaScript",
    description: "Implementing dynamic functionality using JavaScript.",
    icon: <FaJs className="h-16 w-16 text-yellow-400 drop-shadow-md" />,
  },
  {
    title: "Git",
    description: "Managing version control with Git for collaboration.",
    icon: <FaGitAlt className="h-16 w-16 text-red-400 drop-shadow-md" />,
  },
];
