  // весь твой fetch-код
  fetch("data/tires/passenger/13.json")
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
              </h5>

              ${size || tire.season ? `
                <p class="card-text">
                  ${size ?? ""}
                  ${size && tire.season ? ", " : ""}
                  ${tire.season ?? ""}
                </p>` : ""}
            </div>

            <ul class="list-group list-group-flush">
              ${row("Нагрузка", tire.loadIndex)}
              ${row("Скорость", tire.speedIndex)}
              ${row("Цена", tire.price && tire.price + " €")}
            </ul>
          </div>
        `;
      }).join("");
    });

function openImage(src) {
  const modalEl = document.getElementById("imageModal");
  const img = document.getElementById("modalImage");

  img.src = src;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

