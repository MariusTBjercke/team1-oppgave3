var main = document.querySelector("main");
var dragElem;
var story;

// Changed name from "sentences" to "stories" for this array to make more sense
var stories = {
    "The act": [
        {
            "sentences": [
                ' “Well, I just feel something is, gone,” Monica said. “Well, ',
                ` he has been through a lot recently,” Rebeca replied. “yeah but--“ Monica started saying  `,
                ` in her voice. Her  `,
                ' eyes hinting of something more than the usual, what’s going on? And more importantly do Rebeca catch up on her lie?  After all he did ',
                `  `,
            ],
            "words": [
                "brad",
                "hunn",
                "knife",
                "purse",
                "taser",
                "keys",
                "ender pearl",
                "thug life",
                "babe"
            ],
            "answer": [
                `Well, I just feel something is, gone,” Monica said. “Well, bade he has been through a lot recently,” Rebeca replied. “yeah but--“ Monica started saying anxious in her voice. Her hazel eyes hinting of something more than the usual, what’s going on? And more importantly do Rebeca catch up on her lie? After all he did lose his father three months back, what would happens if he finds out? Or if she tells him.`
            ]
        },
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
                "hunky",
                "huggybear",
                "thug life",
                "babe",
                "hunn"
            ],
            "answer": [
                `"um, yeah," Rebeca replied, placing her phone on the table. Brad asked me earlier today too, so I told him yes, She continued. "ow that's great," came quickly from Monica. No Huggybear-Brad this morning, I see, "No," Monica answered, blue in her tone. Moni, you two are soo great together. don't let little things like this get between you guys, I know, I know, It's just... last night was so GREAT,`
            ]
        },
        {
            // TODO: Fix this section, duplicate of first sentence.
            "sentences": [
                '“Well, I just feel something is, gone,” Monica said. “Well, ',
                ` he has been through a lot recently,” Rebeca replied. “yeah but--“ Monica started saying `,
                ` in her voice. Her  `,
                ` eyes hinting of something more than the usual, what’s going on? And more importantly do Rebeca catch up on her `,
                `? After all he did lose his father three months back, what would happens if he finds out? Or if she tells him.`,
            ],
            "words": [
                "phone",
                "hazel",
                "anxious",
                "lie",
                "taser",
                "hunky",
                "huggybear",
                "thug life",
                "babe",
                "truth"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                `"No," Monica answered, blue in her tone. "Moni, you two are soo great `,
                `. don't let little things like this get between you guys," "I know, I know, It's just... last night was so "`,
                `"Ow, I see, I see it all over you, babe," Rebeca replied, smirking while enjoying the `,
                `. "So, the bar has been raised?" "Ow-yeah, definitely `,
                `" Monica answers, `,
                `. "And I know you feel sad over walking up to an empty bed and all, but I feel like it just minorities, Remember what he been trought? If you get me, Moni?"`
            ],
            "words": [
                "terrabole",
                "great",
                "blusing",
                "numb",
                "knife",
                "motorcycle",
                "tea",
                "kaffe",
                "deffently not"
            ],
            "answer": [
                `"Moni, you two are soo great together. don't let little things like this get between you guys," I know, I know, It's just... last night was so GREAT!" "Ow, I see, I see it all over you, babe," Rebeca replied, smirking while enjoying the tea. "So, the bar has been raised?" "Ow-yeah, definitely," Monica answers, blushing. `
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
                "cheek",
                "knife",
                "motorcycle",
                "widow",
                "toilet"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                `"I do not do interviews without an appointment, Mr... Qusim. And besides, we do have strict laws about the press from outside the Nordic Governments boarders."
            "Then it is right, I am no press," Hazeem joyed from his words. "I am hereby to invite you and your happy, happy-happy cold land to a 
             `,
                ` ," so he continued.
            "I am here in a nutritious and `,
                ` manner, all this way from the amorous, and wonderful, the just wonderfular Palatul Rosu. A palace full of  `,
                ` and wonders, and now with a show ready for you all. An exhibition, well, not for them all, not for the kids no. But for your govermentalized leaders and co. What do you say?"`,
            ],
            "words": [
                "party",
                "exhibition",
                "performance",
                "delighful",
                "knife",
                "youth",
                "death",
                "toilet"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                `"Ah, Felix Vikenstad, just the man I needed to see," the man beamed with  `,
                ` He showed off his way too `,
                `teeth, long hair, styled up pointy and elegant, and colorful layers: blue, dark, and pink. His jacket and clothing were from another world. Giving a hit of a  `,
                ` affair while being high ranked, formal, and colorful¬¬, a bright blend but with a seriousness at the end. 
            "What can I so do for you Mr. Hazeem?"
            "No-no, no. My name is Hazeem Qusim," He said, taking out a dark little `,
                ` from his inner jacket pocket.`,
            ],
            "words": [
                "excitement",
                "disgust",
                "perfect",
                "angry",
                "diplomatic",
                "poor",
                "wealthy",
                "toilet",
                "book",
                "purse"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                `   `,
                `Mr. Vikenstad, and I can assure you, they are `,
                `MY `,
                `and not some wickedy- `,
                `," Hazeem glistened from his pleasant-plump accent, even it may hint to bit of bitter, and tough. `,
                `"Sorry if I, insulted you, Mr. Qus... Hazeem. Now tell me, when is this  `,
                `of oyurs?" Hazeem smirked `,
                ` `,
            ],
            "words": [
                "toilet",
                "nation",
                "dancers",
                "dreddfully",
                "clowns",
                "party",
                "models",
                "whoes",
                "dancers",
                "clowns",
                "models",
                "exhibitision",
                "palace",
                "oddly"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                `"Thanks-thanks, little sparrow on your  `,
                `there. May your day be `,
                `as your eyes may shine, both here and there, if I so say,"`,
                `a lean man  `,
                `spoke to Miss Oloffson out in the hall, and into Felix's  `,
                `  he went.`,
            ],
            "words": [
                "charmingly",
                "catheter",
                "jackhammer",
                "crinchingly",
                "desk",
                "motorcycle",
                "office",
                "pleassant",
                "colorful",
                "toilet"
            ],
            "answer": [
                ``
            ]
        },
    ],
    "Little do you know": [
        {
            "sentences": [
                ` Dear Jon. I don’t know how to explain this, I haven’t even got around to  `,
                ` it to myself. This feels so `,
                ` -ish to do, you know write letter, even it is an email, but still: old hahaha. I haven’t been doing good in a long time, and you `,
                ` know it too.`,
                ` It’s just I needed time to think things where not the same after Paris, it wasn’t what I   `,
                `  `,
            ],
            "words": [
                "Say",
                "explain",
                "old",
                "odd",
                "might",
                "maybe",
                "wanted",
                "expected"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                ` I think you do too, well I hope at least. The thing, those things, huh, its changing how I see, you. 
                Even with the sweet pearl of eyes you got is like a spell been cast upon me. The night on-top of Eifel tower, your kiss, like a
                 `,
                ` to me it’s…  `,
                ` and you know it. The memories of us in Disneyland, pirates of the   `,
                ` a fairytale adventure, the road towards Nice, yes it’s a real city you goof. The wine, you know I love a   `,
                ` , the bitter the better they say. I wish it was   `,
                `   `,
            ],
            "words": [
                "Caribbean",
                "drug",
                "slap",
                "numb",
                "irresistible",
                "Carignan",
                "true",
                "false",
                "toilet",
                "pancreas"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                ` The perfect beaches there in Nice, the  `,
                ` water, the rocks. It, it… takes me back, but also where it ends. 
                They say where the most  `,
                `  or the more you enjoy the harder it `,
                ` . And it came to me that I am, hurt. And that’s why I can’t be a part of your live anymore. Now you know why I  `,
                ` you, why I not call, you know, or at least this should be the  `,
                ` The last straw, as they say. I, I can’t have you hurt me again, this is real and there is no   `,
                `  .`,
            ],
            "words": [
                "blue",
                "peaceful",
                "awful",
                "numb",
                "ignored",
                "joyful",
                "ghosted",
                "repeat",
                "extra life",
                "hurts",
                "falls",
                "make-up",
                "Wake-up"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                ` Its `,
                ` too much, seeing, you. Too much to look at those  `,
                ` greenish eyes as reminds me of  `,
                ` , you know I love corals `,
                `  Your voice I can’t stand; its too sweet hunky sexy, but that’s also why I hate it. Its too many lies, too many wrong doings coming from it. 
                You say the most   `,
                ` things and do your best, but that’s why we here, you in Boston and I on a plane back to Brighton. I need to turn around, my life need a new heading and it is without you. I need miles, between us, I need this, and not be broken back in a one bed apartment in  `,
                ` 
                Sincerely your last Rebeca.`,
            ],
            "words": [
                "gorgeous",
                "awful",
                "hurts",
                "cats",
                "corals",
                "cats",
                "corals",
                "extra life",
                "shatters",
                "falls",
                "beautiful",
                "Boston",
                "maiami"
            ],
            "answer": [
                ``
            ]
        },
    ], "Vikings and Monsters": [
        {
            "sentences": [
                '"Hey-hey! Do you  ',
                ` me," Thorick  `,
                `Liv on the ground, buried in the cold red .`,
                ' Liv shook her head, moving stiff and rapidly, a side effect from the  ',
                ` Thorick stabbed her with, "Can you move?" Yeah, I, I think so," She responds. `,
                ` of pain bursts out of her.`,
            ],
            "words": [
                "See",
                "hear",
                "yelling",
                "snow",
                "questenig",
                "laughing",
                "carpet",
                "ground",
                "knife",
                "bannana",
                "moans",
                "scream",
                "syringe"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                `"Fall back!" Oscar screamed over the commlink, sounding tired like them all by the sea of Spikers flow `,
                ` them. "Regroup! Regroup!" One of the F.I.O. trooper yells. She saw something, something huge, moving quickly to the fire of burned corpses. `,
                `In the distance, a roar can be heard: tall deep `,
                `. A tall shadow `,
                ` appears closer and closer, forming a shadow of something huge and something they knew all too well. " `,
                ` !" The rookie trooper screams at the sight of the three-meter-tall beast rushing. 
                    Bulky in its build, skin reinforced and fused with steal molded into their skin, making it hard to `,
                `. They were armed with a giant sharp and heavy blade on its arm, giving them their name.`
            ],
            "words": [
                "growling",
                "laughter",
                "close",
                "upon",
                "appears",
                "moving",
                "pet,",
                "cleavers",
                "forming",
                "toilets",
                "kill",
                "flow",
                "neutralize"
            ],
            "answer": [
                ``
            ]
        },
        {

            "sentences": [
                'More than one, five or six, with some Bruters running out from the  ',
                ` Build like a tank almost similar to the Cleavers; only they had no blade or hands—instead, armed with blocks of  `,
                ` fused with flesh, rocks, or concrete. Wires ran from the arms to the back and continued to the curved spine peeking out of the `,
                ` skin. Fast they ran, roaring from their tiny  `,
                ` It all reminded Thorick and Sindre about the southern border in the Danish Kingdom,
                     but they will have more  `,
                ` than the little they had now.`,
            ],
            "words": [
                "mud",
                "fire",
                "meat",
                "spagetti",
                "metal",
                "heads",
                "mouths",
                "ground",
                "knifes",
                "artillery",
                "firepower",
                "syringes"
            ],
            "answer": [
                ``
            ]
        },
        {

            "sentences": [
                '"Ow  ',
                ` !" Ylvia screamed while running for her life towards Thorick and the rest of her team. "Yeah, you said it," Aria agreed while following Ylvia after she finally got  `,
                ` Einar along the way. "Do we have an exit?" Aria yells over the   `,
                ` "Our only way is up, start to climb," Oscar  `,
                ` , preparing his grapple hook. "Really? I don’t think we have enough time," Ylvia questioning his decision, as Thorick agreed on. "There is no time! They only  `,
                ` the mountain down upon us," he responded. "Do you have a better plan? The same will happen with us inside of the path," Oscar replied while running for his life, `,
                ` the giant blade, inches from hitting him.`,
            ],
            "words": [
                "spagett",
                "shit",
                "my-god",
                "spagetti",
                "draged",
                "janked",
                "radio",
                "commlink",
                "phone",
                "demanded",
                "commanded",
                "smash",
                "screamed",
                "crush",
                "escapeing",
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                ` "Emma!" came howling from the rookie trooper. "Move, little  `,
                ` ," Einar said, dragging him with him away from the corpse of his fellow operator sliced in two. An  `,
                ` view of two red spots on the field, like a squished bug in two pieces of , `,
                ` flesh, and blood in a combined red goo. "Get to the  `,
                ` !" Thorick ordered  `,
                ` he had sent Sindre and Gunnval in with Liv. "Are you sure about this, Thorick?" Aria asked, sprinting like a rocket almost in the heels of Ylvia. "I tell you it is suicidal,"`,
                ` "So is it if we try climbing with them crushing!" Thorick repeats, tired of arguing with a LOCI who should trust the soldiers he brought for this mission.`,
            ],
            "words": [
                "sprinting",
                "jogging",
                "F.I.O.",
                "sparrow",
                "man",
                "unpleassant",
                "after",
                "metal",
                "before",
                "armor",
                "path",
                "crack",
                "unrecognizable"
            ],
            "answer": [
                ``
            ]
        },
        {
            "sentences": [
                `Thorick grabbed Liv’s sniper lying on the ground. Ylvia and Aria sprint closer and closer. Oscar and the  `,
                ` trooper not far behind, with Einar on the battlefield, started to play with the gang of  `,
                ` Thorick aims at their heads with the sniper. He stops lowering the scope; instead, he yanks Ylvia to the side, letting the others pass through. "What the `,
                ` !" She yells. "You a better shot than I," he says, giving her the sniper. "I need you to cover me while I get the big guy," he continues and runs out to collect the  `,
                ` man on the field. Ylvia `,
                ` and prepares her aim.`,
            ],
            "words": [
                "noobie",
                "idiot",
                "puppies",
                "monsters",
                "clowns",
                "rookie",
                "models",
                "hell",
                "--",
                "shit",
                "nods",
                "sighs",
                "beastly",
                "giganitic"
            ],
            "answer": [
                ``
            ]
        },
    ],
};

view();
function view() {

    if (!story) {

        // Choose story view
        genH1("Word Chooser Story");
        genH2("Choose a story");
        genDiv("id", "story-buttons");

        let storyButtons = document.getElementById("story-buttons");

        for (let i = 0; i < Object.keys(stories).length; i++) {
            let storyname = Object.keys(stories)[i];
            const button = document.createElement("button");
            button.innerText = storyname;
            storyButtons.appendChild(button);
            button.addEventListener("click", function () {
                story = storyname;
                view();
            })
        }
    } else {

        // Sentence view
        main.innerHTML = '';
        genH1(story);
        genDiv("id", "sentence");
        genP("- Thomas Nøklegaard");
        genH2("Choose betwenn these words:");
        genDiv("id", "word-options");

        let sentenceDiv = document.getElementById('sentence');
        let wordOptions = document.getElementById('word-options');
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
            let word = stories[story][randomNumber]['words'][i];
            const button = document.createElement("button");
            button.innerText = word;
            wordOptions.appendChild(button);
            button.setAttribute("draggable", "true");
            button.setAttribute("id", word);
            button.addEventListener("dragstart", dragStartHandler, false);
            button.addEventListener("dragend", dragEndHandler, false);
        }

        sentenceDiv.addEventListener("dragenter", dragEnterHandler, false);
        sentenceDiv.addEventListener("dragover", dragOverHandler, false);
        sentenceDiv.addEventListener("dragleave", dragLeaveHandler, false);
        sentenceDiv.addEventListener("drop", function(e) {
            e.target.innerHTML = dragElem.innerHTML;
            if (e.target.className === "dropzone") {
                e.target.classList.add("inserted-text");
                let child = document.getElementById(dragElem.innerHTML);
                wordOptions.removeChild(child);
            }
        });
    }

    // Image of Terje
    genDiv("id", "pic1");

}

function genH1(title) {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    main.appendChild(h1);
}

function genH2(title) {
    const h2 = document.createElement("h2");
    h2.innerText = title;
    main.appendChild(h2);
}

function genP(title) {
    const p = document.createElement("p");
    p.innerText = title;
    main.appendChild(p);
}

function genDiv(attrType, attrName) {
    const div = document.createElement("div");
    div.setAttribute(attrType, attrName);
    main.appendChild(div);
}

function dragStartHandler(e) {
    dragElem = e.target;
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEndHandler(e) {

}

function dragOverHandler(e) {
    if (e.target.className === "dropzone" || e.target.className === "dropzone inserted-text") {
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

let terjeImg = document.querySelector("#pic1");
terjeImg.addEventListener("mouseover", function() {
    terjeImg.style.backgroundImage = "url('img/terje-coin-spin.gif')";
    setTimeout(function() {
        terjeImg.style.backgroundImage = "url('img/windows-icon.png')";
    }, 3700);
})