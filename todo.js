const inputbox=document.getElementById('inputbox')
const unorderlist=document.getElementById('unorderlist')



function addtask(){
    const inputvalue=inputbox.value.trim();
    if(inputvalue==''){
        alert('enter task')
    }
    else{
    const list1=document.createElement('li')
    const button1=document.createElement('button')
    button1.setAttribute('class','deletebutton')
    
    button1.textContent='Delete'

    

    const node1=document.createTextNode(inputvalue)
    list1.appendChild(node1)
   list1.appendChild(button1) 
    // console.log(list1)
    button1.addEventListener('click',function(){
        unorderlist.removeChild(list1)
    })
    unorderlist.appendChild(list1)

    inputbox.value=''
}
}
