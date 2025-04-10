const PRONOUN = ['the', 'our']
const ADJECTIVE = ['great', 'mountain']
const NOUN = ['cali', 'knight']
const DOMAIN = ['.com', '.net']

const generateDomain = () => {

    contentList(PRONOUN, ADJECTIVE, NOUN, DOMAIN)

}

const contentList = (proNoun, adjective, noun, domain) => {
    return proNoun.forEach(proNounItem => {
        adjective.forEach(adjectiveItem => {
            noun.forEach(nounItem => {
                domain.forEach(domainItem => {
                    console.log(proNounItem, adjectiveItem, nounItem, domainItem)
                })
            })
        })
    });
}

//GENERADOR DE EXCUSAS

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

const type = {
    tipo: 'domain'
}

const printInConsole = (type) => {
    if (type.tipo === 'domain') {
        generateDomain()
    } else{
        generateExcuse()
    }
}

printInConsole(type)