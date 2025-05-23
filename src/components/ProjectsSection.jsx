import {ArrowRight, Github} from 'lucide-react'
const projects = [
    {
        id: 1,
        title:"Advanced Food Ordering Application",
        description:"Allows users to order food, obtain nutritional reports, allow users to view diet plans as well as associated health risks.",
        image:"/projects/food-app.png",
        tags:["MERN Stack","Teamwork"],
        githubUrl:"https://github.com/sathmikaDev/ZOODO"
    },
    {
        id: 2,
        title:"Real Time Chat Application",
        description:"An AI(Artificial Intelligence) generated bot assists users with queries and questions that a user may have. ",
        image:"/projects/chat-application.png",
        tags:["Java", "Kotlin"],
        githubUrl:"https://github.com/Diadri12/ChatApp"
    },
    {
        id: 3,
        title:"Movie Recommendation System",
        description:"Allows users to select a movie and will recommend up to 5 movies depending on the selected movie.",
        image:"/projects/movie-reccomendation-system.jpg",
        tags:["Python", "Streamlit"],
        githubUrl:"https://github.com/Diadri12/Movie-Reccomendation-System"
    },
    {
        id: 4,
        title:"Book Recommendation System",
        description:"Allows users to read chapters of books, achievements of the author, provides details of the author, allows users to see feedback given by other users and contact details for inquiries and questions.",
        image:"/projects/Book-author-website.png",
        tags:["React"],
        githubUrl:"https://github.com/Diadri12/Book-Website"
    },
    {
        id: 5,
        title:"Resume Screening System",
        description:"A resume screening system that uses a NLP model extracts key skills, and experience, and matches job descriptions to resumes.",
        image:"/projects/placeholder-image-1.png",
        tags:["React", "Python", "TailwindCSS", "NLP"],
        githubUrl:"https://github.com/Diadri12/resume-screening-system"
    },
    {
        id: 6,
        title:"Real Time Event Ticketing System",
        description:"A real-time event ticketing system that allows users to search events by location and category, books tickets in real time with seat selection, and provide updates on availability.",
        image:"/projects/real-time-event-system.PNG",
        tags:["Angular","C#", "MySQL"],
        githubUrl:"https://github.com/Diadri12/event-ticketing-system"
    },

]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A fusion of thoughtful design, robust engineering, and intelligent systems. 
                    These projects reflect my journey across frontend and backend development, machine learning innovation, and data-driven business analysis, each crafted to solve real problems with clarity and impact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => {
                        return(
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                                {/* Image Section */}
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span 
                                                key={`${project.id}-${index}`} 
                                                className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-semibold mb-3">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                                        {project.description}
                                    </p>
                                    
                                    {/* GitHub Section - Always at bottom */}
                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="flex space-x-3">
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                            >
                                                <Github size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/Diadri12'  target="_blank">
                        Check My Github <ArrowRight size={16}/> 
                    </a>
                </div>
            </div>
        </section>
    )
}