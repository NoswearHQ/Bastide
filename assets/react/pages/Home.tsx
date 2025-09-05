import { Section } from "@/components/ui/section";
import { MedicalCard } from "@/components/ui/medical-card";
import HeroSection from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Heart, Shield, Award, Users, 
  Microscope, Stethoscope, Brain, Activity,
  Calendar, Clock, Star, ChevronRight
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Consultation médicale",
      description: "Médecins spécialistes qualifiés pour un diagnostic précis et un suivi personnalisé.",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Analyses biologiques",
      description: "Laboratoire équipé des dernières technologies pour des résultats rapides et fiables.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Imagerie médicale",
      description: "IRM, Scanner, Radiologie avec interprétation par des radiologues expérimentés.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Kinésithérapie",
      description: "Rééducation et soins adaptés pour retrouver mobilité et bien-être.",
    },
  ];

  const products = [
    {
      name: "Pack Prévention Santé",
      price: "149€",
      features: ["Bilan complet", "Consultation", "Suivi 3 mois"],
      badge: "Populaire",
    },
    {
      name: "Check-up Premium",
      price: "299€",
      features: ["Analyses approfondies", "IRM", "Consultation spécialiste"],
      badge: "Recommandé",
    },
    {
      name: "Suivi Sportif Pro",
      price: "199€",
      features: ["Test d'effort", "Nutrition", "Programme personnalisé"],
    },
  ];

  const news = [
    {
      date: "15 Nov 2024",
      category: "Innovation",
      title: "Nouvelle technologie IRM 3 Tesla",
      excerpt: "Découvrez notre nouvel équipement de pointe pour des diagnostics encore plus précis.",
    },
    {
      date: "10 Nov 2024",
      category: "Prévention",
      title: "Campagne de vaccination hivernale",
      excerpt: "Protégez-vous contre la grippe saisonnière avec notre programme de vaccination.",
    },
    {
      date: "5 Nov 2024",
      category: "Événement",
      title: "Journée portes ouvertes",
      excerpt: "Venez découvrir nos installations et rencontrer notre équipe médicale.",
    },
  ];

  const engagements = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Écoute et bienveillance",
      description: "Une approche humaine et personnalisée pour chaque patient.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité maximale",
      description: "Protocoles stricts et équipements certifiés aux normes les plus élevées.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence médicale",
      description: "Une équipe de professionnels hautement qualifiés et expérimentés.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibilité pour tous",
      description: "Des soins de qualité accessibles et adaptés à chaque situation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Services Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nos services médicaux
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour prendre soin de votre santé avec excellence et professionnalisme
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <MedicalCard key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary-foreground">{service.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <Link 
                to="/services" 
                className="text-primary hover:text-primary-hover text-sm font-medium inline-flex items-center group"
              >
                En savoir plus
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-base" />
              </Link>
            </MedicalCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Products Section */}
      <Section>
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nos formules santé
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins et votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <MedicalCard 
              key={index} 
              className="relative animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full gradient-primary hover:shadow-hover">
                  Choisir cette formule
                </Button>
              </div>
            </MedicalCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link to="/produits">
              Découvrir toutes nos formules
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* News Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Actualités & Événements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informé des dernières nouveautés de notre établissement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <MedicalCard 
              key={index} 
              className="animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {article.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
              <Link 
                to="/actualites" 
                className="text-primary hover:text-primary-hover text-sm font-medium inline-flex items-center group"
              >
                Lire la suite
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-base" />
              </Link>
            </MedicalCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link to="/actualites">
              Toutes les actualités
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Engagements Section */}
      <Section>
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nos engagements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des valeurs fortes pour vous garantir les meilleurs soins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((engagement, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-secondary-foreground">{engagement.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{engagement.title}</h3>
              <p className="text-sm text-muted-foreground">{engagement.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link to="/engagements">
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prenez soin de votre santé dès aujourd'hui
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre parcours de soins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">
                <Clock className="mr-2 h-4 w-4" />
                Prendre rendez-vous
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="tel:+33140506070">
                Appelez-nous maintenant
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;