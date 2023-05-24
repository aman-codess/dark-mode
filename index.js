const touched = document.getElementById('touched');
const touch = document.getElementById('touch');
const body = document.body;

const change = () =>{
    if (touched.classList.contains('circle')) {
        touched.classList.remove('circle');
        touched.classList.add('circle2');
        body.style.backgroundColor='black';
        body.style.color='white';
        touch.style.backgroundColor='gray';
        
    } else if (touched.classList.contains('circle2')) {
        touched.classList.remove('circle2');
        touched.classList.add('circle');
        body.style.backgroundColor='white';
        body.style.color='black';
        touch.style.backgroundColor='black';
    }
    

}
touch.addEventListener('click', change);