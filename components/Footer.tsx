
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cupcake-base200 text-slate-600 py-16 px-6 relative overflow-hidden border-t border-slate-200">
      {/* Visual background element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white text-member1 rounded-xl flex items-center justify-center font-black text-xl shadow-lg border border-slate-100">M</div>
              <span className="text-2xl font-black text-slate-800 tracking-tighter">MIC Studio</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs opacity-80">
              Experts en développement de solutions digitales concrètes. Nous allions rigueur technique et créativité pour transformer vos idées.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-lg hover:bg-member1 hover:text-white transition-all shadow-sm border border-slate-100"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-white rounded-lg hover:bg-member1 hover:text-white transition-all shadow-sm border border-slate-100"><Github size={18} /></a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="space-y-6">
            <h4 className="text-slate-800 font-black text-xs uppercase tracking-[0.2em]">Sitemap</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><Link to="/" className="hover:text-member1 transition-colors">Accueil</Link></li>
              <li><Link to="/epopee" className="hover:text-member1 transition-colors">Notre Épopée</Link></li>
              <li><Link to="/realisations" className="hover:text-member1 transition-colors">Réalisations</Link></li>
              <li><Link to="/equipe" className="hover:text-member1 transition-colors">L'Équipe</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-slate-800 font-black text-xs uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-white rounded-lg group-hover:bg-member3 group-hover:text-white transition-all shadow-sm border border-slate-100"><Mail size={14} /></div>
                <a href="mailto:contact@mic-studio.fr" className="group-hover:text-member1 transition-colors">contact@mic-studio.fr</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-white rounded-lg group-hover:bg-member2 group-hover:text-white transition-all shadow-sm border border-slate-100"><Phone size={14} /></div>
                <a href="tel:+33123456789" className="group-hover:text-member1 transition-colors">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-white rounded-lg group-hover:bg-member1 group-hover:text-white transition-all shadow-sm border border-slate-100"><MapPin size={14} /></div>
                <span className="group-hover:text-slate-800 transition-colors">Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Quote/CTA */}
          <div className="space-y-6">
            <h4 className="text-slate-800 font-black text-xs uppercase tracking-[0.2em]">Vision</h4>
            <p className="text-xs italic leading-relaxed font-medium">
              "La qualité du code et l'expérience utilisateur ne sont pas des options, mais le socle de chaque projet MIC."
            </p>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Statut</span>
              <div className="flex items-center space-x-2 text-emerald-500 text-xs font-bold">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>Disponible pour de nouveaux défis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-black tracking-[0.4em] opacity-40 text-center">
            © 2026 MIC STUDIO 
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Mentions Légales</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
