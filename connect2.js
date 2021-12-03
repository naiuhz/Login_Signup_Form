
// Usage: node connect2.js <password>

import { MongoClient } from 'mongodb';

var myArgs = process.argv.slice(2);
const password = myArgs[0];

//console.log('Password: \"' + myArgs[0] + "\"");

// Connection URL
const url = 'mongodb+srv://ianzhu:' + password +'@clusterone.svp2o.mongodb.net/'; //'mongodb://localhost:27017/';
 
// Database name
const databasename = "CPS406_Project";
  
MongoClient.connect(url).then((client) => {
 
  const connect = client.db(databasename)
  // Connect to collection
  const collection = connect.collection("CPS406_Project_Collection");
 
  // Counting the total unique documents
  collection.distinct("ian").then((ans) => {
    // Creating set
    var set1 = new Set();
 
    // Adding each element in the st   
    ans.forEach(i => {
      set1.add(i); 
    });
 
    // Printing the size of the set
    console.log(set1.size);

    
  }).catch((err)=>{
      console.log(err.Message);
  }) 
}).catch((err) => {
   // Printing the error message
   console.log(err.Message);
})



