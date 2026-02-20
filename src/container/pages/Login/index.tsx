import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useLocation } from 'react-router-dom';
import { Terminal, Lock, User, AlertTriangle } from 'lucide-react';
import { useUserStore } from '../../../container/app/userStore';
import { Button, InputField } from '../../../components';
import authService from '../../../services/authService';

const loginSchema = z.object({
  username: z.string().min(3, { message: "IDENTIFIER_TOO_SHORT" }),
  password: z.string().min(6, { message: "PASSWORD_REQUIRED" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const { setAuth } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [authError, setAuthError] = useState<string | null>(null);

  const from = (location.state as any)?.from?.pathname || "/dashboard";

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setAuthError(null);
    try {
      const response = await authService.login(data.username, data.password);
      setAuth(response.user, response.token);
      navigate(from, { replace: true });
    } catch (error: any) {
      setAuthError(error.message || 'AUTHENTICATION_FAILED');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-100 dark:bg-slate-950 font-mono relative overflow-hidden">
      {/* Industrial Background Grid */}
      <div className="absolute inset-0 industrial-grid pointer-events-none opacity-5" />

      <div className="w-full max-w-md relative z-10">
        <div className="border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[16px_16px_0_0_#000] dark:shadow-[16px_16px_0_0_#1e293b] p-8 md:p-12">
          {/* Box Header */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b-4 border-slate-900 dark:border-slate-800">
            <div className="w-12 h-12 bg-[#ff5f00] flex items-center justify-center text-white font-black shadow-[4px_4px_0_0_#000]">
              <Lock size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tighter leading-none dark:text-white">ACCESS_PORTAL</h1>
              <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-widest">Secure Terminal v2.1</p>
            </div>
          </div>

          {authError && (
            <div className="mb-8 p-4 bg-red-600/10 border-2 border-red-600 text-red-600 flex items-start gap-3">
              <AlertTriangle size={18} className="shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase">ERR_AUTH_DENIED</span>
                <span className="text-[10px] font-bold">{authError}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField 
              label="Identifier"
              placeholder="ENTER_USERNAME"
              error={errors.username?.message}
              {...register('username')}
            />

            <InputField 
              label="Access_Key"
              type="password"
              placeholder="ENTER_PASSWORD"
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="pt-4">
              <Button 
                type="submit" 
                isLoading={isSubmitting} 
                className="w-full h-14"
              >
                REQUEST_TERMINAL_ACCESS
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              By proceeding, you agree to terminal monitoring protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
