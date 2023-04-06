const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    let {
        data: { results },
    } = response;
    let characters = results
        .map((character) => {
            return {
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
            };
        })
        .map((personajes) => Object.values(personajes).join(","))
        .join("\n");
    await fs.writeFile(path.join(__dirname, 'data.csv'), characters);
    // console.log(path.join( __dirname, 'data.csv'));
    //console.log(characters);
};

main();
