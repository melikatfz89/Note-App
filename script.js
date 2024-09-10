// one
const h1Elem=document.querySelector("h1")
const inputElem= document.querySelector("#write-here");
const spanscolorsElem= document.querySelectorAll(".spans-color");
const AddElem= document.querySelector("#add-btn");
const DeleteElem= document.querySelector("#delete-btn");

const listedelem=document.querySelector(".listed-tasks");
const totalListedelem=document.querySelector(".total-listed");
const deletBtnSmall=document.querySelector(".delet-eraser")

spanscolorsElem.forEach(function(colorbox){
    colorbox.addEventListener('click', function(event){
        const createcolor=event.target.style.backgroundColor;
        inputElem.style.backgroundColor=createcolor
        // inputElem.style.color="white"

    })
})
 
DeleteElem.addEventListener('click', function(){
    inputElem.style.backgroundColor="white";
    inputElem.value="";
})


// two
inputElem.addEventListener('keydown', function(event){
    console.log(event);
    if (event.keyCode===13){
        generateTextAndColors()
    }
})
AddElem.addEventListener('click', generateTextAndColors)


function generateTextAndColors(){
      const divelem=document.createElement('div');
      divelem.className= 'listed-tasks';
      const taskDivColor=inputElem.style.backgroundColor;
      divelem.style.backgroundColor=taskDivColor;


      const pelem= document.createElement('p');
      pelem.className= 'p-listed';
      pelem.innerHTML=inputElem.value;
        
      divelem.append(pelem);
      listedelem.append(divelem);
      totalListedelem.append(listedelem);
       
      inputElem.value='';
      inputElem.style.backgroundColor="white";

      divelem.addEventListener('click', removeNote)

}

function removeNote(event){
    event.target.remove();
}

// dark-light
const switchElem=document.querySelector('.switch-theme')
const sunIcon=document.getElementById('sun-icon')
const moonIcon=document.getElementById('moon-icon')
const totalSection=document.querySelector('.total-sec')


sunIcon.addEventListener('click', showSun)
 function showSun(){
    totalSection.classList.add('light')
    if(totalSection.className.includes('light')){
        localStorage.setItem('theme', 'light');
        totalSection.style.backgroundColor='rgb(234, 228, 238)';
        totalSection.style.color='#000';
        sunIcon.style.backgroundColor='lightblue';
        sunIcon.style.color='yellow';
        moonIcon.style.backgroundColor='';
        moonIcon.style.color='';
    }
 }
 moonIcon.addEventListener('click', showMoon)
 function showMoon(){
    totalSection.classList.add('dark')
    if(totalSection.className.includes('dark')){
        localStorage.setItem('theme', 'dark');
        totalSection.style.backgroundColor='black';
        totalSection.style.color='rgb(234, 228, 238)';
        moonIcon.style.backgroundColor='black';
        moonIcon.style.color='white';
        sunIcon.style.backgroundColor='';
        sunIcon.style.color='';
    }
   
 }

// switchElem.addEventListener('click', changeColorBody)

// function changeColorBody(){
//      totalSection.classList.toggle('dark');

//      if (totalSection.className.includes('dark')){
//         localStorage.setItem('theme', 'dark')
//      }
//      else{
//         localStorage.setItem('theme', 'light')
//      }
// }


window.onload= function(){
    const fixedColorSection=localStorage.getItem('theme')
    if(fixedColorSection==='dark'){
        totalSection.classList.add('dark');
    }
}