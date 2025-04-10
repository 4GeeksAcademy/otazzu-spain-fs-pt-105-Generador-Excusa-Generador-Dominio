
const WHO = ['El perro', 'La awela', 'El portero', 'Un pajaro'];
const ACTION = ['comió', 'meó', 'estampó', 'rompió'];
const WHAT = ['mi codigo', 'mi cama', 'el coche'];
const WHEN = ['antes de clase', 'mientras dormia', 'mientras hacia ejercico', 'en la cena', 'mientras rezaba'];

const generateExcuse = () => {

    const who = phrase(WHO, indexRandom(WHO.length))
    const action = phrase(ACTION, indexRandom(ACTION.length))
    const what = phrase(WHAT, indexRandom(WHAT.length))
    const when = phrase(WHEN, indexRandom(WHEN.length))

    const allPhrases = (`${who} ${action} ${what} ${when}`)

    console.log(allPhrases)

    return allPhrases
}



const indexRandom = (arrLength) => {
    return Math.floor(Math.random() * arrLength)
}

const phrase = (phraseList, index) => {

    return phraseList[index]
}

generateExcuse()