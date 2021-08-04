let myLeads = ["opeoluwa","david","emmanuel"]
const inputEl = document.getElementById('input-el')
const inputBtn = document.querySelector('.input-btn')
const ulEl = document.getElementById('list-el')

inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads)  
})

for (let i=0; i<myLeads.length; i++){
    // console.log(myLeads[i])
    ulEl.innerHTML +="<li>" + myLeads[i] + "</li>"
}

let tabBtn = document.querySelector('.tab-btn')
tabBtn.addEventListener('click',function(){
    console.log(inputEl.value)
})
let deleteBtn = document.querySelector('#delete-btn')
deleteBtn.addEventListener('click',function(){
    console.log('delete clicked')
})