let quotes = [
  'The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)',
  'Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)',
  'Before software can be reusable it first has to be usable. (Ralph Johnson)',
  'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)'
];

function displayQuote() {
  let index = Math.floor(Math.random()*quotes.length);


  let div=document.querySelector('#quote');
  let quote = `<div class="card">
    <img src="https://raw.githubusercontent.com/rutikwankhade/Random-Quote/master/icons/favicon.png" height="40">
    <p>${quotes[index]}</p>
    <img src="https://raw.githubusercontent.com/rutikwankhade/Random-Quote/master/icons/favicon.png" height="50" >
    </div>
  
  `;
  div.innerHTML=quote;

}