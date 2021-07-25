import fs from 'fs';
const directory = './reviews/';

// fs.readdir(directory, (error, files) => {
//     console.log(files);
//     fs.writeFileSync(
//         'reviewed.json',
//         JSON.stringify(
//             files.map(x => x.split('.')[0]), 
//             null, indent=4
//         ),
//     )
// });