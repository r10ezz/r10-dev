import { Badge } from "./ui/badge";

export function Skills() {
  const skillsData = [
    // Frontend Skills
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "TypeScript", icon: "🔷", category: "frontend" },
    { name: "Next.js", icon: "▲", category: "frontend" },
    { name: "Vue.js", icon: "💚", category: "frontend" },
    { name: "JavaScript", icon: "🟨", category: "frontend" },
    { name: "HTML5", icon: "🟧", category: "frontend" },
    { name: "CSS3", icon: "🔵", category: "frontend" },
    { name: "Tailwind", icon: "🌊", category: "frontend" },
    { name: "Sass", icon: "🎨", category: "frontend" },
    
    // Tools & Technologies
    { name: "Git", icon: "🌿", category: "tools" },
    { name: "Webpack", icon: "📦", category: "tools" },
    { name: "Vite", icon: "⚡", category: "tools" },
    { name: "ESLint", icon: "📏", category: "tools" },
    { name: "Prettier", icon: "✨", category: "tools" },
    { name: "Figma", icon: "🎨", category: "tools" },
    { name: "VS Code", icon: "💙", category: "tools" },
    
    // Libraries & Frameworks
    { name: "Redux", icon: "🔄", category: "libraries" },
    { name: "Zustand", icon: "🐻", category: "libraries" },
    { name: "React Query", icon: "🔍", category: "libraries" },
    { name: "Framer Motion", icon: "🎭", category: "libraries" },
    { name: "Three.js", icon: "🎲", category: "libraries" },
    { name: "D3.js", icon: "📊", category: "libraries" },
    { name: "Chart.js", icon: "📈", category: "libraries" },
    
    // Backend & Database
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Express", icon: "🚂", category: "backend" },
    { name: "MongoDB", icon: "🍃", category: "backend" },
    { name: "PostgreSQL", icon: "🐘", category: "backend" },
    { name: "Firebase", icon: "🔥", category: "backend" },
    { name: "Supabase", icon: "⚡", category: "backend" },
    { name: "GraphQL", icon: "🎯", category: "backend" },
    { name: "REST APIs", icon: "🔌", category: "backend" }
  ];

  // Create multiple arrays for continuous scrolling
  const createMarqueeRows = () => {
    const rows = [];
    const skillsPerRow = 8;
    
    for (let i = 0; i < skillsData.length; i += skillsPerRow) {
      const rowSkills = skillsData.slice(i, i + skillsPerRow);
      rows.push(rowSkills);
    }
    
    return rows;
  };

  const marqueeRows = createMarqueeRows();

  return (
    <section id="skills" className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="space-y-8">
          {marqueeRows.map((rowSkills, rowIndex) => (
            <div 
              key={rowIndex} 
              className="relative overflow-hidden"
            >
              <div 
                className={`flex gap-6 animate-marquee ${
                  rowIndex % 2 === 1 ? 'animate-marquee-reverse' : ''
                }`}
                style={{
                  animationDuration: '30s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              >
                {/* Original set */}
                {[...rowSkills, ...rowSkills, ...rowSkills].map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    style={{ minWidth: '200px' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <div>
                        <div className="text-sm">{skill.name}</div>
                        <Badge 
                          variant="outline" 
                          className="text-xs mt-1 capitalize"
                        >
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories Summary */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="mb-2">Frontend</h3>
            <p className="text-sm text-muted-foreground">
              Modern frameworks and libraries for building user interfaces
            </p>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-2">🛠️</div>
            <h3 className="mb-2">Tools</h3>
            <p className="text-sm text-muted-foreground">
              Development tools and workflows for efficient coding
            </p>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-2">📚</div>
            <h3 className="mb-2">Libraries</h3>
            <p className="text-sm text-muted-foreground">
              Specialized libraries for enhanced functionality
            </p>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="mb-2">Backend</h3>
            <p className="text-sm text-muted-foreground">
              Server-side technologies and database management
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
}