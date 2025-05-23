import { Navbar } from "@/components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "@/components/HeroSection"
import { AboutMe } from "@/components/AboutMe"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { FooterSection } from "../components/FooterSection"

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme Toggle*/}            
            <ThemeToggle/>
            {/*Background Effects*/}
            <StarBackground/>
            {/*Navbar*/}
            <Navbar/>
            {/*Main Content*/}
            <main>
                <HeroSection/>
                <AboutMe/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
            {/*Footer*/}
            <FooterSection/>
        </div>
    )
}