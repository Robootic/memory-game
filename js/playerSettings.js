function override(nome){
  
  let divNome = document.querySelector("#playerName");
  divNome.innerHTML = ""

  let p = document.createElement("p");
  p.innerHTML = `Bem vindo ${nome}`

  let buttonRename = document.createElement("button");
  buttonRename.innerHTML = "Rename"
  buttonRename.addEventListener("click", callBack)

  divNome.appendChild(p);
  divNome.appendChild(buttonRename);

}


function callBack(){
  let divPlayerName = document.querySelector("#playerName");
  divPlayerName.innerHTML = ""

  let seuNome = document.createElement("h3");
  seuNome.innerHTML = "Qual o seu nome jogador ?"

  let inputName = document.createElement("input");
  inputName.setAttribute("id", "inputName");

  let buttonSubmitName = document.createElement("button");
  buttonSubmitName.setAttribute("id", "submitName");
  buttonSubmitName.innerHTML = "Subimit Name"
  buttonSubmitName.addEventListener("click", subimitName);

  divPlayerName.appendChild(seuNome);
  divPlayerName.appendChild(inputName);
  divPlayerName.appendChild(buttonSubmitName);
}


function subimitName(){
  var inputName = document.querySelector("#inputName")
  var playerName = inputName.value;

  override(playerName);
}


