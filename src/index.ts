import * as fs from 'fs';
import * as path from 'path';

// Directory to read the files from
const directoryPath = '/var/services/homes/andrius/Data/foundry-sync';

// Function to read and print the contents of all files in the directory
function readAndPrintFiles(directory: string) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return console.error(`Unable to scan directory: ${err}`);
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          return console.error(`Unable to read file stats: ${err}`);
        }

        if (stats.isFile()) {
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              return console.error(`Unable to read file: ${err}`);
            }

            console.log(`Contents of ${file}:\n${data}\n`);
          });
        }
      });
    });
  });
}

// Call the function with the specified directory
readAndPrintFiles(directoryPath);
