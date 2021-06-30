const mainContentElement = document.getElementById("main-content");
const homeTopNavElement = document.getElementById("home-topnav");

let currentSubLink = null;
let currentSelectedElement = homeTopNavElement;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
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

function setContent(evt, title, text)
{
  if (currentSelectedElement)
  {
    //remove the previous active element
    currentSelectedElement.classList.remove("active");
    currentSelectedElement = evt.target;
  }

  evt.target.classList.add("active");
  mainContentElement.innerHTML = `<h1>${title}</h1><p>${text}</p>`;
}