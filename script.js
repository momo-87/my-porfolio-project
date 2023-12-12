const openMobileMenu = document.querySelector('#openMobileMenu');
const menuList = document.querySelector('#navMenu');
const closeMobileMenu = document.querySelector('#closeMobileMenu');

openMobileMenu.addEventListener('click', () => {
  menuList.classList.add('mobileMenu');
  closeMobileMenu.classList.add('closeMobileMenu');
});

closeMobileMenu.addEventListener('click', () => {
  menuList.classList.remove('mobileMenu');
  closeMobileMenu.classList.remove('closeMobileMenu');
});

const navMenuLink = document.querySelectorAll('.navMenuLink');
for (let i = 0; i < navMenuLink.length; i += 1) {
  navMenuLink[i].addEventListener('click', () => {
    menuList.classList.remove('mobileMenu');
    closeMobileMenu.classList.remove('closeMobileMenu');
  });
}
// Portfolio Mobile menu end

// Portfolio project details popup window start
const projects = [
  {
    name: '@doctors',
    description: '<p>@doctors is a Full-stack web application that allows a user to book an appointment with a doctor. The Front-end is built using React JS and Redux, and the Back-end API web service is built with Ruby on Rails. Built in remote pair-programming context in collaboration with <a class="collaborator" href="https://github.com/abel-tefera">Abel Belay</a> | <a class="collaborator" href="https://github.com/ragangithub">Ragan</a> | <a class="collaborator" href="https://github.com/lenkon">K Inoulen Shanongba</a></p>',
    image: './images/@doctors.png',
    technologies: [{ name: 'React', url: 'https://react.dev/' },
      { name: 'Redux', url: 'https://redux.js.org/' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Ruby', url: 'https://www.ruby-lang.org/en/' },
      { name: 'Rails', url: 'https://guides.rubyonrails.org/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'Tailwindcss', url: 'https://tailwindcss.com/' },
      { name: 'Rspec', url: 'https://rspec.info/' },
      { name: 'Capybara', url: 'https://teamcapybara.github.io/capybara/' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
    liveVersion: 'https://doctors.abeltb.xyz/',
    codeSource: 'https://github.com/abel-tefera/doctor-appointment-front-end',
  },
  {
    name: 'i-Budget Web APP',
    description: '<p>i-budget is a mobile web application where you can manage your budget. You have a list of transactions associated with a category, so that you can see how much money you spent and on what.</p>',
    image: './images/card7.png',
    technologies: [{ name: 'Ruby', url: 'https://www.ruby-lang.org/en/' },
      { name: 'Rails', url: 'https://guides.rubyonrails.org/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'Tailwindcss', url: 'https://tailwindcss.com/' },
      { name: 'Rspec', url: 'https://rspec.info/' },
      { name: 'Capybara', url: 'https://teamcapybara.github.io/capybara/' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
    liveVersion: 'https://ibudget-wct3.onrender.com/',
    codeSource: 'https://github.com/momo-87/i-budget.git',
  },
  {
    name: 'Air Metrics Web APP',
    description: "<p>In the realm of React and Redux, I sculpted Air Metrics—a dynamic web app unveiling global air quality data. Guided by React's orchestration, I seamlessly integrated components, wielded React Router for smooth navigation, and married React with Redux for state mastery. Events danced harmoniously, styled with finesse. Rigorous integration tests validated the app's robustness. Leveraging React's lifecycle, the Air Metrics experience breathed with vitality. Through meticulous adherence to best practices, this project transcends beyond data visualization; it's a symphony of React mastery and user-centric design.</p>",
    image: './images/airmetrics.png',
    technologies: [{ name: 'React', url: 'https://react.dev/' },
      { name: 'Redux', url: 'https://redux.js.org/' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'SASS', url: 'https://sass-lang.com/' },
      { name: 'Jest', url: 'https://jestjs.io/' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
    liveVersion: 'https://airmetrics.onrender.com',
    codeSource: 'https://github.com/momo-87/air-metrics-webapp.git',
  },
  {
    name: "Space Traveler's Hub",
    description: '<p>Awesome React-based web application that allows users to book rockets and join selected space missions. It uses real live data from SpaceX API. Built in remote pair-programming context in collaboration with <a class="collaborator" href="https://github.com/lordksix">Wladimir Pasquel.</a></p>',
    image: './images/space.png',
    technologies: [{ name: 'React', url: 'https://react.dev/' },
      { name: 'Redux', url: 'https://redux.js.org/' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'SASS', url: 'https://sass-lang.com/' },
      { name: 'Jest', url: 'https://jestjs.io/' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
    liveVersion: 'https://space-travelers-hub-kappa.vercel.app/',
    codeSource: 'https://github.com/lordksix/space-travelers-hub.git',
  },
  {
    name: 'Culinary Explorer',
    description: "<p>My JavaScript capstone journey was a dynamic exploration, transforming a cooking API into an interactive web app. Embracing ES6 elegance and modules, I navigated the code with Gitflow finesse. Callbacks and promises orchestrated seamless interactions, while Webpack orchestrated the symphony of modules. AAA-pattern unit tests were my code guardians, ensuring reliability. With API wizardry, JSON mastery, and asynchronous prowess, I created a flavorful user experience. Beyond the code, I ventured into Git conflict resolution and collaborative code reviews, a testament to both technical and teamwork proficiency. The Culinary Explorer is more than an app; it's a journey through JavaScript mastery.</p>",
    image: './images/restau.png',
    technologies: [{ name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Webpack', url: 'https://webpack.js.org/guides/getting-started/#basic-setup' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
    liveVersion: 'https://momo-87.github.io/JS-capstone-project/',
    codeSource: 'https://github.com/nilab-khwaja/Js-Capstone.git',
  },

  {
    name: 'EduCon 2023',
    description: "<p>Navigating EduCon 2023, I honed UI proficiency—medium-fidelity wireframes brought concepts to life; semantic HTML, CSS and SCSS finesse adorned visuals. Flexbox and media queries ensured responsive design, adapting seamlessly to diverse screens. GitHub Pages showcased deployment mastery. As JavaScript virtuoso, I orchestrated interactive elements, using objects for efficient data management. This simulation isn't just a website—it's a symphony of skills, a testament to my journey in crafting compelling, adaptable, and engaging front-end interfaces.</p>",
    image: './images/meeting.png',
    technologies: [{ name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Sass', url: 'https://sass-lang.com/' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
    liveVersion: 'https://momo-87.github.io/microverse-first-capstone-project/',
    codeSource: 'https://github.com/momo-87/microverse-first-capstone-project.git',
  },

  {
    name: 'Math-Magician',
    description: '<p>Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations; Read a random math-related quote</p>',
    image: './images/maths.png',
    technologies: [{ name: 'React', url: 'https://react.dev/' },
      { name: 'SASS', url: 'https://sass-lang.com/' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'GitHub', url: 'https://github.com/' },
    ],
    liveVersion: 'https://math-magician-7koh.onrender.com/',
    codeSource: 'https://github.com/momo-87/math-magicians.git',
  },
];

const projectCards = [];
const projectImageBoxs = [];
const projectImages = [];
const projectTextBoxs = [];
const projectTitleBoxs = [];
const projectTitles = [];
const projectTechList = [];
const projectTechItems = [];
const projectTechLinks = [];
const projectButtons = [];
const projectButtonlinks = [];
const projectDescriptions = [];
const popupButtonsBoxs = [];
const popupLiveButtonBoxs = [];
const popupLiveLinks = [];
const popupSourceButtonBoxs = [];
const popupSourceLinks = [];
const cardWorks = document.querySelector('#cardWorks');

for (let i = 0; i < projects.length; i += 1) {
// Dynamic creation of the project cards Start
  // Create projectCards container
  projectCards[i] = document.createElement('div');
  projectCards[i].classList.add('projectCard', 'flex-column');

  // Create projectImageBox with it content and append it to projectCard
  projectImageBoxs[i] = document.createElement('div');
  projectImageBoxs[i].className = 'projectImageBox';
  projectImages[i] = document.createElement('img');
  projectImages[i].src = projects[i].image;
  projectImages[i].alt = 'project image';
  projectImageBoxs[i].appendChild(projectImages[i]);
  projectCards[i].appendChild(projectImageBoxs[i]);

  // Create projectTextBox
  projectTextBoxs[i] = document.createElement('div');
  projectTextBoxs[i].classList.add('projectTextBox', 'flex-column');

  // Create projectTitleBox with it content and append it to projectTextBox
  projectTitleBoxs[i] = document.createElement('div');
  projectTitleBoxs[i].className = 'projectTitleBox';
  projectTitles[i] = document.createElement('h2');
  projectTitles[i].innerHTML = projects[i].name;
  projectTitleBoxs[i].appendChild(projectTitles[i]);
  projectTextBoxs[i].appendChild(projectTitleBoxs[i]);

  // Create projectTechList
  projectTechList[i] = document.createElement('ul');
  projectTechList[i].classList.add('projectTechList', 'flex-row');

  // Create projectTechListItems with their link and append them to projectTechList
  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    projectTechItems[j] = document.createElement('li');
    projectTechLinks[j] = document.createElement('a');
    projectTechLinks[j].href = projects[i].technologies[j].url;
    projectTechLinks[j].target = '_blank';
    projectTechLinks[j].rel = 'noopener noreferrer';
    projectTechLinks[j].innerHTML = projects[i].technologies[j].name;
    projectTechItems[j].appendChild(projectTechLinks[j]);
    projectTechList[i].appendChild(projectTechItems[j]);
  }

  // Append projectTechList to projectTextBox
  projectTextBoxs[i].appendChild(projectTechList[i]);

  // Create See project Button with it content and append it to projectTextBox
  projectButtons[i] = document.createElement('div');
  projectButtons[i].classList.add('projectButton', 'button');
  projectButtonlinks[i] = document.createElement('a');
  projectButtonlinks[i].className = 'project-link';
  projectButtonlinks[i].href = '#';
  projectButtonlinks[i].innerHTML = 'See Project';
  projectButtons[i].appendChild(projectButtonlinks[i]);
  projectTextBoxs[i].appendChild(projectButtons[i]);

  // Append projectTextBox to projectCard
  projectCards[i].appendChild(projectTextBoxs[i]);

  // Append projectCard to cardWorks section to make it display in the browser
  cardWorks.appendChild(projectCards[i]);
// Dynamic creation of the project cards End
}

const popupWindow = document.querySelector('#popupWindow');
const popupWindowContent = document.querySelector('#popupWindowContent');
const popupImageBoxs = [];
const popupImages = [];
const popupTextBoxs = [];
const popupTitleBoxs = [];
const popupTitles = [];
const popupTechList = [];
const popupTechItems = [];
const popupTechLinks = [];

const closeMobilePopupWindow = document.createElement('i');
closeMobilePopupWindow.classList.add('fa-solid', 'fa-circle-xmark');

// popupWindowContent.append(closeMobilePopupWindow);

for (let i = 0; i < projects.length; i += 1) {
  // Create popupImageBox with it content and append it to popupWindowContent
  popupImageBoxs[i] = document.createElement('div');
  popupImageBoxs[i].className = 'projectImageBox';
  popupImages[i] = document.createElement('img');
  popupImages[i].src = projects[i].image;
  popupImages[i].alt = 'project image';
  popupImageBoxs[i].appendChild(popupImages[i]);

  // Create popup window projectTextBox
  popupTextBoxs[i] = document.createElement('div');
  popupTextBoxs[i].classList.add('projectTextBox', 'flex-column');

  // Create popupTitleBox with it content and append it to popup window projectTextBox
  popupTitleBoxs[i] = document.createElement('div');
  popupTitleBoxs[i].className = 'projectTitleBox';
  popupTitles[i] = document.createElement('h2');
  popupTitles[i].innerHTML = projects[i].name;
  popupTitleBoxs[i].appendChild(popupTitles[i]);
  popupTextBoxs[i].appendChild(popupTitleBoxs[i]);

  // Create popupTechList
  popupTechList[i] = document.createElement('ul');
  popupTechList[i].classList.add('projectTechList', 'flex-row');

  // Create projectTechListItems with their link and append them to projectTechList
  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    popupTechItems[j] = document.createElement('li');
    popupTechLinks[j] = document.createElement('a');
    popupTechLinks[j].href = projects[i].technologies[j].url;
    popupTechLinks[j].target = '_blank';
    popupTechLinks[j].rel = 'noopener noreferrer';
    popupTechLinks[j].innerHTML = projects[i].technologies[j].name;
    popupTechItems[j].appendChild(popupTechLinks[j]);
    popupTechList[i].appendChild(popupTechItems[j]);
  }

  // Append projectTechList to projectTextBox
  popupTextBoxs[i].appendChild(popupTechList[i]);

  // Mobile screen size popup window content creation Start
  // Create projectDescription
  projectDescriptions[i] = document.createElement('div');
  projectDescriptions[i].innerHTML = projects[i].description;
  projectDescriptions[i].classList.add('projectDescription', 'flex-column');

  // Create popupButtonsBox
  popupButtonsBoxs[i] = document.createElement('div');
  popupButtonsBoxs[i].classList.add('popupButtonsBox', 'flex-row');

  // Create PopupLiveButton and append it to popupButtonBox
  popupLiveButtonBoxs[i] = document.createElement('div');
  popupLiveButtonBoxs[i].classList.add('popupLiveButtonBox', 'flex-row');
  popupLiveLinks[i] = document.createElement('a');
  popupLiveLinks[i].className = 'live-link';
  popupLiveLinks[i].href = projects[i].liveVersion;
  popupLiveLinks[i].target = '_blank';
  popupLiveLinks[i].rel = 'noopener noreferrer';
  popupLiveLinks[i].innerHTML = 'See live';
  popupLiveButtonBoxs[i].appendChild(popupLiveLinks[i]);
  const liveButtonIcon = document.createElement('img');
  liveButtonIcon.src = './Icons/live.png';
  liveButtonIcon.alt = 'live icon';
  popupLiveButtonBoxs[i].appendChild(liveButtonIcon);

  // Append popupLiveButtonBox to popupButtonsBox
  popupButtonsBoxs[i].appendChild(popupLiveButtonBoxs[i]);

  // Create PopupSourceButton and append it to popupButtonBox
  popupSourceButtonBoxs[i] = document.createElement('div');
  popupSourceButtonBoxs[i].classList.add('popupSourceButtonBox', 'flex-row');
  popupSourceLinks[i] = document.createElement('a');
  popupSourceLinks[i].className = 'source-link';
  popupSourceLinks[i].href = projects[i].codeSource;
  popupSourceLinks[i].target = '_blank';
  popupSourceLinks[i].rel = 'noopener noreferrer';
  popupSourceLinks[i].innerHTML = 'See source';
  popupSourceButtonBoxs[i].appendChild(popupSourceLinks[i]);
  const sourceButtonIcon = document.createElement('img');
  sourceButtonIcon.src = './Icons/source.png';
  sourceButtonIcon.alt = 'source icon';
  popupSourceButtonBoxs[i].appendChild(sourceButtonIcon);

  // Append popupSourceButtonBox to popupButtonsBox
  popupButtonsBoxs[i].appendChild(popupSourceButtonBoxs[i]);

  // Mobile screen size popup window content creation End

  // Open and close popup window
  // Create close mobile popup window
  projectButtons[i].addEventListener('click', () => {
    popupWindowContent.classList.add('flex-column');
    if (window.innerWidth < 768) {
      popupWindowContent.append(closeMobilePopupWindow, popupImageBoxs[i], popupTitleBoxs[i]);
      popupWindowContent.append(popupTechList[i], projectDescriptions[i], popupButtonsBoxs[i]);
    } else {
      const popupTitleAndButtonsBox = document.createElement('div');
      popupTitleAndButtonsBox.classList.add('popupTitleAndButtonsBox', 'flex-row');
      popupTitleAndButtonsBox.append(popupTitleBoxs[i], popupButtonsBoxs[i]);
      popupWindowContent.append(closeMobilePopupWindow, popupImageBoxs[i], popupTitleAndButtonsBox);
      popupWindowContent.append(popupTechList[i], projectDescriptions[i]);
    }
    document.body.style.position = 'fixed';
    popupWindow.classList.add('show');
  });
  closeMobilePopupWindow.addEventListener('click', () => {
    popupWindowContent.innerHTML = '';
    document.body.style.position = '';
    popupWindow.classList.remove('show');
  });
}

// Contact Form Validation Start
const contactForm = document.querySelector('.contactForm');
const contactFormEmail = document.querySelector('#email');
const contactFormList = document.querySelector('.contactFormList');
const errorMsgContainer = document.createElement('li');
errorMsgContainer.className = 'errorMsgContainer';
contactFormList.appendChild(errorMsgContainer);

contactForm.addEventListener('submit', (event) => {
  const emailAddress = contactFormEmail.value.replace(/[^a-zA-Z ]/g, '');
  // stop form submission
  event.preventDefault();

  // Validate the form
  if (emailAddress !== emailAddress.toLowerCase()) {
    errorMsgContainer.innerHTML = 'Please enter a correct email address format(lowercase only)!';
  } else {
    contactForm.submit();
  }
});
// Contact form validation End

// Preserve Data in the Browser Start
contactFormList.addEventListener('input', (event) => {
  const contactFormData = { name: '', email: '', message: '' };
  if (event.target.classList.contains('name')) {
    contactFormData.name = event.target.value;
  }
  if (event.target.classList.contains('email')) {
    contactFormData.email = event.target.value;
  }
  if (event.target.classList.contains('textarea')) {
    contactFormData.message = event.target.value;
  }
  // Check browser support for localStorage
  if (typeof (Storage) !== 'undefined') {
  // Storing Data
    localStorage.setItem('userContactFormData', JSON.stringify(contactFormData));
  }
});

// retrieving Data
const retrievedData = localStorage.getItem('userContactFormData');
window.addEventListener('load', () => {
  document.querySelector('#name').value = JSON.parse(retrievedData).name;
  contactFormEmail.value = JSON.parse(retrievedData).email;
  document.querySelector('#textarea').value = JSON.parse(retrievedData).message;
});

// text animation Start
// function([string1, string2],target id,[color1,color2])

const consoleText = (words, id, idMobile, colors) => {
  if (colors === undefined) colors = ['#fff'];
  let visible = true;
  const con = document.getElementById('console');
  const conMobile = document.getElementById('console-mobile');

  const consoleContainers = document.querySelectorAll('.console-container');

  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  const targetMobile = document.getElementById(idMobile);
  target.setAttribute('style', `color:${colors[0]}`);
  targetMobile.setAttribute('style', `color:${colors[0]}`);

  consoleContainers.forEach((div) => {
    div.setAttribute('style', `color:${colors[0]}`);
  });

  window.setInterval(() => {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      targetMobile.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(() => {
        const usedColor = colors.shift();
        colors.push(usedColor);
        const usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', `color:${colors[0]}`);
        targetMobile.setAttribute('style', `color:${colors[0]}`);

        consoleContainers.forEach((div) => {
          div.setAttribute('style', `color:${colors[0]}`);
        });

        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      targetMobile.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(() => {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      conMobile.className = 'console-underscore hidden';
      visible = false;
    } else {
      con.className = 'console-underscore';
      conMobile.className = 'console-underscore';

      visible = true;
    }
  }, 400);
};
consoleText(['Full-stack Developer.', 'JavaScript Developer.', 'React Developer.', 'Ruby on Rails Developer.', 'Next.js Developer.', 'Front-end Developer.', 'Back-end Developer.'], 'text', 'text-mobile', ['#9ba4b5', '#f7df1e', '#61dafb', '#CC0000', 'white', '#9ba4b5', '#9ba4b5']);