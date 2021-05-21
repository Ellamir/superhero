$(document).ready(function() {

    document.getElementById('superBoton').addEventListener('click', () => {
        //let heroeNumero = document.getElementById('heroeNumero').value;
        // por que no necesita prevent default??
        $.ajax({
            type: "get",
            //contentType: "application/json; charset=utf-8",
            dataType: "Json",
            url: `https://www.superheroapi.com/api.php/10159283131357910/34`,  // https://www.superheroapi.com/api.php/10159283131357910/${heroeNumero}
            //data: "data",
            success: function(datos) {
                
                console.log(datos.biography["full-name"]);
                console.log(datos.connections.relatives);
                console.log(datos.biography.publisher);
                console.log(datos.work.occupation);
                console.log(datos.biography["first-appearance"]);
                console.log(datos.appearance.height[0]);
                console.log(datos.appearance.height[1]);
                console.log(datos.appearance.weight[0]);
                console.log(datos.appearance.weight[1]);
                console.log(datos.connections["group-affiliation"]);
                console.log(datos.image.url)
            }
        });


    });




});

