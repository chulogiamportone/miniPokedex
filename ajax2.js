
(async () => {
    let res = document.querySelector(".dpokemon");
    res.innerHTML = ``;
    let url = `https://pokeapi.co/api/v2/pokemon/${window.name}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        
        if (this.status == 200 && this.readyState == 4) {
            datos = JSON.parse(this.responseText);
            let tipos = datos.types.map((type) => `<p class="tipotipo">${type.type.name}</p>`);
            tipos = tipos.join('');
            
            for (let item in datos.sprites) {
                let tipos2 = datos.types.map((type) => `${type.type.name}`);
                if (item == 'front_default') {
                    res.innerHTML += `
                                
                                <div class="pokemon2" style="background-color: var(--type-${tipos2})">
                                    <div class="pokemon-head" >
                                        <p class="pokemon-id">#${datos.id}</p>
                                        <img id="poke-foto2" class="img-pokemon2" src="${datos.sprites.other["official-artwork"].front_default}" alt="${datos.name}"></img>
                                        <h1 class="pokemon-nombre">${datos.name}</h1>
                                    </div>
                                    <div class="pokemon-body" >
                                        <h4 class="stat">TIPOS</h4>
                                        <h4 class="pokemon-tipos" style="color: black">${tipos}</h4>
                                        <h4 class="stat">TAMAÑO = ${datos.height}m</h4>
                                        <h4 class="stat">PESO = ${datos.weight}kg</h4>
                                    </div>
                                </div>
                                
                                
                                

                            `;
                }
            }
        }


    }
})()
