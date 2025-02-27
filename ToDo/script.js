let toDoList=document.getElementById("toDoList");
let newToDoInput=Document.getElementById("newToDoInput");
let addToDoBtn=Document.getElementById("addToDoBtn");


addToDoBtn.addEventListener("click",()=>{
    const newToDoText =newToDoInput.value;

    if(newToDoText !==""){

        const newToDoItem= document.createElement("li");
        newToDoItem.innerText = newToDoText;

        const DeleteToDoBtn= document.createElement("button");
        newToDoItem.innerText = x;
    }


}
)