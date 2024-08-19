// week 5
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

// week 6
const signNowButton = document.getElementById("sign-now-button");
const nameInput =  document.getElementById('name');
const hometownInput = document.getElementById('hometown');
const emailInput = document.getElementById('email');


const addSignature = (person) => {
    // Write your code to manipulate the DOM here
    let name = person.name.value;
    let hometown = person.hometown.value;
    let email = person.email.value;

    const signature = document.createElement('p');
    signature.innerText = "🖊️ " + name + " from " + hometown + " supports this.";

    let signatures = document.querySelector('.signatures');
    signatures.appendChild(signature);
}

//signNowButton.addEventListener('click', addSignature);


// week 7

const validateForm = () => {

  let containsErrors = false;

  let person = {
    name: nameInput,
    hometown: hometownInput,
    email: emailInput
  }

  var petitionInputs = document.getElementById("sign-petition").elements;
  // Loop through all inputs and check for valid length
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }

    // check that the email includes ".com" (stretch feature)
    if (!person.email.value.includes('.com')) {
       containsErrors = true;
       person.email.classList.add('error');
    } else {
       person.email.classList.remove('error');
    }

    }


  // Call addSignature() and clear fields if no errors
  if (!containsErrors) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    containsErrors = false;
  }
}

signNowButton.addEventListener('click', validateForm);

// WEEK 8

let animation = {
  revealDistance : 150,
  initialOpacity : 0,
  transitionDelay : 0,
  transitionDuration : '2s',
  transitionProperty : 'all',
  transitionTimingFunction : 'ease'
}

const revealableContainers = document.querySelectorAll(".revealable")
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top; /* obtain top of revealable container */
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("active");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', reveal)

// WEEK 9
const toggleModal = (person) => {
  //represents entire modal, including background
  const modal = document.getElementById("thanks-modal"); 

  // contains text that will be shown to user
  const modalContent = document.getElementById("thanks-modal-content");

  
  modal.style.display = "flex";
  modalContent.innerText = `Thank you for your support ${person.name.value}`;

  const intervalID = setInterval(scaleImage, 500);
  
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalID);
  }, 4000)

  
  
}

let scaleFactor = 1;
const modalImage = document.getElementById("modal-image");
const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
  }


