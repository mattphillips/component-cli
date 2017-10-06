import fse from 'fs-extra';

import inquirer from 'inquirer';
import dir from 'node-dir';
import gitignore from 'parse-gitignore';

import pure from './templates/pure-component';
import stateful from './templates/stateful-component';
import css from './templates/styles';
import test from './templates/test.js';

var patterns = gitignore('.gitignore');
inquirer.registerPrompt('directory', require('inquirer-select-directory'));

dir.subdirs(process.cwd(), function(err, subdirs) {
  console.log(patterns);
  // const dirs = subdirs.filter(d => !patterns.every(p => p.includes(d)));
  if (err) throw err;
  console.log(dirs);
});

/*
Name

Component type:
Stateful | Stateless | HOC | stateless HOC?

CSS type:
CSS | SASS | LESS | Styled-components | etc

Test suffix:
.test.js | .spec.js

Component filetype:
.js | .jsx

Component naming convention:
index | Name
*/
// console.log('Time to build: a -> HTML');

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: 'Component name?'
//   },
//   {
//     type: 'directory',
//     name: 'from',
//     message: 'Where you like to put this component?',
//     basePath: './'
//   },
//   // {
//   //   type: 'input',
//   //   name: 'directory',
//   //   message: 'Directory to create component in?'
//   // },
//   {
//     type: 'list',
//     name: 'componentType',
//     message: 'Component type?',
//     choices: ['Stateful', 'Stateless', 'HOC']
//   },
//   {
//     type: 'list',
//     name: 'cssType',
//     message: 'CSS type?',
//     choices: ['CSS', 'SASS', 'LESS', 'styled-components'],
//     default: 'CSS'
//   },
//   {
//     type: 'list',
//     name: 'testSuffix',
//     message: 'Test Suffix?',
//     choices: ['test', 'spec']
//   },
//   {
//     type: 'list',
//     name: 'componentFiletype',
//     message: 'Component Filetype?',
//     choices: ['js', 'jsx']
//   },
//   {
//     type: 'list',
//     name: 'namingConvention',
//     message: 'File naming convention?',
//     choices: ['index.js|x', 'ComponentName.js|x']
//   }
// ];

// inquirer.prompt(questions).then(function(answers) {
//   const componentFilepath =
//     answers.namingConvention === 'index.js|x'
//       ? `index.${answers.componentFiletype}`
//       : `${answers.name}.${answers.componentFiletype}`;
//   fse.outputFile(`${answers.directory}/${answers.name}/${componentFilepath}`, pure(answers), function(err) {
//     if (err) return console.error(err);
//     console.log('Component file created!');
//   });

//   const testFilepath =
//     answers.namingConvention === 'index.js|x'
//       ? `index.${answers.testSuffix}.${answers.componentFiletype}`
//       : `${answers.name}.${answers.testSuffix}.${answers.componentFiletype}`;
//   fse.outputFile(`${answers.directory}/${answers.name}/${testFilepath}`, test(answers), function(err) {
//     if (err) return console.error(err);
//     console.log('Test file created!');
//   });

//   fse.outputFile(`${answers.directory}/${answers.name}/styles.${answers.cssType}`, css(answers), function(err) {
//     if (err) return console.error(err);
//     console.log('Component stylesheet created!');
//   });
// });
