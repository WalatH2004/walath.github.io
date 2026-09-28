const projecten = [
    {
        titel: "Java OOP Hotel Simulatie",
        categorie: "Java",
        beschrijving: "Een hotelsimulatie waarin we met Java en OOP verschillende hotelprocessen hebben nagebouwd.",
        afbeelding: "../img/HotelSimulator2.png",
        alt: "Screenshot van inhoudende project",
        link: "../html/projects/hotel-simulator.html"
    },
    {
        titel: "Fresh Fridge",
        categorie: "Fullstack",
        beschrijving: "Een slimme koelkastapplicatie waarin we met Java, Spring Boot en React producten, houdbaarheid en koelkastbeheer hebben ontwikkeld.",
        afbeelding: "../img/FreshFridge.png",
        alt: "Screenshot van inhoudende project Fresh Fridge.",
        link: "../html/projects/fresh-fridge.html"
    }
];

const projectGrid = document.querySelector(".project-grid");
const sorteerKnop = document.querySelector("#sorteer-knop");
const javaKnop = document.querySelector("#java-knop");
const fullstackKnop = document.querySelector("#fullstack-knop");
const allesKnop = document.querySelector("#alles-knop");

let sorteerAZ = true;

function toonProjecten(lijst){
    lijst.forEach((project) => {

        const article = document.createElement("article");
        article.classList.add("project-card");

        const img = document.createElement("img");
        img.src = project.afbeelding;
        img.alt = project.alt;

        const h2 = document.createElement("h2");
        h2.textContent = project.titel;

        const p = document.createElement("p");
        p.textContent = project.beschrijving;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "Bekijk project →"

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(link);

        projectGrid.appendChild(article);
    });
}

function sorteerOpProjecten(){
    if (sorteerAZ){

        projecten.sort((a, b) =>{
            return a.titel.localeCompare(b.titel);
        });

        sorteerKnop.textContent = "Sorteer Z-A";
    } else {

        projecten.sort((a, b) => {
            return b.titel.localeCompare(a.titel);
        });

        sorteerKnop.textContent = "Sorteer A-Z";
    }

    projectGrid.innerHTML = "";
    toonProjecten(projecten);
    sorteerAZ = !sorteerAZ;
}

function filterJavaProjecten(){
    const javaProjecten = projecten.filter((project) => {
        return project.categorie === "Java";
    });

    projectGrid.innerHTML = "";
    toonProjecten(javaProjecten);
}

function filterAlleProjecten(){
    projectGrid.innerHTML = "";
    toonProjecten(projecten);
}

function filterFullstackProjecten(){
    const fullstackProjecten = projecten.filter((project) => {
        return project.categorie === "Fullstack";
    });

    projectGrid.innerHTML = "";
    toonProjecten(fullstackProjecten);
}

allesKnop.addEventListener("click", (filterAlleProjecten));
javaKnop.addEventListener("click", (filterJavaProjecten));
fullstackKnop.addEventListener("click", (filterFullstackProjecten));
sorteerKnop.addEventListener("click", (sorteerOpProjecten));
toonProjecten(projecten);