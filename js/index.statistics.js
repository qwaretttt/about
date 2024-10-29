const response = await fetch('api/contents.json');
const contents = await response.json();
renderContents(contents);

//fetch('api/contents.json')
//.then( response => response.json() )
//.then( contents => renderContents(contents) );

function renderContents(contents) {
  let leftHtml = '';
  let rightHtml = '';
  let statisticsHtml = '';

  for (const content of contents) {
      if (content.type === 'contents') {
          if (content.id === '1') {
              leftHtml += `
                  <h2 class="contents__title">${content.title}</h2>
                  <h3 class="contents__subtitle">${content.subtitle}</h3>
                  <p class="contents__description">${content.description}</p>
              `;
          } else if (content.id === '2') {
              rightHtml += `
                  <h3 class="contents__subtitle">${content.subtitle}</h3>
                  <p class="contents__text">${content.text}</p>
                  <p class="contents__additionalText">${content.additionalText}</p>
              `;
          }
      } else if (content.type === 'statistics') {
          statisticsHtml += `
              <div class="statistics__item">
                  <p class="statistics__number">${content.number}</p>
                  ${content.sign ? `<p class="statistics__sign">${content.sign}</p>` : ''}
                  <p class="statistics__description">${content.description}</p>
              </div>
          `;
      }
  }

  document.querySelector('.contents__list--left').innerHTML = leftHtml;
  document.querySelector('.contents__list--right').innerHTML = rightHtml;
  document.querySelector('.statistics__list').innerHTML = statisticsHtml;
}

