const inputBox=document.getElementById("inputbox");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement('li');
        li.style.position = 'relative';
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        // span for the text
        // let textspan=document.createElement('span');
        // textspan.innerHTML=inputBox.value;
        // // bg image element
        // let bgImg=document.createElement('span');
        // bgImg.classList.add('custom-unchecked');
        // // appent bgimg and text to li
        // li.appendChild(bgImg);
        // li.appendChild(textspan);
        //cross to remove the note
        let cross=document.createElement('span');
        cross.innerHTML="\u00d7";
        cross.classList.add('cross');
        li.appendChild(cross);

        
    }
    inputBox.value="";
    savedata();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("custom-checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showitems(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showitems();