import React from 'react';
import { Share2, Twitter, Linkedin, Facebook, Github, Link } from 'lucide-react';
import { Icon } from '../../atoms';

interface SocialShareProps {
  url: string;
  title: string;
  platforms?: ('twitter' | 'linkedin' | 'facebook' | 'github' | 'copy')[];
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  url, 
  title, 
  platforms = ['twitter', 'linkedin', 'copy'],
  className = '' 
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert('SYSTEM_MSG: LINK_COPIED_TO_CLIPBOARD');
  };

  const socialLinks = {
    twitter: { icon: 'Twitter', url: `https://twitter.com/intent/tweet?text=${title}&url=${url}` },
    linkedin: { icon: 'Linkedin', url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}` },
    facebook: { icon: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    github: { icon: 'Github', url: `https://github.com` },
  };

  return (
    <div className={`flex items-center gap-2 font-mono ${className}`}>
      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mr-2 underline decoration-[#ff5f00] decoration-2 underline-offset-4">
        Deploy_Asset:
      </span>
      
      {platforms.map((p) => (
        p === 'copy' ? (
          <button 
            key={p}
            onClick={handleCopy}
            className="w-8 h-8 flex items-center justify-center border-2 border-slate-300 dark:border-slate-800 hover:border-[#ff5f00] transition-colors group"
          >
            <Icon name="Link" size={14} className="group-hover:text-[#ff5f00]" />
          </button>
        ) : (
          <a 
            key={p}
            href={socialLinks[p as keyof typeof socialLinks].url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border-2 border-slate-300 dark:border-slate-800 hover:border-[#ff5f00] transition-colors group"
          >
            <Icon name={socialLinks[p as keyof typeof socialLinks].icon as any} size={14} className="group-hover:text-[#ff5f00]" />
          </a>
        )
      ))}
    </div>
  );
};

export default SocialShare;
