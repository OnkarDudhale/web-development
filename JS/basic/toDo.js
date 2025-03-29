let toDo=[];

let flag=0;
while(true){
    console.log("**________________________________________________**");
    console.log("**________________________________________________**");
    let req=prompt("Enter What you want to do:");
    if(req.toLowerCase()=="quit"){
        console.log("YOU Quit!");
        break;
    }
    else if(req.toLowerCase()=="add"){
        
        let task=prompt("Enter Which task you want to add:");
        toDo.push(task);
        console.log("Task Added...");
    }
    else if(req.toLowerCase()=="delete"){
        let delTask=prompt("Enter which task you want to delete:");
        for(let task=0; task<toDo.length;task++){
            if(toDo[task].toLowerCase()==delTask.toLowerCase()){
                toDo.splice(task,1);
                console.log("Task Deleted...");
                flag=1;
            }
        }
        if(flag==0){
            console.error("Task Not found...");
        }else{
            flag=0;
        }
        
    }else if(req.toLowerCase()=="list"){
        console.log("__________________________________________________");
        console.log(toDo);
        console.log("__________________________________________________");

    }
    else{
        console.error("Wrong request....");
        break;
    }
}
