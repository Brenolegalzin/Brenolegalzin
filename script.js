let trueOrFalse1 = false;
let trueOrFalse2 = false;
let trueOrFalse3 = false;
let coisas = ["0","1","2","3","4","5","6","7","8","9","a","b","c",".","!","*","+"]
let coisas1 = Math.floor(Math.random() * 16) + 0;
let resposta = ""
function click1(){
  document.querySelector("#sim1").style.backgroundColor = "blue";
  trueOrFalse1 = true;
  document.querySelector("#nao1").style.backgroundColor = "white";
}
function click2(){
  document.querySelector("#sim1").style.backgroundColor = "white";
  trueOrFalse1 = false;
  document.querySelector("#nao1").style.backgroundColor = "blue";
}
function click3(){
  document.querySelector("#sim2").style.backgroundColor = "blue";
  trueOrFalse2 = true;
  document.querySelector("#nao2").style.backgroundColor = "white";
}
function click4(){
  document.querySelector("#sim2").style.backgroundColor = "white";
  trueOrFalse2 = false;
  document.querySelector("#nao2").style.backgroundColor = "blue";
}
function click5(){
  document.querySelector("#sim3").style.backgroundColor = "blue";
  trueOrFalse3 = true;
  document.querySelector("#nao3").style.backgroundColor = "white";
}
function click6(){
  document.querySelector("#sim3").style.backgroundColor = "white";
  trueOrFalse3 = false;
  document.querySelector("#nao3").style.backgroundColor = "blue";
}
function gere(){
  resposta = "";
  let tamanho = document.getElementById("")
  if(trueOrFalse1==true){
    for(let i=0; i<=tamanho; i++){
      coisas1 = Math.floor(Math.random() * 16) + 0;
      resposta = resposta+coisas[coisas1];
      resposta.replace(["0","1","2","3","4","5","6","7","8","9"], "");
      document.getElementById("result").innerText = resposta;
    }
  }
  if(trueOrFalse3==true){
    for(let z=0; z<=tamanho; z++){
      coisas1 = Math.floor(Math.random() * 16) + 0;
      resposta = resposta+coisas[coisas1];
      resposta.replace([".","!","*","+"], "");
      document.getElementById("result").innerText = resposta;
    }
  }
  if(trueOrFalse2==true){
    for(let k=0; k<=tamanho; k++){
      coisas1 = Math.floor(Math.random() * 16) + 0;
      resposta = resposta+coisas[coisas1];
      resposta.replace(["a","b","c"], "");
      document.getElementById("result").innerText = resposta;
    }
  }
}
