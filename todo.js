
const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list');

function addElement() {
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // for displaying cross icon
        // create span element for the remove button

        
        let removeBtn=document.createElement("span");
        removeBtn.textContent ="\u00d7"; //cross icon
        removeBtn.className ='remove-btn';
        removeBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(removeBtn);

        // checked class
        li.onclick = function(){
            li.classList.toggle("checked");
        };

        listContainer.appendChild(li);
        inputBox.value ="";
    }
    inputBox.value ="";
  }

  document.getElementById('input').onkeydown = function(e){
    if (e.key === 'Enter'){
        addElement();
    }
};

