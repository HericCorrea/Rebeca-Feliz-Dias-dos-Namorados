const fotos = ["foto1.jpg","gif1.gif","foto2.jpg","gif2.gif","foto3.jpg","gif3.gif","foto4.jpg","gif4.gif"];
let indexAtual = 0;

function mostrarFoto() {
  document.getElementById("fotoAtual").src = fotos[indexAtual];
}

function prevFoto() {
  indexAtual = (indexAtual - 1 + fotos.length) % fotos.length;
  mostrarFoto();
}

function nextFoto() {
  indexAtual = (indexAtual + 1) % fotos.length;
  mostrarFoto();
}

function calcularDias() {
  const inicio = new Date("2023-11-20");
  const hoje = new Date();
  const diff = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
  document.getElementById("contador").textContent = diff;
}

const frases = [
  "Você é meu presente diário. 💝",
  "Cada dia ao seu lado é um sonho realizado.",
  "Nosso amor é a melhor parte da minha vida.",
  "Te amo mais do que ontem e menos do que amanhã.",
  "Com você, tudo é melhor. 💖"
];

function escolherFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").textContent = frase;
}

window.onload = () => {
  mostrarFoto();
  calcularDias();
  escolherFrase();
};