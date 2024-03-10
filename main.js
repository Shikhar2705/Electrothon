const teamContainer = document.getElementById('team-container');

const teamMembers = [
  {
    name: 'Shikhar Saxena',
    position: 'FrontEnd Developer',
    image: 'https://iili.io/JVssbS9.jpg',
    github: 'https://github.com/Shikhar2705',
    instagram: 'https://www.instagram.com/shikhar_6397?igsh=MXgwYzViNm82ZmUwNQ==',
    linkedin: 'https://www.linkedin.com/in/shikhar-saxena-32499b26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Devika Kapoor',
    position: 'DataBase Handler',
    image: 'https://iili.io/JMptKv9.jpg',
    github: 'https://github.com/Devika35',
    instagram: 'https://www.instagram.com/devika._.kapoor?igsh=eWVwb2dvb3FkcHAw',
    linkedin: 'https://www.linkedin.com/in/devika-kapoor-aa9aa4257'
  },
  {
    name: 'Aditya Verma',
    position: 'Designer',
    image: 'https://iili.io/JMpDXKQ.jpg' ,
    github: 'https://github.com/yourusername',
    instagram: 'https://www.instagram.com/yourusername/',
    linkedin: 'https://www.linkedin.com/in/yourusername/'
  },
  {
    name: 'Sankalp Gupta',
    position: 'BackEnd Developer',
    image: 'https://iili.io/JMpZrhJ.jpg',
    github: 'https://github.com/sankalp2102',
    instagram: 'https://instagram.com/san0_0kalp?igshid=ZmRlMzRkMDU=',
    linkedin: 'https://www.linkedin.com/in/sankalp-gupta-95b39b258'
  }
];
document.getElementById("team-sec").style.backgroundColor = "#EAC7FF";
teamMembers.forEach(member => {
  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');

  const memberImage = document.createElement('img');
  memberImage.src = member.image;

  const memberName = document.createElement('h2');
  memberName.textContent = member.name;

  const memberPosition = document.createElement('p');
  memberPosition.textContent = member.position;

  const socialMedia = document.createElement('div');
  socialMedia.classList.add('social-media');

  const githubLink = document.createElement('a');
  githubLink.href = member.github;
  githubLink.target = '_blank';
  githubLink.rel = 'noopener noreferrer';
  githubLink.innerHTML = '<i class="fa-brands fa-github"></i>';
  githubLink.style.width = '30px';

  const instagramLink = document.createElement('a');
  instagramLink.href = member.instagram;
  instagramLink.target = '_blank';
  instagramLink.rel = 'noopener noreferrer';
  instagramLink.innerHTML = '<i class="fa-brands fa-instagram"></i>';
  instagramLink.style.width = '30px';

  const linkedinLink = document.createElement('a');
  linkedinLink.href = member.linkedin;
  linkedinLink.target = '_blank';
  linkedinLink.rel = 'noopener noreferrer';
  linkedinLink.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
  linkedinLink.style.width = '30px';


  const socialMediaSpacer = document.createElement('span');
  socialMediaSpacer.style.width = '100px';
  socialMedia.appendChild(socialMediaSpacer);

  teamCard.appendChild(memberImage);
  teamCard.appendChild(memberName);
  teamCard.appendChild(memberPosition);
  teamCard.appendChild(socialMedia);
  teamCard.appendChild(githubLink);
  teamCard.appendChild(instagramLink);
  teamCard.appendChild(linkedinLink);
  teamCard.appendChild(socialMediaSpacer);
  teamContainer.appendChild(teamCard);
});
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const answer = toggle.nextElementSibling;
    const activeAnswer = document.querySelector('.faq-answer.active');

    if (activeAnswer) {
      if (activeAnswer === answer) {
        // If the clicked answer is already active, remove the active class
        activeAnswer.classList.remove('active');
      } else {
        // If the clicked answer is not active, remove the active class from the currently active answer
        activeAnswer.classList.remove('active');
        answer.classList.add('active');
      }
    } else {
      // If there is no active answer, add the active class to the clicked answer
      answer.classList.add('active');
    }
  });
});
// search-bar
// function search() {
//   const searchBox = document.getElementById("search-box");
//   const resultsDiv = document.getElementsByClassName("search");
//   const searchTerm = searchBox.value.trim();

//   if (searchTerm === "") {
//     resultsDiv.innerHTML = "";
//     return;
//   }

//   const searchResults = [
//     { name: 'alice', category: 'Person' },
//     { name: 'bob', category: 'Person' },
//     { name: 'charlie', category: 'Person' },
//     { name: 'dog', category: 'Animal' },
//     { name: 'elephant', category: 'Animal' },
//     { name: 'flower', category: 'Plant' },
//   ];

//   const filteredResults = searchResults.filter((result) => {
//     return result.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   let resultsHtml = "";
//   filteredResults.forEach((result) => {
//     resultsHtml += `<p>${result.name} - ${result.category}</p>`;
//   });

//   resultsDiv.innerHTML = resultsHtml;
// }
// function redirectToSearchResults() {
//   const searchBox = document.getElementById("search-box");
//   const searchTerm = searchBox.value.trim();

//   if (searchTerm === "") {
//     return;
//   }

//   const searchResults = [
//     { name: 'alice', category: 'Person', url: 'blogs.html' },
//     { name: 'bob', category: 'Person', url: 'bob.html' },
//     { name: 'charlie', category: 'Person', url: 'charlie.html' },
//     { name: 'dog', category: 'Animal', url: 'dog.html' },
//     { name: 'elephant', category: 'Animal', url: 'elephant.html' },
//     { name: 'flower', category: 'Plant', url: 'flower.html' },
//   ];

//   const filteredResults = searchResults.filter((result) => {
//     return result.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   if (filteredResults.length > 0) {
//     window.location.assign(filteredResults[0].url);
//   } else {
//     alert('No search results found.');
//   }
// }
var searchBox = document.getElementById("search-box");
var searchResults = document.querySelector("[data-user-cards-container]");

var keywords = ["Engineering", "12th Commerce", "12th Maths","Dance Industry","Acting","Sports","Athelete","Music Industry"]; // Add your predefined list of keywords here

searchBox.addEventListener("input", function() {
  var searchText = searchBox.value.toLowerCase();
  var filteredResults = [];

  for (var i = 0; i < keywords.length; i++) {
    if (searchText.includes(keywords[i])) {
      filteredResults.push(keywords[i]);
    }
  }

  searchResults.innerHTML = "";
  if (filteredResults.length === 0) {
    searchResults.innerHTML = "<p>No results found.</p>";
  } else {
    for (var i = 0; i < filteredResults.length; i++) {
      var result = document.createElement("div");
      result.classList.add("user-card");
      result.innerHTML = "<p>" + filteredResults[i] + "</p>";
      searchResults.appendChild(result);
    }
  }
});
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
let users = []
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value)
    user.element.classList.toggle("hide" , !isVisible)
  })
})
fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
  .then(data => {
    user = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]")
      header.textContent = user.name;
      userCardContainer.append();
      console.log(user);
      return {
        name : user.name,
        element : card
      }
      
    })
  })
  var roadmapsLink = document.querySelector("nav ul li a:contains('Roadmaps')");
  roadmapsLink.addEventListener("click", function(event) {
    event.preventDefault();
    var dropdown = roadmapsLink.nextElementSibling;
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
  });
// faq

