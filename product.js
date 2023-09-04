let ist_of_img = Array.from(document.querySelectorAll(".image-list img"));
let img_list = document.querySelector(".image-list");
let up_btn = document.querySelectorAll(".image-list .btn")[0];
let down_btn = document.querySelectorAll(".image-list .btn")[1];
let main_img = document.querySelector(".main-img");
let like = document.querySelector(".like");
ist_of_img.forEach(img=> {
    img.onclick = ()=> {
       main_img.setAttribute("src", img.getAttribute("src")) 
    }
})
down_btn.onclick = ()=> {
    img_list.scrollTo({
        top: img_list.scrollHeight,
        behavior: 'smooth'
  });
}
up_btn.onclick = ()=> {
    img_list.scrollTo({
        top: 0,
        behavior: 'smooth'
  });
}
like.onclick = ()=>{
    like.classList.toggle("like-clicked")
}