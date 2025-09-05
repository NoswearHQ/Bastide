import { Section } from "@/components/ui/section";
import { MedicalCard } from "@/components/ui/medical-card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, Filter, Star, ShoppingCart, Check, 
  Heart, Brain, Activity, Shield, Users, Zap 
} from "lucide-react";
import { useState } from "react";

const Produits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Pack Prévention Santé",
      category: "prevention",
      price: 149,
      originalPrice: 199,
      badge: "Populaire",
      rating: 4.8,
      reviews: 124,
      features: [
        "Bilan sanguin complet",
        "Consultation médecin généraliste",
        "Suivi personnalisé 3 mois",
        "Conseils nutritionnels",
      ],
      icon: <Shield className="w-8 h-8" />,
    },
    {
      id: 2,
      name: "Check-up Premium",
      category: "checkup",
      price: 299,
      originalPrice: 399,
      badge: "Recommandé",
      rating: 4.9,
      reviews: 89,
      features: [
        "Analyses biologiques approfondies",
        "IRM corps entier",
        "Consultation spécialiste",
        "Rapport détaillé",
      ],
      icon: <Star className="w-8 h-8" />,
    },
    {
      id: 3,
      name: "Suivi Sportif Pro",
      category: "sport",
      price: 199,
      rating: 4.7,
      reviews: 67,
      features: [
        "Test d'effort cardiaque",
        "Analyse de la composition corporelle",
        "Programme nutritionnel",
        "Suivi kinésithérapeute",
      ],
      icon: <Activity className="w-8 h-8" />,
    },
    {
      id: 4,
      name: "Bilan Senior Plus",
      category: "senior",
      price: 249,
      badge: "Nouveau",
      rating: 4.8,
      reviews: 45,
      features: [
        "Bilan mémoire",
        "Dépistage ostéoporose",
        "Bilan cardiovasculaire",
        "Consultation gériatre",
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 5,
      name: "Forfait Maternité",
      category: "maternite",
      price: 399,
      rating: 5.0,
      reviews: 156,
      features: [
        "Suivi grossesse complet",
        "Échographies 3D/4D",
        "Préparation accouchement",
        "Consultation sage-femme",
      ],
      icon: <Heart className="w-8 h-8" />,
    },
    {
      id: 6,
      name: "Bilan Stress & Sommeil",
      category: "bien-etre",
      price: 179,
      rating: 4.6,
      reviews: 92,
      features: [
        "Analyse du sommeil",
        "Bilan hormonal stress",
        "Consultation psychologue",
        "Programme relaxation",
      ],
      icon: <Brain className="w-8 h-8" />,
    },
    {
      id: 7,
      name: "Pack Urgence 24/7",
      category: "urgence",
      price: 89,
      originalPrice: 129,
      badge: "Promo",
      rating: 4.9,
      reviews: 203,
      features: [
        "Accès prioritaire urgences",
        "Téléconsultation illimitée",
        "Hotline médicale 24/7",
        "Couverture famille",
      ],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: 8,
      name: "Bilan Nutrition Expert",
      category: "nutrition",
      price: 159,
      rating: 4.7,
      reviews: 78,
      features: [
        "Analyse micronutriments",
        "Test intolérances alimentaires",
        "Plan alimentaire personnalisé",
        "Suivi diététicien 6 mois",
      ],
      icon: <Activity className="w-8 h-8" />,
    },
  ];

  const categories = [
    { value: "all", label: "Toutes catégories" },
    { value: "prevention", label: "Prévention" },
    { value: "checkup", label: "Check-up" },
    { value: "sport", label: "Sport" },
    { value: "senior", label: "Senior" },
    { value: "maternite", label: "Maternité" },
    { value: "bien-etre", label: "Bien-être" },
    { value: "urgence", label: "Urgence" },
    { value: "nutrition", label: "Nutrition" },
  ];

  const priceRanges = [
    { value: "all", label: "Tous les prix" },
    { value: "0-100", label: "Moins de 100€" },
    { value: "100-200", label: "100€ - 200€" },
    { value: "200-300", label: "200€ - 300€" },
    { value: "300+", label: "Plus de 300€" },
  ];

  // Filter products
  let filteredProducts = products;
  
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }
  
  if (categoryFilter !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
  }
  
  if (priceFilter !== "all") {
    filteredProducts = filteredProducts.filter(p => {
      if (priceFilter === "300+") return p.price >= 300;
      if (priceFilter === "0-100") return p.price < 100;
      if (priceFilter === "100-200") return p.price >= 100 && p.price <= 200;
      if (priceFilter === "200-300") return p.price >= 200 && p.price <= 300;
      return true;
    });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light via-background to-muted py-20">
        <div className="container mx-auto container-padding">
          <BreadcrumbNav items={[{ label: "Produits" }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-up">
            Nos formules santé
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-up">
            Des solutions complètes et personnalisées pour prendre soin de votre santé 
            à chaque étape de votre vie.
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <Section className="py-8 bg-muted/30">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <Label htmlFor="search" className="sr-only">Rechercher</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="w-full lg:w-48">
            <Label htmlFor="category" className="sr-only">Catégorie</Label>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger id="category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Filter */}
          <div className="w-full lg:w-48">
            <Label htmlFor="price" className="sr-only">Prix</Label>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger id="price">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filter Button */}
          <Button variant="outline" className="w-full lg:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Plus de filtres
          </Button>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          {filteredProducts.length} produit(s) trouvé(s)
        </div>
      </Section>

      {/* Products Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <MedicalCard
              key={product.id}
              className="relative flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {product.badge}
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-foreground">{product.icon}</div>
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-primary">{product.price}€</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}€
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="space-y-2">
                <Button className="w-full gradient-primary hover:shadow-hover">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ajouter au panier
                </Button>
                <Button variant="outline" className="w-full">
                  En savoir plus
                </Button>
              </div>
            </MedicalCard>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Charger plus de produits
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Produits;