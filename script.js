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