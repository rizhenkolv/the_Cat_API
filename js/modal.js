
const modals =()=> {
const trigger = document.querySelector('.action__upload');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-content__close');

    trigger.addEventListener('click', (e) =>{
    if(e.target) {
            e.preventDefault();
        }
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
 });
close.addEventListener('click', (e) => {
    modal.style.display = "none";
    document.body.style.overflow = "";
});
modal.addEventListener('click', (e) => {
    if (e.target === modal){
    modal.style.display = "none";
    document.body.style.overflow = "";
    }
})
}
export default modals;

    
    
   

