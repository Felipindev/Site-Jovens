document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
        sections.forEach(section => {
            section.classList.add("hidden");
            section.classList.remove("visible");
        });
        
        // Exibir a primeira seção
        sections[0].classList.add("visible");
        sections[0].classList.remove("hidden");
    }
});

function showMainSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("visible");
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add("visible");
        section.classList.remove("hidden");
        
        const subSections = section.querySelectorAll("section");
        subSections.forEach(subSection => {
            subSection.classList.add("hidden");
            subSection.classList.remove("visible");
        });
    }
}

function showSubSection(subSectionId, parentSectionId) {
    const allSubSections = document.querySelectorAll("section section");
    allSubSections.forEach(subSection => {
        subSection.classList.add("hidden");
        subSection.classList.remove("visible");
    });
    
    const parentSection = document.getElementById(parentSectionId);
    if (parentSection) {
        const subSection = parentSection.querySelector(`#${subSectionId}`);
        if (subSection) {
            subSection.classList.add("visible");
            subSection.classList.remove("hidden");
        }
    }
}

//slide do header
let index = 0;

        function showSlide() {
            const slider = document.getElementById("slider");
            const totalSlides = document.querySelectorAll(".header-item").length;
            if (index >= totalSlides) index = 0;
            if (index < 0) index = totalSlides - 1;
            slider.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            index++;
            showSlide();
        }

        function prevSlide() {
            index--;
            showSlide();
        }

        // Auto slide a cada 3 segundos
        setInterval(() => {
            index++;
            showSlide();
        }, 5000);