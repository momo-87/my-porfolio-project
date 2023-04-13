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
let projects = [
    {
        name: 'Keeping track of hundreds of components',
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>",
        image: './images/card1.jpg',
        technologies: [{name:'Ruby on Rails', url:'https://rubyonrails.org/'}, 
                       {name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                       {name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                       {name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                       {name:'Bootstrap', url:'https://getbootstrap.com/'},
                       {name:'GitHub', url:'https://github.com/'}
                      ],
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>",
        image: './images/card2.jpg',
        technologies: [{name:'Ruby on Rails', url:'https://rubyonrails.org/'}, 
                       {name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                       {name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                       {name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                       {name:'Bootstrap', url:'https://getbootstrap.com/'},
                       {name:'GitHub', url:'https://github.com/'}
                      ],        
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>",
        image: './images/card3.jpg',
        technologies: [{name:'Ruby on Rails', url:'https://rubyonrails.org/'}, 
                       {name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                       {name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                       {name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                       {name:'Bootstrap', url:'https://getbootstrap.com/'},
                       {name:'GitHub', url:'https://github.com/'}
                      ],        
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>",
        image: './images/card4.jpg',
        technologies: [{name:'Ruby on Rails', url:'https://rubyonrails.org/'}, 
                       {name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                       {name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                       {name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                       {name:'Bootstrap', url:'https://getbootstrap.com/'},
                       {name:'GitHub', url:'https://github.com/'}
                      ],        
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>",
        image: './images/card5.jpg',
        technologies: [{name:'Ruby on Rails', url:'https://rubyonrails.org/'}, 
                       {name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                       {name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                       {name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                       {name:'Bootstrap', url:'https://getbootstrap.com/'},
                       {name:'GitHub', url:'https://github.com/'}
                      ],        
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    },

    {
        name: 'Keeping track of hundreds of components',
        description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>",
        image: './images/card1.jpg',
        technologies: [{name:'Ruby on Rails', url:'https://rubyonrails.org/'}, 
                       {name:'CSS', url:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
                       {name:'HTML', url:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
                       {name:'JavaScript', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
                       {name:'Bootstrap', url:'https://getbootstrap.com/'},
                       {name:'GitHub', url:'https://github.com/'}
                      ],        
        liveVersion: 'https://momo-87.github.io/',
        codeSource:'https://github.com/momo-87/momo-87.github.io'
    }

];

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
let projectDescriptions = [];
let popupButtonsBoxs = [];
let popupLiveButtonBoxs = [];
let popupLiveLinks = [];
let popupSourceButtonBoxs = [];
let popupSourceLinks = [];
let cardWorks = document.querySelector('#cardWorks');

for(let i = 0; i < projects.length; i++) {
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

    //Create projectTextBox 
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
    for(let j = 0; j < projects[i].technologies.length; j++) {
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

let popupWindow = document.querySelector('#popupWindow');
let popupWindowContent = document.querySelector('#popupWindowContent');
let popupImageBoxs = [];
let popupImages = [];
let popupTextBoxs = [];
let popupTitleBoxs = [];
let popupTitles = [];
let popupTechList = [];
let popupTechItems = [];
let popupTechLinks = [];

let closeMobilePopupWindow = document.createElement('img');
closeMobilePopupWindow.src = './Icons/closePopup.png';
closeMobilePopupWindow.alt = 'close popup';

// popupWindowContent.append(closeMobilePopupWindow);

for(let i = 0; i < projects.length; i++) {

    // Create popupImageBox with it content and append it to popupWindowContent
    popupImageBoxs[i] = document.createElement('div');
    popupImageBoxs[i].className = 'projectImageBox';
    popupImages[i] = document.createElement('img');
    popupImages[i].src = projects[i].image;
    popupImages[i].alt = 'project image';
    popupImageBoxs[i].appendChild(popupImages[i]);

    //Create popup window projectTextBox 
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
    for(let j = 0; j < projects[i].technologies.length; j++) {
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
    projectDescriptions[i].innerHTML =  projects[i].description;
    projectDescriptions[i].classList.add('projectDescription', 'flex-column');


    // Create popupButtonsBox
    popupButtonsBoxs[i] = document.createElement('div');
    popupButtonsBoxs[i].classList.add('popupButtonsBox', 'flex-row');

    // Create PopupLiveButton and append it to popupButtonBox
    popupLiveButtonBoxs[i] = document.createElement('div');
    popupLiveButtonBoxs[i].classList.add('popupLiveButtonBox', 'flex-row');
    popupLiveLinks[i] = document.createElement('a');
    popupLiveLinks[i].href = projects[i].liveVersion;
    popupLiveLinks[i].target = '_blank';
    popupLiveLinks[i].rel = 'noopener noreferrer';
    popupLiveLinks[i].innerHTML = 'See live';
    popupLiveButtonBoxs[i].appendChild(popupLiveLinks[i]);
    let liveButtonIcon = document.createElement('img');
    liveButtonIcon.src = './Icons/live.png';
    liveButtonIcon.alt = 'live icon';
    popupLiveButtonBoxs[i].appendChild(liveButtonIcon);

    // Append popupLiveButtonBox to popupButtonsBox
    popupButtonsBoxs[i].appendChild(popupLiveButtonBoxs[i]);

    // Create PopupSourceButton and append it to popupButtonBox
    popupSourceButtonBoxs[i] = document.createElement('div');
    popupSourceButtonBoxs[i].classList.add('popupSourceButtonBox', 'flex-row');
    popupSourceLinks[i] = document.createElement('a');
    popupSourceLinks[i].href = projects[i].codeSource;
    popupSourceLinks[i].target = '_blank';
    popupSourceLinks[i].rel = 'noopener noreferrer';
    popupSourceLinks[i].innerHTML = 'See source';
    popupSourceButtonBoxs[i].appendChild(popupSourceLinks[i]);
    let sourceButtonIcon = document.createElement('img');
    sourceButtonIcon.src = './Icons/source.png';
    sourceButtonIcon.alt = 'source icon';
    popupSourceButtonBoxs[i].appendChild(sourceButtonIcon);
    
    // Append popupSourceButtonBox to popupButtonsBox
    popupButtonsBoxs[i].appendChild(popupSourceButtonBoxs[i]);


// Mobile screen size popup window content creation End

// Open and close popup window 
    // Create close mobile popup window
    projectButtons[i].addEventListener('click', function(){
        popupWindowContent.classList.add('flex-column');
        if(window.innerWidth < 768){
            popupWindowContent.append(closeMobilePopupWindow, popupImageBoxs[i], popupTitleBoxs[i], popupTechList[i], projectDescriptions[i], popupButtonsBoxs[i]);
        } else{
            let popupTitleAndButtonsBox = document.createElement('div');
            popupTitleAndButtonsBox.classList.add('popupTitleAndButtonsBox', 'flex-row');
            popupTitleAndButtonsBox.append(popupTitleBoxs[i], popupButtonsBoxs[i]);
            popupWindowContent.append(closeMobilePopupWindow, popupImageBoxs[i], popupTitleAndButtonsBox, popupTechList[i], projectDescriptions[i]);
        }
        document.body.style.position = 'fixed';
        popupWindow.classList.add('show');    
    });
    closeMobilePopupWindow.addEventListener('click', function(){
        popupWindowContent.innerHTML = '';
        document.body.style.position = '';
        popupWindow.classList.remove('show');
    });
}