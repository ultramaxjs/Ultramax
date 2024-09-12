#!/usr/bin/env node

const program = require('commander');
const scaffoldProject = require('../src/scaffoldProject');
const path = require('path');

const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

scaffoldProject(projectName)
  .then(() => {
    console.log(`Project ${projectName} created successfully.`);
  })
  .catch(err => {
    console.error('Error creating project:', err);
  });
