import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, InputField, Checkbox, TextStyle, Divider, Grid } from '../../../components';

const registrationSchema = z.object({
  firstName: z.string().min(2, "REQUIRED"),
  lastName: z.string().min(2, "REQUIRED"),
  email: z.string().email("INVALID_ADDRESS"),
  password: z.string().min(8, "MIN_8_CHARS"),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, "MUST_ACCEPT"),
}).refine(data => data.password === data.confirmPassword, {
  message: "MISMATCH",
  path: ["confirmPassword"]
});

type RegistrationData = z.infer<typeof registrationSchema>;

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema)
  });

  const onSubmit = (data: RegistrationData) => {
    console.log("Registering...", data);
    return new Promise(r => setTimeout(r, 2000));
  };

  return (
    <div className="font-mono border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-950 p-12 shadow-[16px_16px_0_0_#000]">
      <header className="mb-10">
        <TextStyle variant="h2" weight="black" className="tracking-tighter uppercase mb-2">Initialize_Identity</TextStyle>
        <TextStyle variant="caption" className="text-slate-500">Protocol: User_Onboarding_Sequence</TextStyle>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Grid cols={2} gap={6}>
           <InputField label="First_Name" placeholder="Alpha" error={errors.firstName?.message} {...register('firstName')} />
           <InputField label="Last_Name" placeholder="Unit" error={errors.lastName?.message} {...register('lastName')} />
        </Grid>

        <InputField label="Relay_Email_Addr" placeholder="unit@vps.internal" error={errors.email?.message} {...register('email')} />

        <Divider label="Security_Credentials" dashed />

        <Grid cols={2} gap={6}>
           <InputField label="Access_Key" type="password" placeholder="********" error={errors.password?.message} {...register('password')} />
           <InputField label="Repeat_Key" type="password" placeholder="********" error={errors.confirmPassword?.message} {...register('confirmPassword')} />
        </Grid>

        <div className="p-6 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800">
           <Checkbox 
             label="I accept tactical processing of my behavioral data" 
             error={!!errors.terms} 
             {...register('terms')}
           />
           {errors.terms && <p className="text-[10px] text-red-600 mt-2 font-bold uppercase">[ ACCESS_DENIED: TERMS_NOT_ACCEPTED ]</p>}
        </div>

        <Button type="submit" isLoading={isSubmitting} className="w-full h-16 text-lg">
           Deploy_User_Instance
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
