
info_btn = document.getElementById('info');
let x = document.getElementById("details");

info_btn.addEventListener('click', ()=>{
    if(x.style.display=== "none")
    {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
});

close_details = document.getElementById('close_details');

close_details.addEventListener('click', ()=>{
    
     if(x.style.display=== "flex")
     {
         x.style.display = "none";
     } else {
         x.style.display = "flex";
     }
 });


 const rightBtn = document.querySelector('#btn_right');
 const leftBtn = document.querySelector('#btn_left');
 
 rightBtn.addEventListener("click", function(event) {
   const conent = document.querySelector('#Indian');
   conent.scrollLeft += 300;
   console.log("heya");
   event.preventDefault();
 });
 
 leftBtn.addEventListener("click", function(event) {
   const conent = document.querySelector('#Indian');
   conent.scrollLeft -= 300;
   console.log("heya");
   event.preventDefault();
 }); 


 const rightBtn2 = document.querySelector('#btn_right2');
 const leftBtn2 = document.querySelector('#btn_left2');
 
 rightBtn2.addEventListener("click", function(event) {
   const conent2 = document.querySelector('#top10');
   conent2.scrollLeft += 300;
   console.log("heya");
   event.preventDefault();
 });
 
 leftBtn2.addEventListener("click", function(event) {
   const conent2 = document.querySelector('#top10');
   conent2.scrollLeft -= 300;
   console.log("heya");
   event.preventDefault();
 }); 