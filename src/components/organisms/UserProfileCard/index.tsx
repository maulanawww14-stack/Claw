import React from 'react';
import { Button, TextStyle, Icon, Grid } from '../../atoms';
import { SocialShare } from '../../molecules';

interface UserProfileCardProps {
  username: string;
  email: string;
  role: string;
  avatar?: string;
  coverImage?: string;
  stats: { label: string; value: string | number }[];
  bio: string;
  onEdit?: () => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  username,
  email,
  role,
  avatar,
  coverImage,
  stats,
  bio,
  onEdit
}) => {
  return (
    <div className="font-mono border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-[12px_12px_0_0_#ff5f00]">
      {/* Cover Area */}
      <div className="h-48 bg-slate-200 dark:bg-slate-800 relative">
        {coverImage ? (
          <img src={coverImage} alt="Cover" className="w-full h-full object-cover grayscale opacity-50" />
        ) : (
          <div className="industrial-grid h-full opacity-10" />
        )}
        <div className="absolute top-4 right-4">
           <Button variant="secondary" size="sm" onClick={onEdit}>Edit_Identity_v1</Button>
        </div>
      </div>

      <div className="p-10 -mt-24 relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-8 mb-12 pb-12 border-b-2 border-slate-200 dark:border-slate-800">
           {/* Avatar */}
           <div className="w-40 h-40 border-8 border-white dark:border-slate-900 bg-slate-900 dark:bg-[#ff5f00] flex items-center justify-center text-6xl font-black text-white shadow-2xl relative">
              {avatar ? <img src={avatar} alt="Avatar" className="w-full h-full" /> : username[0]}
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-emerald-500 border-4 border-white dark:border-slate-900 rounded-full animate-pulse" />
           </div>

           <div className="flex-1 space-y-2 mb-4">
              <div className="flex items-center gap-3">
                 <TextStyle variant="h2" weight="black" className="tracking-tighter uppercase">{username}</TextStyle>
                 <div className="px-3 py-1 bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-black uppercase">Level_04</div>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs leading-none">{role} // {email}</p>
           </div>
           
           <div className="mb-4">
              <SocialShare url="#" title="Operator Profile" platforms={['twitter', 'github', 'copy']} />
           </div>
        </div>

        <Grid cols={2} gap={8}>
           <div className="space-y-6">
              <TextStyle variant="caption" className="text-[#ff5f00]">OPERATOR_BIOGRAPHY</TextStyle>
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-relaxed uppercase">
                 // [LOG]: {bio}
              </p>
           </div>

           <div className="grid grid-cols-2 gap-4">
              {stats.map(stat => (
                <div key={stat.label} className="p-6 border-2 border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">{stat.label}</p>
                   <div className="text-3xl font-black text-slate-900 dark:text-white leading-none">{stat.value}</div>
                </div>
              ))}
           </div>
        </Grid>
      </div>
    </div>
  );
};

export default UserProfileCard;
