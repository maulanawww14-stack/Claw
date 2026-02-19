export default function (plop) {
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
}
