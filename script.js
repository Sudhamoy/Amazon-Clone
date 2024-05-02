const imgs=document.querySelectorAll('.slider ul img');
console.log(imgs); //Nodelist of 6 images used.

const prev_btn=document.querySelector('.control-prev');
const next_btn=document.querySelector('.control-next');

var n=0; //on first image

function changeSlide(){
  for(let i=0;i<imgs.length;i++){
    imgs[i].style.display='none';
}
  imgs[n].style.display='block';
}

changeSlide();

prev_btn.addEventListener('click', (e)=>{
  if(n > 0){
    n=n-1;
  }
  else{
    n=imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener('click', (e)=>{
  if(n<imgs.length - 1){
    n++;
  }else{
    n=0;
  }
  changeSlide();
});

const scrollContainer=document.querySelectorAll('.products');
for(const item of scrollContainer){
  item.addEventListener('wheel',(eve)=>{
    eve.preventDefault();
    item.scrollLeft+=eve.deltaY;
  });
}

//it prevents the default scroll behavior and instead horizontally scrolls the element based on the direction of the mouse wheel movement (eve.deltaY).