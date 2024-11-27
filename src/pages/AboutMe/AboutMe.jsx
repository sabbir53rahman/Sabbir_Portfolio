import {
  FaReact,
  FaBriefcase,
  FaWordpress,
  FaUniversity,
  FaCheckCircle,
  FaThumbsUp,
} from "react-icons/fa";
import { cn } from "../../../@/lib/utils"; // Assumes `cn` utility is available

export function AboutMe() {
  const features = [
    {
      title: "MERN Stack Expertise",
      description:
        "Experienced in developing robust full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      icon: <FaReact />,
    },
    {
      title: "3 Years of Experience",
      description:
        "Over 3 years of hands-on experience building scalable and efficient web applications.",
      icon: <FaBriefcase />,
    },
    {
      title: "Basic WordPress Skills",
      description:
        "Familiarity with WordPress for creating and managing websites with ease.",
      icon: <FaWordpress />,
    },
    {
      title: "Pursuing Higher Education",
      description:
        "Currently a 2nd-year Honors student, continuously expanding my knowledge and skills.",
      icon: <FaUniversity />,
    },
    {
      title: "Orders Completed",
      description:
        "Successfully delivered over 12 projects for clients worldwide.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Client Satisfaction",
      description: "Achieved a 98% satisfaction rate from happy clients.",
      icon: <FaThumbsUp />,
    },
  ];

  return (
    <>
      {/* Heading */}
      <h2 className="text-5xl md:py-[40px] py-[30px] lg:py-[60px] text-center md:text-6xl font-extrabold tracking-tight text-white">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 text-4xl">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
