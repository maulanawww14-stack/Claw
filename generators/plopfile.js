import { execSync } from 'child_process';

export default function (plop) {
  // Custom action to run shell commands
  plop.setActionType('shell', function (answers, config) {
    try {
      console.log(`Running: ${config.command}`);
      execSync(config.command, { stdio: 'inherit', cwd: plop.getDestBasePath() });
      return `Successfully executed: ${config.command}`;
    } catch (error) {
      throw `Failed to execute: ${config.command}. Error: ${error.message}`;
    }
  });

  // Generator for Components
  plop.setGenerator('component', {
    description: 'Create a new component (Atom, Molecule, Organism)',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of component?',
        choices: ['atom', 'molecule', 'organism', 'template'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase, e.g., MyButton):',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Component description:',
        default: 'Description not provided.',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase type}}s/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase type}}s/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'templates/component/index.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase type}}s/{{pascalCase name}}/readme.md',
        templateFile: 'templates/component/readme.md.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase type}}s/{{pascalCase name}}/tests/index.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
      {
        type: 'append',
        path: '../src/components/{{lowerCase type}}s/index.ts',
        pattern: /$/,
        template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
      }
    ],
  });

  // Generator for Project Setup (State Management)
  plop.setGenerator('setup-state', {
    description: 'Switch or setup State Management (Zustand or Redux)',
    prompts: [
      {
        type: 'list',
        name: 'stateManager',
        message: 'Which State Management would you like to use?',
        choices: ['Zustand (Lightweight)', 'Redux Toolkit (Enterprise)'],
      },
    ],
    actions: function(data) {
      let actions = [];

      if (data.stateManager === 'Zustand (Lightweight)') {
        actions.push({
          type: 'shell',
          command: 'npm install zustand',
        });
        actions.push({
          type: 'add',
          path: '../src/container/app/store.ts',
          templateFile: 'templates/setup/zustand-store.ts.hbs',
          force: true,
        });
        actions.push({
          type: 'add',
          path: '../src/main.tsx',
          templateFile: 'templates/setup/main-zustand.tsx.hbs',
          force: true,
        });
      } else {
        actions.push({
          type: 'shell',
          command: 'npm install @reduxjs/toolkit react-redux',
        });
        actions.push({
          type: 'add',
          path: '../src/container/app/store.ts',
          templateFile: 'templates/setup/redux-store.ts.hbs',
          force: true,
        });
        actions.push({
          type: 'add',
          path: '../src/container/app/hooks.ts',
          templateFile: 'templates/setup/redux-hooks.ts.hbs',
          force: true,
        });
        actions.push({
          type: 'add',
          path: '../src/main.tsx',
          templateFile: 'templates/setup/main-redux.tsx.hbs',
          force: true,
        });
      }

      return actions;
    }
  });
}
