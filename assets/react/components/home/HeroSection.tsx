import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-primary-light via-background to-secondary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Excellence et innovation
              <span className="text-primary"> en santé</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Votre partenaire de confiance pour des soins médicaux et paramédicaux 
              d'exception. Plus de 20 ans d'expertise au service de votre bien-être.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-hover transition-base group"
                asChild
              >
                <Link to="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-base" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2"
                asChild
              >
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction client</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
                <p className="text-2xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Années d'expertise</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-2xl font-bold text-foreground">15k+</p>
                <p className="text-sm text-muted-foreground">Patients satisfaits</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-serif font-bold text-foreground mb-2">Medical Premium</p>
                  <p className="text-muted-foreground">Excellence en santé</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;