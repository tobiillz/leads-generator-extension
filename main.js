//chrome://extensions/

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.querySelector('.input-btn')
const ulEl = document.getElementById('list-el')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('.tab-btn')
const leadsFromlocalStorage = JSON.parse(localStorage.getItem('myleads'))

if (leadsFromlocalStorage){
    myLeads = leadsFromlocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for (let i=0; i<leads.length; i++){
        // console.log(myLeads[i])
        // Use template literals to break your code to multiple lines
        listItems +=  `
        <li> 
            <a href='https://${leads[i]}' target='_blank'> 
                ${leads[i]}
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

inputBtn.addEventListener('click',function(){
    localStorage.clear()
    myLeads.push(inputEl.value)
    // console.log(myLeads)  
    // clear out the input field
    inputEl.value = "" 
    // console.log(localStorage.getItem('myleads'))
    localStorage.setItem('myleads',  JSON.stringify(myLeads))  
    render(myLeads)
    
})

tabBtn.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     // console.log(tabs[0].url)
     myLeads.push(tabs[0].url)
     localStorage.setItem('myleads',  JSON.stringify(myLeads))
     render(myLeads)  
        
        // let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
    });
   
   
})

deleteBtn.addEventListener('click', function(){
    // console.log('double clicked')
    localStorage.clear()
    myLeads = []
    render(myLeads)

})


