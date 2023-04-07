//import {franc} from 'franc';

var franc = require("franc");
var langs = require('langs');

var input = process.argv[2];
const langcode= franc(input);

 if (langcode === "und"){
   console.log("Sorry try using more words"); 
}else{
  const language = langs.where("3", langcode);
   console.log(`the language is: ${language.name}`); 

       // franc('Alle menslike wesens word vry')

 }
    
    
    

