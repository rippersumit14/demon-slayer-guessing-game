

function questionBank() {

    const easy = [
        {
            id:1,
            question: "What is the name of Tanjiro Kamado's younger sister?",
            options: ["Nezuko Kamado", "Shinobu Kocho", "Tamayo", "Kanao Tsuyuri"],
            correctAnswer: "Nezuko Kamado"
        },
        {
            id:2,
            question: "What type of creature does Nezuko become?",
            options: ["Demon", "Hashira", "Spirit", "Demon Slayer"],
            correctAnswer: "Demon"
        },
        {
            id:3,
            question: "Which breathing style is Zenitsu Agatsuma primarily associated with?",
            options: ["Thunder Breathing", "Water Breathing", "Flame Breathing", "Wind Breathing"],
            correctAnswer: "Thunder Breathing"
        },
        {
            id:4,
            question: "What does Inosuke Hashibira normally wear over his head?",
            options: ["Boar's head", "Fox mask", "Crow mask", "Demon mask"],
            correctAnswer: "Boar's head"
        },
        {
            id:5,
            question: "Who is the main antagonist and progenitor of demons in Demon Slayer?",
            options: ["Muzan Kibutsuji", "Akaza", "Kokushibo", "Doma"],
            correctAnswer: "Muzan Kibutsuji"
        },
        {
            id:6,
            question: "Which Hashira uses Water Breathing?",
            options: ["Giyu Tomioka", "Kyojuro Rengoku", "Tengen Uzui", "Sanemi Shinazugawa"],
            correctAnswer: "Giyu Tomioka"
        },
        {
            id:7,
            question: "Which Hashira uses Flame Breathing?",
            options: ["Kyojuro Rengoku", "Giyu Tomioka", "Muichiro Tokito", "Obanai Iguro"],
            correctAnswer: "Kyojuro Rengoku"
        },
        {
            id:8,
            question: "Which breathing style does Inosuke use?",
            options: ["Beast Breathing", "Thunder Breathing", "Mist Breathing", "Stone Breathing"],
            correctAnswer: "Beast Breathing"
        },
        {
            id:9,
            question: "What organization does Tanjiro join?",
            options: ["Demon Slayer Corps", "Hashira Council", "Demon Hunters Guild", "Ubuyashiki Clan"],
            correctAnswer: "Demon Slayer Corps"
        },
        {
            id:10,
            question: "What type of sword is commonly used by Demon Slayers?",
            options: ["Nichirin Sword", "Katana of Light", "Blood Sword", "Sun Blade"],
            correctAnswer: "Nichirin Sword"
        }
    ];


    const medium = [
        {
            id:11,
            question: "Which Hashira uses Sound Breathing?",
            options: ["Tengen Uzui", "Sanemi Shinazugawa", "Giyu Tomioka", "Gyomei Himejima"],
            correctAnswer: "Tengen Uzui"
        },
        {
            id:12,
            question: "Which Hashira uses Mist Breathing?",
            options: ["Muichiro Tokito", "Mitsuri Kanroji", "Obanai Iguro", "Shinobu Kocho"],
            correctAnswer: "Muichiro Tokito"
        },
        {
            id:13,
            question: "Which Hashira uses Love Breathing?",
            options: ["Mitsuri Kanroji", "Shinobu Kocho", "Kanao Tsuyuri", "Nezuko Kamado"],
            correctAnswer: "Mitsuri Kanroji"
        },
        {
            id:14,
            question: "Which Hashira uses Serpent Breathing?",
            options: ["Obanai Iguro", "Sanemi Shinazugawa", "Tengen Uzui", "Muichiro Tokito"],
            correctAnswer: "Obanai Iguro"
        },
        {
            id:15,
            question: "Who fights alongside Daki in the Entertainment District?",
            options: ["Gyutaro", "Akaza", "Enmu", "Rui"],
            correctAnswer: "Gyutaro"
        },
        {
            id:16,
            question: "Which demon is the primary antagonist aboard the Mugen Train before the later battle?",
            options: ["Enmu", "Akaza", "Doma", "Gyutaro"],
            correctAnswer: "Enmu"
        },
        {
            id:17,
            question: "Who trained Tanjiro in Water Breathing?",
            options: ["Sakonji Urokodaki", "Giyu Tomioka", "Kagaya Ubuyashiki", "Jigoro Kuwajima"],
            correctAnswer: "Sakonji Urokodaki"
        },
        {
            id:18,
            question: "Who trained Zenitsu Agatsuma?",
            options: ["Jigoro Kuwajima", "Sakonji Urokodaki", "Tengen Uzui", "Kyojuro Rengoku"],
            correctAnswer: "Jigoro Kuwajima"
        },
        {
            id:19,
            question: "What is Shinobu Kocho's Hashira title?",
            options: ["Insect Hashira", "Flower Hashira", "Love Hashira", "Mist Hashira"],
            correctAnswer: "Insect Hashira"
        },
        {
            id:20,
            question: "Which Hashira is associated with Wind Breathing?",
            options: ["Sanemi Shinazugawa", "Obanai Iguro", "Gyomei Himejima", "Giyu Tomioka"],
            correctAnswer: "Sanemi Shinazugawa"
        }
    ];


    const hard = [
        {
            id:21,
            question: "Who holds the position of Upper Rank One?",
            options: ["Kokushibo", "Doma", "Akaza", "Gyokko"],
            correctAnswer: "Kokushibo"
        },
        {
            id:22,
            question: "Who holds the position of Upper Rank Two?",
            options: ["Doma", "Akaza", "Kokushibo", "Hantengu"],
            correctAnswer: "Doma"
        },
        {
            id:23,
            question: "Who holds the position of Upper Rank Three when first introduced?",
            options: ["Akaza", "Doma", "Gyutaro", "Gyokko"],
            correctAnswer: "Akaza"
        },
        {
            id:24,
            question: "What was Kokushibo's human name?",
            options: ["Michikatsu Tsugikuni", "Yoriichi Tsugikuni", "Sumiyoshi Kamado", "Kagaya Ubuyashiki"],
            correctAnswer: "Michikatsu Tsugikuni"
        },
        {
            id:25,
            question: "Which breathing style is Kokushibo associated with?",
            options: ["Moon Breathing", "Sun Breathing", "Mist Breathing", "Wind Breathing"],
            correctAnswer: "Moon Breathing"
        },
        {
            id:26,
            question: "What is the name of the original user of Sun Breathing?",
            options: ["Yoriichi Tsugikuni", "Michikatsu Tsugikuni", "Tanjiro Kamado", "Sakonji Urokodaki"],
            correctAnswer: "Yoriichi Tsugikuni"
        },
        {
            id:27,
            question: "What breathing style did Michikatsu Tsugikuni use after failing to master Sun Breathing?",
            options: ["Moon Breathing", "Mist Breathing", "Water Breathing", "Stone Breathing"],
            correctAnswer: "Moon Breathing"
        },
        {
            id:28,
            question: "Which Hashira is the older brother of Genya Shinazugawa?",
            options: ["Sanemi Shinazugawa", "Gyomei Himejima", "Obanai Iguro", "Muichiro Tokito"],
            correctAnswer: "Sanemi Shinazugawa"
        },
        {
            id:29,
            question: "Which Hashira uses Stone Breathing?",
            options: ["Gyomei Himejima", "Sanemi Shinazugawa", "Tengen Uzui", "Giyu Tomioka"],
            correctAnswer: "Gyomei Himejima"
        },
        {
            id:30,
            question: "What is the name of the leader of the Demon Slayer Corps during Tanjiro's era?",
            options: ["Kagaya Ubuyashiki", "Sakonji Urokodaki", "Amane Ubuyashiki", "Yoriichi Tsugikuni"],
            correctAnswer: "Kagaya Ubuyashiki"
        }
    ];


    const questionBankData = {
        easy: easy,
        medium: medium,
        hard: hard
    };

    return questionBankData;
}

export default questionBank;