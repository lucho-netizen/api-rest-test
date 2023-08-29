const URL = "https://rickandmortyapi.com/api/location"

async function getCharacters(){
    try {
        const reponse = await fetch(URL);
        const characters = await reponse.json();
        
        console.log(characters);
    }catch (error){
        console.log(error)
    }
}

getCharacters();