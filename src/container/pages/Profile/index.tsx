import React from 'react';
import { useUserStore } from '../../../container/app/userStore';
import { Button, InputField } from '../../../components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import authService from '../../../services/authService';

const profileSchema = z.object({
  displayName: z.string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must be less than 20 characters" }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfilePage: React.FC = () => {
  const { user, isLoggedIn, setAuth, clearAuth } = useUserStore();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: user?.username || '',
    }
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      const response = await authService.login(data.displayName);
      setAuth(response.user, response.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    clearAuth();
  };

  return (
    <div className="max-w-2xl mx-auto pt-10 px-6">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-10 uppercase tracking-tight">
        {isLoggedIn ? 'User Profile' : 'Authentication'}
      </h1>
      
      <div className="p-10 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500" />
        
        {isLoggedIn ? (
          <div className="space-y-8">
            <div className="flex items-center gap-6 pb-10 border-b border-slate-200 dark:border-slate-800/50">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-blue-500/20 border-4 border-white dark:border-slate-700">
                {user?.username?.[0] || '?'}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{user?.username}</h2>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">{user?.role} Access</p>
                <p className="text-xs text-slate-400 mt-1">{user?.email}</p>
              </div>
            </div>
            
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <p className="text-sm text-emerald-600 dark:text-emerald-400 text-center font-bold">
                Identity Verified Session Active
              </p>
            </div>

            <Button 
              onClick={handleLogout} 
              variant="danger"
              className="w-full"
            >
              Terminate Session (Logout)
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Identity Required</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Please authenticate to access secure containers.</p>
            </div>

            <InputField 
              label="Username"
              placeholder="e.g. maulanawww14"
              error={errors.displayName?.message}
              className="bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white"
              {...register('displayName')}
            />
            
            <Button 
              type="submit" 
              isLoading={isSubmitting} 
              className="w-full"
            >
              Request Access
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
