const prompts = require('prompts');
const fs = require('fs-extra');
const path = require('path');

async function scaffoldProject(projectName) {
  try {
    // Sanitize project name to avoid invalid characters
    const sanitizedProjectName = projectName.replace(/[<>:"/\\|?*]/g, '');

    // Construct target path correctly
    const targetPath = path.join(process.cwd(), sanitizedProjectName);
    console.log(`Target Path: ${targetPath}`);
    fs.ensureDirSync(targetPath);

    // Prompt user for API and database choices
    const responses = await prompts([
      {
        type: 'select',
        name: 'apiType',
        message: 'Which API type would you like to use?',
        choices: [
          { title: 'REST', value: 'REST' },
          { title: 'GraphQL', value: 'GraphQL' }
        ],
        initial: 0
      },
      {
        type: 'select',
        name: 'databaseType',
        message: 'Which database would you like to use?',
        choices: [
          { title: 'MongoDB', value: 'MongoDB' },
          { title: 'SQL (Sequelize)', value: 'SQL' }
        ],
        initial: 0
      }
    ]);
 
    var dirname = responses.apiType.toLowerCase()+"-"+responses.databaseType.toLowerCase();
    //console.log(dirname)
    // Copy basic folder structure and template files
    const templatePath = path.join(__dirname, 'scaffold', 'templates', dirname);
    console.log(`Template Path: ${templatePath}`);
    fs.copySync(templatePath, targetPath);

    // Handle database-specific configuration
    // const dbTemplatePath = path.join(__dirname, 'scaffold', 'templates', responses.databaseType.toLowerCase());
    // console.log(`Database Template Path: ${dbTemplatePath}`);
    // fs.copySync(dbTemplatePath, path.join(targetPath, 'src'));

    console.log(`Project ${sanitizedProjectName} created with ${responses.apiType} API and ${responses.databaseType} database.`);
  } catch (error) {
    console.error('Error creating project:', error);
  }
}

module.exports = scaffoldProject;
