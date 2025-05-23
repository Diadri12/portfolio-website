import {Facebook, Instagram, Linkedin, Mail, Phone, Send, Twitter} from 'lucide-react';
import { cn } from "../lib/utilis";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
     const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.send(
            "service_dw1234",
            "template_b5hyjch",
            formData,
            "GUGSFUdtTYY8hcDvo"
        ).then(() => {
            toast({
                title:"Message Sent!",
                description:"Thank you for your message. I'll get back to you soon."
            });
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => {
            toast({
                title: "Something went wrong",
                description: "Please try again later."
            });
        }).finally(() => {
            setIsSubmitting(false);
        })

    }
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. 
                    I'm always open to discussing new opportunities.  
                </p>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium text-left'>Email</h4>
                                    <a href='mailto:diadriweerasekera@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                        diadriweerasekera@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone Number</h4>
                                    <a href='tel:+94741051367' className='text-muted-foreground hover:text-primary transition-colors'>
                                        +94 74 105 1367
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='pt-10'>
                            <h4 className='font-medium mb-4'>Connect with Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='https://www.linkedin.com/in/diadri-weerasekera/' target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href='#' target="_blank">
                                    <Twitter/>
                                </a>
                                <a href='https://www.instagram.com/diadriweerasekera/' target="_blank">
                                    <Instagram/>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=61576639800668' target="_blank">
                                    <Facebook/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>
                            Send a Message
                        </h3>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label>
                                <input type="text" id='name' name='name' required value={formData.name} onChange={handleChange}
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='Drew Harrison...'></input>
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
                                <input type="email" id='email' name='email' required value={formData.email} onChange={handleChange}
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='test.user@gmail.com'></input>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required value={formData.message} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")} disabled={isSubmitting}>
                                {isSubmitting ? "Sending" : "Send a Message"} <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}