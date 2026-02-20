import React from 'react';
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
  BaseContainer
} from '../../../components';

const ExamplePage: React.FC = () => {
  return (
    <BaseContainer maxWidth="full" padding={false} className="space-y-12 font-mono">
      <header className="border-l-8 border-[#ff5f00] pl-6">
        <TextStyle variant="caption" className="text-slate-500 mb-1">MODULE_ATOMS_LIBRARY // PROTOCOL_READY</TextStyle>
        <TextStyle variant="h2" weight="black" italic className="tracking-tighter">COMPONENT_SANDBOX</TextStyle>
      </header>

      {/* Typography Section */}
      <section className="space-y-6">
        <Divider label="TYPOGRAPHY_SYSTEM" dashed />
        <div className="space-y-4">
          <TextStyle variant="h1" className="block">Heading 01</TextStyle>
          <TextStyle variant="h2" className="block text-[#ff5f00]">Heading 02 / Safety</TextStyle>
          <TextStyle variant="h3" className="block">Heading 03 / System_Ready</TextStyle>
          <TextStyle variant="body" className="block text-slate-600 dark:text-slate-400">
            Standard body text for technical documentation and system logs. 
            Designed for maximum readability in high-stress industrial environments.
          </TextStyle>
          <TextStyle variant="code" className="inline-block">npm run generate atom</TextStyle>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="space-y-6">
        <Divider label="INTERACTIVE_UNITS" dashed />
        <Grid cols={3} gap={6}>
          {/* Buttons */}
          <div className="p-8 border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-4">
            <TextStyle variant="caption">{'>>'} Button_Variants</TextStyle>
            <div className="flex flex-col gap-3">
              <Button variant="primary">Execute_Primary</Button>
              <Button variant="secondary">Terminal_Input</Button>
              <Button variant="danger">Abort_Process</Button>
              <Button variant="success">Verify_System</Button>
            </div>
          </div>

          {/* Form Controls */}
          <div className="p-8 border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-6">
            <TextStyle variant="caption">{'>>'} Input_Controls</TextStyle>
            <Checkbox label="Enable_Remote_Access" defaultChecked />
            <Checkbox label="Debug_Mode_Active" error />
            <Divider className="my-2" />
            <div className="space-y-3">
              <RadioButton name="env" label="Prod_Environment" defaultChecked />
              <RadioButton name="env" label="Staging_Area" />
            </div>
          </div>

          {/* Selection & Links */}
          <div className="p-8 border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-6">
            <TextStyle variant="caption">{'>>'} Navigation_Nodes</TextStyle>
            <Select 
              label="Select_Region"
              options={[
                { label: 'US-EAST-1 (VPC)', value: 'us-1' },
                { label: 'EU-WEST-2 (LAB)', value: 'eu-2' },
                { label: 'ASIA-SOUTH-1', value: 'asia-1' },
              ]}
            />
            <div className="flex flex-col gap-2">
              <Anchor href="#">Documentation_Internal</Anchor>
              <Anchor href="https://github.com" external variant="muted">External_Source_Code</Anchor>
            </div>
          </div>
        </Grid>
      </section>

      {/* Feedback & Indicators */}
      <section className="space-y-6">
        <Divider label="SYSTEM_FEEDBACK" dashed />
        <Grid cols={4} gap={4}>
          <div className="p-6 border-2 border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center gap-4">
             <TextStyle variant="caption">Loader_A</TextStyle>
             <Loader size="sm" />
          </div>
          <div className="p-6 border-2 border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center gap-4">
             <TextStyle variant="caption">Status_Icons</TextStyle>
             <div className="flex gap-4">
                <Icon name="ShieldCheck" className="text-emerald-500" />
                <Icon name="Zap" className="text-[#ff5f00]" />
                <Icon name="AlertTriangle" className="text-amber-500" />
             </div>
          </div>
          <div className="p-6 border-2 border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center gap-4">
             <TextStyle variant="caption">Badge_System</TextStyle>
             <div className="flex flex-wrap gap-2 justify-center">
                <Badge>V2.1.0</Badge>
                <div className="px-2 py-0.5 bg-red-600 text-white text-[8px] font-black uppercase">Critical</div>
             </div>
          </div>
          <div className="p-6 border-2 border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center gap-4">
             <TextStyle variant="caption">Processing</TextStyle>
             <Loader size="md" />
          </div>
        </Grid>
      </section>
    </BaseContainer>
  );
};

export default ExamplePage;
