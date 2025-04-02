// query selector variables go here 👇
const imgElement = document.querySelector(".poster-img");
const titleElement = document.querySelector(".poster-title");
const quoteElement = document.querySelector(".poster-quote");
const randomButton = document.querySelector(".show-random");
const poster = document.querySelector(".main-poster");
const form = document.querySelector(".poster-form");
const showFormButton = document.querySelector(".show-form");
const showSavedButton = document.querySelector(".show-saved");
const backToMainButtonFromForm = document.querySelector(".back-to-main-form");
const imgUrlInput = document.querySelector("#poster-image-url");
const titleInput = document.querySelector("#poster-title");
const quoteInput = document.querySelector("#poster-quote");
const makePosterButton = document.querySelector(".make-poster");
const savePosterButton = document.querySelector(".save-poster");
const backToMainButtonFromSaved = document.querySelector(".back-to-main");
const showUnmotivationalPoster = document.querySelector(".show-unmotivational")
const backToMainButtonFromUnmotivational = document.querySelector(".back-to-main-unmotivational");
// Provided data

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];

var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];

var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener("DOMContentLoaded", getRandomImage);
window.addEventListener("DOMContentLoaded", getRandomTitle);
window.addEventListener("DOMContentLoaded", getRandomQuote);
randomButton.addEventListener("click", showRandom);
showFormButton.addEventListener("click", showForm);
// backToMainButton.addEventListener("click", showMain);
showSavedButton.addEventListener("click", showSaved);
makePosterButton.addEventListener("click", createCustomPoster);
savePosterButton.addEventListener("click", savePoster);
backToMainButtonFromForm.addEventListener("click", showMain);
backToMainButtonFromSaved.addEventListener("click", showMain);
showUnmotivationalPoster.addEventListener("click", createUnmotivationalPoster);
backToMainButtonFromUnmotivational.addEventListener("click", showMain);
// functions go here 👇

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(),
    imageURL: imageURL, 
    title: title, 
    quote: quote
  };
}

function createCustomPoster(event) {
  event.preventDefault();

  if (!imgUrlInput.value || !titleInput.value || !quoteInput.value) {
    alert("Please fill in all fields before creating a poster!");
    return;
  }

  const imageUrl = imgUrlInput.value;
  const title = titleInput.value;
  const quote = quoteInput.value;

  currentPoster = createPoster(imageUrl, title, quote);

  images.push(imageUrl);
  titles.push(title);
  quotes.push(quote);

  imgElement.src = imageUrl;
  titleElement.innerText = title;
  quoteElement.innerText = quote;

  showMain();
}

function savePoster() {
  if (!currentPoster) return;

  const isDuplicate = savedPosters.some(
    poster => poster.imageURL === currentPoster.imageURL &&
              poster.title === currentPoster.title &&
              poster.quote === currentPoster.quote
  );

  if (!isDuplicate) {
    savedPosters.push(currentPoster);
    showSaved();
  }
}

function showRandom() {
  getRandomImage();
  getRandomTitle();
  getRandomQuote();
}

function getRandomImage() {
  if (imgElement) {
    imgElement.src = images[Math.floor(Math.random() * images.length)];
  }
}

function getRandomTitle() {
  if (titleElement) {
    titleElement.innerText = titles[Math.floor(Math.random() * titles.length)];
  }
}

function getRandomQuote() {
  if (quoteElement) {
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  }
}

function showForm() {
  poster.style.display = "none";
  form.classList.remove("hidden");
}

function showMain() {
  poster.classList.remove("hidden");
  form.classList.add("hidden");

  const savedPostersSection = document.querySelector(".saved-posters");
  if (savedPostersSection) {
    savedPostersSection.classList.add("hidden");
  }

  const unmotivationalPostersSection = document.querySelector(".unmotivational-posters");
  if (unmotivationalPostersSection) {
    unmotivationalPostersSection.classList.add("hidden");
  }

  document.querySelector(".main-buttons").classList.remove("hidden");
  poster.style.display = "block";
}

function showSaved() {
  const savedPostersGrid = document.querySelector(".saved-posters-grid");
  savedPostersGrid.innerHTML = "";

  savedPosters.forEach(poster => {
    const posterElement = document.createElement("div");
    posterElement.classList.add("mini-poster");
    posterElement.innerHTML = `
      <img src="${poster.imageURL}" class="mini-poster-img">
      <h3 class="mini-poster-title">${poster.title}</h3>
      <p class="mini-poster-quote">${poster.quote}</p>
    `;
    savedPostersGrid.appendChild(posterElement);
  });

  document.querySelector(".main-poster").classList.add("hidden");
  document.querySelector(".saved-posters").classList.remove("hidden");
}

function cleanData() {
  const cleanedPosters = [];
  unmotivationalPosters.forEach(poster => {
    const cleanedPoster = createPoster(poster.img_url, poster.name, poster.description);
    cleanedPosters.push(cleanedPoster);
  });

  displayUnmotivationalPosters(cleanedPosters);
}

function displayUnmotivationalPosters(cleanedPosters) {
  const unmotivationalPostersGrid = document.querySelector(".unmotivational-posters-grid");
  unmotivationalPostersGrid.innerHTML = "";

  cleanedPosters.forEach(poster => {
    const posterElement = document.createElement("div");
    posterElement.classList.add("mini-poster");
    posterElement.innerHTML = `
      <img src="${poster.imageURL}" class="mini-poster-img">
      <h3 class="mini-poster-title">${poster.title}</h3>
      <p class="mini-poster-quote">${poster.quote}</p>
    `;
    unmotivationalPostersGrid.appendChild(posterElement);
  });
}

function createUnmotivationalPoster() {
  cleanData();
  document.querySelector(".unmotivational-posters").classList.remove("hidden");
  document.querySelector(".main-poster").classList.add("hidden");
  document.querySelector(".main-buttons").classList.add("hidden");
}

