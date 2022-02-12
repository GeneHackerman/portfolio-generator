// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

const inquirer = require("inquirer");

//     console.log('================');

//     // is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);

// const generatePage = () => 'Name: Jane, Github: janehub'; this is the same as...

// ...this

// const generatePage = (userName, gitHubName) => `Name: ${userName}, GitHub: ${gitHubName}`;

// console.log(generatePage('Jane', 'janehub'));

// const fs = require('fs');
const {writeFile, copyFile} = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');



const promptUser = () => {
    
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: 'What is your name?',
           // argument is nameInput passed through validate method
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter your name!');
                return false;
                }
              }            
        },
        {
            type: 'input',
            name: 'github', 
            message: 'Enter your Github username',
            // argument is nameInput passed through validate method
            validate: nameInput => {
               if (nameInput) {
               return true;
               } else {
               console.log('Please enter your name!');
               return false;
               }
              }
        },
        {
            type: 'confirm',
            name: 'confirmAbout', 
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about me',
            message: 'Provide some information about yourself',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    
    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }


    console.log(`
    =================
    Add a New Project
    =================
    `);
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name', 
            message: 'What is the name of your project?',
            // argument is nameInput passed through validate method
            validate: nameInput => {
               if (nameInput) {
               return true;
               } else {
               console.log('Please enter your name!');
               return false;
               }
              }                      
            
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            // argument is nameInput passed through validate method
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log('Please enter a description!');
                return false;
                }
               }              
            },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            // choices lists array of answers
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link', 
            message: 'Enter the Github link to your project. (Required)',
            // argument is nameInput passed through validate method
            validate: nameInput => {
               if (nameInput) {
               return true;
               } else {
               console.log('Please enter link to project!');
               return false;
               }
              }       
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
        ])
        // then statements are to be placed after question array ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

// chaining function calls to .then will control sequence of control flow
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        // const pageHTML = generatePage(portfolioData);

        // // // three arguments: create html, data being written, error catcher
        // fs.writeFile('./dist/index.html', pageHTML, err => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     console.log('Page created! Check out index.html in this directory to see it!');

        //     fs.copyFile('./src/style.css', './dist/style.css', err => {
        //         if (err) {
        //             console.log(err);
        //             return;
        //         }
        //         console.log('Style sheet copied successfully!');
        //     });
        // });

        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
    



   