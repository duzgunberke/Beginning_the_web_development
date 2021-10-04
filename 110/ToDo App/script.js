//UI vars
const form =document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btnDeleteAll=document.querySelector('#btnDeleteAll');
const tasklist=document.querySelector('#task-list');
let items;

//load items
loadItems();

//call event listeners
eventListeners();

function loadItems(){
    
    items=getItemsFromLS();    
    items.forEach(function(item){
        createItem(item);
    })
}
//get ıtem fromlocal stroge
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items=[];
    }
    else{
        items=JSON.parse(localStorage.getItem('item'));
    }
    return items;
}

//sett item the local storage
function setItemToLS(text){
    items=getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

//delete item from LS
function deleteItemFromLS(text){
    items=getItemsFromLS();
    items.forEach(function(item,index){
        if(item===text){
        items.splice(İndex,1);}
    });
    localStorage.setItem('items',JSON.stringify(items));
}
function createItem(text){
    //create li
    const li=document.createElement('li');
    li.className="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));
    //create a
    const a=document.createElement("a");
    a.classList="delete-item float-right";
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';
    
    //add a to li
    li.appendChild(a);

    //add li to ul
    tasklist.appendChild(li);
    
    
    
    
    
}

function eventListeners(){
    //submit event
    form.addEventListener('submit',addNewItem);

    //delete an item
    tasklist.addEventListener('click',deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click',deleteAllItems);
}

    //add new item
function addNewItem(e){
    if(input.value===""){
        alert("add new item");
    }

    //create item
    createItem(input.value);

    //save to LS
    setItemToLS(input.value);



    //clear input
    input.value="";

    e.preventDefault();
    
}

//delete item
function deleteItem(e){
    if(e.target.className==="fas fa-times"){
        e.target.parentElement.parentElement.remove();

        //delete item from LOCAL STORAGE
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
    e.preventDefault();
}

//delete all items
function deleteAllItems(e){

    if(confirm('Are you sure ?')){
    //tasklist.innerHTML="";
    while(tasklist.firstChild){
        remove.removeChild(tasklist.firstChild);
    }
    localStorage.clear();
}
    e.preventDefault();
}

