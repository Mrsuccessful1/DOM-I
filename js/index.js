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
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

let aNav = document.querySelectorAll('nav a');
aNav.forEach( (a,i) => a.textContent = siteContent['nav'][`nav-item-${++i}`]);

let ctaH1 = document.querySelector('section div h1');
ctaH1.textContent = ('src', siteContent["cta"]["h1"]);

let ctaButton = document.querySelector('button');
ctaButton.textContent = ('src', siteContent["cta"]["button"]);

let featuresH4 = document.querySelector('.main-content .text-content h4');
featuresH4.textContent = ('src', siteContent["main-content"]["features-h4"]);
 
let featuresSection = document.querySelector(".top-content .text-content p");
featuresSection.textContent = ('src', siteContent ['main-content']['features-content']);

let aboutH4 = document.querySelector('.main-content .text-content h4');
aboutH4.textContent = ('src', siteContent["main-content"]["about-h4"]);

let aboutSection = document.querySelector(".top-content .text-content p");
aboutSection.textContent = ('src', siteContent ['main-content']['about-content']);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let serviceH4 = document.querySelector(".bottom-content .text-content p");
serviceH4.textContent = ('src', siteContent ['main-content']['services-content']);

let serviceSection = document.querySelector(".bottom-content .text-content h4");
serviceSection.textContent = ('src', siteContent ['main-content']['services-h4']);

let productH4 = document.querySelector(".bottom-content .text-content p");
productH4.textContent = ('src', siteContent ['main-content']['product-content']);

let productSection = document.querySelector(".bottom-content .text-content h4");
productSection.textContent = ('src', siteContent ['main-content']['product-h4']);

let visionH4 = document.querySelector(".bottom-content .text-content p");
visionH4.textContent = ('src', siteContent ['main-content']['vision-content']);

let visionSection = document.querySelector(".bottom-content .text-content h4");
visionSection.textContent = ('src', siteContent ['main-content']['vision-h4']);

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = ('src', siteContent ['contact']['contact-h4']);

let contactAddress = document.querySelector('.contact p');
contactAddress.textContent = ('src', siteContent ['contact']['address']);

let contactPhone = document.querySelector('.contact p');
contactPhone.textContent = ('src', siteContent ['contact']['phone']);

let contactEmail = document.querySelector('.contact p');
contactEmail.textContent = ('src', siteContent ['contact']['email']);

let copyFooter = document.querySelector('footer p');
copyFooter.textContent = ('src', siteContent ['footer']['copyright']);