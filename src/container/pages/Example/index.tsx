import React, { useState } from 'react';
import { useUserStore } from '../../../container/app/userStore';
import { 
  TextStyle, 
  Grid, 
  Button, 
  Badge,
  BaseContainer,
  Divider,
  Icon,
  Loader,
  Rating,
  // Organisms
  HeroSection,
  FeatureList,
  FaqAccordion,
  ProductGrid,
  DataTable,
  UserProfileCard,
  AnalyticsDashboard,
  Modal,
  CookieConsent,
  Stepper,
  RegistrationForm,
  CheckoutModule,
  CommentSection
} from '../../../components';

const ExamplePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BaseContainer maxWidth="full" padding={false} className="space-y-20 font-mono pb-60">
      <HeroSection 
        subtitle="Industrial_Framework_v2.0"
        title="Engineering Better Frontend Architecture."
        description="A comprehensive library of professional UI organisms designed for high-scale enterprise applications and industrial control systems."
        primaryAction={{ label: 'Explore_Library', onClick: () => {} }}
        secondaryAction={{ label: 'View_Manual', onClick: () => {} }}
      />

      <BaseContainer maxWidth="lg" className="space-y-32">
        {/* Section 1: Features */}
        <FeatureList 
          title="Core_System_Capabilities"
          features={[
            { icon: 'Zap', title: 'Real-time Logic', description: 'Blazing fast state synchronization using Zustand persistent storage.' },
            { icon: 'ShieldCheck', title: 'Secure Protocols', description: 'Integrated auth-guards and enterprise-grade validation skemata.' },
            { icon: 'Cpu', title: 'Modular Design', description: 'Atomic-based component architecture for infinite scalability.' },
          ]}
        />

        {/* Section 2: Data Presentation */}
        <section className="space-y-12">
           <Divider label="DATA_REPRESENTATION_MODULES" dashed />
           <AnalyticsDashboard />
           
           <Divider label="RECORD_MANAGEMENT_GRID" dashed className="mt-20" />
           <DataTable 
             columns={[
               { key: 'id', label: 'ID' },
               { key: 'status', label: 'Status' },
               { key: 'node', label: 'Node_Cluster' },
               { key: 'uptime', label: 'Uptime' }
             ]}
             data={[
               { id: 'NODE_01', status: 'Active', node: 'Cluster_Alpha', uptime: '142h' },
               { id: 'NODE_02', status: 'Standby', node: 'Cluster_Beta', uptime: '12h' },
               { id: 'NODE_03', status: 'Offline', node: 'Cluster_Alpha', uptime: '0h' },
             ]}
             currentPage={1}
             totalPages={5}
             onPageChange={() => {}}
             onSearch={() => {}}
           />
        </section>

        {/* Section 3: Identity & Social */}
        <section className="space-y-12">
           <Divider label="IDENTITY_SYSTEMS" dashed />
           <Grid cols={1} gap={0}>
              <UserProfileCard 
                username="MAULANA_WWW14"
                role="Lead Developer"
                email="maulana@vps.internal"
                bio="Focused on high-performance agentic coding and industrial-grade web architecture. Operating system: Claw_OS."
                stats={[
                   { label: 'PROJECTS', value: '42' },
                   { label: 'DEPLOYMENTS', value: '1.2K' },
                   { label: 'VPC_NODES', value: '08' },
                   { label: 'UPTIME', value: '99%' },
                ]}
              />
           </Grid>
        </section>

        {/* Section 4: Complex Flows */}
        <section className="space-y-12">
           <Divider label="TRANSACTIONAL_WORKFLOWS" dashed />
           <Stepper 
             steps={[
               { id: 1, label: 'Identity_Check', description: 'Verify operator credentials' },
               { id: 2, label: 'Resource_Alloc', description: 'Allocate virtual cores' },
               { id: 3, label: 'Deployment', description: 'Execute final script' },
             ]} 
             activeStep={2}
           />
           
           <div className="grid grid-cols-1 gap-16 mt-20">
              <RegistrationForm />
              <CheckoutModule />
           </div>
        </section>

        {/* Section 5: Interaction & Dialogs */}
        <section className="space-y-12">
           <Divider label="OVERLAY_INTERACTION_HANDLERS" dashed />
           <div className="flex justify-center gap-8 p-20 border-4 border-dashed border-slate-300 dark:border-slate-800">
              <Button size="lg" onClick={() => setIsModalOpen(true)}>Execute_Modal_Sequence</Button>
              <Button variant="secondary" size="lg">Trigger_Toast_v1</Button>
           </div>
           
           <Modal 
             isOpen={isModalOpen} 
             onClose={() => setIsModalOpen(false)} 
             title="KERNEL_ACCESS_REQUEST"
             subtitle="SECURITY_CLEARANCE_LEVEL_04_REQUIRED"
           >
              <p className="text-sm font-bold uppercase leading-relaxed text-slate-600 dark:text-slate-400">
                // System warning: You are about to access core kernel parameters. 
                Incorrect configuration may lead to catastrophic failure of the virtual instance. 
                Do you wish to proceed with the handshake?
              </p>
           </Modal>

           <FaqAccordion 
             items={[
               { question: 'What is the standard encryption?', answer: 'We use 256-bit AES protocol for all incoming and outgoing data streams.' },
               { question: 'How to rotate API keys?', answer: 'Access the identity management panel and trigger the rotate_identity_v1 command.' }
             ]}
           />
        </section>

        {/* Section 6: Engagement */}
        <section className="space-y-12">
           <Divider label="USER_ENGAGEMENT_STREAM" dashed />
           <CommentSection />
        </section>
      </BaseContainer>

      <CookieConsent />
    </BaseContainer>
  );
};

export default ExamplePage;
