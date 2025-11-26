const livros = [

  {
    titulo: "O poder do Hábito",
    imagem: "https://m.media-amazon.com/images/I/71xLmdLOQ0L.jpg",
    categoria: "Psicologia / Autodesenvolvimento",
    quantidade: 2,
    descricao:
      "Explora os mecanismos por trás dos hábitos e mostra como mudá-los para transformar a vida pessoal e profissional."
  },
 
];


const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

const bookDetail = document.getElementById("bookDetail");
const detailImage = document.getElementById("detailImage");
const detailTitle = document.getElementById("detailTitle");
const detailQty = document.getElementById("detailQty");
const detailCat = document.getElementById("detailCat");
const detailDesc = document.getElementById("detailDesc");
const closeDetail = document.getElementById("closeDetail");

function renderBooks(filtro = "") {
  bookList.innerHTML = "";
  const filtrados = livros.filter(l =>
    l.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach(livro => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `
      <img src="${livro.imagem}" alt="${livro.titulo}">
      <p>${livro.titulo}</p>
    `;
    div.onclick = () => mostrarDetalhes(livro);
    bookList.appendChild(div);
  });
}

renderBooks();

// Buscar livros
searchInput.addEventListener("input", e => {
  renderBooks(e.target.value);
});

// Ocultar menu ao clicar na área principal
content.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Mostrar detalhes
function mostrarDetalhes(livro) {
  detailImage.src = livro.imagem;
  detailTitle.textContent = livro.titulo;
  detailQty.textContent = livro.quantidade;
  detailCat.textContent = livro.categoria;
  detailDesc.textContent = livro.descricao;

  bookDetail.classList.add("show");
}

// Fechar detalhes
closeDetail.addEventListener("click", () => {
  bookDetail.classList.remove("show");
});
