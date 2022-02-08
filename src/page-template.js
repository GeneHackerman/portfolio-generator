// return operates like keyboard return and adds line breaks within template literal***
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfonlio Demo</title>
    </head>
    
    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
    // jane and janehub will populate when argument is passed through command line
};

module.exports = generatePage;