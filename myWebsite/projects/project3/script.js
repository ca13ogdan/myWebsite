var addBtn = document.querySelector('#addTask');
var clearBtn = document.querySelector('#clearTask');
var showHideBtn = document.querySelector('#showHideTask');
var inputValue = document.querySelector('#inputText');
var list = document.querySelector('.list');

//ADD BUTTON
addBtn.addEventListener('click', addTask);
    function addTask(){
        if(inputValue.value === '') alert('You Must Enter Your Task First!');
        else{   //this attr = 0
            let text = inputValue.value;   			  
            var item = `<li>
                            <i class='fa fa-star-o' onclick="this.parentNode.parentNode.insertAdjacentElement('afterbegin', this.parentNode)"></i>
                            
                            <i class='fa delete' onclick='this.parentNode.remove(this); '> &#xf014;</i> 
                            
                            <i class='fa check' onclick="this.parentNode.classList.toggle('checked')"> &#xf058;</i> 

                            <input type='text' id='editInput' class='editInput' value='${text}' disabled>

                            <span class='description' onclick="swal({ title:'Description:', content: 'input'}).then((value)=>{
                                    document.querySelector(this.childNodes[1].innerHTML = value)})">Description 
                                    <span class='descriptionText'></span> 
                            </span>

                            <i class='fa edit' onclick="swal({ title:'Edit Your Goal:', content: 'input'}).then((value)=>{
                                    document.getElementById(this.parentNode.children[3].value = value)}),
                                    this.parentNode.children[4].children[0].innerHTML = '';
                                    ">&#xf044;
                            </i>			  
                        </li>`;
   
            //INSERT DATA IN LOCALSTORAGE                   
                localStorage.setItem(localStorage.length,item);
                      
            list.insertAdjacentHTML('beforeend', item);
            form.reset();
        }	
    }
//DISPLAY DATA FROM LOCALSTORAGE
window.addEventListener("load", function() { 
    for(var i=0;i<=100;i++){
        if(localStorage.getItem(i) != null)
            list.insertAdjacentHTML('beforeend', localStorage.getItem(i));
    }
});
//ADD TASK BY PRESSING ENTER
form.addEventListener('keydown', keyEnter);
function keyEnter(e){
	if(e.keyCode ==13){
		e.preventDefault();
		addTask();
    }	
}
//CLEAR BUTTON
clearBtn.addEventListener('click', clearTask);
function clearTask(){
    localStorage.clear();
    if(list.childNodes.length > 0){
        while(list.firstChild){
            list.removeChild(list.firstChild);
        }
        swal("You Have Just Been Released!", "Hope That You Have New Goals.", "success");
    }else{
        alert("You have no data to delete!");
    }		
}
//HIDE BUTTON
$(document).ready(function(){
    $("#showHideTask").click(function(){
      $(".list").slideToggle();
      if($("#showHideTask").text() == "SHOW") $("#showHideTask").text("HIDE");
      else $("#showHideTask").text('SHOW');
      
    });
  });
//SEARCH BUTTON   (add in html header input onkeyup="searchFunction()") ALMOST READY, little issue
function searchFunction(){ 
   
    let input, filter, ul, li, a ,i;
    input = document.getElementById('searchBtn');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.list');
    li = document.querySelectorAll('li');
    
    
    
    for(let i=0; i<li.length; i++){
        a = li[i].getElementsByTagName('i')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
            li[i].style.display="";
        }else{
            li[i].style.display='none';
        }
    }
} 
