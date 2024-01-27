let trueOrFalse1 = false;
let trueOrFalse2 = false;
let trueOrFalse3 = false;
let coisas = ["0","1","2","3","4","5","6","7","8","9","a","b","c",".","!","*","+"]
let coisas1 = Math.floor(Math.random() * 16) + 0;
let resposta = ""
let tamanho = "";
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
  if(trueOrFalse1==true){
    coisas.push("0");
    coisas.push("1");
    coisas.push("2");
    coisas.push("3");
    coisas.push("4");
    coisas.push("5");
    coisas.push("6");
    coisas.push("7");
    coisas.push("8");
    coisas.push("9");
  }
  else{
    coisas.slice("0");
    coisas.slice("1");
    coisas.slice("2");
    coisas.slice("3");
    coisas.slice("4");
    coisas.slice("5");
    coisas.slice("6");
    coisas.slice("7");
    coisas.slice("8");
    coisas.slice("9");
  }
  if(trueOrFalse2==true){
    coisas.push(".");
    coisas.push("!");
    coisas.push("*");
    coisas.push("+");
  }
  else{
    coisas.slice(".");
    coisas.slice("!");
    coisas.slice("*");
    coisas.slice("+");
  }
  if(trueOrFalse3==true){
    coisas.push("a");
    coisas.push("b");
    coisas.push("c");
    coisas.push("A");
    coisas.push("B");
    coisas.push("C");
  }
  else{
    coisas.slice("a");
    coisas.slice("b");
    coisas.slice("c");
    coisas.slice("A");
    coisas.slice("B");
    coisas.slice("C");
  }
  coisas1 = Math.floor(Math.random() * 16) + 0;
  document.getElementById("result").innerText = "resultado :"+coisas[coisas1];
}
