const githubSection = document.querySelector(".github-project");
const githubStatus = document.querySelector("#github-status");
const githubRepo = document.querySelector("#github-repo");
const repoNaam = githubSection.dataset.repo;
const url = `https://api.github.com/repos/WalatH2004/${repoNaam}`;

async function haalRepositoryOp(){

    try {
        const response = await fetch(url);

        if (!response.ok){
            throw new Error("Repository kan niet worden opgehaald!");
        }

        const data = await response.json();

        githubStatus.textContent = "";
    
        const link = document.createElement("a");
        link.href = data.html_url;
        link.textContent = "Bekijk repository op GitHub";
        link.target = "_blank";

        githubRepo.appendChild(link);

    } catch (error) {
        githubStatus.textContent = "Er is een fout opgetreden bij het ophalen van de repository ✕";
        githubStatus.classList.add("error");
    }
}

haalRepositoryOp();