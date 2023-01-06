const projects = [
  // {
  //   id: '1',
  //   name: 'Multi Post',
  //   cardImage: './images/profession-1.png',
  //   closeIcon: './images/cancel_icon.png',
  //   popImage: '/images/Pop-up.png',
  //   description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  //   infoPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  //   technologies: ['html', 'Bootstrap', 'Ruby on rails'],
  //   liveText: 'See Live',
  //   seeIcon: './images/see-icon.png',
  //   sourceText: 'See Source',
  //   liveLink: 'https://ritadee.github.io/portfolio/',
  // },
  {
    id: '2',
    name: 'Profesional Art Printing Data',
    cardImage: './images/profession-1.png',
    closeIcon: './images/cancel_icon.png',
    popImage: '/images/Pop-up.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    infoPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveText: 'See Live',
    seeIcon: './images/see-icon.png',
    sourceText: 'See Source',
    liveLink: 'https://ritadee.github.io/portfolio/',
  },

  {
    id: '2',
    name: 'Profesional Art Printing Data',
    cardImage: './images/profession-1.png',
    closeIcon: '/images/cancel_icon.png',
    popImage: '/images/Pop-up.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    infoPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveText: 'See Live',
    seeIcon: '/images/see-icon.png',
    sourceText: 'See Source',
    liveLink: 'https://ritadee.github.io/portfolio/',
  },

  {
    id: '3',
    name: 'Profesional Art Printing Data',
    cardImage: './images/profession-1.png',
    closeIcon: '/images/cancel_icon.png',
    popImage: '/images/Pop-up.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    infoPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveText: 'See Live',
    seeIcon: '/images/see-icon.png',
    sourceText: 'See Source',
    liveLink: 'https://ritadee.github.io/portfolio/',
  },

  {
    id: '4',
    name: 'Profesional Art Printing Data',
    cardImage: './images/profession-1.png',
    closeIcon: '/images/cancel_icon.png',
    popImage: '/images/Pop-up.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    infoPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveText: 'See Live',
    seeIcon: '/images/see-icon.png',
    sourceText: 'See Source',
    liveLink: 'https://ritadee.github.io/portfolio/',
  },

  {
    id: '5',
    name: 'Profesional Art Printing Data',
    cardImage: './images/profession-1.png',
    closeIcon: '/images/cancel_icon.png',
    popImage: '/images/Pop-up.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    infoPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveText: 'See Live',
    seeIcon: '/images/see-icon.png',
    sourceText: 'See Source',
    liveLink: 'https://ritadee.github.io/portfolio/',
  },

  {
    id: '7',
    name: 'Profesional Art Printing Data',
    cardImage: './images/profession-1.png',
    closeIcon: './images/cancel_icon.png',
    popImage: '/images/Pop-up.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    infoPop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveText: 'See Live',
    seeIcon: './images/see-icon.png',
    sourceText: 'See Source',
    liveLink: 'https://ritadee.github.io/portfolio/',
  },
];

const projectSection = document.getElementById('project-section');
for (let i = 0; i < projects.length; i += 1) {
  projectSection.innerHTML += `
    <div class="profession">
        <h4>${projects[i].name}</h4>
        <p>${projects[i].description}</p>
        <ul>
          <li>${projects[i].technologies[0]}</li>
          <li>${projects[i].technologies[1]}</li>
          <li>${projects[i].technologies[2]}</li>
        </ul>
        <button aria-label="view" class="btn-project see-project" type="button">
          See Project
        </button>
      </div>`;
}

const projectButtons = document.querySelectorAll('.see-project');
const popUpContainer = document.querySelector('.modal-container');

function populatePopUpData(data) {
  popUpContainer.innerHTML = `
  <div class="modal">
        <div class="modal-pop">
          <h3>${data.name}</h3>
          <img class="pop-close" src="${data.closeIcon}" alt="">
        </div>
        
        <div class="modal-tech">
          <ul>
            <li>${data.technologies[0]}</li>
            <li>${data.technologies[1]}</li>
            <li>${data.technologies[2]}</li>
          </ul>
        </div>
        <div class="modal-img"></div>
        <p>${data.infoPop}</p>
        <div class="modal-btn">
          <button class="btn-1" type="button">See Live <img src="./images/see-Icon.png" alt="see live button"></button>
          <button class="btn-2" type="button">See Source <img src="./images/source-icon.png" alt="see source button"></button>
        </div>
      </div>`;
  popUpContainer.style.position = 'fixed';

  const closeIcons = document.querySelectorAll('.pop-close');
  closeIcons.forEach((btn) => {
    btn.addEventListener('click', () => {
      popUpContainer.style.display = 'none';
    });
  });
}

projectButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    popUpContainer.style.display = 'flex';
    populatePopUpData(projects[i]);
  });
});

const seeProjectBtn = document.querySelector('.btn-project-btn');
seeProjectBtn.addEventListener('click', () => {
  popUpContainer.style.display = 'flex';
  populatePopUpData(projects[0]);
});

// const multiPost = document.querySelector('.multi');
// const multiBtn = document.querySelector('.btn-multi');
// const cancelMulti = document.querySelector('.cancel-multi');

// multiBtn.addEventListener('click', () => {
//   multiPost.style.position = 'fixed';
//   multiPost.style.width = '100%';
//   multiPost.style.height = '100vh';
//   multiPost.style.left = '0';
//   multiPost.style.top = '0';
//   multiPost.style.bottom = '0';
//   multiPost.style.right = '0';
//   multiPost.style.zIndex = '99';
//   multiPost.style.backgroundColor = '#fff';
// });

// cancelMulti.addEventListener('click', () => {
//   multiPost.style.display ='grid';
//   multiPost.style.gridTemplateColumn = '70%, 30%'
//   multiPost.style.gap = '24px'
//   multiPost.style.width = '80%'
//   multiPost.style.backgroundColor = 'green';
//   multiPost.style.zIndex = '79';
// });



