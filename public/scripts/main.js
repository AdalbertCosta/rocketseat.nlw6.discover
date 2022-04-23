import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botoões com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener("click", event =>{
    modal.open()
  })
})
//Pegar quando o marcar como lido for clicador

