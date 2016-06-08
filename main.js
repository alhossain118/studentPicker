
document.addEventListener("DOMContentLoaded", init );

var arr = [];
function init(){
    document.getElementsByClassName("doStuff")[0].addEventListener('click', addTheStudent)
    document.getElementsByClassName("randomStudent")[0].addEventListener('click', randomName)
}
function addTheStudent(){
  var name = document.getElementById("searchTxt").value;
  var para = document.createElement('p');
  name = name.split(" ");

  //console.log(name.split(' '));;
  //for(var i = 0; i < name.length; i++){
  if(name.length > 1){
    for(var i = 0; i < name.length; i++){
      arr.push(name[i])
      para.textContent += name[i] + ' ';
      console.log("para", para);
      // document.querySelector('.box').appendChild(para)
    }
  }
  else{
    arr.push(name)
    para.textContent = name;
    // document.querySelector('.box').appendChild(para)
  }
    //arr.push(name);
document.querySelector('.box').appendChild(para)

    //para.textContent = name[1];


  //}
  console.log("arr", arr)
  // para.textContent = name;
  // document.querySelector('.box').appendChild(para)
  // arr.push(name);
   document.getElementById("searchTxt").value = ""
}

function randomName (){
var para = document.getElementsByClassName("randomStudentName")[0]
var randomArray = arr[Math.floor(Math.random()*arr.length)];

para.textContent = randomArray;
console.log(randomArray)
}
