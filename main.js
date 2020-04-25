pets = [{
    image: "https://bit.ly/2zlujfS",
    name: "Dakota",
    color: "Yellow Gold",
    specialSkill: "Retrieving things!",
    type: "Dog",
  },
  {
    image: "https://on.natgeo.com/2x2UJCk",
    name: "Teddy",
    color: "Brown",
    specialSkill: "Playing fetch!",
    type: "Dog",
  },
  {
    image: "https://bit.ly/2S415sp",
    name: "Lola",
    color: "Black",
    specialSkill: "Fiercly loyal!",
    type: "Dog",
  },
  {
    image: "https://bit.ly/2VvWwta",
    name: "Maggie",
    color: "Brown/White",
    specialSkill: "Lounging around!",
    type: "Dog",
  },
  {
    image: "https://bit.ly/2VxGj6N",
    name: "Faye",
    color: "Gray",
    specialSkill: "Hiding, but very loveable!",
    type: "Cat",
  },
  {
    image: "https://bit.ly/2x8qwSp",
    name: "Cali",
    color: "Orange/Black",
    specialSkill: "Purrs and cuddles!",
    type: "Cat",
  },
  {
    image: "https://bit.ly/2RZ0xnG",
    name: "Shadow",
    color: "Black",
    specialSkill: "Playing peek-a-boo from dark corners!",
    type: "Cat",
  },
  {
    image: "https://bit.ly/2KwXwGZ",
    name: "Tyrannosaurus Rex",
    color: "Dark Green",
    specialSkill: "Eats all his meals; no wasted food!",
    type: "Dino",
  },
  {
    image: "https://bit.ly/34YnnkI",
    name: "Brachiosaurus",
    color: "Light Brown",
    specialSkill: "Reaches all those hard-to-reach places!",
    type: "Dino",
  },
  {
    image: "https://bit.ly/2zjzKMi",
    name: "Triceratops",
    color: "Dark Gray",
    specialSkill: "Great guard dino!",
    type: "Dino",
  },
  {
    image: "https://bit.ly/2VyXfde",
    name: "Pterodactyl",
    color: "Exotic",
    specialSkill: "Can show you a whole new world!",
    type: "Dino",
  }
];

const buildCard = (header, imageURL, petColor, petSkill, petType, imageAltText = 'Image') => {

  domString = `
  <div class="card">
    <div class="card-header">
      <h2>${header}</h2>
    </div>
    <div class="card-body">
      <div class="card-image">
        <img src="${imageURL}" alt="${imageAltText}">
      </div>
      <div class="card-content">
        <p>${petColor}</p>
        <p>${petSkill}</p>
      </div>
    </div>
    <div class="card-footer">
      <p>${petType}</p>
    </div>
  </div>`;

  return domString;

};

const buildCards = () => {

  // initialize variables
  let cardsDomString = '';
  const selectedDiv = document.querySelector('.card-container');

  // loop over pets and add their cards to cardsDomString
  for (let index = 0; index < pets.length; index++) {
    // set the pet we are working on
    pet = pets[index];

    // set the pet values we want to use for the card
    header = pet.name;
    imageURL = pet.image;
    petColor = pet.color;
    petSkill = pet.specialSkill;
    petType = pet.type;

    // create the card and append to cardsDomString
    cardsDomString += buildCard(header, imageURL, petColor, petSkill, petType);
  }

  selectedDiv.innerHTML = cardsDomString;
}

const init = () => {
  buildCards();
}

init();