import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Systems",
      description: "Building consistent and reusable component libraries"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams"
    }
  ];

  const achievements = [
    {
      metric: "5+",
      label: "Years Experience",
      description: "Building web applications"
    },
    {
      metric: "50+",
      label: "Projects Delivered",
      description: "From startups to enterprise"
    },
    {
      metric: "15+",
      label: "Technologies",
      description: "Frontend & backend skills"
    },
    {
      metric: "99%",
      label: "Client Satisfaction",
      description: "Positive feedback rate"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-4">Hi there! 👋</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm Raj, a frontend developer based in Thane with a passion for creating 
                beautiful, functional, and user-centered digital experiences. With over 5 years in 
                the industry, I've had the privilege of working with startups, agencies, and 
                enterprise companies.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                My journey began with a computer science degree, but what really drives me is the 
                intersection of technology and design. I believe that great software should not 
                only work flawlessly but also delight users at every interaction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest web technologies, 
                contributing to open source projects, mentoring junior developers, or hiking 
                the beautiful trails around the Bay Area.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">React Enthusiast</Badge>
              <Badge variant="secondary" className="px-3 py-1">TypeScript Advocate</Badge>
              <Badge variant="secondary" className="px-3 py-1">Open Source Contributor</Badge>
              <Badge variant="secondary" className="px-3 py-1">UI/UX Focused</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl text-primary mb-2">{achievement.metric}</div>
                  <div className="mb-1">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What I Do Best */}
        <div>
          <h3 className="text-2xl text-center mb-8">What I Do Best</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h4 className="mb-3">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}