fetch("data/tires/13.json")
  .then(r => r.json())
  .then(tires => {
    const container = document.getElementById("tires13");

    container.innerHTML = tires.map(tire => `
      <div class="card m-3" style="width: 18rem;">
        <img src="${tire.images}" class="card-img-center m-3"
             alt="${tire.brand} ${tire.model}">

        <div class="card-body">
          <h5 class="card-title">
            ${tire.brand} ${tire.model}
          </h5>
          <p class="card-text">
            ${tire.size.width}/${tire.size.profile} R${tire.size.diameter},
            ${tire.season}
          </p>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">Нагрузка: ${tire.loadIndex}</li>
          <li class="list-group-item">Скорость: ${tire.speedIndex}</li>
          <li class="list-group-item">Цена: ${tire.price} €</li>
        </ul>
      </div>
    `).join("");
  });

  fetch("data/tires/14.json")
    .then(r => r.json())
    .then(tires => {
      const container = document.getElementById("tires14");

      container.innerHTML = tires.map(tire => `
        <div class="card m-3" style="width: 18rem;">
          <img src="${tire.images}" class="card-img-center m-3"
               alt="${tire.brand} ${tire.model}">

          <div class="card-body">
            <h5 class="card-title">
              ${tire.brand} ${tire.model}
            </h5>
            <p class="card-text">
              ${tire.size.width}/${tire.size.profile} R${tire.size.diameter},
              ${tire.season}
            </p>
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">Нагрузка: ${tire.loadIndex}</li>
            <li class="list-group-item">Скорость: ${tire.speedIndex}</li>
            <li class="list-group-item">Цена: ${tire.price} €</li>
          </ul>
        </div>
      `).join("");
    });
