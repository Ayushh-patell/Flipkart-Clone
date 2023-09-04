let btn_plus = Array.from(document.getElementsByClassName("btn-plus"));
let btn_minus = Array.from(document.getElementsByClassName("btn-minus"));
let radio_label = Array.from(document.querySelectorAll(".cabin-list label"));
let cabin_box = document.getElementsByClassName("cabin-box")[0];
let main_img = document.querySelector(".image-container img");
let drop_toggle = document.getElementsByClassName("dropdown-toggle")[1];
// console.log(btn_plus, btn_minus)
drop_toggle.onclick = (e)=> {
    console.log(e.target)
    cabin_box.style.display = "block"
    cabin_box.style.translate = "0"
}
main_img.onclick = ()=> {
    cabin_box.style.display = "none"
}
btn_plus.forEach(btn=> {
    btn.onclick = ()=>{
        btn.previousElementSibling.innerHTML = parseInt(btn.previousElementSibling.innerHTML)+1
        cabin_box.style.translate = "-78% 2%"
        cabin_box.style.display ="block"
         
    } 
})
radio_label.forEach(btn=> {
    btn.onclick = ()=>{
        cabin_box.style.display ="block"
         
    } 
})
btn_minus.forEach(btn=> {
    btn.onclick = ()=>{
        btn.nextElementSibling.innerHTML = (parseInt(btn.nextElementSibling.innerHTML) >0)? parseInt(btn.nextElementSibling.innerHTML)-1 : 0;
        cabin_box.style.translate = "-78% 2%"
        cabin_box.style.display ="block"
         
    } 
})
//" position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(-47%, 5%); display: block; "