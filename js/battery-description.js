fetch('data/battery-description.json')
  .then(res => {
    if (!res.ok) throw new Error('Ошибка загрузки JSON: ' + res.status);
    return res.json();
  })
  .then(batteries => {
    const container = document.getElementById('batteryContainer');

    batteries.forEach(b => {
      // Генерируем карточку
      const cardHTML = `
        <div class="card w-100 p-3 mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${b.img}" class="img-fluid rounded-start" alt="${b.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${b.title}</h5>
                ${b.description.map(p => `<p>${p}</p>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;

      container.insertAdjacentHTML('beforeend', cardHTML);
    });
  })
  .catch(err => console.error(err));
