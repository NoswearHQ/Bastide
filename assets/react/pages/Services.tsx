import { Section } from "@/components/ui/section";
import { MedicalCard } from "@/components/ui/medical-card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, Microscope, Brain, Activity, Heart, 
  Eye, Baby, Pill, UserCheck, ChevronRight, 
  Clock, MapPin, Phone, Star, CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Consultation médicale",
      description: "Médecine générale et spécialisée",
      details: "Nos médecins généralistes et spécialistes vous accueillent pour des consultations complètes et personnalisées. Diagnostic précis, suivi régulier et orientation vers les examens complémentaires si nécessaire.",
      features: [
        "Médecine générale",
        "Cardiologie",
        "Dermatologie",
        "Gynécologie",
        "Pédiatrie",
        "ORL",
      ],
      price: "À partir de 50€",
      duration: "30-60 min",
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Analyses biologiques",
      description: "Laboratoire d'analyses médicales",
      details: "Laboratoire équipé des dernières technologies pour réaliser tous types d'analyses biologiques avec des résultats rapides et fiables.",
      features: [
        "Hématologie",
        "Biochimie",
        "Immunologie",
        "Microbiologie",
        "Génétique",
        "Hormonologie",
      ],
      price: "Selon prescription",
      duration: "15 min prélèvement",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Imagerie médicale",
      description: "Radiologie et imagerie de pointe",
      details: "Service d'imagerie complet avec IRM 3 Tesla, Scanner dernière génération, échographie et radiologie numérique.",
      features: [
        "IRM 3 Tesla",
        "Scanner 128 barrettes",
        "Échographie 4D",
        "Radiologie numérique",
        "Mammographie",
        "Densitométrie osseuse",
      ],
      price: "Sur devis",
      duration: "20-45 min",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Kinésithérapie",
      description: "Rééducation et réadaptation",
      details: "Centre de kinésithérapie moderne pour la rééducation post-opératoire, traumatologique et le traitement des douleurs chroniques.",
      features: [
        "Rééducation post-opératoire",
        "Traumatologie sportive",
        "Mal de dos",
        "Drainage lymphatique",
        "Physiothérapie",
        "Balnéothérapie",
      ],
      price: "45€ la séance",
      duration: "45 min",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiologie",
      description: "Bilan et suivi cardiaque",
      details: "Service de cardiologie complet pour le dépistage, le diagnostic et le suivi des pathologies cardiovasculaires.",
      features: [
        "ECG",
        "Échographie cardiaque",
        "Test d'effort",
        "Holter ECG 24h",
        "MAPA",
        "Consultation spécialisée",
      ],
      price: "À partir de 80€",
      duration: "45-60 min",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Ophtalmologie",
      description: "Santé visuelle complète",
      details: "Consultations ophtalmologiques complètes avec équipements de dernière génération pour tous les troubles de la vision.",
      features: [
        "Bilan visuel complet",
        "OCT",
        "Champ visuel",
        "Fond d'œil",
        "Adaptation lentilles",
        "Chirurgie réfractive",
      ],
      price: "À partir de 60€",
      duration: "30-45 min",
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Pédiatrie",
      description: "Santé de l'enfant",
      details: "Suivi médical complet de la naissance à l'adolescence avec une approche douce et adaptée aux enfants.",
      features: [
        "Suivi de croissance",
        "Vaccinations",
        "Dépistage précoce",
        "Conseils nutrition",
        "Troubles du développement",
        "Urgences pédiatriques",
      ],
      price: "À partir de 55€",
      duration: "30 min",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Médecine du travail",
      description: "Santé en entreprise",
      details: "Service dédié aux entreprises pour le suivi médical des salariés et la prévention des risques professionnels.",
      features: [
        "Visites médicales",
        "Aptitude au poste",
        "Prévention TMS",
        "Gestion du stress",
        "Vaccinations",
        "Formation SST",
      ],
      price: "Sur contrat",
      duration: "20-30 min",
    },
  ];

  const faqs = [
    {
      question: "Comment prendre rendez-vous ?",
      answer: "Vous pouvez prendre rendez-vous en ligne via notre plateforme, par téléphone au 01 40 50 60 70, ou directement à l'accueil de notre centre. Nous proposons également un service de prise de rendez-vous d'urgence pour les cas nécessitant une consultation rapide.",
    },
    {
      question: "Quels sont les délais pour obtenir un rendez-vous ?",
      answer: "Les délais varient selon les spécialités : consultation de médecine générale sous 48h, spécialistes entre 1 et 3 semaines. Pour les urgences, nous disposons de créneaux dédiés dans la journée.",
    },
    {
      question: "Les consultations sont-elles remboursées ?",
      answer: "Nous sommes conventionnés secteur 2. La Sécurité Sociale rembourse une partie des consultations sur la base du tarif conventionnel. Le complément peut être pris en charge par votre mutuelle selon votre contrat.",
    },
    {
      question: "Proposez-vous la téléconsultation ?",
      answer: "Oui, nous proposons des téléconsultations pour certaines spécialités. Ce service est particulièrement adapté pour le suivi de pathologies chroniques, le renouvellement d'ordonnances ou les consultations de conseil.",
    },
    {
      question: "Comment récupérer mes résultats d'examens ?",
      answer: "Vos résultats sont disponibles sur notre plateforme sécurisée sous 24 à 72h selon les examens. Vous recevez une notification par email ou SMS. Les résultats peuvent également être envoyés directement à votre médecin traitant.",
    },
    {
      question: "Quels documents apporter pour ma première consultation ?",
      answer: "Merci d'apporter votre carte vitale, carte de mutuelle, pièce d'identité, courrier de votre médecin traitant si vous en avez un, et vos examens médicaux récents (analyses, radios, etc.).",
    },
    {
      question: "Disposez-vous d'un parking ?",
      answer: "Oui, un parking gratuit de 150 places est à votre disposition. Des places PMR sont disponibles à proximité immédiate de l'entrée. Un service de voiturier est également proposé pour les personnes à mobilité réduite.",
    },
    {
      question: "Peut-on venir accompagné ?",
      answer: "Bien sûr, vous pouvez venir accompagné. Pour les mineurs, la présence d'un parent ou tuteur légal est obligatoire. Des espaces d'attente confortables sont prévus pour les accompagnants.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light via-background to-muted py-20">
        <div className="container mx-auto container-padding">
          <BreadcrumbNav items={[{ label: "Services" }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-up">
            Nos services médicaux
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-up">
            Une offre complète de soins et d'examens médicaux réalisés par des professionnels 
            expérimentés dans un environnement moderne et accueillant.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <MedicalCard
              key={index}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-base">
                <div className="text-primary-foreground">{service.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {service.duration}
                </span>
                <span className="font-semibold text-primary">{service.price}</span>
              </div>
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-base">
                Découvrir
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </MedicalCard>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">
            Détail de nos prestations
          </h2>
          {services.slice(0, 4).map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary-foreground">{service.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.details}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Informations pratiques</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Durée :</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tarif :</span>
                      <span className="font-medium text-primary">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Disponibilité :</span>
                      <span className="font-medium">Lun-Sam</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 gradient-primary hover:shadow-hover">
                    Prendre RDV
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Vous n'avez pas trouvé la réponse à votre question ?
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Contactez-nous
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;