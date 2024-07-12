// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const userCardElement = document.getElementById('user-card');
const pcCardElement = document.getElementById('pc-card');
const bingoCardElement = document.getElementById('bingo-card');
const numberTextElement = document.getElementById('bingo-number')
const startButonElement = document.getElementById('start-button')

let playerNumbers = [];
let pcNumbers = [];
let bingoNumbers = [];

const createCards = () => {
  const fragment_user = document.createDocumentFragment();
  const fragment_pc = document.createDocumentFragment();

  const divPlayer = document.createElement('div');
  const divPc = document.createElement('div');

  divPlayer.classList.add('card');
  divPc.classList.add('card');

  for (let i = 1; i < 16; i++) {
    const numberCardPlayer = Math.floor(Math.random() * 99);
    const numberCardPc = Math.floor(Math.random() * 99);

    const spanPlayer = document.createElement('span');
    const spanPc = document.createElement('span');

    spanPlayer.classList.add('box-players');
    spanPc.classList.add('box-players');

    spanPlayer.textContent = numberCardPlayer;
    spanPc.textContent = numberCardPc;

    divPlayer.append(spanPlayer);
    divPc.append(spanPc);

    playerNumbers.push(numberCardPc);
    pcNumbers.push(numberCardPc);
  }

  fragment_user.append(divPlayer);
  fragment_pc.append(divPc);

  userCardElement.append(fragment_user);
  pcCardElement.append(fragment_pc);
};

const createBingoCard = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 1; i < 99; i++) {
    const newSpan = document.createElement('span');

    newSpan.classList.add('box-bingo');

    newSpan.textContent = i;

    fragment.append(newSpan);

    bingoNumbers.push(i);
  }

  bingoCardElement.append(fragment);
};




const selectBingoNumbers = () =>{
    const interval = setInterval(()=>{
       for 

    }, 500)


}




createCards();
createBingoCard()

startButonElement.addEventListener('click', selectBingoNumbers)
