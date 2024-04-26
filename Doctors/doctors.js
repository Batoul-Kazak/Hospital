const
    DISEASE_INFO_MODAL = document.querySelector("#disease-info-modal"),
    DISEASE_BUTTONS = document.querySelectorAll("#medical-specialties-container button"),
    SUBMIT_BUTTON = document.querySelector("#disease-info-modal button[type=submit]"),
    SECTIONS = document.querySelectorAll("#disease-info-modal>section"),
    TEXTAREA = document.querySelector("#disease-info-modal textarea"),
    MEDICAL_SPECIALTIES_CONTAINER = document.querySelector("#medical-specialties-container"),
    DOCTOR_INFORMATION = document.querySelector("#doctor-information"),
    DOCTOR_IMAGE = document.querySelector(".doctor-img"),
    DOCTOR_NAME = document.querySelector("#doctor-name"),
    DOCTOR_INFO = document.querySelector("#doctor-info"),
    DOCTOR_TIME_ATTENDANCE = document.querySelector("#doctor-time-attendance"),
    DOCTOR_BOOKED = document.querySelector(".booked"),
    CLOSE_DOCTOR_INFORMATION_CONTAINER = document.querySelector("#close"),
    RESERVED_BUTTON = document.querySelector("#reserve");

const COVER = document.querySelector("#cover");

var shownSectionIndex = 0;
let specialties = "";

function showDiseaseInfoModal() {
    DISEASE_INFO_MODAL.classList.remove("hidden");
}

DISEASE_BUTTONS.forEach(diseaseButton => {
    diseaseButton.addEventListener("click", () => {
        // DISEASE_INFO_MODAL.classList.remove("hidden");
        // DISEASE_INFO_MODAL.classList.add("animate");

        switch (diseaseButton.innerText) {
            case "Cardiology": specialties = "cardiology"; Doctors(specialties); break;
            case "Neurology": specialties = "neurology"; Doctors(specialties); break;
            case "Ophthalmology": specialties = "ophthalmology"; Doctors(specialties); break;
            case "Otolaryngology": specialties = "otolaryngology"; Doctors(specialties); break;
            case "Orthopedics": specialties = "orthopedics"; Doctors(specialties); break;
            case "Oncology": specialties = "oncology"; Doctors(specialties); break;
            case "Dermatology": specialties = "dermatology"; Doctors(specialties); break;
            case "Pulmonology": specialties = "pulmonology"; Doctors(specialties); break;
            case "Pediatrics": specialties = "pediatrics"; Doctors(specialties); break;
        }
    });
});

DISEASE_INFO_MODAL?.addEventListener("submit", e => {
    e.preventDefault();

    shownSectionIndex++;

    SECTIONS.forEach((section, i) => {
        section.className = i != shownSectionIndex ? "hidden" : "";
    });
});

DISEASE_INFO_MODAL?.addEventListener("reset", e => {
    e.preventDefault();

    SECTIONS[shownSectionIndex].querySelector("textarea").value = "";

    shownSectionIndex--;

    SECTIONS.forEach((section, i) => {
        section.className = i != shownSectionIndex ? "hidden" : "";
    });
});

function Doctors() {
    MEDICAL_SPECIALTIES_CONTAINER.innerHTML = ""
    let numberOfDoctors;
    const DOCTORS_SURNAMES = ["Ahmad", "Olivia", "John", "Alaa", "Ameer", "Noor", "Fatina", "Emily", "Fatima", "Sophia", "Khaled", "Samia", "Sami"],
        DOCTORS_FAMILIES_NAMES = ["Müller", "Schmidt", "Schneider", "Fischer", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Bauer"];

    let dontRepeatSurNameWithTheSameFamilyName = [];
    //we must order this code (switch) and put it in a function 
    switch (specialties) {
        case specialties = "cardiology": numberOfDoctors = 10; break;
        case specialties = "neurology": numberOfDoctors = 11; break;
        case specialties = "ophthalmology": numberOfDoctors = 5; break;
        case specialties = "otolaryngology": numberOfDoctors = 15; break;
        case specialties = "orthopedics": numberOfDoctors = 9; break;
        case specialties = "oncology": numberOfDoctors = 7; break;
        case specialties = "dermatology": numberOfDoctors = 7; break;
        case specialties = "pulmonology": numberOfDoctors = 7; break;
        case specialties = "pediatrics": numberOfDoctors = 7; break;
    }

    for (let i = 0; i < numberOfDoctors + 1; i++) {
        let randomDoctorSurnames = DOCTORS_SURNAMES[Math.floor(Math.random() * DOCTORS_SURNAMES.length)],
            randomDoctorsFamiliesNames = DOCTORS_FAMILIES_NAMES[Math.floor(Math.random() * DOCTORS_FAMILIES_NAMES.length)];


        if (dontRepeatSurNameWithTheSameFamilyName.includes(randomDoctorSurnames + " " + randomDoctorsFamiliesNames)) {
            randomDoctorsFamiliesNames = DOCTORS_SURNAMES[Math.floor(Math.random() * DOCTORS_SURNAMES.length)];
        }

        dontRepeatSurNameWithTheSameFamilyName.push(randomDoctorSurnames + " " + randomDoctorsFamiliesNames);

        const SPECIALTIES_BUTTON = document.createElement("button");
        SPECIALTIES_BUTTON.className = "specialties-buttons";
        SPECIALTIES_BUTTON.textContent = randomDoctorSurnames + " " + randomDoctorsFamiliesNames;
        MEDICAL_SPECIALTIES_CONTAINER.appendChild(SPECIALTIES_BUTTON);


        if (i == numberOfDoctors) {
            const MAIN_BUTTON = document.createElement("button");
            MAIN_BUTTON.id = "main";
            MAIN_BUTTON.className = "specialties-buttons";
            MAIN_BUTTON.innerText = "Main";
            MEDICAL_SPECIALTIES_CONTAINER.appendChild(MAIN_BUTTON);

            MAIN_BUTTON.addEventListener("click", e => {
                location.reload();
            });
        }
    }

    const DOCTORS_BUTTONS = MEDICAL_SPECIALTIES_CONTAINER.querySelectorAll("button"),
        DOCTOR_TIME_ATTENDANCE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    DOCTORS_BUTTONS.forEach((button) => {
        button.addEventListener("click", () => {

            if (button.id == "main") {
                DOCTOR_INFORMATION.classList.add("hidden");
                MEDICAL_SPECIALTIES_CONTAINER.classList.remove("hidden");
                return;
            }
            //here i want to put a different values for each doctor info
            //the problem is JUST in these variables 

            let doctorName = button.innerText,
                doctorInfo = button.innerText.toLowerCase() + "studied in Germany at \nBerlin University",
                workingHours = DOCTOR_TIME_ATTENDANCE[Math.floor(Math.random() * DOCTOR_TIME_ATTENDANCE.length)];

            // COVER.classList.remove("hidden");

            doctorInfoContainer();
            giveInfoForDoctor(doctorName, doctorInfo, workingHours);
        });
    });
}

function doctorInfoContainer() {
    DOCTOR_INFORMATION.classList.remove("hidden");
    // DISEASE_INFO_MODAL.classList.add("animate");
}//19701970

function giveInfoForDoctor(doctorName, doctorInfo, workingHours) {

    if (DOCTOR_INFORMATION.hasChildNodes()) {
        DOCTOR_INFORMATION.innerHTML = "";
    }

    const DOCTOR_NAME = document.createElement("div");
    const DOCTOR_INFO = document.createElement("div");
    const DOCTOR_TIME_ATTENDANCE = document.createElement("div");
    const DOCTOR_PHONE_NUMBER = document.createElement("div");


    const NAME_LABEL = document.createElement("span");
    NAME_LABEL.innerText = "Name: ";
    const INFO_LABEL = document.createElement("span");
    INFO_LABEL.innerText = "Info: ";
    const TIME_LABEL = document.createElement("span");
    TIME_LABEL.innerText = "Working Hours: ";
    // const PHONE_NUMBER_LABEL = document.createElement("span");
    // PHONE_NUMBER_LABEL.innerText = "Phone number: ";

    // let phoneNumber = "456 984 564 73";

    // let phoneNumber = Math.floor(Math.random() * 999999999999) ? phoneNumber < 1000000000 : phoneNumber = 43758345;


    DOCTOR_NAME.appendChild(NAME_LABEL);
    DOCTOR_NAME.appendChild(document.createTextNode(doctorName));
    DOCTOR_INFO.appendChild(INFO_LABEL);
    DOCTOR_INFO.appendChild(document.createTextNode(doctorInfo));
    DOCTOR_TIME_ATTENDANCE.appendChild(TIME_LABEL);
    // DOCTOR_PHONE_NUMBER.appendChild(PHONE_NUMBER_LABEL);
    DOCTOR_TIME_ATTENDANCE.appendChild(document.createTextNode(workingHours));
    // DOCTOR_PHONE_NUMBER.innerText = "89435709435";

    DOCTOR_INFORMATION.appendChild(DOCTOR_IMAGE);
    DOCTOR_INFORMATION.appendChild(DOCTOR_NAME);
    DOCTOR_INFORMATION.appendChild(DOCTOR_INFO);
    DOCTOR_INFORMATION.appendChild(DOCTOR_TIME_ATTENDANCE);
    // DOCTOR_INFORMATION.appendChild(DOCTOR_PHONE_NUMBER.innerText);
    DOCTOR_INFORMATION.appendChild(DOCTOR_BOOKED);
    DOCTOR_INFORMATION.appendChild(CLOSE_DOCTOR_INFORMATION_CONTAINER);

    let IsBooked = Math.random() < 0.5 ? "booked" : "available";
    if (IsBooked) DOCTOR_BOOKED.classList.add("booked");
    else DOCTOR_BOOKED.classList.remove("booked");
    DOCTOR_BOOKED.innerText = IsBooked;

    if (IsBooked === "booked") {
        DOCTOR_BOOKED.innerText = "booked";
        DOCTOR_BOOKED.className = "booked";
    } else {
        DOCTOR_BOOKED.innerText = "available";
        DOCTOR_BOOKED.className = "available";

        DOCTOR_INFORMATION.appendChild(RESERVED_BUTTON);
        RESERVED_BUTTON.classList.add("reserve")
    }
}

RESERVED_BUTTON.addEventListener("click", e => {
    alert("booked successfully.");
});

CLOSE_DOCTOR_INFORMATION_CONTAINER.addEventListener("click", e => {
    DOCTOR_INFORMATION.classList.add("hidden");

    // COVER.classList.add("hidden");
});

