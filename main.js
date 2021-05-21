
$(function () {
    $('form').on('submit', function (evento) {
        evento.preventDefault(); // evita que se mande solo
        var dataPoints = [];

        //$('ul').html(``);
        var id = $("#pokeId").val();
        console.log(id);
        $.get(`https://www.superheroapi.com/api.php/10220294272246745/${id}`, function (pokemon) {
            console.log(pokemon);
            var pokeName = pokemon.name;
            var realName = pokemon.biography.json(["full-name"]);
            var pokeSprite = pokemon.image.url;
            console.log(pokeName);
            console.log(realName);
        document.getElementById("nombrePokemon").innerHTML = `Pokemon N° ${pokemon.id} | ${pokeName}`;
        document.getElementById("spritePokemon").src = pokeSprite;
        
       
        intelligence": "75",
        "strength": "60",
        "speed": "65",
        "durability": "90",
        "power": "96",
        "combat": "

        var hp = pokemon.powerstats.intelligence;
        var atk = pokemon.powerstats.strength;
        var def = pokemon.powerstats.speed;
        var sat = pokemon.powerstats.durability;
        var sdf = pokemon.powerstats.power;
        var spd = pokemon.powerstats.combat;
        console.log(hp);
        document.getElementById("statsPokemon").innerHTML = `
        <strong>HP</strong> = ${hp} <br>
        <strong>Ataque</strong> = ${atk} <br>
        <strong>Defensa</strong> = ${def} <br>
        <strong>Ataque Especial</strong> = ${sat} <br>
        <strong>Defensa Especial</strong> = ${sdf} <br>
        <strong>Velocidad</strong> = ${spd} <br>
        `;
        
        //generar array para cargar stats al grafico
        var pokeStats = [];
        pokeStats.push(hp, atk, def, sat, sdf, spd);
        console.log(pokeStats);
       

        
        var ctx = document.getElementById('chart');

        var chart = new Chart(ctx, {
        type: 'radar',
            data: {
                    datasets: [{
                        label: pokeName, // pokeName
                        data: pokeStats // pokeStats
                    }],
            labels: ['HP', 'Ataque', 'Defensa', 'At. Especial', 'Def. Especial', 'Velocidad']
            },
        options: {

        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 250
            }
        }

}
});


        });
    });
});
