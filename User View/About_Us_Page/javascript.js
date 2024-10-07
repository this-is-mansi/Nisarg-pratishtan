document.addEventListener("DOMContentLoaded", function () {
    const timelineLine = document.querySelector(".timeline-line");
    const timelineImage = document.querySelector(".timeline-image");
  
    const maxTimelineHeight =
      (document.querySelectorAll(".my-container").length - 1) * 100;
  
    window.addEventListener("scroll", () => {
      const scrollPercentage = (window.scrollY / maxTimelineHeight) * 90; //Adjust the speed as needed
  
      const adjustedPercentage = Math.min(100, scrollPercentage);
      timelineLine.style.height = `${adjustedPercentage}%`;
      timelineImage.style.top = `${adjustedPercentage}%`;
    });
  });
  