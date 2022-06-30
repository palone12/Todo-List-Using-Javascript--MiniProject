function addMore(){
    var input =document.getElementById("taskItem").value;
    var li = document.createElement('li');
    var ul =document.getElementById("addHere");
    var text = document.createTextNode(input)
    li.appendChild(text)
    ul.appendChild(li);
    document.getElementById("taskItem").value="";
    


}