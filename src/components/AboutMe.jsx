import { Briefcase, ChartBarIncreasingIcon, ChartNoAxesColumnIncreasingIcon, Code, SpeakerIcon, User } from "lucide-react"

export const AboutMe = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">A Curious Mind Developing End-to-End Solutions with Code, Creativity, and Machine Learning Insights</h3>
                        <p className="text-muted-foreground">I am a final-year Software Engineering student with one year of industry experience in a software company.
                            I have hands-on skills in building efficient frontend and backend applications.
                            While I am still exploring machine learning professionally, I am eager to grow in that area and broaden my technical expertise.
                        </p>
                        <p>
                            I am passionate about crafting elegant solutions to complex challenges and continuously expanding my skills across frontend, backend, and machine learning. 
                            I stay driven by curiosity and a commitment to mastering emerging technologies in the dynamic tech world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            {/* <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a> */}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack & ML Development</h4>
                                    <p className="text-muted-foreground">Designing intuitive frontends, building robust backend systems, and developing intelligent ML solutions to power modern web experiences</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ChartNoAxesColumnIncreasingIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Business Analysis</h4>
                                    <p className="text-muted-foreground">Translating complex data into actionable insights, optimizing processes, and driving strategic decisions to fuel business growth</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <SpeakerIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Public Speaking</h4>
                                    <p className="text-muted-foreground">Engaging audiences with confidence and clarity from hosting events to delivering impactful presentations with a strong stage presence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}