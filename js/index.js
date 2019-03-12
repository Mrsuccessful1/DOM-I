const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaLogo = document.getElementById("cta-img");
ctaLogo.src = siteContent["cta"]["img-src"];

let aNav = document.querySelectorAll('nav a');
aNav.forEach( (a,i) => a.textContent = siteContent['nav'][`nav-item-${++i}`]);
aNav.forEach((link,i) => link.style.color = "green");

let ctaH1 = document.querySelector('section div h1');
ctaH1.textContent = (siteContent["cta"]["h1"]);

let ctaButton = document.querySelector('button');
ctaButton.textContent = (siteContent["cta"]["button"]);

let topics = document.querySelectorAll('.main-content .text-content h4');
topics.forEach( (h4,i) => h4.textContent = siteContent['main-content']['features-h4', 'about-h4', 'services-h4', 'product-hr', 'vision-h4']);

let textSection = document.querySelectorAll(".main-content .text-content p");
textSection.forEach( (textSection,i) => textSection.textContent = siteContent['main-content']['features-content', 'about-content', 'services-content', 'product-content', 'vision-content']);

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = (siteContent ['contact']['contact-h4']);

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = (siteContent ['contact']['address']);
contactInfo[1].textContent = (siteContent ['contact']['phone']);
contactInfo[2].textContent = (siteContent ['contact']['email']);
// contactInfo.forEach( (contactInfo,i) => contactInfo.textContent = siteContent['contact']['address', 'phone', 'email']);

let copyright = document.querySelector('footer p');
copyright.textContent = (siteContent ['footer']['copyright']);