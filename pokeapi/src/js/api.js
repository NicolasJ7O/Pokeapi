//FUNCIONES PARA HACER FETCH A LA API DE POKÉAPI Y OBTENER DATOS
export async function fetchPokemon(query) {
    const url = `https://pokeapi.co/api/v2/pokemon/${query.toString().toLowerCase()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('No encontrado');
    return await res.json();
}

export async function fetchMoveDetails(moveUrl) {
    const res = await fetch(moveUrl);
    if (!res.ok) throw new Error('No encontrado');
    return await res.json();
}

export async function fetchType(type) {
    const url = `https://pokeapi.co/api/v2/type/${type}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('No encontrado');
    return await res.json();
}