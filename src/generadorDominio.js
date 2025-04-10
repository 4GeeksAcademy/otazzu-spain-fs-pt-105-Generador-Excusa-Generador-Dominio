const PRONOUN = ['the', 'our']
const ADJECTIVE = ['great', 'mountain']
const NOUN = ['cali', 'knight']
const DOMAIN = ['.com', '.net']

const generateDomain = () => {
    
    contentList(PRONOUN,ADJECTIVE,NOUN,DOMAIN)
    
}

const contentList = (proNoun, adjective, noun, domain) =>{
    return proNoun.forEach(proNounItem => {
        adjective.forEach(adjectiveItem =>{
            noun.forEach(nounItem =>{
                domain.forEach(domainItem => {
                    console.log(proNounItem,adjectiveItem,nounItem,domainItem)
                })
            })
        })
    });
}


generateDomain()