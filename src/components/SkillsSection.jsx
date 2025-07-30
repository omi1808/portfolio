import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },

  { name: "Java", level: 90, category: "bacckend" },
  { name: "J@EE", level: 80, category: "bacckend" },
  { name: "Spring Boot", level: 85, category: "bacckend" },
  { name: "Spring Security", level: 73, category: "bacckend" },
  { name: "SQl", level: 85, category: "bacckend" },

  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "Docker", level: 40, category: "tools" },
  { name: "VS COde", level: 95, category: "tools" },
  { name: "Eclipse", level: 95, category: "tools" },
  { name: "PostMan", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "bacckend", "tools"];
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");


  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory); 
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={key}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize font-semibold" ,
                activeCategory === category ?
                "bg-primary text-primary-forground" :
                "bg-scondary/70 text-foreground hover: bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, key) => (
            <div className="bg-card p-4 rounded-lg shadow-xs card-hover ">
              <div className=" text-left mb-4">
                <h3 className="font-semibold text-lg ">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
