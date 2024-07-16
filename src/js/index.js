// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const userCardElement = document.getElementById('user-card');
const pcCardElement = document.getElementById('pc-card');
const bingoCardElement = document.getElementById('bingo-card');
const numberTextElement = document.getElementById('bingo-number');
const startButonElement = document.getElementById('start-button');

let playerNumbers = [];
let pcNumbers = [];
let bingoNumbers = [];
let bingoNumbersSelection = [];

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

    playerNumbers.push(numberCardPlayer);
    pcNumbers.push(numberCardPc);
  }

  fragment_user.append(divPlayer);
  fragment_pc.append(divPc);

  userCardElement.append(fragment_user);
  pcCardElement.append(fragment_pc);
};

const createBoard = (array, board) =>{
  const fragment = document.createDocumentFragment()
  const div = document.createElement('div')

  div.classList.add('card')

  while(array.length < 16){
    const number = Math.floor(Math.random()*99)
    if(!array.includes(number)){
      array.push(number)

      const span = document.createElement('span')
      
      span.textContent = number

      span.classList.add('box-player')

      div.append(span)

    }
  }

  fragment.append(div)
  board.append(fragment)
}

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

const selectBingoNumbers = () => {
  const spansUser = document.querySelectorAll('.user-card .card .box-players');
  //console.log(playerNumbers)

  for (let i = 1; i < 99; i++) {
    const number = Math.floor(Math.random() * 99);
    //console.log(number + ' ' +playerNumbers)
    if (playerNumbers.includes(number)) {
      const index = playerNumbers.indexOf(number);
      spansUser[index].classList.add('green');
      //console.log(number + ' entra')
    }else{
      //console.log(number + ' no entra')
    }
    //bingoNumbersSelection.push(number);
  }

  //console.log(bingoNumbersSelection);
  // const interval = setInterval(() => {}, 500);
};

const checkPlayersCards = () => {
  const spansUser = document.querySelectorAll('.user-card .card .box-players');
  //console.log(spansUser)

  for (const span of spansUser) {
    console.log(span.textContent);
  }
};

const start = () => {
  createCards();
  createBingoCard();
  selectBingoNumbers();
};

startButonElement.addEventListener('click', start);
