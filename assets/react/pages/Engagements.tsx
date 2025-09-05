import { Section } from "@/components/ui/section";
import { MedicalCard } from "@/components/ui/medical-card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, Shield, Award, Users, Leaf, Globe, 
  HandHeart, Sparkles, Target, CheckCircle, ArrowRight 
} from "lucide-react";

const Engagements = () => {
  const mainEngagements = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Écoute et bienveillance",
      description: "Une approche humaine et personnalisée pour chaque patient",
      details: [
        "Temps de consultation adapté à vos besoins",
        "Suivi personnalisé et régulier",
        "Équipe formée à l'écoute active",
        "Respect de votre intimité et confidentialité",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité maximale",
      description: "Protocoles stricts et équipements certifiés",
      details: [
        "Certification ISO 9001 et HAS",
        "Protocoles d'hygiène renforcés",
        "Formation continue du personnel",
        "Matériel médical de dernière génération",
      ],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence médicale",
      description: "Une équipe de professionnels hautement qualifiés",
      details: [
        "Médecins spécialistes reconnus",
        "Formation continue et recherche",
        "Technologies de pointe",
        "Partenariats avec les meilleurs établissements",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accessibilité pour tous",
      description: "Des soins de qualité accessibles à chacun",
      details: [
        "Tarifs transparents et adaptés",
        "Facilités de paiement",
        "Accès PMR complet",
        "Interprètes disponibles sur demande",
      ],
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Développement durable",
      description: "Un engagement fort pour l'environnement",
      details: [
        "Bâtiment basse consommation",
        "Gestion responsable des déchets médicaux",
        "Dématérialisation des documents",
        "Fournisseurs locaux privilégiés",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation continue",
      description: "À la pointe de la technologie médicale",
      details: [
        "Investissement en R&D",
        "Partenariats universitaires",
        "Veille technologique permanente",
        "Formation aux nouvelles pratiques",
      ],
    },
  ];

  const values = [
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Humanité",
      description: "Placer l'humain au cœur de nos préoccupations",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Rechercher constamment l'amélioration de nos pratiques",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Rigueur",
      description: "Maintenir les plus hauts standards de qualité",
    },
  ];

  const certifications = [
    "Certification HAS niveau A",
    "ISO 9001:2015",
    "Label QualiScope",
    "Charte Romain Jacob",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-20">
        <div className="container mx-auto container-padding">
          <BreadcrumbNav items={[{ label: "Engagements" }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-up">
            Nos engagements
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-up">
            Des valeurs fortes et des engagements concrets pour vous garantir une prise en charge 
            d'exception dans un environnement bienveillant et sécurisé.
          </p>
        </div>
      </div>

      {/* Main Engagements Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainEngagements.map((engagement, index) => (
            <MedicalCard 
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="text-primary-foreground">{engagement.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{engagement.title}</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                {engagement.description}
              </p>
              <ul className="space-y-2">
                {engagement.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </MedicalCard>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nos valeurs fondamentales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les principes qui guident chacune de nos actions au quotidien
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-secondary-foreground">{value.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Certifications & Labels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Des certifications reconnues qui attestent de notre excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-sm">{cert}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vous souhaitez en savoir plus sur nos engagements et notre démarche qualité ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary hover:shadow-hover" asChild>
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#">
                Télécharger notre charte
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Engagements;