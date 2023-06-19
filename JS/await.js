// await = make an async function wait for a Promise

async function loadFile(){

    let fileLoaded = true;

    if(fileLoaded){
        return "File Loaded";
    }
    else {
        throw "File NOT loaded";
    }
}

async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

startProcess();