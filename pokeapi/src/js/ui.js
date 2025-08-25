//FUNCIONES PARA MOSTRAR LOS DATOS Y ACTUALIZAR EL DOOM
export function showLoading(card) {
	card.innerHTML = `<p role="status" aria-live="polite">Cargando...</p>`;
	card.style.display = 'block';
}

export function showError(card, msg = "No se encontró el Pokémon.") {
	card.innerHTML = `<p role="alert">${msg}</p>`;
	card.style.display = 'block';
}

//Funcion para renderizar la informacion del pokemon, donde va el card que se mostrara en la seccion de 
//pokemon-card en el html, data es la informacion del pokemon y moves son los movimientos del pokemon
export function renderPokemon(card, data, moves) {
	const types = data.types.map(t => t.type.name);
	const stats = data.stats.map(s => ({
		name: s.stat.name,
		value: s.base_stat
	}));

	card.innerHTML = `
      <div class="pokemon-header">
        <h2>${capitalize(data.name)}</h2>
        <span class="pokemon-number">#${data.id}</span>
        <img src="${data.sprites.front_default}" class="pokemon-img" alt="${data.name}">
        <div class="type-label">${types.map(t => traducirTipo(t)).join(', ')}</div>
      </div>
      <div class="info-section">
        <div class="stats-box auto-height">
          <div class="section-title">Estadísticas</div>
          <div class="stats-list no-scroll">
            ${stats.map(s => `
              <div class="stat-item">
                <span class="stat-name">${traducirStat(s.name)}:</span> 
                <span class="stat-value">${s.value}</span>
                <div class="stat-bar">
                  <div class="stat-bar-fill" style="width:${s.value > 100 ? 100 : s.value}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="moves-box">
          <div class="section-title">Movimientos</div>
          <div class="moves-list simple-list">
            ${moves.map(m => `
              <div class="move-row">
                <span class="move-name">${capitalize(m.name)}</span>
                <span class="move-attr">Tipo: <b>${capitalize(m.type)}</b></span>
                <span class="move-attr">Potencia: <b>${m.power}</b></span>
                <span class="move-attr">Precisión: <b>${m.accuracy}</b></span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="nav-btn-container">
        <button class="nav-btn" id="prevBtn">← Anterior</button>
        <button class="nav-btn" id="nextBtn">Siguiente →</button>
      </div>
    `;
}

//Funcion para traducir los nombres de las estadisticas del pokemon al español
function traducirStat(stat) {
	switch (stat) {
		case 'hp': return 'Vida';
		case 'attack': return 'Ataque';
		case 'defense': return 'Defensa';
		case 'special-attack': return 'At. Especial';
		case 'special-defense': return 'Def. Especial';
		case 'speed': return 'Velocidad';
		default: return stat;
	}
}


//Funcion para traducir los tipos de los pokemon al español
function traducirTipo(tipo) {
    switch (tipo) {
        case 'normal': return 'Normal';
        case 'fire': return 'Fuego';
        case 'water': return 'Agua';
        case 'electric': return 'Eléctrico';
        case 'grass': return 'Planta';
        case 'ice': return 'Hielo';
        case 'fighting': return 'Lucha';
        case 'poison': return 'Veneno';
        case 'ground': return 'Tierra';
        case 'flying': return 'Volador';
        case 'psychic': return 'Psíquico';
        case 'bug': return 'Bicho';
        case 'rock': return 'Roca';
        case 'ghost': return 'Fantasma';
        case 'dragon': return 'Dragón';
        case 'dark': return 'Siniestro';
        case 'steel': return 'Acero';
        case 'fairy': return 'Hada';
        default: return tipo;
    }
}

//Funcion para hacer la primera letra mayuscula de un string
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}