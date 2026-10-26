import fs from 'fs';
import  path from  'path';


// Always build paths from __dirname. A bare './280_Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.

const filePath = path.join(__dirname,'280_Users.json');
console.log('File path:', filePath);

const fileData = fs.readFileSync(filePath, 'utf-8');
const userDataJsonObject = JSON.parse(fileData);
console.log(userDataJsonObject);

console.log(userDataJsonObject.username);
console.log(userDataJsonObject.password);

// Writing Data to a JSON File

const user = {
    name: "Sheetal",
    role: "QA Trainer"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");

