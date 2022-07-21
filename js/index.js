
///////////////////////////////
//website remake 2022
//Aziz
////////////////////////////////

let mainButtonOpened = false;
let mainButtonMinimized = false;
let clickedButton;
let loadPDFOnce;
let resumeWindowActive;
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
//window frame
var windowFrame=document.querySelector('.window');
//options
var resumeWindowOptions=document.querySelector('#resumePDF');
var embededPDF=document.querySelector('#embededPDF');
var portfolioGitHub=document.querySelector('#portfolioGitHub');
var portfolioPinterst=document.querySelector('#portfolioPinterst');
var contactWindowOptions=document.querySelector('#contactWindow');


window.onload = function() {
  mainButton();
}
function mainButton() {

  if (!mainButtonOpened && !mainButtonMinimized) {
    leftPartClosed.classList.add("closeLO");
    rightPartClosed.classList.add("closeRO");
    leftPartOpened.classList.add("closeLC");
    rightPartOpened.classList.add("closeRC");
    innerCircleClosed.style.animation = "changeOpacityHide 0.6s linear forwards";
    circleFanClosed.style.animation = "changeOpacityHide 0.6s linear forwards";
    innerCircleOpened.style.animation = "changeOpacityShow 0.6s linear forwards";
    resumeCircle.style.animation = "expandResume 0.6s linear forwards";
    portfolioCircle.style.animation = "expandPortfolio 0.6s linear forwards";
    contactCircle.style.animation = "expandContact 0.6s linear forwards";
    document.querySelector('#glowDiv').classList.remove("glow");
    mainButtonOpened = true;

  }
  else if (mainButtonOpened && !mainButtonMinimized) {
    leftPartClosed.classList.remove("closeLO");
    rightPartClosed.classList.remove("closeRO");
    leftPartOpened.classList.remove("closeLC");
    rightPartOpened.classList.remove("closeRC");
    innerCircleClosed.style.animation = "changeOpacityShow 0.6s linear forwards";
    circleFanClosed.style.animation = "changeOpacityShow 0.6s linear forwards";
    innerCircleClosed.style.animation = "rotate 75s linear infinite reverse";
    circleFanClosed.style.animation = "rotate 75s linear infinite";
    innerCircleOpened.style.animation = "changeOpacityHide 0.6s linear forwards";
    resumeCircle.style.animation = "minimizeResume 0.6s linear forwards";
    portfolioCircle.style.animation = "minimizePortfolio 0.6s linear forwards";
    contactCircle.style.animation = "minimizeContact 0.6s linear forwards";
    document.querySelector('#glowDiv').classList.add("glow");
    mainButtonOpened = false;

  }
  else if (mainButtonOpened && mainButtonMinimized) {
    mainCircle.style.animation = "expandMain 0.7s ease-out forwards ";
    mainCircleLowerDiv.style.animation = "undoRotateScaleMain 0.7s ease-in forwards";

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
        embededPDF.style.visibility="hidden";
        resumeWindowActive=false;
        break;
      case "portfolio":
        portfolioGitHub.style.animation = "changeOpacityHide 0.4s linear forwards";
        portfolioGitHub.style.pointerEvents = "none";
        portfolioPinterst.style.animation = "changeOpacityHide 0.4s linear forwards";
        portfolioPinterst.style.pointerEvents = "none";
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
  mainCircleLowerDiv.style.animation = "rotateScaleMain 0.7s ease-in forwards";

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
      resumeWindowActive=true;
      embededPDF.style.visibility="visible";
      if(!loadPDFOnce){
        embededPDF.data="resume.pdf#toolbar=0";
        loadPDFOnce=true;
      }
      setTimeout(function () {
        resumeWindowOptions.style.animation = "changeOpacityShow 0.6s linear forwards";
        resumeWindowOptions.style.pointerEvents = "unset";
      }, 600);
      break;
    case "portfolio":
      setTimeout(function () {
        portfolioGitHub.style.animation = "changeOpacityShow 0.6s linear forwards";
        portfolioGitHub.style.pointerEvents = "unset";
        portfolioPinterst.style.animation = "changeOpacityShow 0.6s linear forwards";
        portfolioPinterst.style.pointerEvents = "unset";
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
function resizeResumeHovered(){
  if(resumeWindowActive&&!isMobile){
    windowFrame.classList.add("resumeResizedWindow");
    embededPDF.classList.add("embededPDFResize");
    resumeWindowOptions.classList.add('resizeLogo');
  }
}
function resizeResumeNotHovered(){
  if(resumeWindowActive&&!isMobile){
    windowFrame.classList.remove('resumeResizedWindow'); 
    embededPDF.classList.remove("embededPDFResize");
    resumeWindowOptions.classList.remove('resizeLogo'); 
  }
}