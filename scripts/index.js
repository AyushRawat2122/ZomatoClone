let pointerAbove = false;
let lessMore = false;
let count = 8;
const discover = [
  {
    heading: "Order Online",
    subHeading: "Stay home and order to your doorstep",
    url: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
  },
  {
    heading: "Dining",
    subHeading: "View the city's favourite dining venues",
    url: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
  },
  {
    heading: "Nightlife and Clubs",
    subHeading: "Explore the city's top nightlife outlets",
    url: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
  },
];

const collections = [
  {
    url: "https://newseu.cgtn.com/news/2021-06-04/The-Slovakian-chef-pioneering-the-zero-waste-vegan-restaurant-10P6m6HCoM0/img/1b00fe9aaf41400f9fa17cbab2f1e708/1b00fe9aaf41400f9fa17cbab2f1e708.png",
    heading: "Newly Opened Places",
    places: 10,
  },
  {
    url: "https://wearegurgaon.com/wp-content/uploads/2019/07/live-cricket-screening-gurgaon.jpg",
    heading: "Best of live screenings",
    places: 29,
  },
  {
    url: "https://sapanarestaurant.com/wp-content/uploads/2019/11/authentic-chicken-biryani-900x601.jpg",
    heading: "Regional Flavours",
    places: 25,
  },
  {
    url: "https://images.indianexpress.com/2017/01/republic-day-brunch_480.jpg",
    heading: "The Legends of Hyedrabad",
    places: 24,
  },
];
const locations = [
  { state: "Jubilee Hills", places: 395 },
  { state: "Gachibowli", places: 764 },
  { state: "Banjara Hills", places: 401 },
  { state: "Hitech City", places: 354 },
  { state: "Madhapur", places: 831 },
  { state: "Kondapur", places: 566 },
  { state: "Kukatpally", places: 1402 },
  { state: "Begumpet", places: 155 },
  { state: "Himayath Nagar", places: 227 },
  { state: "Tolichowki", places: 272 },
  { state: "Ameerpet", places: 318 },
  { state: "Somajiguda", places: 63 },
  { state: "Film Nagar", places: 102 },
  { state: "Paradise Circle", places: 35 },
  { state: "Sainikpuri", places: 259 },
  { state: "Necklace Road", places: 36 },
  { state: "Kothapet", places: 185 },
  { state: "S D Road", places: 76 },
  { state: "Abids", places: 113 },
  { state: "Kompally", places: 300 },
  { state: "Masab Tank", places: 108 },
  { state: "Gandipet", places: 242 },
  { state: "L B Nagar", places: 327 },
  { state: "Miyapur", places: 329 },
  { state: "Karkhana", places: 78 },
  { state: "Basheer Bagh", places: 54 },
  { state: "Panjagutta", places: 125 },
  { state: "A S Rao Nagar", places: 191 },
  { state: "Uppal", places: 323 },
];

const data = [
  // Popular Cuisines
  {
    heading: "Popular Cuisines Near Me",
    options: [
      "Bakery food near me",
      "Beverages food near me",
      "Biryani food near me",
      "Burger food near me",
      "Chinese food near me",
      "Desserts food near me",
      "Hyderabadi food near me",
      "Ice Cream food near me",
      "Kebab food near me",
      "Mughlai food near me",
      "North Indian food near me",
      "Pizza food near me",
      "Sandwich food near me",
      "Seafood food near me",
      "Shake food near me",
      "Shawarma food near me",
      "Sichuan food near me",
      "South Indian food near me",
      "Street food near me",
      "Tea food near me",
    ],
    clas:"normal",
  },

  // Restaurant Types
  {
    heading: "Popular Restaurant Types Near Me",
    options: [
      "Bakeries near me",
      "Bars near me",
      "Beverage Shops near me",
      "Bhojanalya near me",
      "Cafés near me",
      "Casual Dining near me",
      "Clubs near me",
      "Cocktail Bars near me",
      "Confectioneries near me",
      "Dessert Parlors near me",
      "Dhabas near me",
      "Fine Dining near me",
      "Food Courts near me",
      "Food Trucks near me",
      "Kiosks near me",
      "Lounges near me",
      "Microbreweries near me",
      "Paan Shop near me",
      "Quick Bites near me",
      "Sweet Shops near me",
    ],
    clas:"normal",
  },

  // Top Restaurant Chains
  {
    heading: "Top Restaurant Chains",
    options: [
      "Bikanervala",
      "Burger King",
      "Burger Singh",
      "Domino's",
      "KFC",
      "Krispy Kreme",
      "McDonald's",
      "Pizza Hut",
      "Subway",
      "WOW! Momo",
    ],
    clas:"flex-options",
  },

  // Delivery Cities
  {
    heading: "Cities We Deliver To",
    options: [
      "Delhi NCR",
      "Kolkata",
      "Mumbai",
      "Bengaluru",
      "Pune",
      "Hyderabad",
      "Chennai",
      "Lucknow",
      "Kochi",
      "Jaipur",
      "Ahmedabad",
      "Chandigarh",
      "Goa",
      "Indore",
      "Gangtok",
      "Nashik",
      "Ooty",
      "Shimla",
      "Ludhiana",
      "Guwahati",
      "Amritsar",
      "Kanpur",
      "Allahabad",
      "Aurangabad",
      "Bhopal",
      "Ranchi",
      "Visakhapatnam",
      "Bhubaneswar",
      "Coimbatore",
      "Mangalore",
      "Vadodara",
      "Nagpur",
      "Agra",
      "Dehradun",
      "Mysore",
      "Puducherry",
      "Surat",
      "Varanasi",
      "Patna",
      "Udaipur",
      "Srinagar",
      "Khajuraho",
      "Neemrana",
      "Cuttack",
      "Trivandrum",
      "Haridwar",
      "Leh",
      "Pushkar",
      "Rajkot",
      "Madurai",
      "Kozhikode",
      "Alappuzha",
      "Thrissur",
      "Manipal",
      "Vijayawada",
      "Jodhpur",
      "Kota",
      "Ajmer",
      "Mussoorie",
      "Rishikesh",
      "Jalandhar",
      "Jammu",
      "Manali",
    ],
    clas:"flex-options",
  },
];

document.querySelector(".Hamburger").addEventListener("click", () => {
  document.querySelector(".Sliding-NavBar").style.right = "0vw";
  document.querySelector(".web-page").style.display = 'none';
});
document.querySelector(".fa-x").addEventListener("click", () => {
  document.querySelector(".Sliding-NavBar").style.right = "100vw";
  document.querySelector(".web-page").style.display = 'block';
});
document.querySelector(".fa-caret-down").addEventListener("click", (e) => {
  if (pointerAbove === false) {
    e.target.style.transform = "rotate(180deg)";
    pointerAbove = true;
  } else {
    e.target.style.transform = "rotate(360deg)";
    pointerAbove = false;
  }
  document
    .querySelector(".location-dropdown")
    .classList.toggle("show-dropdown");
});

discover.map(({ heading, subHeading, url }) => {
  document.querySelector("#Discover").innerHTML += `
<div class="discover-card">
<img src="${url}" alt="">
<div class="card-details">
  <h2>${heading}</h2>
  <p>${subHeading}</p>
</div>
</div>
`;
});

collections.map(({ url, heading, places }) => {
  document.querySelector(".collection-cards").innerHTML += `
    <div class="collection-card">
    <img src="${url}" alt="">
    <div class="collection-card-info">
     <h2>${heading}</h2>
     <p> ${places} Places <i class="fa-solid fa-caret-up"></i></p>
    </div>
    </div>
    `;
});

locations.map(({ state, places }) => {
  if (count > 0) {
    loadOptions(state, places);
  }
  count--;
});

Btn("more", "down");

document
  .querySelector(".location-options")
  .addEventListener("click", (event) => {
    if (
      event.target.classList.contains("show-location") ||
      event.target.parentElement.classList.contains("show-location")
    ) {
      if (lessMore === false) {
        document.querySelector(".location-options").innerHTML = "";
        locations.map(({ state, places }) => {
          loadOptions(state, places);
        });
        Btn("less", "up");
        count = 8;
        lessMore = true;
      } else {
        document.querySelector(".location-options").innerHTML = "";
        locations.map(({ state, places }) => {
          if (count > 0) {
            loadOptions(state, places);
          }
          count--;
        });
        Btn("more", "down");
        lessMore = false;
      }
    }
  });

document.querySelector(".Email").addEventListener("click", (e) => {
  document.querySelector(".Email > div").style.backgroundColor = "#ef4f5f";
  document.querySelector(".Phone > div").style.backgroundColor = " #fffbf7";
  document.querySelector(
    ".search-bar"
  ).innerHTML = `<input type="text" class="Enter-Email" placeholder="Email">  `;
});

document.querySelector(".Phone").addEventListener("click", (e) => {
  document.querySelector(".Phone > div").style.backgroundColor = "#ef4f5f";
  document.querySelector(".Email > div").style.backgroundColor = " #fffbf7";
  document.querySelector(".search-bar").innerHTML = `
  <select name="country-code" id="no">
  <option value="In">+91</option>
  <option value="Us">+1</option>
  <option value="Es">+64</option>
  </select>
  <input type="text" placeholder="Phone no">
  `;
});

const optionList = document.querySelector('.option-list');

data.map(({ heading, options, clas = "" }) => {
  const exploreOption = document.createElement('div');
  exploreOption.classList.add('explore-option');

  const headingSection = document.createElement('div');
  const headingText = document.createElement('p');
  headingText.textContent = heading;
  const caretIcon = document.createElement('i');
  caretIcon.classList.add('fa-solid', 'fa-caret-up' , 'sym-down');
  headingSection.appendChild(headingText);
  headingSection.appendChild(caretIcon);

  const optionsSection = document.createElement('div');
  optionsSection.classList.add('options' , 'hidden');
  const optionsList = document.createElement('ul');
  if (clas) {
    optionsList.classList.add(clas); 
  }
  options.forEach(option => {
    const listItem = document.createElement('li');
    listItem.textContent = option;
    optionsList.appendChild(listItem);
  });

  optionsSection.appendChild(optionsList);
  exploreOption.appendChild(headingSection);
  exploreOption.appendChild(optionsSection);
 
  headingSection.addEventListener('click', () => {
    optionsSection.classList.toggle('hidden');
    caretIcon.classList.toggle('caret-up');
    caretIcon.classList.toggle('sym-down');
  });

  optionList.appendChild(exploreOption);
});

document.querySelector('.language').addEventListener('click',()=>{
  document.querySelector('.languages-opt').classList.toggle('hidden');
  document.querySelector('.extra2').classList.toggle('hidden');
})


document.querySelector('.country').addEventListener('click',()=>{
  document.querySelector('.country-opt').classList.toggle('hidden');
  document.querySelector('.extra1').classList.toggle('hidden');
})
document.querySelector('.country-opt').addEventListener('click' , (e)=>{
  document.querySelector('.country').innerHTML = e.target.innerHTML;
  document.querySelector('.country-opt').classList.toggle('hidden');
  document.querySelector('.extra1').classList.toggle('hidden');
})
document.querySelector('.languages-opt').addEventListener('click' , (e)=>{
  document.querySelector('.language').innerHTML = `<img src="https://tse3.mm.bing.net/th?id=OIP.fPbc6WY2EeP7Ac334_bSfwHaHx&pid=Api&P=0&h=180" height="20px" width="20px" alt="">` + e.target.textContent;
  document.querySelector('.languages-opt').classList.toggle('hidden');
  document.querySelector('.extra2').classList.toggle('hidden');
})

function loadOptions(state, places) {
  document.querySelector(".location-options").innerHTML += `
    <div class="location-card">
     <div class="details">
      <p>${state}</p> 
      <span>${places}</span>
     </div>
     <i class="fa-solid fa-caret-up"></i>
    </div>
    `;
}

function Btn(type, pos) {
  document.querySelector(".location-options").innerHTML += `
  <div class="location-card show-location">
   <div class="details up-down-btn">
    <p>Show ${type}</p> 
   </div>
   <i class="fa-solid fa-caret-${pos}"></i>
  </div>
  `;
}
