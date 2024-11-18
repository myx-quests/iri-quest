import {Hint} from "../hint";

export const allHintsData: Array<Hint> = [
    { // лепим на сундук
        // QR https://myx-quests.github.io/iri-quest/#?unlocker=meet
        unlocker: "meet",
        dataList: [{
            image: "resources/piano.png"
        }]
    },

    { // прячем на пианине
        // QR https://myx-quests.github.io/iri-quest/#?unlocker=caesar
        unlocker: "caesar",
        dataList: [
            {
                image: "resources/caesar.png",
                code: {
                    inputType: "text",
                    answer: "шарик"
                },
                description: ["Ключ = 8", "Азшрт"]
            }
        ],
    },

    { // разлокается прошлым
        unlocker: "tableMirror",
        dataList: [{
            image: "resources/mirror.png"
        }],
    },

    { // на зеркале! Но на нём нужно нарисовать код к следующему
        // QR https://myx-quests.github.io/iri-quest/#?unlocker=amazing
        unlocker: "amazing",
        dataList: [
            {
                code: {
                    inputType: "text",
                    answer: "охуенно"
                },
                description: ["Редко, но [...]"]
            }
        ],
    },

    { // отгадывается прошлым
        unlocker: "wordPath",
        dataList: [
            {
                image: "resources/word-path.png",
                code: {
                    inputType: "text",
                    answer: "тортик"
                }
            }
        ],
    },

    { // отгадывается прошлым
        unlocker: "wordle-guest",
        dataList: [
            {
                code: {
                    inputType: "text",
                    answer: "гость"
                },
                description: [{url: "https://wordle.belousov.one/?word_id=amtBEwx18jk"}]
            }
        ],
    },

    { // отгадывается прошлым
        unlocker: "spb-job",
        dataList: [
            {
                image: "resources/zagorodny5b.jpg",
                code: {
                    inputType: "pin",
                    answer: "4365#"
                },
            }
        ]
    },

    { // отгадывается прошлым
        unlocker: "AR",
        dataList: [
            {
                description: [
                    "КОД:",
                    "Q A Z W S X E D",
                    {url: "https://app.pictarize.com/p?projectId=6737b61eee7fcb0011dcfdad&buildId=67391b1eb5b83000117818fc", text: "SCANNER"}
                ],
                code: {
                    inputType: "text",
                    answer: "праздник"
                },
            }
        ]
    },

    { // отгадывается прошлым
        unlocker: "justBeHere",
        dataList: [
            {
                image: "resources/rock.png",
                description: [
                    "КОД"
                ],
                code: {
                    inputType: "pin",
                    answer: "1694"
                },
            }
        ]
    },

    { // отгадывается прошлым
        unlocker: "pan",
        dataList: [
            {
                image: "resources/pan.png",
            }
        ]
    },

    { // На сковородке
        // QR https://myx-quests.github.io/iri-quest/#?unlocker=catScratch
        unlocker: "catScratch",
        dataList: [
            {
                image: "resources/catscratch.png",
            }
        ]
    },

    { // когтеточка, но хз что там
        // QR https://myx-quests.github.io/iri-quest/#?unlocker=theKey
        unlocker: "theKey",
        dataList: [
            {
                image: "resources/thermos.png",
            }
        ]
    }
]