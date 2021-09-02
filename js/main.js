var sentenceDiv = document.getElementById('sentence');
var wordOptions = document.getElementById('word-options');
var pos1 = '___';
var pos2 = '___';
var story = '';

var sentences = {
    "The act": [
        {
            part1: '"Um, yeah" Rebeca replied, placing her ',
            part2: ` on the table. "Brad asked me earlier today too, so I told him yes". She continued "ow that's great," came quickly from Monica. No `,
            part3: `-Brad this morning, I see.`,
            words: [
                "phone",
                "book",
                "knife",
                "purse",
                "taser",
                "keys",
                "ender pearl",
                "thug life",
            ]
        },
        {
            part1: "",
            part2: "",
            part3: "",
            words: [
                "",
                "",
            ]
        }
    ],
    "The nordic empire": [
        {
            part1: `Felix sharpening his `,
            part2: `, scratching his `,
            part3: `. "Isn't that a pleasure hose?" Felix asked with a bitter mind to this, this place.`,
        },
    ],
};

for (let i = 0; i < sentences['The act'][0]['words'].length; i++) {
    wordOptions.innerHTML += '<button>' + sentences['The act'][0]['words'][i].toUpperCase() + '</button>';
}

view();
function view() {

    if (story === '') {
        sentenceDiv.innerHTML = '<h2>Choose a story</h2>';
    } else {
        sentenceDiv.innerHTML = sentences['The act'][0]['part1'] + pos1 + sentences['The act'][0]['part2'] + pos2 + sentences['The act'][0]['part3'];
    }
}

function clickMe(position, element) {
    let word = element.innerHTML;
    if (position === 1) {
        pos1 = word;
        view();
    } else {
        pos2 = word;
        view();
    }
}