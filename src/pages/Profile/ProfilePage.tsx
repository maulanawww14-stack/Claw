import React, { useState } from 'react';
import { useUserStore } from '../../store/userStore';
import Button from '../../components/common/Button';
import InputField from '../../components/forms/InputField';

const ProfilePage: React.FC = () => {
  const { username, login } = useUserStore();
  const [newName, setNewName] = useState(username || '');

  return (
    <div className="max-w-2xl mx-auto pt-10 px-6">
      <h1 className="text-4xl font-black text-white mb-10">User Profile</h1>
      
      <div className="p-10 border border-slate-800 bg-slate-800/40 rounded-3xl backdrop-blur-xl">
        <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-800">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-3xl font-black text-white shadow-2xl">
            {username?.[0] || '?'}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{username || 'Guest'}</h2>
            <p className="text-slate-500">Developer Access Level</p>
          </div>
        </div>

        <div className="space-y-6">
          <InputField 
            label="Update Display Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Button onClick={() => login(newName)} className="w-full">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
