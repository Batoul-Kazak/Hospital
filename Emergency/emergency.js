const AMBULANCE_FORM = document.querySelector("#ambulance-form"),
    AMBULANCE_IMAGE = document.querySelector("#ambulance-image"),
    PARAGRAPH = document.querySelector("#paragraph");

AMBULANCE_FORM.addEventListener("submit", e => {
    e.preventDefault();

    PARAGRAPH.classList.remove("hidden");
    // PARAGRAPH.classList.add("shown");
    AMBULANCE_IMAGE.classList.add("moving");
});