const CONTAINERS = [
    {
        id: "main",
        sections: ["personal", "shared"],
    },
    {
        id: "personal",
        parentId: "main",
    },
    {
        id: "shared",
        sections: ["two", "three", "four"],
        parentId: "main",
    },
    {
        id: "two",
        parentId: "shared",
    },
    {
        id: "three",
        parentId: "shared",
    },
    {
        id: "four",
        parentId: "shared",
    },
];

const ROOM_HEAD_LINERS = [
    {
        name: "ID",
        //we need 999 number of rooms id's
        values: Array(1000).fill(null).map((_, i) => i + 1),
    },
    {
        name: "Information",
        values: ["Has internet", "Has TV", "Has extra beds", "Has Conditioning"],
        hasMultipleValues: true,
    },
    {
        name: "Location",
        values: Array(40).fill(null).map((_, i) => ["A", "B", "C"][i % 3] + i),
    },
];

const ROOM_FORM_INFORMATION = [
    "Name",
    "Date",
    "Status",
];

var LastOpenedContainer = "";

const ROOM_DISPLAYER = document.querySelector("#room-displayer");

const MINIMUM_ROOM_CARD = 3, MAXIMUM_ROOM_CARD = 10;

CreateContainers();

/** Creates a new element and added into a parent element.
* @param {String} type The type of the element that'll be created.
* @param {HTMLElement} parent The parent element that contains the element.
* @param {Number} tabIndex The index of which the element can be tabbed onto.
* @param {String | Array<String>} classList The class name of the element, or the class list of it.
* @param {String} id The identifier of the element.
* @returns The element after being created.
*/
function CreateElement(type, parent, tabIndex = -1, classList = [], id = null) {
    let element = document.createElement(type);

    parent.append(element);

    if (tabIndex >= 0) { element.tabIndex = tabIndex; }

    if (typeof (classList) == "string") { element.className = classList; }
    else { classList.forEach(className => element.classList.add(className)); }

    if (id != null) { element.id = id; }

    return element;
}

function CreateContainers() {
    CONTAINERS.forEach(container => {
        // html_element, parent, -1 means we can't click it, classes, id
        const SECTION = CreateElement("section", document.body, -1,
            ["container", "hidden"], container.id + "-container");

        const HEAD_LINER = CreateElement("h3", SECTION);
        //here we capitalize the first letter and keep the other letters small 
        HEAD_LINER.innerText = container.id[0].toUpperCase() + container.id.slice(1);

        const BUTTON_DISPLAYER = CreateElement("div", SECTION, -1, ["button-displayer"]);

        if (container.sections == null) {
            container.sections = ["private", "public"];
        }

        if (container.id != "main") { container.sections.push("previous"); }

        container.sections.forEach(section => {
            // zero means that we can click it
            const BUTTON = CreateElement("button", BUTTON_DISPLAYER, 0);
            BUTTON.innerText = section[0].toUpperCase() + section.slice(1);

            BUTTON.addEventListener("click", (e) => {
                //CLOSEST means the closest container of this button (the closest father)
                const PARENT_CONTAINER = BUTTON.closest(".container");
                PARENT_CONTAINER.classList.add("hidden");

                switch (section) {
                    case "previous":
                        const DESIRED_CONTAINER = document.querySelector("#" + container.parentId + "-container");
                        DESIRED_CONTAINER.classList.remove("hidden");
                        return;

                    case "private":
                    case "public":
                        ShowRoomDisplayer();
                        return;
                }

                const DESIRED_CONTAINER = document.querySelector("#" + section + "-container");
                DESIRED_CONTAINER.classList.remove("hidden");
            });
        });
    });

    const FIRST_CONTAINER = document.querySelector(".container");
    FIRST_CONTAINER.classList.remove("hidden");
}


function ShowRoomDisplayer() {

    Array.from(ROOM_DISPLAYER.childNodes).forEach(childNode => ROOM_DISPLAYER.removeChild(childNode));
    let roomCardCount = Math.max(MINIMUM_ROOM_CARD, Math.floor(Math.random() * MAXIMUM_ROOM_CARD));
    while (roomCardCount--) {
        CreateRoomCard(ROOM_DISPLAYER);
    }

    CreateElement("button", ROOM_DISPLAYER, 0, "specialties-buttons", "go-to-main");
    var GO_TO_MAIN = document.querySelector("#go-to-main");
    GO_TO_MAIN.innerText = "Go to \nmain page";

    GO_TO_MAIN.addEventListener("click", e => location.reload());
}

function CreateRoomCard(parent) {
    const ROOM_CARD = CreateElement("section", parent, -1, "room-card");

    ROOM_HEAD_LINERS.forEach(roomHeadLiner => {
        const DIV = CreateElement("div", ROOM_CARD);

        const HEAD_LINER = CreateElement("h3", DIV);
        HEAD_LINER.style.color = "#222";
        // HEAD_LINER.style.fontWeight = "#bold";
        HEAD_LINER.innerText = roomHeadLiner.name + ": ";

        const PARAGRAPH = CreateElement("p", DIV);

        if (roomHeadLiner.hasMultipleValues) {
            let start = Math.floor(Math.random() * roomHeadLiner.values.length),
                end = Math.floor(Math.random() * roomHeadLiner.values.length);

            if (start > end) {
                [start, end] = [end, start];
            }

            PARAGRAPH.innerText = roomHeadLiner.values.slice(start, end + 1).sort(() => Math.random() - 0.5).join(", ") + ".";
        } else {
            PARAGRAPH.innerText = roomHeadLiner.values[Math.floor(Math.random() * roomHeadLiner.values.length)] + ".";
        }
    });

    const RESERVE_ROOM_BUTTON = CreateElement("button", ROOM_CARD, 0, "reserve-room-button");
    RESERVE_ROOM_BUTTON.innerText = "Book";

    RESERVE_ROOM_BUTTON.addEventListener("click", e => {
        alert("Room has been reserved.");
    });
}
