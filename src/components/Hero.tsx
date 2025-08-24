import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Code, Palette, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-2xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
        </div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-muted-foreground">Available for new projects</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <div>
                <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    Raj
                  </span>
                  <br />
                  <span className="text-muted-foreground/80">Singh</span>
                </h1>
              </div>
              
              <div className="flex items-center gap-4 text-xl md:text-2xl text-primary">
                <Code className="h-6 w-6" />
                <span>Frontend Developer</span>
              </div>
            </div>

            {/* Professional Details */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Thane, Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <span>1.2 Year Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span>50+ Projects</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              I craft exceptional digital experiences with modern web technologies, 
              focusing on performance, accessibility, and pixel-perfect designs that users love.
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm">
                <Palette className="h-4 w-4 text-primary" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm">
                <Code className="h-4 w-4 text-primary" />
                <span>React Development</span>
              </div>
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span>Performance Optimization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 text-base h-12 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 text-base h-12 border-2"
              >
                Get In Touch
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="px-8 py-3 text-base h-12"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-card/60 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200 hover:scale-105"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-card/60 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200 hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:Raj@example.com"
                className="flex items-center justify-center w-12 h-12 bg-card/60 backdrop-blur-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg">
              
              {/* Background Geometric Shapes */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-2xl rotate-12 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary/50 rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Profile Card */}
              <div className="relative bg-card/80 backdrop-blur-lg border border-border rounded-3xl p-8 shadow-2xl">
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-6xl text-primary-foreground shadow-lg">
                    R10
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-card animate-pulse"></div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="font-medium">1.2 Year</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="font-medium">10+ Completed</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Specialization</span>
                    <span className="font-medium">React & TypeScript</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="font-medium">Thane</span>
                  </div>
                </div>

                {/* Tech Stack Preview */}
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">Current Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}