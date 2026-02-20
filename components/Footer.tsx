import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, Globe, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-16 px-6 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src='/static/LogoMIC.png' alt='logo' className='w-12 h-12'/>
              <span className="text-2xl font-black text-white tracking-tighter">MIC Studio</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs opacity-70">
              Experts en développement de solutions digitales concrètes. Nous allions rigueur technique et créativité pour transformer vos idées.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-[#746ac8] hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-900 transition-all"><Github size={18} /></a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Sitemap</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><Link to="/" className="hover:text-[var(--p)] transition-colors">Accueil</Link></li>
              <li><Link to="/epopee" className="hover:text-[var(--p)] transition-colors">Notre Épopée</Link></li>
              <li><Link to="/realisation" className="hover:text-[var(--p)] transition-colors">Réalisations</Link></li>
              <li><Link to="/equipe" className="hover:text-[var(--p)] transition-colors">L'Équipe</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-[#4992f1] group-hover:text-white transition-all"><Mail size={14} /></div>
                <a href="mailto:contact@mic-studio.fr" className="group-hover:text-white">contact@mic-studio.fr</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-[#49b4a7] group-hover:text-white transition-all"><Phone size={14} /></div>
                <a href="tel:+33123456789" className="group-hover:text-white">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-[#746ac8] group-hover:text-white transition-all"><MapPin size={14} /></div>
                <span className="group-hover:text-white">Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Quote/CTA */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Vision</h4>
            <p className="text-xs italic leading-relaxed font-medium">
              "La qualité du code et l'expérience utilisateur ne sont pas des options, mais le socle de chaque projet MIC."
            </p>
            <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <span className="text-[10px] font-black uppercase text-white tracking-widest block mb-2">Statut</span>
              <div className="flex items-center space-x-2 text-green-400 text-xs font-bold">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Disponible pour de nouveaux défis</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-black tracking-[0.4em] opacity-30 text-center">
            © 2026 MIC STUDIO // CODE WITH PASSION
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest opacity-30">
            <a href="#" className="hover:opacity-100 transition-opacity">Mentions Légales</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;