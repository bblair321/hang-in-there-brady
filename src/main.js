// query selector variables go here 👇

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
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
var savedPosters = [];
var currentPoster;

// event listeners go here 👇

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function getRandomImage() {
  const images = [
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

  // Select the image element
  const imgElement = document.querySelector(".poster-img");

  // Ensure the element exists before setting src
  if (imgElement) {
      imgElement.src = images[Math.floor(Math.random() * images.length)];
  } else {
      console.error("Image element not found!");
  }
}

// Run after the DOM has fully loaded
window.addEventListener("DOMContentLoaded", getRandomImage);

function getRandomTitle() {
  const titles = [
    "Rise and Shine",
    "Embrace the Challenge",
    "Push Beyond Limits",
    "Stay Strong, Keep Going",
    "No Excuses, Just Results",
    "You Are Unstoppable",
    "Make Today Count",
    "Dream It, Do It",
    "Hustle & Heart",
    "Stay Wild, Stay Free",
    "Chase the Sun",
    "Find Your Fire",
    "Keep Moving Forward",
    "Courage Over Comfort",
    "Be Bold, Be Brave",
    "Fear Less, Live More",
    "The Future is Yours",
    "Progress, Not Perfection",
    "Every Step Matters",
    "Mindset is Everything"
  ];

  const titleElement = document.querySelector(".poster-title");

  if (titleElement) {
    titleElement.innerText = titles[Math.floor(Math.random() * titles.length)];
  } else {
    console.error("Title element not found!")
  }
}
  window.addEventListener("DOMContentLoaded", getRandomTitle);

function getRandomQuote() {
  const quotes = [
    "Believe you can, and you're halfway there. – Theodore Roosevelt",
    "Your only limit is your mind.",
    "Difficult roads often lead to beautiful destinations.",
    "Dream big. Work hard. Stay focused.",
    "Make today so awesome that yesterday gets jealous.",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "Act as if what you do makes a difference. It does. – William James",
    "Happiness depends upon ourselves. – Aristotle",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Go confidently in the direction of your dreams. Live the life you have imagined. – Henry David Thoreau",
    "Doubt kills more dreams than failure ever will. – Suzy Kassem",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "If not now, when?"
  ]
  const quoteElement = document.querySelector(".poster-quote");

  if (quoteElement) {
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  } else {
    console.error("Quote element not found!")
  }
}
  window.addEventListener("DOMContentLoaded", getRandomQuote);window
 
function showRandom() {
    getRandomImage();
    getRandomTitle();
    getRandomQuote();
  }
  const randomButton = document.querySelector(".show-random");
  randomButton.addEventListener("click", showRandom)

function ShowForm() {
    const poster = document.querySelector(".main-poster");
    const form = document.querySelector(".poster-form");
    poster.style.display = "none"; 
    poster.style.visibility = "hidden";  
    poster.style.height = "0";  
    poster.style.margin = "0";  
    form.classList.remove("hidden");
}

    const showFormButton = document.querySelector(".show-form");
    showFormButton.addEventListener("click", ShowForm);
    
function ShowSaved() {
      const poster = document.querySelector(".main-poster");
      const saved = document.querySelector(".saved-posters");
      poster.classList.add("hidden");
      saved.classList.remove("hidden");
    }

    const showSavedButton = document.querySelector(".show-saved");
    showSavedButton.addEventListener("click", ShowSaved);