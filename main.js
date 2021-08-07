let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.querySelector('.input-btn')
const ulEl = document.getElementById('list-el')


inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads)  
    // clear out the input field
    inputEl.value = ""
    renderLeads()
    
})


function renderLeads(){
    let listItems = ""
    for (let i=0; i<myLeads.length; i++){
        // console.log(myLeads[i])
        // Use template literals to break your code to multiple lines
        listItems +=  `
        <li> 
            <a href='${myLeads[i]}' target='_blank'> 
                ${myLeads[i]}
            </a>
        </li>`
        //create list element
        //const li = document.createElement('li')
        //set text content 
        //li.textContent = myLeads[i]
        //append list element to ul
        //ulEl.append(li)
        // listItems =  + myLeads[i] + "</a>"
        
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