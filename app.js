var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu= document.getElementById("menu");

sideNav.style.right = "-250px"

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0"
        menu.src = "/Barber_Shop_img/close.png"
    }else{
        sideNav.style.right = "-250px"
        menu.src = "/Barber_Shop_img/menu.png"
    }
}

window.addEventListener('DOMcontentLoaded', async (e)=>{
    await studentRef.on('value', (TheStudents)=>{
        studentsTable.HTML = ''
        TheStudents.forEach((TheStudents) => {
            let studentData = TheStudents.val()
            studentsTable.in
        });
    })
})





const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeRegisterModel');







const showRegisterModal = () =>{
    modal.classList.toggle('is-active')
}
openModal.addEventListener('click', showRegisterModal)
closeModal.addEventListener('click', showRegisterModal)
