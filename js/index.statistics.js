const statistics = [
{
id: '1',
number: '15K',
sign: '+',
description: 'Lamps installed in 2023'
},
{
  id: '2',
  number: '298',
  description: 'Custom solutions'
}, 
{
  id: '3',
  number: '2K',
  sign: '+',
  description: 'Clients in the USA'
},
{
  id: '4',
  number: '599',
  description: 'Large-scale projects'
}
]

function renderAboutus(statistics) {
  let statisticsHtml = '';
  for (const statistic of statistics) {
     statisticsHtml += `
 <div class="statistics__item">
        <p class="statistics__number">${statistic.number}</p>
          ${statistic.sign ? `<p class="statistics__sign">${statistic.sign}</p>` : ''}
        <p class="statistics__description">${statistic.description}</p>
      </div>
        `;
}
   document.querySelector('.statistics__list').innerHTML = statisticsHtml;
}

renderAboutus(statistics);

