import React, { useState } from 'react';
import { Button, TextStyle, Divider, Icon } from '../../../components';

interface Comment {
  id: string;
  user: string;
  timestamp: string;
  body: string;
  replies?: Comment[];
}

const CommentSection: React.FC = () => {
  const [newComment, setNewComment] = useState('');

  const mockComments: Comment[] = [
    {
      id: '1',
      user: 'OP_BRAVO',
      timestamp: '2h ago',
      body: 'System architecture confirmed. Proceeding to secondary integration phase.',
      replies: [
        { id: '1.1', user: 'SYS_ADMIN', timestamp: '1h ago', body: 'Verified. Maintain security protocols during handshake.' }
      ]
    },
    {
      id: '2',
      user: 'K_DELTA',
      timestamp: '5h ago',
      body: 'Network latency detected in sector 7-G. Requesting diagnostic bypass.',
    }
  ];

  return (
    <div className="font-mono space-y-12">
      <header className="flex items-center justify-between border-b-4 border-slate-900 dark:border-slate-800 pb-6">
         <div className="flex items-center gap-3">
            <Icon name="MessageSquare" size={24} className="text-[#ff5f00]" />
            <TextStyle variant="h3" weight="black" className="uppercase tracking-tighter italic">COM_FEED_LOG</TextStyle>
         </div>
         <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700">03_ENTRIES</span>
      </header>

      {/* Input Form */}
      <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
         <TextStyle variant="caption" className="text-slate-400">// DISPATCH_NEW_TRANSMISSION</TextStyle>
         <textarea 
           value={newComment}
           onChange={(e) => setNewComment(e.target.value)}
           className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 outline-none focus:border-[#ff5f00] font-mono text-sm uppercase font-bold"
           placeholder="TYPE_MESSAGE..."
         />
         <div className="flex justify-end">
            <Button size="md" className="!px-10">Broadcast_Msg</Button>
         </div>
      </div>

      {/* Comment List */}
      <div className="space-y-10">
         {mockComments.map((comment) => (
           <div key={comment.id} className="space-y-6">
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 bg-slate-900 dark:bg-[#ff5f00] flex items-center justify-center text-white font-black text-xs shrink-0">
                    {comment.user[0]}
                 </div>
                 <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-4">
                       <span className="text-sm font-black text-slate-900 dark:text-white uppercase">{comment.user}</span>
                       <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight leading-relaxed border-l-4 border-slate-100 dark:border-slate-800 pl-4 py-1">
                       {comment.body}
                    </p>
                    <div className="flex gap-4 pt-2">
                       <button className="text-[9px] font-black uppercase text-[#ff5f00] hover:underline transition-all">Reply_Prot</button>
                       <button className="text-[9px] font-black uppercase text-slate-400 hover:text-slate-900 transition-all">Log_Report</button>
                    </div>
                 </div>
              </div>

              {/* Replies */}
              {comment.replies?.map(reply => (
                <div key={reply.id} className="ml-16 flex gap-6 items-start border-l-4 border-slate-100 dark:border-slate-800 pl-6">
                   <div className="w-8 h-8 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-black text-[10px] shrink-0 uppercase">
                      {reply.user[0]}
                   </div>
                   <div className="space-y-1">
                      <div className="flex items-center gap-3">
                         <span className="text-xs font-black text-slate-900 dark:text-white uppercase">{reply.user}</span>
                         <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{reply.timestamp}</span>
                      </div>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase italic">
                         // {reply.body}
                      </p>
                   </div>
                </div>
              ))}
           </div>
         ))}
      </div>
    </div>
  );
};

export default CommentSection;
