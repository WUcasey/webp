//var myList = document.getElementById("myList");
/*if(myList.hasChildNodes())
{
    for(var i=0;i<myList.childNodes.length;i++)
    {
        //不要在每一個子節點就建立一個addEventListener會造成網頁效率不佳 
        //且之後新增的node 會監聽不到
        if(myList.childNodes[i].nodeType===1){
            myList.childNodes[i].addEventListener('click',function(){
                console.log(this.textContent);
            },false)
        }
    }
}*/
/*myList.addEventListener('click',function(e){
    if(e.target.tagName.toLowerCase()==='li')
    {
        //e.target 會取到html裡面的tag object
        console.log(e.target.textContent);
    }
})
var newList = document.createElement('li');
var textNode = document.createTextNode('hello cgu!');
newList.appendChild(textNode);
myList.appendChild(newList);*/


$(document).ready(function(){
    $('li').click(function(e){
        console.log(e.target.textContent);
    })
})
$('#myList').append($('<li>hello cgu!</li>'))
