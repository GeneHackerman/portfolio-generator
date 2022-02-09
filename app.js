// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);

// const generatePage = () => 'Name: Jane, Github: janehub'; this is the same as...

// ...this

// const generatePage = (userName, gitHubName) => `Name: ${userName}, GitHub: ${gitHubName}`;

// console.log(generatePage('Jane', 'janehub'));


const inquirer = require('inquirer');

inquirer 
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
      }
  ])
   .then(answers => console.log(answers));

   
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// // three arguments: create html, data being written, error catcher
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// }); 