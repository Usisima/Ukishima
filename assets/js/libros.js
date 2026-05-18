async function cargarLibros() {
  const response = await fetch('../data/libros.json');
  const libros = await response.json();

  const container = document.getElementById('books-container');

  libros.forEach(libro => {
    const card = document.createElement('article');
    card.className = 'book-card';

    card.innerHTML = `
      <img src="${libro.imagen}" alt="${libro.titulo}">
      <h3>${libro.titulo}</h3>
      <p><strong>${libro.autor}</strong></p>
      <p>${libro.descripcion}</p>
      <a href="${libro.pdf}" target="_blank">Ver PDF</a>
    `;

    container.appendChild(card);
  });
}

cargarLibros();