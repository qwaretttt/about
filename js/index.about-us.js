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
    let aboutUsHtml = '';
    for (const about of aboutus) {
        aboutUsHtml += `
    <div class="about-us">
      <div class="about-us__content about-us__content--left">
        <h2 class="about-us__title">${about.title}</h2>
        <h3 class="about-us__subtitle">${about.subtitle}</h3>
        <p class="about-us__description">${about.description}</p>
      </div>
      <div class="about-us__content about-us__content--right">
        <h3 class="about-us__subtitle">${about.subtitle}</h3>
        <p class="about-us__text">${about.text}</p>
        <p class="about-us__text">${about.text}</p>
      </div>
    </div>
     `;
}
   document.querySelector('.about-us__content');
}