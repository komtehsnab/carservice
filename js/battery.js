
fetch('data/battery.json')
  .then(r => r.json())
  .then(batteries => {
    const tbody = document.getElementById('batteryBody');

    batteries.forEach((b, i) => {
      tbody.insertAdjacentHTML('beforeend', `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${b.ah}</td>
          <td>${b.cca}</td>
          <td>${b.size}</td>
          <td>${b.weight}</td>
          <td>${b.brand}</td>
          <td>${b.price}</td>
        </tr>
      `);
    });
  })
  .catch(console.error);

