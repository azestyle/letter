const input=document.querySelector('.input');
const message=document.querySelector('.txt-area');
const submit=document.querySelector('.send-btn')
const warning=document.querySelector('#warning');
const ticket=document.querySelector('.messege-area');
const sendMsg=document.querySelector('#sendMsg')
sendMsg.classList.add('d-none')
warning.classList.add('hidden');



submit.addEventListener('click',()=>{
        checkedMessege();
});    
    
    




function checkedMessege(){
    let adress=input.value
    let msg=message.value
    if(adress.trim() && msg.trim()){
       deleteWarning();
       submit.disabled=true
        setTimeout(()=>{
           createTicket(adress,msg); 
           sendMsg.classList.remove('d-flex');
           sendMsg.classList.add('d-none');
           submit.disabled=false
        },1000)
      }   
        
   
    else{
        addWarning();
    }
   input.value=null;
   message.value=null;
}



function deleteWarning(){
    warning.classList.add('hidden')
    warning.classList.remove('vicible')
    sendMsg.classList.remove('d-none')
    sendMsg.classList.add('d-flex')
}


function addWarning(){
    warning.classList.remove('hidden')
    warning.classList.add('vicible')
}

function createTicket(adress,msg){
const messageBox=document.createElement('div');
const triangle=document.createElement('div');
const msgAddress=document.createElement('p');
msgAddress.innerText=`Ünvan:'${adress}'`
messageBox.classList.add('msg-box');
triangle.classList.add('triangle');
msgAddress.classList.add('send-name')
messageBox.append(triangle);
messageBox.append(msgAddress);
ticket.append(messageBox);
activatedModal(messageBox,msg);

}


function activatedModal(element,msg){
    element.addEventListener('click',()=>{
       let modal= document.createElement('div');
       let text=document.createElement('div');
       let write=document.createElement('p')
       text.classList.add('modal-text');
       write.classList.add('omega');
       modal.classList.add('modal');
       write.innerText=msg;
       text.append(write);
       modal.append(text);
       deleteModal(modal);
       document.body.append(modal);
    })
}

function deleteModal(element){
element.addEventListener('click',(e)=>{
    if (e.target === element) {
        element.remove();
    }
})
}
