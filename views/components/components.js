// Fonction pour charger un composant HTML
async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;

    // Si c'est le header, on met à jour le lien actif
    if (elementId === "header") {
      updateActiveLink();
    }
  } catch (error) {
    console.error(
      `Erreur lors du chargement du composant ${componentPath}:`,
      error
    );
  }
}

// Fonction pour mettre à jour le lien actif dans le menu
function updateActiveLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const menuLinks = document.querySelectorAll(".sf-menu li");

  menuLinks.forEach((li) => {
    const link = li.querySelector("a");
    if (link.getAttribute("href") === currentPage) {
      li.classList.add("current");
    } else {
      li.classList.remove("current");
    }
  });
}

// Initialisation des composants
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/views/components/header.html");
  loadComponent("footer", "/views/components/footer.html");
});
