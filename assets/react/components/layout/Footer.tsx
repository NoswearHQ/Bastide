import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MP</span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold">Medical Premium</h3>
                <p className="text-xs text-muted-foreground">Excellence en santé</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Votre partenaire santé de confiance depuis plus de 20 ans. 
              Nous offrons des services médicaux et paramédicaux de haute qualité.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-base">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-base">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-base">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-base">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/actualites" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/engagements" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Nos engagements
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Nos produits
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Nos services
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Consultation médicale
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Analyses biologiques
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Imagerie médicale
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Kinésithérapie
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Nutrition
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  Téléconsultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  42 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+33140506070" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  01 40 50 60 70
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@medical-premium.fr" className="text-sm text-muted-foreground hover:text-primary transition-base">
                  contact@medical-premium.fr
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Lun - Ven : 9h00 - 18h00</p>
                  <p>Sam : 9h00 - 13h00</p>
                  <p>Dim : Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto container-padding py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 Medical Premium. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                CGV
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                CGU
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-base">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;