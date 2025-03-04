function clique(){
  cor1 = document.getElementById("cor1").value;
  cor2 = document.getElementById("cor2").value;
  cor3 = document.getElementById("cor3").value;
  cor4 = document.getElementById("cor4").value;
  select = document.getElementById("select");
  elementSel = select.options[select.selectedIndex].text;

  if(elementSel === "radial-gradient"){
    document.querySelector("section").style.background = `radial-gradient(${cor1},${cor2},${cor3},${cor4})`
  }else{
    document.querySelector("section").style.backgroundImage = `linear-gradient(${elementSel},${cor1},${cor2},${cor3},${cor4})`
  }
}

clique();



