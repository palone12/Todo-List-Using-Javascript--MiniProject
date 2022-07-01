function addMore(){
    var input =document.getElementById("taskItem").value;
    var li = document.createElement('li');
    var ul =document.getElementById("addHere");
    var text = document.createTextNode(input)
    var delte= document.createElement('button');
    delte.textContent="Delete"
  
    li.appendChild(text)

    li.appendChild(delte)
    ul.appendChild(li);
    delte.style.backgroundColor="#FFF9B6";
    delte.style.padding='10px';
    delte.style.borderRadius='20px'
    li.style.display='flex';
    li.style.justifyContent='space-between';
    li.style.alignItems='center'
    li.style.padding="10px";
    li.style.listStyle= "circle";  delte.addEventListener('click',()=>{
        ul.removeChild(li);
    })

    document.getElementById("taskItem").value="";
    


}