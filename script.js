let openMobileMenu = document.querySelector('#openMobileMenu');
let menuList = document.querySelector('#navMenu')
let closeMobileMenu = document.querySelector('#closeMobileMenu');

openMobileMenu.addEventListener('click', function(){
        menuList.classList.add('mobileMenu');
        closeMobileMenu.classList.add('closeMobileMenu');
})

closeMobileMenu.addEventListener('click', function() {
        menuList.classList.remove('mobileMenu');
        closeMobileMenu.classList.remove('closeMobileMenu')
});

let navMenuLink = document.querySelectorAll('.navMenuLink');
for(let i = 0; i < navMenuLink.length; i++){
    navMenuLink[i].addEventListener('click', function(){
            menuList.classList.remove('mobileMenu');
            closeMobileMenu.classList.remove('closeMobileMenu');
    }) 
}
// Portfolio Mobile menu end

// Portfolio project details popup window start
// Dynamically creation of the project cards start
let projects = [
    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card1.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card1.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card2.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card1.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card1.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card1.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card1.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...",
        image: './images/card1.jpg',
        technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript', 'Bootstrap', 'GitHub'],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    }
];

// let projectImage = document.querySelectorAll('div.imageBox > img');
let projectCards = [];
let projectImageBoxs = [];
let projectImages = [];
let projectTextBoxs = [];
let projectTitleBoxs = [];
let projectTitles = [];
let projectTechList = [];
let projectTechItems = [];
let projectTechLinks = [];
let projectButtons = [];
let projectButtonlinks = [];
let cardWorks = document.querySelector('#cardWorks');

for(let i = 0; i < projects.length; i++) {
    projectCards[i] = document.createElement('div');
    projectCards[i].className = 'projectCard';

    projectImageBoxs[i] = document.createElement('div');
    projectImageBoxs[i].className = 'projectImageBox';
    projectImages[i] = document.createElement('img');
    projectImages[i].src = projects[i].image;
    projectImages[i].alt = 'project image';
    projectImageBoxs[i].appendChild(projectImages[i]);
    projectCards[i].appendChild(projectImageBoxs[i]);

    projectTextBoxs[i] = document.createElement('div');
    projectTextBoxs[i].className = 'projectTextBox';
    projectTitleBoxs[i] = document.createElement('div');
    projectTitleBoxs[i].className = 'projectTitleBox';
    projectTitles[i] = document.createElement('h2');
    projectTitles[i].innerHTML = projects[i].name;
    projectTitleBoxs[i].appendChild(projectTitles[i]);
    projectTextBoxs[i].appendChild(projectTitleBoxs[i]);

    projectTechList[i] = document.createElement('ul');
    projectTechList[i].className = 'projectTechList';

    for(let j = 0; j < projects[i].technologies.length; j++) {
        projectTechItems[j] = document.createElement('li');
        projectTechLinks[j] = document.createElement('a');
        projectTechLinks[j].alt = 'project image';
        projectTechLinks[j].src = '#';
        projectTechLinks[j].innerHTML = projects[i].technologies[j];
        projectTechItems[j].appendChild(projectTechLinks[j]);
        projectTechList[i].appendChild(projectTechItems[j]);
    }
    projectTextBoxs[i].appendChild(projectTechList[i]);
    projectButtons[i] = document.createElement('div');
    projectButtons[i].classList.add('projectButton', 'button');
    projectButtonlinks[i] = document.createElement('a');
    projectButtonlinks[i].src = '#';
    projectButtonlinks[i].innerHTML = 'See project';
    projectButtons[i].appendChild(projectButtonlinks[i]);
    projectTextBoxs[i].appendChild(projectButtons[i]);
    projectCards[i].appendChild(projectTextBoxs[i]);

    cardWorks.appendChild(projectCards[i]);

}







let projectButton = document.querySelectorAll('.projectButton');




