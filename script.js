const first=document.querySelector('#first')
const last=document.querySelector('#last')
const email=document.querySelector('#email')
const subject=document.querySelector('#subject')
const message=document.querySelector('#message')
const send=document.querySelector('.m_form')
send.addEventListener("click",function(){
    localStorage.setItem("form",first.value)
    localStorage.setItem("form1",last.value)
    localStorage.setItem("form2",email.value)
    localStorage.setItem("form3",subject.value)
    localStorage.setItem("form4",message.value)

})
const information=document.querySelector('#infor')
information.addEventListener("click",function(){
    location.assign("information.html")
})
