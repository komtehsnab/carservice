fetch('data/generator-starter-services.json')
  .then(res => {
    if (!res.ok) throw new Error('Ошибка загрузки JSON: ' + res.status);
    return res.json();
  })
  .then(services => {
    const tbody = document.getElementById('generator-starter-services');

    services.forEach((s, i) => {
      tbody.insertAdjacentHTML('beforeend', `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${s.problem}</td>
          <td>${s.solution}</td>
          <td>${s.price}</td>
        </tr>
      `);
    });
  })
  .catch(err => console.error(err));
