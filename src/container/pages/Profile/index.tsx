import React from 'react';
import { useUserStore } from '../../../container/app/userStore';
import { Button, InputField } from '../../../components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const profileSchema = z.object({
  displayName: z.string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must be less than 20 characters" }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfilePage: React.FC = () => {
  const { user, setAuth, token } = useUserStore();
  
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
    if (user && token) {
       // Update internal state
       setAuth({ ...user, username: data.displayName }, token);
       await new Promise(r => setTimeout(r, 1000));
    }
  };

  return (
    <div className="max-w-3xl mx-auto pt-4 font-mono">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-10 uppercase tracking-tighter italic">
        // IDENTITY_MANAGEMENT
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[12px_12px_0_0_rgba(0,0,0,0.1)]">
        {/* Profile Card Sidebar */}
        <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-slate-900 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 border-4 border-slate-900 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 mb-6 flex items-center justify-center text-5xl font-black text-slate-900 dark:text-white relative">
              {user?.username?.[0] || '?'}
              <div className="absolute bottom-[-10px] right-[-10px] w-6 h-6 bg-[#ff5f00] border-4 border-white dark:border-slate-950" />
            </div>
            
            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase leading-tight">{user?.username || 'GUEST_USER'}</h2>
            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">ID: 0x241285</div>
            
            <div className="mt-6 w-full py-2 bg-emerald-500/10 border-2 border-emerald-500/30 text-[10px] font-black text-emerald-600">
              AUTH_STATUS: VERIFIED
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-2 p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-dashed border-slate-300 dark:border-slate-700 pb-2">
                <span className="text-[10px] font-black text-slate-500">EMAIL_LINK</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{user?.email}</span>
              </div>
              <div className="flex justify-between items-center border-b border-dashed border-slate-300 dark:border-slate-700 pb-2">
                <span className="text-[10px] font-black text-slate-500">ACCESS_CLEARANCE</span>
                <span className="text-sm font-bold text-[#ff5f00] uppercase tracking-tighter">{user?.role}</span>
              </div>
            </div>

            <InputField 
              label="Operator_Alias"
              error={errors.displayName?.message}
              {...register('displayName')}
            />
            
            <Button 
              type="submit" 
              isLoading={isSubmitting} 
              className="w-full"
            >
              Update_System_Profile
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
