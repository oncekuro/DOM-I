const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navBarATags = document.querySelectorAll("header nav a");

navBarATags.forEach((element, index) => {
  element.textContent = siteContent["nav"][`nav-item-${index + 1}`];
  element.style.color = "green";
});

const newLink1 = document.createElement("a");
newLink1.textContent = "Home";

const newLink2 = document.createElement("a");
newLink2.textContent = "Login";

const navUpdate = document.querySelector("nav");

navUpdate.prepend(newLink1);
navUpdate.appendChild(newLink2);
navUpdate.children[0].style.color = "blue";
navUpdate.children[navUpdate.children.length - 1].style.color = "blue";

//h1 text
const ctaHOne = document.querySelectorAll(".cta-text h1");
ctaHOne.forEach((element) => (element.textContent = siteContent["cta"][`h1`]));

//button
const ctaButton = document.querySelectorAll(".cta-text button");
theCtaButton = ctaButton[0];
theCtaButton.textContent = siteContent["cta"]["button"];

//image next to button
const snippetImg = document.getElementById("cta-img");
snippetImg.setAttribute("src", siteContent["cta"]["img-src"]);

//main content
const topContentHeader = document.querySelectorAll(
  ".top-content .text-content h4"
);
console.log(topContentHeader);
featureHeader = topContentHeader[0];
featureHeaderTwo = topContentHeader[1];
//console.log(featureHeader);
featureHeader.textContent = siteContent["main-content"]["features-h4"];
featureHeaderTwo.textContent = siteContent["main-content"]["about-h4"];

const topPContent = document.querySelectorAll(".top-content .text-content p");
topFeatureContent = topPContent[0];
topAboutContent = topPContent[1];
topFeatureContent.textContent = siteContent["main-content"]["features-content"];
topAboutContent.textContent = siteContent["main-content"]["about-content"];

//middle image
const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom area under image

const bottomArea = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomHeaderOne = bottomArea[0];
bottomHeaderTwo = bottomArea[1];
bottomHeaderThree = bottomArea[2];
bottomHeaderOne.textContent = siteContent["main-content"]["services-h4"];
bottomHeaderTwo.textContent = siteContent["main-content"]["product-h4"];
bottomHeaderThree.textContent = siteContent["main-content"]["vision-h4"];

const bArea = document.querySelectorAll(".bottom-content .text-content p");
bContentOne = bArea[0];
bContentTwo = bArea[1];
bContentThree = bArea[2];
bContentOne.textContent = siteContent["main-content"]["services-content"];
bContentTwo.textContent = siteContent["main-content"]["product-content"];
bContentThree.textContent = siteContent["main-content"]["vision-content"];

//footer area
const contactSection = document.querySelectorAll(".contact h4");
contactHeader = contactSection[0];
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactSectionInfo = document.querySelectorAll(".contact p");
cSIOne = contactSectionInfo[0];
cSITwo = contactSectionInfo[1];
cSIThree = contactSectionInfo[2];
cSIOne.textContent = siteContent["contact"]["address"];
cSIOne.style.maxWidth = "10rem";

cSITwo.textContent = siteContent["contact"]["phone"];
cSITwo.style.marginBottom = "1.2rem";
cSIThree.textContent = siteContent["contact"]["email"];
cSIThree.style.marginBottom = "2rem";

//copyright
const foot = document.querySelectorAll("footer p");
foo = foot[0];
foo.textContent = siteContent["footer"]["copyright"];
foo.style.textAlign.center;
