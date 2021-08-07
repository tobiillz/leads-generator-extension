let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.querySelector('.input-btn')
const ulEl = document.getElementById('list-el')


inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads)  
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for (let i=0; i<myLeads.length; i++){
        // console.log(myLeads[i])
        listItems += "<li>" + myLeads[i] + "</li>"
        //create list element
        //const li = document.createElement('li')
        //set text content 
        //li.textContent = myLeads[i]
        //append list element to ul
        //ulEl.append(li)
        
    }ulEl.innerHTML = listItems  
}




let tabBtn = document.querySelector('.tab-btn')
tabBtn.addEventListener('click',function(){
    console.log(inputEl.value)
})
let deleteBtn = document.querySelector('#delete-btn')
deleteBtn.addEventListener('click',function(){
    console.log('delete clicked')
})