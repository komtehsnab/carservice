  // весь твой fetch-код
  /*fetch("data/tires/passenger/13.json")
    .then(r => r.json())
    .then(tires => {
      const container = document.getElementById("tires13");
      if (!container) return;

      const row = (label, value) =>
        value ? `<li class="list-group-item">${label}: ${value}</li>` : "";

      container.innerHTML = tires.map(tire => {
        const size = tire.size
          ? `${tire.size.width}/${tire.size.profile} R${tire.size.diameter}`
          : null;

        return `
          <div class="card" style="width: 18rem;">
            <img
              src="${tire.images ?? "img/no-image.png"}"
              class="card-img p-3 tire-img"
              alt="${tire.brand ?? ""} ${tire.model ?? ""}"
              style="cursor:pointer"
              onclick="openImage('${tire.images}')"
            >


            <div class="card-body">
              <h5 class="card-title">
                ${(tire.brand ?? "")} ${(tire.model ?? "")}
                ${(tire.size.width)}/${(tire.size.profile)}
                R${(tire.size.diameter)}
              </h5>

            </div>

            <ul class="list-group list-group-flush">
              ${row("Сезонность", tire.season)}
              ${row("Нагрузка", tire.loadIndex)}
              ${row("Скорость", tire.speedIndex)}
              ${row("Цена", tire.price && tire.price + " Руб.")}
            </ul>
          </div>
        `;
      }).join("");
    });*/

function renderTires(jsonPath, containerId) {
  fetch(jsonPath)
    .then(r => r.json())
    .then(tires => {
      const container = document.getElementById(containerId);
      if (!container) return;

      const row = (label, value) =>
        value ? `<li class="list-group-item">${label}: ${value}</li>` : "";

      container.innerHTML = tires.map(tire => {
        const size = tire.size
          ? `${tire.size.width}/${tire.size.profile} R${tire.size.diameter}`
          : "";

        const img = tire.images ?? "img/no-image.png";

        return `
          <div class="card m-2" style="width: 18rem;">
            <img
              src="${img}"
              class="card-img p-3 tire-img"
              style="cursor:pointer"
              alt="${tire.brand ?? ""} ${tire.model ?? ""}"
              onclick="openImage('${img}')"
            >

            <div class="card-body">
              <h5 class="card-title">
                ${tire.brand ?? ""} ${tire.model ?? ""} ${size}
              </h5>
            </div>

            <ul class="list-group list-group-flush">
              ${row("Сезонность", tire.season)}
              ${row("Нагрузка", tire.loadIndex)}
              ${row("Скорость", tire.speedIndex)}
              ${row("Цена", tire.price && tire.price + " руб.")}
            </ul>
          </div>
        `;
      }).join("");
    });
}

renderTires("data/tires/passenger/13winter.json", "13winter");
renderTires("data/tires/passenger/14winter.json", "14winter");
renderTires("data/tires/passenger/15winter.json", "15winter");
renderTires("data/tires/passenger/16winter.json", "16winter");

renderTires("data/tires/passenger/13summer.json", "13summer");
renderTires("data/tires/passenger/14summer.json", "14summer");
renderTires("data/tires/passenger/15summer.json", "15summer");
renderTires("data/tires/passenger/16summer.json", "16summer");

renderTires("data/tires/passenger/14_4s.json", "14_4s");
renderTires("data/tires/passenger/15_4s.json", "15_4s");
renderTires("data/tires/passenger/16_4s.json", "16_4s");

renderTires("data/tires/truck.json", "truck");


function openImage(src) {
  const modalEl = document.getElementById("imageModal");
  const img = document.getElementById("modalImage");

  img.src = src;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

