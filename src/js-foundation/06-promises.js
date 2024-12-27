const {http} = require("../plugins/index");

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
}

module.exports = {
    getPokemonById
}
