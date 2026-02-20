import React, { useState } from 'react';
import { 
  TextStyle, 
  Grid, 
  Button, 
  Checkbox, 
  RadioButton, 
  Select, 
  Anchor, 
  Icon, 
  Loader, 
  Divider,
  Badge,
  BaseContainer,
  FormField,
  SearchBar,
  InputGroup,
  CheckboxGroup,
  DropdownMenu,
  Breadcrumbs,
  Pagination,
  Tabs,
  CardHeader,
  CardFooter,
  StatWidget,
  Alert,
  Rating,
  LoadingWrapper,
  SocialShare,
  TagGroup,
  AccordionHeader
} from '../../../components';

const ExamplePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('tab-1');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState(['opt-1']);

  return (
    <BaseContainer maxWidth="full" padding={false} className="space-y-20 font-mono pb-40">
      <header className="border-l-8 border-[#ff5f00] pl-6">
        <TextStyle variant="caption" className="text-slate-500 mb-1">UI_COMPONENT_MANIFEST // INDUSTRIAL_VERSION_2.0</TextStyle>
        <TextStyle variant="h2" weight="black" italic className="tracking-tighter">COMPONENT_SANDBOX</TextStyle>
      </header>

      {/* Basic Atoms Showcase */}
      <section className="space-y-8">
        <Divider label="ATOMIC_UNITS" dashed />
        <Grid cols={3} gap={6}>
          <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-4">
            <TextStyle variant="caption">{'>>'} Logic_Gates</TextStyle>
            <Checkbox label="Link_Established" defaultChecked />
            <RadioButton name="env" label="Secure_Instance" defaultChecked />
            <Divider dashed className="my-4" />
            <Rating value={4.5} />
          </div>

          <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-col items-center justify-center gap-6">
             <Loader size="lg" />
             <TextStyle variant="caption" className="animate-pulse">Data_Stream_Loading</TextStyle>
          </div>

          <div className="p-8 border-4 border-slate-900 dark:border-slate-800 bg-[#ff5f00] text-white space-y-4">
             <TextStyle variant="caption" className="text-white/70">{'>>'} Emergency_Bypass</TextStyle>
             <TextStyle variant="h3" weight="black">PRIMARY_OVERRIDE_ENABLED</TextStyle>
             <Button variant="secondary" className="w-full bg-white text-black border-white">RECOVER_SESSION</Button>
          </div>
        </Grid>
      </section>

      {/* Navigation & Layout Molecules */}
      <section className="space-y-8">
        <Divider label="NAVIGATION_STRUCTURES" dashed />
        <div className="space-y-12">
          <Breadcrumbs 
            items={[
              { label: 'System', path: '#' },
              { label: 'Modules', path: '#' },
              { label: 'Example_UI' },
            ]} 
          />

          <Tabs 
            items={[
              { id: 'tab-1', label: 'Primary_Data' },
              { id: 'tab-2', label: 'Network_Stats' },
              { id: 'tab-3', label: 'Security_Logs' },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <div className="flex flex-wrap items-center justify-between gap-8 p-10 border-4 border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
             <Pagination 
               currentPage={currentPage} 
               totalPages={5} 
               onPageChange={setCurrentPage} 
             />
             <DropdownMenu 
               label="Export_Type" 
               options={[
                 { label: 'Download JSON', value: 'json', icon: 'FileJson' },
                 { label: 'Download CSV', value: 'csv', icon: 'FileSpreadsheet' },
               ]} 
               onSelect={(val) => alert(`EXPORT: ${val}`)}
             />
          </div>
        </div>
      </section>

      {/* Content & Feedback Molecules */}
      <section className="space-y-8">
        <Divider label="DATA_ORCHESTRATION" dashed />
        <Grid cols={2} gap={8}>
           <div className="space-y-6">
              <Alert type="warning" title="CORE_TEMPERATURE_HIGH">
                Cooling system at 85% capacity. Immediate intervention required to prevent hardware throttle.
              </Alert>
              <Alert type="success" title="ENCRYPTION_COMPLETE">
                All data packets successfully hashed using SHA-256 protocol.
              </Alert>
              <AccordionHeader 
                title="Advanced_Parameters" 
                subtitle="Configure kernel-level overrides"
                isOpen={isAccordionOpen}
                onToggle={() => setIsAccordionOpen(!isAccordionOpen)}
              />
              {isAccordionOpen && (
                <div className="p-8 border-x-4 border-b-4 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
                  <CheckboxGroup 
                    label="ENABLE_MODULES"
                    options={[
                      { label: 'Auto-Repair', value: 'opt-1' },
                      { label: 'Deep-Scan', value: 'opt-2' },
                      { label: 'Legacy-Mode', value: 'opt-3' },
                    ]}
                    values={selectedValues}
                    onChange={setSelectedValues}
                  />
                </div>
              )}
           </div>

           <div className="space-y-6">
              <div className="border-4 border-slate-900 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
                <CardHeader 
                  title="Satellite_Link" 
                  subtitle="Active Connection: SAT-X7"
                  action={<Badge>Uplink: 1.2GB/s</Badge>}
                />
                <div className="p-8">
                   <StatWidget 
                     label="Current_Throughput" 
                     value="842" 
                     unit="MBPS" 
                     icon="Network"
                     trend={{ value: 12.4, isUp: true }}
                   />
                </div>
                <CardFooter variant="muted">
                   <TagGroup tags={['Active', 'Secure', 'Quantum']} />
                   <SocialShare url="https://github.com" title="Claw System Asset" />
                </CardFooter>
              </div>
           </div>
        </Grid>
      </section>

      <LoadingWrapper isLoading={false}>
        <div className="text-center opacity-30">
          <TextStyle variant="caption">Claw_System_v2.0 // All_Modules_Operational</TextStyle>
        </div>
      </LoadingWrapper>
    </BaseContainer>
  );
};

export default ExamplePage;
