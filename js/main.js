var sentenceDiv = document.getElementById('sentence');
var wordOptions = document.getElementById('word-options');
var sentenceView = document.getElementById('sentence-view');
var storyView = document.getElementById('story-view');
var storyButtons = document.getElementById('story-buttons');
var dragElem;
var story;

// Changed name from "sentences" to "stories" for this array to make more sense
var stories = {
        "The act": [
            {
                "sentences": [
                    '"Um, yeah" Rebeca replied, placing her ',
                    ` on the table. "Brad asked me earlier today too, so I told him yes". She continued "ow that's great," came quickly from Monica. No `,
                    `-Brad this morning, I see.`,
                ],
                "words": [
                    "phone",
                    "book",
                    "knife",
                    "purse",
                    "taser",
                    "keys",
                    "ender pearl",
                    "thug life"
                ]
            },
            {
                "sentences": [
                    `"No," Monica answered, blue in her tone. "Moni, you two are soo great `,
                    `. don't let little things like this get between you guys," "I know, I know, It's just... last night was so "`,
                    `"Ow, I see, I see it all over you, babe," Rebeca replied, smirking while enjoying the `,
                    `. "So, the bar has been raised?" "Ow-yeah, definitely `,
                    `" Monica answers, `,
                    `. "And I know you feel sad over walking up to an empty bed and all, but I feel like it just minorities. If you get me, Moni?"`
                ],
                "words": [
                    "hair",
                    "blue",
                    "jackhammer",
                    "numb",
                    "knife",
                    "motorcycle",
                    "widow",
                    "toilet"
                ]
            }
        ],
        "The nordic empire": [
            {
                "sentences": [
                `Felix sharpening his `,
                `, scratching his `,
                `. "Isn't that a pleasure hose?" Felix asked with a bitter mind to this, this place.`,
                ],
                "words": [
                    "hair",
                    "blue",
                    "jackhammer",
                    "numb",
                    "knife",
                    "motorcycle",
                    "widow",
                    "toilet"
                ]
            },
        ],
};

view();
function view() {

    if (!story) {
        sentenceView.style.display = "none";
        for (let i = 0; i < Object.keys(stories).length; i++) {
            let storyname = Object.keys(stories)[i];
            const button = document.createElement("button");
            button.innerText = storyname;
            storyButtons.appendChild(button);
            button.addEventListener("click", function() {
                story = storyname;
                view();
            })
        } 
    } else {
        storyView.style.display = "none";
        // Show sentence view
        sentenceView.style.display = "inherit";
        let randomNumber = Math.floor(Math.random() * stories[story].length);

        for (let i = 0; i < stories[story][randomNumber]['sentences'].length; i++) {
            let sentence = stories[story][randomNumber]['sentences'];
            sentenceDiv.innerHTML += sentence[i];

            // Add empty spaces where we want to insert words
            if (i < sentence.length - 1) {
                const emptySpace = document.createElement("div");
                emptySpace.setAttribute("class", "dropzone empty-space");
                sentenceDiv.appendChild(emptySpace);
            }
        }

        // Create word buttons
        for (let i = 0; i < stories[story][randomNumber]['words'].length; i++) {
            const button = document.createElement("button");
            button.innerText = stories[story][randomNumber]['words'][i];
            wordOptions.appendChild(button);
            button.setAttribute("draggable", "true");
            button.addEventListener("dragstart", dragStartHandler, false);
            button.addEventListener("dragend", dragEndHandler, false);
        }
    }
}

function dragStartHandler(e) {
    dragElem = e.target;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEndHandler(e) {
    
}

function dragOverHandler(e) {
    if (e.target.className === "dropzone") {
        e.preventDefault();
    }
}

function dragEnterHandler(e) {
    if (e.target.className === "dropzone empty-space") {
        e.target.innerHTML = dragElem.innerHTML;
        e.target.classList.remove("empty-space");
    }
}

function dragLeaveHandler(e) {
    if (e.target.className === "dropzone") {
        e.target.innerHTML = '';
        e.target.classList.add("empty-space");
    }
}

function dragDropHandler(e) {
    e.target.innerHTML = dragElem.innerHTML;
    if (e.target.className === "dropzone") {
        console.log('DROPPED');
    }
}

sentenceDiv.addEventListener("dragenter", dragEnterHandler, false);
sentenceDiv.addEventListener("dragover", dragOverHandler, false);
sentenceDiv.addEventListener("dragleave", dragLeaveHandler, false);
sentenceDiv.addEventListener("drop", dragDropHandler, false);