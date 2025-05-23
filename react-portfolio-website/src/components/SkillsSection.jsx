import { act, useEffect, useState } from "react"
import { cn } from "../lib/utilis"

const skills = [
    //Frontend
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Angular", level: 80, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    //Backend
    { name: "Python", level: 80, category: "backend" },
    { name: "Java", level: 80, category: "backend" },
    { name: "C#", level: 80, category: "backend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 60, category: "backend" },
    { name: "MongoDB", level: 60, category: "backend" },
    { name: "PostgreSQL", level: 70, category: "backend" },
    //Tools
    { name: "Git/GitHub", level: 80, category: "tools" },
    { name: "Figma", level: 70, category: "tools" },
    { name: "VS Code", level: 80, category: "tools" },
    { name: "Postman", level: 70, category: "tools" },
    { name: "Chrome Dev Tools", level: 70, category: "tools" },
    { name: "Jira", level: 80, category: "tools" },
    { name: "Stylelint ", level: 70, category: "tools" },
    //Soft Skills
    { name: "Teamwork", level: 80, category: "soft skills" },
    { name: "Communication", level: 80, category: "soft skills" },
    { name: "Problem Solving", level: 80, category: "soft skills" },
    { name: "Adaptability", level: 80, category: "soft skills" },
    { name: "Time Management", level: 80, category: "soft skills" },
    { name: "Creativity", level: 80, category: "soft skills" },
    { name: "Leadership", level: 80, category: "soft skills" },
]

const categories = ["all", "frontend", "backend", "tools", "soft skills"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
     const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
    
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => {
                        return(
                            <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary"
                            )} onClick={() => setActiveCategory(category)}>{category}</button>
                        )
                    })}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key) => {
                        return(
                            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full orgin-left animate-[grow_1.5s_ease-out]"style={{
                                    width:skill.level + "%"
                                }}/>
                                </div>
                                <div className="text-right mt-1"><span className="text-sm text-muted-foreground">{skill.level}%</span></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}