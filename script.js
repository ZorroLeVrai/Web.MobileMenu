import Content from './content.js';

const mainContentElement = document.getElementById("main-content");
const homeTopNavElement = document.getElementById("home-topnav");
const homeIconElement = document.getElementById("home-icon");
const footballSelectorElement = document.getElementById("football-selector");
const tennisSelectorElement = document.getElementById("tennis-selector");
const aboutSelectorElement = document.getElementById("about-selector");

const mapContent = new Map([
  ["home-topnav", new Content("Home", "This is the homepage")],
  ["football-selector", new Content("Football", "All about football")],
  ["tennis-selector", new Content("Tennis", "All about tennis")],
  ["about-selector", new Content("About", "All about the author")]
]);

let currentSubLink = null;
let currentSelectedElement = homeTopNavElement;

function initListeners()
{
  homeTopNavElement.addEventListener("click", (e) => handleMenuClick(e));
  homeIconElement.addEventListener("click", () => handleAction("home"));
  footballSelectorElement.addEventListener("click", (e) => handleMenuClick(e));
  tennisSelectorElement.addEventListener("click", (e) => handleMenuClick(e));
  aboutSelectorElement.addEventListener("click", (e) => handleMenuClick(e));
}

// Show or hide the navigation menu links
function handleAction(menuName)
{
  if (menuName === currentSubLink)
  {
    currentSubLink = null;
  }
  else
  {
    currentSubLink = menuName;
  }

  hideAllSubLinks();

  if (currentSubLink)
  {
    //display the appropriate submenu
    document.getElementById(`${currentSubLink}-links`).style.display = "block";
  }
}

function hideAllSubLinks()
{
  for (let element of document.getElementsByClassName("sub-link"))
  {
    element.style.display = "none";
  }
}

function handleMenuClick(evt)
{
  const targetId = evt.target.id;

  if (currentSelectedElement)
  {
    //remove the previous active element
    currentSelectedElement.classList.remove("active");
    currentSelectedElement = evt.target;
  }

  evt.target.classList.add("active");
  displayContent(targetId);
}

function displayContent(targetId)
{
  const content = mapContent.get(targetId);
  mainContentElement.innerHTML = `<h1>${content.title}</h1><p>${content.text}</p>`;
}

initListeners();
displayContent("home-topnav");