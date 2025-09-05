import { Section } from "@/components/ui/section";
import { MedicalCard } from "@/components/ui/medical-card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";

const Actualites = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "Toutes" },
    { value: "innovation", label: "Innovation" },
    { value: "prevention", label: "Prévention" },
    { value: "evenement", label: "Événement" },
    { value: "recherche", label: "Recherche" },
  ];

  const articles = [
    {
      id: 1,
      category: "innovation",
      title: "Nouvelle technologie IRM 3 Tesla : Une révolution dans l'imagerie médicale",
      excerpt: "Notre établissement s'équipe de la toute dernière génération d'IRM 3 Tesla, offrant une résolution d'image exceptionnelle pour des diagnostics encore plus précis.",
      content: "Découvrez comment cette technologie de pointe améliore significativement la qualité des examens et réduit le temps d'acquisition des images...",
      date: "15 Nov 2024",
      author: "Dr. Marie Laurent",
      readTime: "5 min",
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      category: "prevention",
      title: "Campagne de vaccination hivernale 2024-2025",
      excerpt: "Protégez-vous contre la grippe saisonnière et les virus hivernaux. Notre programme de vaccination est maintenant ouvert.",
      content: "La vaccination reste le moyen le plus efficace de se protéger contre les virus saisonniers...",
      date: "10 Nov 2024",
      author: "Dr. Pierre Dubois",
      readTime: "3 min",
      image: "/placeholder.jpg",
    },
    {
      id: 3,
      category: "evenement",
      title: "Journée portes ouvertes : Découvrez nos installations",
      excerpt: "Le 25 novembre, venez découvrir nos installations ultramodernes et rencontrer notre équipe médicale.",
      content: "Une occasion unique de visiter nos services et d'échanger avec nos professionnels de santé...",
      date: "5 Nov 2024",
      author: "Direction Medical Premium",
      readTime: "2 min",
      image: "/placeholder.jpg",
    },
    {
      id: 4,
      category: "recherche",
      title: "Participation à l'étude clinique internationale sur le diabète",
      excerpt: "Notre centre participe à une étude majeure sur les nouvelles approches thérapeutiques du diabète de type 2.",
      content: "Cette recherche vise à développer des traitements plus personnalisés et efficaces...",
      date: "1 Nov 2024",
      author: "Pr. Sophie Martin",
      readTime: "7 min",
      image: "/placeholder.jpg",
    },
    {
      id: 5,
      category: "innovation",
      title: "Téléconsultation : Bilan après 6 mois de service",
      excerpt: "Plus de 1000 consultations réalisées à distance avec un taux de satisfaction de 95%.",
      content: "Le service de téléconsultation lancé en mai dernier rencontre un franc succès...",
      date: "28 Oct 2024",
      author: "Dr. Jean Moreau",
      readTime: "4 min",
      image: "/placeholder.jpg",
    },
    {
      id: 6,
      category: "prevention",
      title: "Octobre Rose : Dépistage gratuit du cancer du sein",
      excerpt: "Dans le cadre d'Octobre Rose, notre centre propose des dépistages gratuits tout le mois.",
      content: "Le dépistage précoce augmente considérablement les chances de guérison...",
      date: "20 Oct 2024",
      author: "Dr. Claire Rousseau",
      readTime: "6 min",
      image: "/placeholder.jpg",
    },
  ];

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light via-background to-muted py-20">
        <div className="container mx-auto container-padding">
          <BreadcrumbNav items={[{ label: "Actualités" }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-up">
            Actualités & Événements
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-up">
            Restez informé des dernières avancées médicales, de nos événements et des conseils 
            santé de nos experts.
          </p>
        </div>
      </div>

      {/* Filters */}
      <Section className="py-8 border-b">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className={selectedCategory === category.value ? "gradient-primary" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </Section>

      {/* Articles Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <MedicalCard 
              key={article.id}
              className="flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                <Tag className="w-12 h-12 text-primary/30" />
              </div>

              {/* Category & Date */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium capitalize">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {article.date}
                </span>
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h2>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {article.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover group">
                  Lire
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-base" />
                </Button>
              </div>
            </MedicalCard>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button variant="outline" size="sm" disabled>
            Précédent
          </Button>
          <Button variant="default" size="sm" className="gradient-primary">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Suivant
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Actualites;