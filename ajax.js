

(async () => {
    obtenerPokemon(self, 1, 200);

})()
document.getElementById('Todos').addEventListener('click', function () {
    obtenerPokemon(self, 1, 1017);
});
document.getElementById('b1').addEventListener('click', function () {
    obtenerPokemon(self, 1, 151);
});
document.getElementById('b2').addEventListener('click', function () {
    obtenerPokemon(self, 152, 251);
});
document.getElementById('b3').addEventListener('click', function () {
    obtenerPokemon(self, 251, 386);
});
document.getElementById('b4').addEventListener('click', function () {
    obtenerPokemon(self, 387, 493);
});
document.getElementById('b5').addEventListener('click', function () {
    obtenerPokemon(self, 494, 649);
});
document.getElementById('b6').addEventListener('click', function () {
    obtenerPokemon(self, 650, 721);
});
document.getElementById('b7').addEventListener('click', function () {
    obtenerPokemon(self, 722, 809);
});
document.getElementById('b8').addEventListener('click', function () {
    obtenerPokemon(self, 810, 905);
});
document.getElementById('b9').addEventListener('click', function () {
    obtenerPokemon(self, 906, 1017);
});



function obtenerPokemon(valor, a, b) {

    let resultado = document.querySelector(".datos-ditto");
    resultado.innerHTML = ``;

    for (i = a; i < b; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        const api = new XMLHttpRequest();
        api.open('GET', url, true);
        api.send();

        api.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == 4) {
                datos = JSON.parse(this.responseText);
                let tipos = datos.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
                tipos = tipos.join('');
                let tipos2 = datos.types.map((type) => `${type.type.name}`);
                for (let item in datos.sprites) {

                    if (item == 'front_default') {
                        resultado.innerHTML += `
                                <button id="${datos.id}" class="btn pokemon" onclick="pokeb(${datos.id})" style="background-color: var(--type-${tipos2})" >
                                    <div class="pokemon">
                                        <img id="poke-foto" class="img-pokemon" src="${datos.sprites[item]}" alt=""></img>
                                    </div>
                                </button>

                            `;
                    }
                }
            }
        }



    }
}
function pokeb(id) {
    detallePokemon(id);
}


function detallePokemon(id) {

    window.open('/detalle.html', id, 'top=50,left=250,width=900,height=600');

}
