let pelis = [
    { titulo: "Fast and Forius 5", sala:1,horario: "21:00h", precio: 8, sinopsis: "Los viejos amigos Dominic y Mia Toretto y Brian O'Conner se encuentran ahora en Río de Janeiro, donde pretenden dar un último golpe con el fin de obtener su libertad. Para ello reúnen a un grupo de élite de pilotos experimentados.", edad: "+18", imagen: "imagenes/Fast and Forius 5.jpeg" },
    { titulo: "La Monja 2", horario: "22:30h",sala:1, precio: 15, sinopsis: "Corre el año 1956 en Francia. Un sacerdote es asesinado y el mal campa a sus anchas. La secuela del gran éxito mundial La monja retoma la historia de la hermana Irene, quien una vez más se enfrenta cara a cara con las fuerzas malignas de Valak, la monja demoníaca..", edad: "+18", imagen: "imagenes/La Monja 2.jpeg" },
    { titulo: "Transporter 3", horario: "20:00h", sala:1, precio: 15, sinopsis: "Frank Martin es un indiscutible especialista en entregas de alto riesgo. En esta ocasión se ve obligado, bajo amenazas, a trasladar dos voluminosas bolsas y a una joven ucraniana, Valentina, desde Marsella hasta Odessa.", edad: "+12", imagen: "imagenes/Transporter3.jpg" },
    { titulo: "Marvel", horario: "18:00h", sala:1, precio: 25, sinopsis: " Las películas están basadas en personajes que aparecen en los cómics estadounidenses publicados por Marvel Comics. La franquicia también incluye series de televisión, cortometrajes, series digitales y literatura.", edad: "+12", imagen: "imagenes/marvel.jpg" },
    { titulo: "Nacer para morir", horario: "20:30h", sala:1, precio: 15, sinopsis: " El ladrón Anthony Fait da un gran golpe a una joyería y consigue escaparse de los SWAT que lo persiguen. Pero Su, un agente de Tailandia, está detrás de Fait, al que quiere capturar para recuperar los diamantes robados.", edad: "+18", imagen: "imagenes/nacerparamorir.jpg" },
    { titulo: "Triple X", horario: "17:00h", sala:2, precio: 10, sinopsis: "Un atleta de deportes extremos, Xander Crage, famoso por sus acrobacias que desafían la muerte es reclutado por el gobierno para llevar a cabo una misión especial. ", edad: "+18", imagen: "imagenes/Triple X.jpg" },
    { titulo: "Ong Bak 3", horario: "23:30h", sala:2, precio: 13, sinopsis: "Tras ser torturado, Tien pierde sus habilidades para luchar, pero encuentra el equilibrio para ayudar a su pueblo con la ayuda del Maestro Bua.", edad: "+12", imagen: "imagenes/Ong Bak3.jpg" },
    { titulo: "Project X", horario: "17:00h", sala:2, precio: 10, sinopsis: "Tres amigos del instituto deciden organizar una fiesta salvaje en casa de uno de ellos, aprovechando que sus padres no están. Quieren hacer que la fiesta sea inolvidable, así que deciden grabarlo todo.", edad: "+12", imagen: "imagenes/Project X.jpg" },
    { titulo: "Fast and Forius X", sala:2,horario: "16:00h", precio: 12, sinopsis: " Siempre Dom Toretto y su familia han sido capaces de sobrellevarlas. En esta ocasión se enfrentarán al rival más duro hasta la fecha, dispuesto a destrozar todo lo que a Dom le importa. ", edad: "+18", imagen: "imagenes/Fast and Forius X.jpg" },
    { titulo: "Underworld 2", sala:2,horario: "21:00h", precio: 8, sinopsis: "Ha nacido una nueva raza, traicionada por su propio clan, la guerrera vampiro Selene, busca venganza, para ello decide descubrir la verdad sobre la identidad del primer Inmortal verdadero; no es Marcus, el rey de los vampiros como se creía, sino Alexander Corvinus, padre de Marcus y de su hermano gemelo William.", edad: "+18", imagen: "imagenes/Underworld 2.jpg" },
    { titulo: "Ouija", sala:3,horario: "16:15h", precio: 15, sinopsis: " Tras la reciente y repentina muerte de Debbie, Laine convence a su grupo de amigos para tratan de invocar su presencia con ayuda de una 'ouija', pero en lugar de llamar a su amiga, despiertan a una oscura presencia.", edad: "+18", imagen: "imagenes/Ouija.jpg" },
    { titulo: "Hellboy 2", sala:3,horario: "22:15h", precio: 12, sinopsis: "Un malvado elfo rompe un acuerdo milenario entre los seres humanos y ciertos poderes invisibles, lo que acerca el infierno cada vez más a la Tierra. El elfo decide liberar al Ejército Dorado para que le ayude a acabar con toda la humanidad.", edad: "+18", imagen: "imagenes/Hellboy 2.jpg" },
    { titulo: "Resident evil 2", sala:3,horario: "17:45:00h", precio: 15, sinopsis: " En un centro clandestino de investigación genética, se produce un brote vírico. Para contener la fuga,se sella toda la instalación y, en principio, se cree que mueren todos los empleados, pero en realidad se convierten en feroces zombis.", edad: "+18", imagen: "imagenes/Resident evil 2.jpg" },
    { titulo: "Misterio en Venecia", sala:3,horario: "23:15h", precio: 8, sinopsis: "Ya retirado y viviendo en un exilio autoimpuesto, Poirot asiste a regañadientes a una sesión de espiritismo en un palacio encantado. Pronto se ve inmerso en un siniestro mundo de sombras y secretos cuando uno de los invitados es asesinado.", edad: "+18", imagen: "imagenes/Misterio en Venecia.jpg" },
    { titulo: "The equializer 3", sala:3,horario: "00:00h", precio: 10, sinopsis: "El ex agente Robert McCall se encuentra en el sur de Italia y pronto descubre que sus nuevos amigos están bajo el control de los jefes del crimen local. Cuando los acontecimientos se vuelven mortales, McCall se convierte en su protector.", edad: "+18", imagen: "imagenes/The equalizer 3.jpg" },]
document.addEventListener("DOMContentLoaded", function() {
  const todos = document.getElementById("todos");
  
  const Sala1 =document.getElementById("Sala1");
  const Sala2 =document.getElementById("Sala2");
  const Sala3 = document.getElementById("Sala3");
const sala4=document.getElementById("sala4");
const sala5=document.getElementById("sala5");
const sala6=document.getElementById("sala6");

sala6.addEventListener("click",pintarSala6);
sala5.addEventListener("click",pintarSala5);
sala4.addEventListener("click",pintarSala4);
  Sala3.addEventListener("click",pintarSala3);
  Sala2.addEventListener('click',pintarSala2);
  Sala1.addEventListener("click",pintarSala1);
  todos.addEventListener("click",pintarTodo);
  pintarTodo();
});



function pintarSala6(){
    vaciar();
    for(let i=0;i<pelis.length;i++){
        console.log(pelis[i]);
        if(pelis[i].sala==6){
            pintarElemento(pelis[i]);
        }
    }
}



function pintarSala5(){
    vaciar();
    for(let i=0;i<pelis.length;i++){
        console.log(pelis[i]);
        if(pelis[i].sala==5){
            pintarElemento(pelis[i]);
        }
    }
}




function pintarSala4(){
    vaciar();
    for(let i=0;i<pelis.length;i++){
        console.log(pelis[i]);
        if(pelis[i].sala==4){
            pintarElemento(pelis[i]);
        }
    }
}


function pintarSala3(){
    vaciar();
    for(let i=0;i<pelis.length;i++){
        console.log(pelis[i]);
        if(pelis[i].sala==3){
            pintarElemento(pelis[i]);
        }
    }
}
function pintarSala2(){
    vaciar();
    for(let i=0;i<pelis.length;i++){
        console.log(pelis[i]);
        if(pelis[i].sala==2){
            pintarElemento(pelis[i]);
        }
    }
}
function pintarSala1(){
    vaciar();
    for(let i=0;i<pelis.length;i++){
        console.log(pelis[i]);
        if(pelis[i].sala==1){
            pintarElemento(pelis[i]);
        }
    }
}
function pintarTodo(){
    vaciar();
    for(let i=0;i<pelis.length;i++){
        pintarElemento(pelis[i]);
    }
}


function pintarElemento(elemento){

        let pelisHTML = ' <div class="item">'+
                '<img src="'+elemento.imagen+'" alt="'+elemento.titulo+'}">'+
                '<p>'+elemento.titulo+'</p>'+
                '<p>'+elemento.sinopsis+'</p>'+
                '<p>'+elemento.horario+'</p>'+
                '<p>'+elemento.edad+'</p>'+
                '<p>Precio: $'+elemento.precio+'</p></div>';
        
  
                document.getElementById("pelis").innerHTML += pelisHTML;
    };


    function vaciar(){
        let contendor =document.getElementById("pelis");
        console.log("vaciar");
        while(contendor.hasChildNodes()){
            console.log("vaciamos x");
            document.getElementById("pelis").removeChild(document.getElementById("pelis").lastChild);
        }
    }