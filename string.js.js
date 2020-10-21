function ucfirst(str) {
       if(typeof str !== "string" || str === "") return "";
       return str.charAt(0).toUpperCase() + str.slice(1);
   }
   
   function capitalize(str) {
       if(typeof str !== "string" || str === "") return "";
       let words = str.split(' ');
       let newStr = "";
       for(let i in words) {
           newStr += ucfirst(words[i]);
           if(parseInt(i) < words.length-1) newStr += " ";
       }
       return newStr;
   }
   
   function camelCase(str) {
       if(typeof str !== "string" || str === "") return "";
       let words = str.split(' ');
       let newStr = "";
       for(let i in words) {
           newStr += ucfirst(words[i]);
       }
       return newStr;
   }
   
   function snakeCase(str) {
       if(typeof str !== "string" || str === "") return "";
       return str.toLowerCase().replace(/\s/g, "_");
   }
   
   function leet(str) {
       if(typeof str !== "string" || str === "") return "";
       let newStr = "";
       for(let i in str) {
         switch(str[i].toUpperCase()) {
           case "A":
             newStr += "4";
             break;
           case "E":
             newStr += "3";
             break;
           case "I":
             newStr += "1";
             break;
           case "O":
             newStr += "0";
             break;
           case "U":
             newStr += "(_)";
             break;
           case "Y":
             newStr += "7";
             break;
           default:
             newStr += str[i];
         }
       }
       return newStr;
   }
   
   function propAccess(obj, path) {
       if(typeof path !== "string" || path === "" || typeof obj !== "object") return obj;
       let args = path.split(".");
       let result = obj;
       for(i in args) {
         result = result[args[i]];
       }
       if(result === undefined) return `${path} does not exist`;
       return result;
   }
   
   const prairie = {
       animal: {
           type: {
               name: "chien"
           }
       }
   }
   
   console.log("ucfirst : ", ucfirst("hello world"));
   console.log("capitalize : ", capitalize("hello world"));
   console.log("camelCase : ", camelCase("hello world"));
   console.log("snakeCase : ", snakeCase("hello world"));
   console.log("leet : ", leet("Anaconda"));
   console.log("propAccess : ", propAccess(prairie, "animal.type.name"));
   console.log("propAccess : ", propAccess(prairie, "animal.type.gender"));