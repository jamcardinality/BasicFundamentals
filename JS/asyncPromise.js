// async = makes a function return a Promises

async function loadFile(){

        let fileLoaded = false;
    
        if(fileLoaded){
            return "File Loaded";
        }
        else {
            throw "File NOT loaded";
        }
    }


loadFile().then(value => console.log(value))
       .catch(error => console.log(error));

    