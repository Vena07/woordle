let poku1 = ["nic", "pokus11", "pokus12", "pokus13", "pokus14", "pokus15"];
let poku2 = ["nic", "pokus21", "pokus22", "pokus23", "pokus24", "pokus25"];
let poku3 = ["nic", "pokus31", "pokus32", "pokus33", "pokus34", "pokus35"];
let poku4 = ["nic", "pokus41", "pokus42", "pokus43", "pokus44", "pokus45"];
let poku5 = ["nic", "pokus51", "pokus52", "pokus53", "pokus54", "pokus55"];
let poku6 = ["nic", "pokus61", "pokus62", "pokus63", "pokus64", "pokus65"];
let slova = ["WATER", "TIGER", "LEMON", "HAPPY", "SNAKE", "MOUSE", "CHAIR", "ANGEL", "HORSE", "SMILE", "CLOUD", "MUSIC", "TABLE", "BEACH", "PLANT", "OCEAN", "QUEEN", "SPACE", "APPLE", "EARTH", "SUNNY", "FUNNY", "STORM", "QUIET", "BREAD", "GRASS", "STONE", "PIANO", "FRUIT", "DANCE", "LAUGH", "HONEY", "PIZZA", "TRAIN", "GHOST", "CANDY", "ROBOT", "PHONE", "ARROW", "MAGIC", "MAPLE", "FOGGY", "MANGO", "WINDY", "TULIP", "HAZEL", "STARK", "SLEET", "WINGS", "TORCH", "FROST", "CHILL", "CREEK", "GLOBE", "GIANT", "WRIST", "JUICE", "CLICK", "CYCLE", "VIVID", "CROWN", "GUIDE", "BUMPY", "PLUSH", "VOCAL", "CHEST", "GRAIN", "ZOOMY", "SILKY", "SWIFT", "AMPLE", "BREAK", "CHAMP", "DRIFT", "FUNKY", "GLIDE", "JUMBO", "MIRTH", "QUOTA", "SQUAD", "TRACE", "BLEND", "BLITZ", "DELTA", "FORGE", "GLOOM", "WAIVE", "SWEEP", "WHALE", "FORGE", "BRAVE", "JIFFY", "JOKER", "DIVER", "FORGE", "GRILL", "BEVEL", "VAULT", "CADDY", "RADAR", "FLASH", "JOINT", "JOUST", "RAZOR", "QUEST", "QUOTA", "WOVEN", "STARK", "VOWEL", "WAGER", "NIFTY", "LUNAR", "JELLY", "IVORY", "JUMBO", "HASTE", "GRASP", "GIDDY", "FROTH", "PLUCK", "DOUSE", "BLEAT", "SPORE", "JOUST", "GEARS", "VIVID", "QUIRK", "BISON", "HAIKU", "SWEEP", "WHALE", "CHURN", "QUOTA", "FORGE", "BRAVE", "JIFFY", "JOKER", "DIVER", "FORGE", "QUOTA", "GRILL", "BEVEL", "VAULT", "CADDY", "FLASH", "JOINT", "JOUST", "RAZOR", "QUEST", "QUOTA", "WOVEN", "STARK", "VOWEL", "WAGER", "NIFTY", "LUNAR", "JELLY", "IVORY", "HASTE", "GIDDY", "FROTH", "PLUCK", "DOUSE", "BLEAT", "SPORE", "JOUST", "GEARS", "VIVID", "QUIRK", "BISON", "HAIKU", "SWEEP", "WHALE", "CHURN", "QUOTA", "FORGE", "BRAVE", "JIFFY", "JOKER", "DIVER", "FORGE", "QUOTA", "GRILL", "BEVEL", "VAULT", "CADDY", "FLASH", "JOINT"];
let vyber = Math.floor(Math.random() * slova.length);
let vyherni_slovo1 = slova[vyber];
let vyherni_slovo = vyherni_slovo1.split("");
console.log(vyherni_slovo);
let rada1 = 1;
let narade = [];
let poradi = 1;
let spravne = 0;
let pokus = 0;

function rada() {
    switch (rada1) {
        case 1: narade = poku1; break;
        case 2: narade = poku2; break;
        case 3: narade = poku3; break;
        case 4: narade = poku4; break;
        case 5: narade = poku5; break;
        case 6: narade = poku6; break;
        default: narade = []; break;
    }
    poradi = 1;
}

rada();

function tlacitko(x) {
    if (poradi <= 5) {
        console.log(x);
        let zmena = document.getElementById(narade[poradi]);
        zmena.innerHTML = x;
        poradi++;
    }
}

function smazat() {
    if (poradi > 1) {
        let zmena = document.getElementById(narade[poradi - 1]);
        zmena.innerHTML = " ";
        poradi--;
    }
}

function kontrola() {
    let vase_slovo = [];
    for (let index = 1; index < 6; index++) {
        let pridat = document.getElementById(narade[index]);
        vase_slovo.push(pridat.innerHTML);
        console.log(vase_slovo);
    }

    let oznaceno = Array(5).fill(false);

    for (let index = 0; index < 5; index++) {
        let vyhodnoceni = document.getElementById(narade[index + 1]);

        if (vase_slovo[index] === vyherni_slovo[index]) {
            vyhodnoceni.style.backgroundColor = "rgba(0, 255, 4, 0.4)";
            oznaceno[index] = true;
        }
    }

    for (let index = 0; index < 5; index++) {
        if (!oznaceno[index]) {
            if (vyherni_slovo.includes(vase_slovo[index])) {
                let vyhodnoceni = document.getElementById(narade[index + 1]);
                vyhodnoceni.style.backgroundColor = "rgba(255, 183, 0, 0.4)";
            } else {
                let vyhodnoceni = document.getElementById(narade[index + 1]);
                vyhodnoceni.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
            }
        }
    }

    console.log(vase_slovo);
    console.log(vyherni_slovo);

    spravne = vase_slovo.reduce((count, letter, index) => count + (letter === vyherni_slovo[index] ? 1 : 0), 0);

    if (spravne === 5) {
        rada1 = 69;
        narade = [];
        alert("Uhodli jste správné slovo");
    } else {
        pokus++;
        rada();
        if (pokus === 6) {
            alert('Bouhžel jsete neuhdol, hádané slovo bylo ' + vyherni_slovo1);
        }
    }
}
