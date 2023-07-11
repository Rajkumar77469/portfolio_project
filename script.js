console.log("script is ruuning")
document.querySelector('.cross').style.display='none';
document.querySelector('.hambarger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
        else{
           
            document.querySelector('.ham').style.display='none'
            document.querySelector('.cross').style.display='inline'
        }

    
})