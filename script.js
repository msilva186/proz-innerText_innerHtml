
const elementoh1 = document.getElementById("titulo");

console.log(elementoh1);

const elementoUl = document.querySelector("ul");

console.log(elementoUl);

const elementoA = document.querySelector("a");

console.log(elementoA);


const elementoOl = document.getElementById("lista-ordenada");

console.log(elementoOl);

elementoh1.innerHTML = "Atividade Proz";

console.log(elementoh1);

elementoA.innerText = "Atividade Proz 2";


elementoUl.innerHTML = `
    <li>Atividade Proz 1</li>
    <li>Atividade Proz 2</li>
    <li>Atividade Proz 3</li>
` 
elementoOl.innerHTML = `
   
   <a href="https://inscricao.prozeducacao.com.br/home-2024/"></a>
   <a href="https://www.sp.senac.br/"></a>
   <a href="https://www.impacta.com.br/?utm_source=google&utm_medium=pesquisa&utm_campaign=institucional&utm_content=resp_insti_01&gad_source=1&gclid=Cj0KCQiAire5BhCNARIsAM53K1itUo3RIygTawMKrKd40YZP8FHaEHVN3ZAH98GZZExYpT3rjyWx2mEaAml6EALw_wcB"></a>
   
`

