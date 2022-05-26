
///////////////////////////////
//website remake 2022
//Aziz
////////////////////////////////

let mainButtonOpened = false;
let mainButtonMinimized = false;
let clickedButton;
//main circle parts
var rightPartOpened = document.querySelector('#rightOpen');
var leftPartOpened = document.querySelector('#leftOpen');
var innerCircleOpened=document.querySelector('#innerCircleOpened');
var rightPartClosed = document.querySelector('#rightClosed');
var leftPartClosed = document.querySelector('#leftClosed');
var innerCircleClosed =document.querySelector('#innerCircleClosed');
var circleFanClosed =document.querySelector('#circleFanClosed');
//whole circles
var resumeCircle=document.querySelector('#resumeID');
var portfolioCircle=document.querySelector('#portfolioID');
var contactCircle=document.querySelector('#contactID');
var mainCircle=document.querySelector('#mainButton');
var mainCircleLowerDiv=document.querySelector('#mainButtonDiv');
//windows
var windowFrame=document.querySelector('#window');
var resumeWindowOptions=document.querySelector('#resumeWindow');
var portfolioWindowOptions=document.querySelector('#portfolioWindow');
var contactWindowOptions=document.querySelector('#contactWindow');

function mainButton() {

  if (!mainButtonOpened && !mainButtonMinimized) {
    innerCircleClosed.style.animation = "changeOpacityHide 0.6s linear forwards";
    circleFanClosed.style.animation = "changeOpacityHide 0.6s linear forwards";
    innerCircleOpened.style.animation = "changeOpacityShow 0.6s linear forwards";
    resumeCircle.style.animation = "expandResume 0.6s linear forwards";
    portfolioCircle.style.animation = "expandPortfolio 0.6s linear forwards";
    contactCircle.style.animation = "expandContact 0.6s linear forwards";
    leftPartClosed.style.animation = "rotateLeftOrange 0.6s ease-out forwards";
    rightPartClosed.style.animation = "rotateRightOrange 0.6s ease-out  forwards";
    leftPartOpened.style.animation = "rotateLeftCyanBack 0.6s ease-in forwards";
    rightPartOpened.style.animation = "rotateRightCyanBack 0.6s ease-in forwards";
    mainButtonOpened = true;

  }
  else if (mainButtonOpened && !mainButtonMinimized) {
    leftPartClosed.style.animation = "rotateLeftOrangeBack 1s ease forwards";
    rightPartClosed.style.animation = "rotateRightOrangeBack 1s ease forwards";
    rightPartOpened.style.animation = "rotateRightCyan 1s ease forwards";
    leftPartOpened.style.animation = "rotateLeftCyan 1s ease forwards";

    innerCircleClosed.style.animation = "changeOpacityShow 0.6s linear forwards";
    circleFanClosed.style.animation = "changeOpacityShow 0.6s linear forwards";
    innerCircleClosed.style.animation = "rotate 75s linear infinite reverse";
    circleFanClosed.style.animation = "rotate 75s linear infinite";
    innerCircleOpened.style.animation = "changeOpacityHide 0.6s linear forwards";
    resumeCircle.style.animation = "minimizeResume 0.6s linear forwards";
    portfolioCircle.style.animation = "minimizePortfolio 0.6s linear forwards";
    contactCircle.style.animation = "minimizeContact 0.6s linear forwards";
    mainButtonOpened = false;

  }
  else if (mainButtonOpened && mainButtonMinimized) {

    mainCircle.style.animation = "expandMain 0.7s ease-out forwards ";
    mainCircleLowerDiv.style.animation = "unrotateScale 0.7s ease-in forwards";

    setTimeout(function () {
      windowFrame.style.visibility = "hidden";
    }, 200);
    setTimeout(function () {
      resumeCircle.style.animation = "expandResume 0.4s linear forwards";
      portfolioCircle.style.animation = "expandPortfolio 0.4s linear forwards";
      contactCircle.style.animation = "expandContact 0.4s linear forwards";
    }, 400);
    resumeCircle.style.pointerEvents = "unset";
    portfolioCircle.style.pointerEvents = "unset";
    contactCircle.style.pointerEvents = "unset";
    switch (clickedButton) {
      case "resume":
        resumeWindowOptions.style.animation = "changeOpacityHide 0.4s linear forwards";
        resumeWindowOptions.style.pointerEvents = "none";
        break;
      case "portfolio":
        portfolioWindowOptions.style.animation = "changeOpacityHide 0.4s linear forwards";
        portfolioWindowOptions.style.pointerEvents = "none";
        break;
      case "contact":
        Array.from(document.querySelectorAll(".myContactInfo"))
          .forEach((element) => element.style.visibility = "hidden");
        break;
    }

    mainButtonMinimized = false;
  }

}
function otherButtons(currentClickedButton) {
  clickedButton = currentClickedButton;
  mainButtonMinimized = true;

  mainCircle.style.animation = "minimizeMain 0.7s ease-in forwards";
  mainCircleLowerDiv.style.animation = "rotateScale 0.7s ease-in forwards";

  setTimeout(function () {
    windowFrame.style.visibility = "visible";
  }, 200);

  resumeCircle.style.animation = "minimizeResume 0.3s ease forwards";
  portfolioCircle.style.animation = "minimizePortfolio 0.3s ease forwards";
  contactCircle.style.animation = "minimizeContact 0.3s ease forwards";
  resumeCircle.style.pointerEvents = "none";
  portfolioCircle.style.pointerEvents = "none";
  contactCircle.style.pointerEvents = "none";


  switch (clickedButton) {
    case "resume":
      setTimeout(function () {
        resumeWindowOptions.style.animation = "changeOpacityShow 0.6s linear forwards";
        resumeWindowOptions.style.pointerEvents = "unset";
      }, 600);
      break;
    case "portfolio":
      setTimeout(function () {
        portfolioWindowOptions.style.animation = "changeOpacityShow 0.6s linear forwards";
        portfolioWindowOptions.style.pointerEvents = "unset";
      }, 600);
      break;
    case "contact":
      setTimeout(function () {
        Array.from(document.querySelectorAll(".myContactInfo"))
          .forEach((element) => element.style.visibility = "visible");
      }, 600);
      break;
  }
}
function hoveredOptions(e) {
  e.classList.remove("clipImageNotHovered");
}
function unhoveredOptions(e) {
  e.classList.add("clipImageNotHovered");
}
