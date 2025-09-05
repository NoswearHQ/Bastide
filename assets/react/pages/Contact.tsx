import { Section } from "@/components/ui/section";
import { MedicalCard } from "@/components/ui/medical-card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  MessageSquare, Calendar, Users, Info 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      content: ["42 Avenue des Champs-Élysées", "75008 Paris, France"],
      link: "https://maps.google.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      content: ["01 40 50 60 70", "Urgences : 01 40 50 60 99"],
      link: "tel:+33140506070",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: ["contact@medical-premium.fr", "rdv@medical-premium.fr"],
      link: "mailto:contact@medical-premium.fr",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      content: ["Lun-Ven : 9h00 - 18h00", "Sam : 9h00 - 13h00", "Dim : Fermé"],
    },
  ];

  const departments = [
    { icon: <Calendar />, name: "Prise de RDV", phone: "01 40 50 60 71" },
    { icon: <MessageSquare />, name: "Service client", phone: "01 40 50 60 72" },
    { icon: <Users />, name: "Ressources humaines", phone: "01 40 50 60 73" },
    { icon: <Info />, name: "Informations générales", phone: "01 40 50 60 70" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-light via-background to-secondary-light py-20">
        <div className="container mx-auto container-padding">
          <BreadcrumbNav items={[{ label: "Contact" }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-up">
            Contactez-nous
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-up">
            Notre équipe est à votre écoute pour répondre à toutes vos questions 
            et vous accompagner dans votre parcours de soins.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <Section className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <MedicalCard
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-foreground">{info.icon}</div>
              </div>
              <h3 className="font-semibold mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.content.map((line, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    {info.link && idx === 0 ? (
                      <a 
                        href={info.link}
                        className="hover:text-primary transition-base"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            </MedicalCard>
          ))}
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section className="bg-muted/30">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean.dupont@email.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger id="subject" className="mt-1">
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appointment">Prise de rendez-vous</SelectItem>
                      <SelectItem value="information">Demande d'information</SelectItem>
                      <SelectItem value="complaint">Réclamation</SelectItem>
                      <SelectItem value="partnership">Partenariat</SelectItem>
                      <SelectItem value="recruitment">Recrutement</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre demande en détail..."
                  className="mt-1 min-h-[150px]"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 mr-2"
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground">
                  J'accepte que mes données soient utilisées pour traiter ma demande 
                  conformément à notre politique de confidentialité.
                </Label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gradient-primary hover:shadow-hover"
              >
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            {/* Map Placeholder */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Nous trouver</h3>
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">Plan interactif</p>
                  <p className="text-sm text-muted-foreground">
                    42 Avenue des Champs-Élysées<br />
                    75008 Paris
                  </p>
                  <Button variant="outline" className="mt-4">
                    Ouvrir dans Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacts directs</h3>
              <div className="space-y-3">
                {departments.map((dept, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-base"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="text-primary">{dept.icon}</div>
                      </div>
                      <span className="font-medium">{dept.name}</span>
                    </div>
                    <a 
                      href={`tel:${dept.phone.replace(/\s/g, '')}`}
                      className="text-primary hover:text-primary-hover font-medium transition-base"
                    >
                      {dept.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Transport Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Accès & Transport</h3>
              <div className="bg-card rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">M</span>
                  </div>
                  <div>
                    <p className="font-medium">Métro</p>
                    <p className="text-sm text-muted-foreground">
                      Ligne 1 : George V (5 min à pied)<br />
                      Ligne 9 : Alma-Marceau (7 min à pied)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">B</span>
                  </div>
                  <div>
                    <p className="font-medium">Bus</p>
                    <p className="text-sm text-muted-foreground">
                      Lignes 28, 42, 73, 80, 83, 93
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">P</span>
                  </div>
                  <div>
                    <p className="font-medium">Parking</p>
                    <p className="text-sm text-muted-foreground">
                      Parking gratuit 150 places<br />
                      Places PMR disponibles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;