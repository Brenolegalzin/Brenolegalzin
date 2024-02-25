let numbers = ["0", "1", "2", "3", "4", "5","6","7","8", "9"];
let letters = ["a", "b", "c", "A", "B", "C"];
let symbols = [".", "!", "$", "@", ","];
let password = ""
let indice1 = Math.floor(Math.random() * 4) + 0;
let indice2 = Math.floor(Math.random() * 5) + 0;
let indice3 = Math.floor(Math.random() * 9) + 0;
let result1 = symbols[indice1];
let result2 = letters[indice2];
let result3 = numbers[indice3];
let quant = parseInt(document.getElementById("quantidade").value);
function generatePassword(){
	password = "";
	quant = parseInt(document.getElementById("quantidade").value);
	for(let i=0; i<=quant; i++){
		if(document.getElementById("caracteries").checked==true){
			indice1 = Math.floor(Math.random() * 4) + 0;
			result1 = symbols[indice1];
			password = password+result1;
			document.getElementById("result").innerText = "Resultado :"+password;
		}
		if(document.getElementById("letras").checked==true){
			indice2 = Math.floor(Math.random() * 5) + 0;
			result2 = letters[indice2];
			password = password+result2;
			document.getElementById("result").innerText = "Resultado :"+password;
		}
		if(document.getElementById("numeros").checked==true){
			indice3 = Math.floor(Math.random() *9) + 0;
			result3 = numbers[indice3];
			password = password+result3;
			document.getElementById("result").innerText = "Resultado :"+password;
		}
	}
	
	password = password.slice(0, quant);
	document.getElementById("result").innerText = "Resultado :"+password;
}
