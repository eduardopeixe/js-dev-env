 // This script generates mock data dor local developemnt.
 // This wai you don't have to paint to an actual API,
 // but you can enjoy realistic, but randomized data,
 // and rapid page loads due to local, static data

 /* eslint-disable no-console */

 import jsf from 'json-schema-faker'            //
 import {schema} from './mockDataSchema'  // create by me
 import fs from 'fs'                      // to write a file
 import chalk from 'chalk'                // to color console.log

// JSON schema faker reads my schema and generate a mock data
 const json = JSON.stringify(jsf(schema))

 fs.writeFile("./src/api/db.json", json, function (err){ // write json generated on previous step to a file called db.json
   if (err) {
     return console.log(chalk.red(err))
   }else{
     console.log(chalk.green("Mock data generated!!"))
   }
 })
