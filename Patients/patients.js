const CLOSE_INFO_CONTAINER_BUTTON = document.querySelector("#close-info"),
    INFO_CONTAINER = document.querySelector("#info-container"),
    PATIENT_LIST = document.querySelector("#patients-list");


CLOSE_INFO_CONTAINER_BUTTON.addEventListener("click", e => {
    INFO_CONTAINER.classList.add("hidden");
    // INFO_CONTAINER.style.display = "hidden";
    alert("df");
})

document.appendChild(PATIENT_LIST);

for (let i = 0; i < patients.length; i++) {
    CreateElement("div", PATIENT_LIST, -1, "patient-info");
    // var GO_TO_MAIN_PAGE = document.querySelector("#go-to-main-page");
    // GO_TO_MAIN_PAGE.innerText = "Go to \nmain page";
    PATIENT_INFO = document.querySelector(".patient-info");


    // PATIENT_LIST.appendChild()
}