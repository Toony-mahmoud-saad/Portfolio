var fullStackRadio = document.getElementById("btnradio1")
var backEndRadio = document.getElementById("btnradio2")
var frontEndRadio = document.getElementById("btnradio3")

var fullBrojects = document.getElementById("fullBrojects")
var backBrojects = document.getElementById("backBrojects")
var frontBrojects = document.getElementById("frontBrojects")

fullStackRadio.onclick= ()=>{
  fullBrojects.classList.remove('d-none')
  backBrojects.classList.add('d-none')
  frontBrojects.classList.add('d-none')
}

backEndRadio.onclick = ()=>{
  
  backBrojects.classList.remove('d-none')
  fullBrojects.classList.add('d-none')
  frontBrojects.classList.add('d-none')
}

frontEndRadio.onclick = ()=>{
  frontBrojects.classList.remove('d-none')
  backBrojects.classList.add('d-none')
  fullBrojects.classList.add('d-none')
}





