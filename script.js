const color=['green','blue','red','rosybrown'];
let index=-1;
const body=document.querySelector("body");
btn1.addEventListener('click',()=>{
    body.style.backgroundColor=color[0];
    index=0;
})
btn2.addEventListener('click',()=>{
    body.style.backgroundColor=color[1];
    index=1;
})
btn3.addEventListener('click',()=>{
    body.style.backgroundColor=color[2];
    index=2;
})
btn4.addEventListener('click',()=>{
    body.style.backgroundColor=color[3];
    index=3;
})
document.getElementById('next').addEventListener('click', next);
  function next() {
    index = (index+ 1);
    if(index==(color.length)){
        index=0;
    }
    changeBackgroundColor();
  }
  document.getElementById('prev').addEventListener('click', prev);
  function prev() {
    index = (index-1);
    if(index==-1){
        index=color.length;
    }
    changeBackgroundColor();
  }
  function changeBackgroundColor() {
    document.body.style.backgroundColor = color[index];
  }
