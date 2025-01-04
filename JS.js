function showMainSection(sectionId) {
    // Ocultar todas as seções principais
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("visible");
    });

    // Mostrar a seção principal selecionada
    const section = document.getElementById(sectionId);
    section.classList.add("visible");
    section.classList.remove("hidden");

    // Esconder todas as subseções da seção principal selecionada
    const subSections = section.querySelectorAll("section");
    subSections.forEach(subSection => {
        subSection.classList.add("hidden");
        subSection.classList.remove("visible");
    });
}

function showSubSection(subSectionId, parentSectionId) {
    // Ocultar todas as subseções
    const allSubSections = document.querySelectorAll("section section");
    allSubSections.forEach(subSection => {
        subSection.classList.add("hidden");
        subSection.classList.remove("visible");
    });

    // Mostrar apenas a subseção selecionada
    const parentSection = document.getElementById(parentSectionId);
    const subSection = parentSection.querySelector(`#${subSectionId}`);
    subSection.classList.add("visible");
    subSection.classList.remove("hidden");
}