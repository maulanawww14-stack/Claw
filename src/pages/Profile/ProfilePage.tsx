import React from 'react';
import { useUserStore } from '../../store/userStore';
import Button from '../../components/common/Button';
import InputField from '../../components/forms/InputField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define validation schema
const profileSchema = z.object({
  displayName: z.string()
    .min(3, { message: "Display name must be at least 3 characters" })
    .max(20, { message: "Display name must be less than 20 characters" }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfilePage: React.FC = () => {
  const { username, login } = useUserStore();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: username || '',
    }
  });

  const onSubmit = (data: ProfileFormData) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        login(data.displayName);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="max-w-2xl mx-auto pt-10 px-6">
      <h1 className="text-4xl font-black text-white mb-10 uppercase tracking-tight">User Profile</h1>
      
      <div className="p-10 border border-slate-800 bg-slate-800/40 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500" />
        
        <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-800/50">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-blue-500/20 border-4 border-slate-700">
            {username?.[0] || '?'}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white leading-tight">{username || 'Guest Identity'}</h2>
            <p className="text-sm font-bold text-blue-500 uppercase tracking-widest">Developer Access</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField 
            label="Display Name"
            placeholder="Update your name..."
            error={errors.displayName?.message}
            {...register('displayName')}
          />
          
          <Button 
            type="submit" 
            isLoading={isSubmitting} 
            className="w-full"
          >
            Update Identity
          </Button>
        </form>
      </div>

      <div className="mt-8 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
        <p className="text-sm text-slate-400">
          <span className="text-blue-400 font-bold">INFO:</span> Form ini divalidasi menggunakan <span className="text-white font-mono text-xs">Zod</span> dan diproses oleh <span className="text-white font-mono text-xs">React Hook Form</span>.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
