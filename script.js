console.log('Website Loaded');
var acc=document.getElementsByClassName('accordion-btn');
for(let i=0;i<acc.length;i++){
 acc[i].addEventListener('click',function(){
   var panel=this.nextElementSibling;
   panel.style.display = panel.style.display==='block' ? 'none' : 'block';
 });
}
