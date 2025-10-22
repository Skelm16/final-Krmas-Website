import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, Instagram, MessageCircle, Wrench, User, Target, Shield, Zap } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Initialize tsParticles
    const loadParticles = async () => {
      if ((window as any).tsParticles) {
        await (window as any).tsParticles.load("particles-hero", {
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 3 },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.25,
              opacity: 0.25,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 140,
              value: 140,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        });
      } else {
        console.warn("tsParticles CDN not loaded. Check network or switch to npm package (particles.js.org)");
      }
    };

    loadParticles();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold tracking-tight">KRMA</div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="hover:text-accent transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-accent transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="hover:text-accent transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors">
                About
              </button>
              <Button 
                size="sm" 
                variant="secondary" 
                asChild
                className="bg-white text-black hover:bg-gray-100"
              >
                <a href="https://wa.me/919445582870" target="_blank" rel="noopener noreferrer">
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div id="particles-hero" className="absolute inset-0 z-10"></div>
        <div className="hero-gradient absolute inset-0 z-0 pointer-events-none"></div>
        <div className="section-container relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            KRMA • Krish's AI Agency
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground">
            Future-Proof Your Business with AI Automation
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-muted-foreground">
            From voice assistants to chatbots, we help businesses scale faster, smarter, and 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" variant="secondary" asChild className="px-8 bg-white text-black hover:bg-gray-100">
              <a href="https://wa.me/919445582870" target="_blank" rel="noopener noreferrer">Let's Talk</a>
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="px-8">
              View Services
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Work directly with Krish — no handoffs, just results in weeks.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical automations that save time, capture leads, and boost revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <Phone className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">AI Voice Assistant (Phone Calls)</h3>
              <p className="text-muted-foreground mb-4">
                Automate customer calls with lifelike AI agents that sound human, answer FAQs, collect leads, and set appointments.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Natural, human-like voice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Lead capture & qualification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Calendar booking & CRM notes</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <MessageSquare className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">WhatsApp Automation</h3>
              <p className="text-muted-foreground mb-4">
                Smart bots that reply instantly, handle customer queries, send updates, and increase conversions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Instant replies 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Broadcast updates & reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Seamless handoff to human</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <Instagram className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Instagram & Facebook Automation</h3>
              <p className="text-muted-foreground mb-4">
                AI-powered chatbots that engage followers, boost sales, and handle DMs automatically.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Auto-reply to DMs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Product Q&A & sales flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Giveaways & lead magnets</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <MessageCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Website AI Chatbot</h3>
              <p className="text-muted-foreground mb-4">
                A 24/7 intelligent assistant on your site that answers questions, captures leads, and improves customer experience.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Site search & FAQs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Lead forms & email capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Analytics & improvement loops</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <Wrench className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Custom AI Projects</h3>
              <p className="text-muted-foreground mb-4">
                Need something unique? We build tailored AI solutions for your business workflow.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Bespoke workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>System integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Security & guardrails</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose KRMA Section */}
      <section className="section-padding bg-secondary/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose KRMA</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Work directly with Krish for fast, personal delivery using cutting-edge tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <User className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Personal, one-on-one</h3>
              <p className="text-muted-foreground">
                You deal directly with Krish—no handoffs or layers.
              </p>
            </div>

            <div className="text-center">
              <Target className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Affordable monthly</h3>
              <p className="text-muted-foreground">
                Simple plans aligned to outcomes—not billable hours.
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Cutting-edge stack</h3>
              <p className="text-muted-foreground">
                Voice AI, ElevenLabs, and automation workflows built-in.
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Proven impact</h3>
              <p className="text-muted-foreground">
                Save time, increase leads, and boost revenue within weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-xl text-muted-foreground">What clients say</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <p className="text-lg mb-6 italic">
                "Their team shipped a compliant, production-grade LLM workflow in weeks. The assessment rigor and UX polish stood out."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  ER
                </div>
                <div>
                  <p className="font-bold">Elena Rossi</p>
                  <p className="text-sm text-muted-foreground">VP Product at FinEdge</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <p className="text-lg mb-6 italic">
                "A rare blend of research depth and engineering execution. They helped us reduce inference costs by 42% while improving quality."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  DK
                </div>
                <div>
                  <p className="font-bold">David Kim</p>
                  <p className="text-sm text-muted-foreground">CTO at NovaHealth</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About KRMA</h2>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg mb-6">
              <strong>Hi, I'm Krish.</strong> I started KRMA to help businesses harness the power of AI without the complexity. With years of experience in automation and AI development, I've seen firsthand how the right solutions can transform operations, boost efficiency, and drive growth.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Our Story & Mission:</strong> KRMA was born from a simple belief: AI should be accessible, practical, and deliver real results. We're not about flashy tech for the sake of it. We focus on building tools that solve real problems—whether it's saving your team hours each week, capturing more leads, or improving customer satisfaction. Our mission is to make AI work for you, seamlessly and affordably.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Values & Approach</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">Human-centered</h4>
                <p className="text-muted-foreground text-sm">
                  Technology should serve people, not replace them
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">Evidence-driven</h4>
                <p className="text-muted-foreground text-sm">
                  Every solution backed by data and proven results
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">Secure-by-default</h4>
                <p className="text-muted-foreground text-sm">
                  Security and privacy built into every project
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">Production-first</h4>
                <p className="text-muted-foreground text-sm">
                  Built to scale from day one, not just prototypes
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">KS</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Krish Gobind Sriram</h4>
                  <p className="text-primary mb-4">Founder, Owner & AI Automation Specialist</p>
                  <p className="text-muted-foreground">
                    Passionate about leveraging AI to solve real business challenges. With a background in software engineering and machine learning, Krish brings both technical expertise and a deep understanding of business needs to every project. When not building AI solutions, you'll find him exploring the latest developments in the AI space or consulting with businesses on their automation journey.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a free demo call and see what KRMA can do for you.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild
            className="px-12 text-lg h-14"
          >
            <a href="https://wa.me/919445582870" target="_blank" rel="noopener noreferrer">
              Book a Free Demo Call
            </a>
          </Button>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">KRMA</h3>
              <p className="text-sm text-muted-foreground">
                AI Automation Agency helping businesses scale with intelligent solutions.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AI Voice Assistant</li>
                <li>WhatsApp Automation</li>
                <li>Instagram & Facebook Automation</li>
                <li>Website AI Chatbot</li>
                <li>Custom AI Projects</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>krishgobindsriram16@gmail.com</li>
                <li>+91 9445582870</li>
                <li>Chennai, India (IST)</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} KRMA AI Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
