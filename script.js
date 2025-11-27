const parentDiv = document.createElement('div');
parentDiv.classList.add("container");
document.body.appendChild(parentDiv);

 let gridBtn = document.querySelector(".gridBtn");
  let resetBtn = document.querySelector(".resetBtn");
  
 let gridCount, gridVal = 0 ;
   let gridsCount;
   let newVal = 0;

//16*16 grid after loading the page
let nwcount;
   for(let i =0;i<16*16;i++)
      {
      let insideBox  = document.createElement('div');
         insideBox.classList.add('insideBox1');
           parentDiv.appendChild(insideBox);
           nwcount = document.querySelector('.insideBox1').childNodes.length;
             changeClr(insideBox);

              //RESET button working
              resetBtn.addEventListener("click",function removeGrids(){
        insideBox.style.backgroundColor = '';
                  });
         };

//Creating custom grids user entry
gridBtn.addEventListener("click", function returnVal(){
            parentDiv.innerHTML = '';
         gridCount = prompt("enter the size of grid");
        if(isNaN(gridCount)){
           alert("invalid input");
           return;
        };
        newVal = gridCount;
         createGrids(newVal);
   });
 
     function createGrids(newVal)
    {
      gridsCount = newVal;
      gridsCount=  gridsCount**2;
      if(gridsCount<=10000){
      for(let i = 0; i < gridsCount; i++)
         {
         insideBox  = document.createElement('div');
         insideBox.classList.add('insideBox1');
         parentDiv.appendChild(insideBox);
        let avg = 512 / newVal;
         insideBox.style.width = `${avg}px`;
         insideBox.style.height = `${avg}px`;
         changeClr(insideBox);
         }}else{
            alert ("enter within the range 1 - 100")
         }         
      };

//Changing color inside the inner grids  function + RESET BUTTON working

     function changeClr(insideBox)
     {
       resetBtn.addEventListener("click",function removeGrids(){
        insideBox.style.backgroundColor = '';
                  });
         insideBox.addEventListener('mousemove',() => {
            colorChange();
  });
      function colorChange(){
         insideBox.style.backgroundColor = 'black';
    }
   }