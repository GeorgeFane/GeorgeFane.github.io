const directory = './reviews/';
const fs = require('fs');

fs.readdir(directory, (error, files) => {
    console.log(files);
    fs.writeFileSync(
        'reviewed.json',
        JSON.stringify(
            files.map(x => x.split('.')[0]), 
            null, indent=4
        ),
    )
});