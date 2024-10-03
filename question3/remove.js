//remove

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const removeLogs = () => {

if (fs.existsSync(logsDirectory)) {
  fs.readdirSync(logsDirectory).forEach(file => {
    const filePath = path.join(logsDirectory, file);
    fs.unlinkSync(filePath);
    console.log(`removed file ${filePath}`);
  });

  fs.rmdirSync(logsDirectory);
  console.log(`removed directory ${logsDirectory}`);
} else {
  console.log('logs directory not found.');
}};

removeLogs();