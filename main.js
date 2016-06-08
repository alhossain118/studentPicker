
document.addEventListener("DOMContentLoaded", init );

var arr = [];
function init(){
    document.getElementsByClassName("doStuff")[0].addEventListener('click', addTheStudent)
    document.getElementsByClassName("randomStudent")[0].addEventListener('click', randomName)
  //  document.getElementsByClassName("setGroups")[0].addEventListener('click', groupNames)
}
function addTheStudent(){
  var name = document.getElementById("searchTxt").value;
  console.log(name);
  var para = document.createElement('p');
  name = name.split(",");
  console.log("Line 14: " + name)
  document.querySelector('.box').appendChild(para)

  if(name.length > 1){
    for(var i = 0; i < name.length; i++){
      arr.push(name[i])
      para.textContent +=  " " + name[i] + " "  ;
    //  para.appendChild
      console.log("para", para);
    }
  }
  else{
    arr.push(name)
    para.textContent = name;
  }

  console.log("arr", arr)
   document.getElementById("searchTxt").value = ""
}
function randomName (){
var para = document.getElementsByClassName("randomStudentName")[0]
var randomArray = arr[Math.floor(Math.random()*arr.length)];

para.textContent = randomArray;
console.log(randomArray)
}

// function groupNames (){
//   var box = document.createElement('div');
//   var group = document.getElementById("groupTxt").value;
//   console.log(group)
//   for(var i =0; i < arr; i++){
//
//     for(var j = 0; i < group / )
//   }
//   // if(arr.length  % 2 === 0){
//   //   document.querySelector('.groups').appendChild(para)
//   // }
// }
