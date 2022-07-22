
export const modals =()=> {
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


export const drop = () => {

    const form = document.querySelector('.modal-content__visual');
    const fileInput = document.querySelector('[name="file"]');
    const uploadResult = document.querySelector('.modal-content__result');
    const uploadBtn = document.querySelector('.modal-content__btnUpload');
    const browse = document.querySelector('.select');

    
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        form.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        form.style.backgroundColor = "#FBE0DC";
    }

    function unhighlight() {
        form.style.backgroundColor = "#FFFFFF";
    }

    ['dragenter','dragover'].forEach(eventName => {
        form.addEventListener(eventName, () => highlight(), false);

    });

    ['dragleave','drop'].forEach(eventName => {
        form.addEventListener(eventName, () => unhighlight(), false);
    });

    form.addEventListener('drop', (e) => {
        
        form.files = e.dataTransfer.files;
        const name = e.dataTransfer.files[0].name;
        console.log(name);
        uploadResult.textContent = `Image File Name: ${name}`;
        uploadBtn.style.visibility = "visible";
        form.reset();
        preview(e);
        
    });
    browse.addEventListener('click', () => fileInput.click()); 
        
     fileInput.addEventListener('change', (e) => {
        const name = e.dataTransfer.files[0].name;
        let file = fileInput.files;
        console.log(file);
        uploadResult.textContent = `Image File Name: ${name}`;
        uploadBtn.style.visibility = "visible";
        preview(e);
        form.reset();
    })    
    
    function preview(e){
        const filename = URL.createObjectURL(e.target.files[0]); 
        console.log(filename);
        const previewBox = document.querySelector('.modal-content__previewImg'); 
        var previewImg = document.createElement("img"); 
        previewImg.setAttribute("src",filename); 
        console.log(previewBox);
        previewBox.appendChild(previewImg);
    }
    

}




 
    
   

