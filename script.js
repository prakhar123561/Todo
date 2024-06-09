

const addList = document.getElementById('addList');
const containerList = document.querySelector('.containerList');
const type = typeid.options[typeid.selectedIndex].text
function addTask(){
    if(addList.value === ''){
        alert('Add yor task!'); 
    }
    else {
       const li = document.createElement('li');
       li.innerHTML = addList.value;
       containerList.appendChild(li);
       let span = document.createElement('span')
       span.innerHTML = '\u00d7'
       li.appendChild(span)
       
    }

    addList.value = ''
    saveData()
}
function addType(){
    if(addList.value === '' && type == 'Default'){
        alert('Add yor task!'); 
    }
    else if(type == 'Default') {
       const li = document.createElement('li');
       li.innerHTML = addList.value;
       containerList.appendChild(li);
       let span = document.createElement('span')
       span.innerHTML = '\u00d7'
       li.appendChild(span)
       
    }

    addList.value = ''
    saveData()
}
containerList.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem('Data',containerList.innerHTML)
}

function showTask(){
    containerList.innerHTML = localStorage.getItem('Data')
}
showTask()

