import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, TrendingUp, Cpu, Database, Megaphone, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom artificial intelligence solutions that automate processes, enhance decision-making, and unlock new possibilities for your business.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code,
      title: "Software Solutions",
      description: "End-to-end software development services from web applications to enterprise systems, built with modern technologies and best practices.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that leverage AI and automation to maximize your reach, engagement, and conversion rates.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Marketing Automation"],
      color: "text-tertiary",
      bgColor: "bg-tertiary/10"
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems to enhance performance and unlock new business opportunities.",
      features: ["System Integration", "AI APIs", "Workflow Automation", "Performance Optimization"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence solutions.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Reporting Systems"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Megaphone,
      title: "Growth Strategy",
      description: "Comprehensive growth strategies that combine technology solutions with marketing expertise to scale your business effectively.",
      features: ["Market Analysis", "Growth Hacking", "Conversion Optimization", "Performance Tracking"],
      color: "text-tertiary",
      bgColor: "bg-tertiary/10"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions that bridge the gap between technology 
            and business success, helping you stay ahead in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover-lift bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary">
                    Learn More 
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Let's discuss how our solutions can drive your success and accelerate your growth.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;