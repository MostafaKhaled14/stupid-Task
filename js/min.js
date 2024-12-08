


var task1 = document.querySelector('.task-1');
var task2 = document.querySelector('.task-2');
var taskbtn1 =document.querySelector('.taskbtn-1');
var taskbtn2 =document.querySelector('.taskbtn-2');
var img = document.querySelector('#img');
var space = document.querySelector('#space');
var aud = document.querySelector('#aud');
console.log(aud);

// aud.setAttribute('autoplay', 'true');
// aud.removeAttribute('autoplay');

function Switchbtn1(){
    task1.classList.add('d-none');
    task2.classList.remove('d-none');

}
function Switchbtn2(){
    task2.classList.add('d-none');
    task1.classList.remove('d-none');
    task1.classList.remove('bg-secondary');
    task1.classList.add('bg-color');
    taskbtn1.classList.add('d-none');
    img.classList.remove('d-none');
    aud.setAttribute('autoplay', 'true');
    
}

function leaveimg(){
    img.classList.add('d-none');
    taskbtn1.classList.remove('d-none');
    task1.classList.add('bg-secondary');
    task1.classList.remove('bg-danger');
    aud.removeAttribute('autoplay');
}

// function sitaud(){
//     aud.setAttribute('autoplay', 'true');
// }

taskbtn1.addEventListener('click', Switchbtn1);
// taskbtn.addEventListener('mouseleave', sitaud);
space.addEventListener('mouseleave', Switchbtn2);
img.addEventListener('mouseleave', leaveimg);
