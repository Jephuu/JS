const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list");

function addElement() {
    if (inputBox.value === '') {
        window.alert("You must write something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let removeBtn =document.createElement("span");
        removeBtn.textContent = "x";
        removeBtn.className ="remove-btn";
        removeBtn.onclick = function(){
            li.remove();
        };
        li.appendChild(removeBtn);

        li.onclick =function(){
            li.classList.toggle("checked");

        };

        listContainer.appendChild(li);
        inputBox.value ='';
    }
    inputBox.value='';

}
document.getElementById('input').onkeydown = function(e){
    if (e.key === 'Enter'){
        addElement();
    }
};
