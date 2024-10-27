const aboutus = [
    {
        id: '1',
        title: '\\ ABOUT US \\',
        subtitle: 'Illuminate Your Space, Illuminate Your Life With Us',
        description: 'Get a lighting solution that suits your needs.'
    },
    {
    id: '2',
    subtitle: 'Place the Right Accents with Modern Lights by Prizma Studio',
    text: 'We closely cooperate with our clients to fully understand their needs and goals during the early stages of the project. We provide accurate lighting analysis, detailed specifications, schedules for A/V integration, detailed fixture design, and more.',
    texr: 'Our true passion is the art of integrating light within architecture. We have completed over 2000 residential projects and built complex lighting system designs nearly in every interior and exterior imaginable.'
    }
]

function renderAboutus(aboutus) {
    let aboutusHtml = '';
    for (const about of aboutus) {
        aboutusHtml += `
    <div class="aboutus">
      <div class="aboutus__content aboutus__content--left">
        <h2 class="aboutus__title">${about.title}</h2>
        <h3 class="aboutus__subtitle">${about.subtitle}</h3>
        <p class="aboutus__description">${about.description}</p>
      </div>
      <div class="aboutus__content aboutus__content--right">
        <h3 class="aboutus__subtitle">${about.subtitle}</h3>
        <p class="aboutus__text">${about.text}</p>
        <p class="aboutus__text">${about.text}</p>
      </div>
    </div>
     `;
}
   document.querySelector('.aboutus__content').innerText = aboutusHtml;
}

renderAboutus(aboutus);

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
  let aboutusHtml = '';
  for (const statistic of statistics) {
      aboutusHtml += `
 <div class="statistics__item">
        <p class="statistics__number">${statistic.number}</p>
        <p class="statistics__sign">${statistic.sign}</p>
        <p class="statistics__description">${statistic.description}</p>
      </div>
      <div class="statistics__item">
        <p class="statistics__number">${statistic.number}</p>
        <p class="statistics__description">${statistic.description}</p>
      </div>
      <div class="statistics__item">
        <p class="statistics__number">${statistic.number}</p>
        <p class="statistics__sign">${statistic.sign}</p>
        <p class="statistics__description">${statistic.description}</p>
      </div>
      <div class="statistics__item">
        <p class="statistics__number">${statistic.number}</p>
        <p class="statistics__description">${statistic.description}</p>
      </div>
        `;
}
   document.querySelector('.statisctics').innerText = statisticsHtml;
}

renderAboutus(statistics);