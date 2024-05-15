/*En esta sección del código trabajamos en el Header para poder cargarlo de forma dinámica en todas las
páginas del sitio*/


//En la variable cadNav guardamos el nav y los estilos para cargarlos luego en el html mediante el id del header.
//Se uso Bootstrap en el nav con menú haburguesa y se personalizaron los estilos con css.
var cadNav = `
        <style>
        .nav-link {
            color: #fff;
        }

        .navbar {
            min-height: 80px;
            background: #088eee;
        }
        </style>

        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="./img/logo.png" alt="Logo" width="80px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Tienda</a>
                         </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown">Categorias</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="index.html#idTv">Smart TV</a></li>
                                <li><a class="dropdown-item" href="index.html#idCel">Celulares</a></li>
                                <li><a class="dropdown-item" href="index.html#idNotb">Computación</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="nosotros.html">Sobre Nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ` 
    //Se carga el header dinámico en la etiqueta con id "idHeader"
    document.getElementById('idHeader').innerHTML=cadNav;


/*-----------------------------------------------------------------------------------------
-------------------------------------------Fin seccion Header------------------------------
-------------------------------------------------------------------------------------------*/


/*En esta sección trabajamos en el Footer de la misma forma que lo hicimos con el Header*/


//En la variable cadFooter guardamos el pie de página con sus estilos para cargarlo de forma dinámica en el html mediante el id del footer.
var cadFooter = `
<style>
    .footer {
        background: #060415;;
        min-height: 200px;
    }

    .footer .links_pie {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid #999999;

    }

    .footer .links_pie a {
        
        margin: 0 10px 0 10px;
        color: #999999;
        text-decoration: none;

    }

    .texto {
        
        text-align: center;
    }

    .texto p {
        color: #fff;
    }

    .texto .titulo {
        font-size: 1.7em;
    }
    .footer .redes {
        display: flex;
        justify-content: center;
        margin: 10px;
    }

    .footer .redes span i {
        color: #fff;
        margin: 10px;
        font-size: 25px;
        margin: 15px;
    }

    .footer .contacto {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #999999;
        padding: 10px 15% 0 15%;
        margin-top: 30px;
    }

    .footer .contacto span {
        color: #fff;
    
    
    }
    .footer .contacto span i {
        color: #999999;
        margin-right: 3px;
    }

    .footer .contacto .ubicacion i {
        color: red;
    }

    .footer .contacto .correo {
        font-size: 1.2em;
        color: aqua;
    }

    .footer .contacto .spcontac {
        font-size: 1.2em;
    }

    .copy {
        display: flex;
        align-items: center;
        justify-content: center;
        
        padding: 0 10px 0 10px;
    }

    .copy p {
        color: #999999;
    }

    @media screen and (max-width: 768px) {
        .footer .contacto {
            flex-direction: column;
            text-align: center;
        }
        
    }

    @media screen and (max-width: 468px) {
        .footer .links_pie {
            flex-direction: column;
            text-align: center;
        }
    }
</style>

<div class="links_pie">
    <a href="#">Inicio</a>
    <a href="nosotros.html">Nosotros</a>
    <a href="contacto.html">Contacto</a>
    <a href="index.html">Tienda</a>
    
</div>
<div class="redes">
    <span><a href="redes.html" target="_blank"><i class="fa-brands fa-facebook"></i> </a></span>
    <span><a href="redes.html" target="_blank"><i class="fa-brands fa-instagram"></i></a></span>
    <span><a href="redes.html" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></span>
    <span><a href="redes.html" target="_blank"><i class="fa-brands fa-youtube"></i></a></span>
    <span><a href="redes.html" target="_blank"><i class="fa-brands fa-linkedin"></i></a></span>

</div>
<div class="texto">
    <p><span class="titulo">Nuestras oficinas estan en Buenos Aires, Argentina</span><br>
    trabajamos con clientes de toda LATAM. ¡pongase en contacto con nosotros!</p>
</div>
<div class="contacto">
    <span><i class="fa-solid fa-envelope"></i><span class="correo"><b>info@correo.com</b></span></span>
    <span><i class="fa-solid fa-square-phone"></i><span class="spcontac"><b>(011)7648-4377</b></span></span>
    <span class="ubicacion"><i class="fa-solid fa-location-dot"></i><span class="spcontac"><b>AV. Siempreviva 742</b></span><br> Buenos Aires | Argentina</span>
</div>
<div class="copy">
    <p>Copyright<i class="fa-regular fa-copyright"></i>ElectroTECNO Todos los derechos reservados</p>
</div>`

//Se carga el Footer de forma dinámica en la etiqueta con id "idFooter".
document.getElementById('idFooter').innerHTML=cadFooter;


/*---------------------------------------------------------------------------------------------
-------------------------------Fin seccion del Footer------------------------------------------
---------------------------------------------------------------------------------------------*/


/*En esta seccion del codigo trabajamos con un carrusel de Bootstrap para mostrar promociones/*

/*Carrusel cargado en el div con id "demo" dentro de la etiqueta "aside"*/
var cadCar = `
<!-- Indicators/dots -->
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<!-- The slideshow/carousel -->
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="./img/50_off.png" alt="50% Off" class="d-block" width= "100">
    <div class="carousel-caption">
      <h3>50% OFF</h3>
      <p>En la primer compra</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="./img/cuotas.png" alt="Chicago" class="d-block">
    <div class="carousel-caption">
      <h3>3 Cuotas sin interes</h3>
      <p>con todas las tarjetas</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="./img/envioGratis.png" alt="New York" class="d-block">
    <div class="carousel-caption">
      <h3>Envío Gratis</h3>
      <p>En compras mayores a $30.000</p>
    </div>
  </div>
</div>

<!-- Left and right controls/icons -->
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
`
document.getElementById('demo').innerHTML=cadCar;


/*---------------------------------------------------------------------------------
----------------------------Fin seccion carrusel-----------------------------------
-----------------------------------------------------------------------------------*/



/*a partir de acá creamos los objetos que contienen a los productos*/

/*Se crea el objeto Smart TV para cargar los productos de forma dinámica ya que aún 
no trabajamos con base de datos*/
var smartTv = [
    {
        codigo: "tv001",
        marca: "Motorola",
        imagen: "./img/tv_motorola_43.png",
        precio: 305279,
        descripcion: "Smart TV Motorola 91MT43E3A LED Android TV Full HD 43' 220V",
        nombre: "TV Motorola 43'"
        
    },
    {
        codigo: "tv002",
        marca: "Noblex",
        imagen: "./img/tv_noblex_43.png",
        precio: 380400,
        descripcion: "Smart Tv Noblex Dk43x7100pi Led Full Hd 43 Android Tv",
        nombre: "TV Noblex 43'"
        
    },
    {
        codigo: "tv003",
        marca: "Samsung",
        imagen: "./img/tv_samsung_43.png",
        precio: 450000,
        descripcion: "Televisor Samsung Un43t5300agczb Smart Tv Pantalla 43",
        nombre: "TV Samsung 43'"
        
    },
    {
        codigo: "tv004",
        marca: "Philip",
        imagen: "./img/tv_philip_43.png",
        precio: 447999,
        descripcion: "Televisor Philips 43' Android Tv 10 Full Hd Hdr10 Bluetooth",
        nombre: "TV Philip 43'"
        
    }
];




/*Con un condicional if se busca la etiqueta con id "idTv" y en caso de encontrarla
se cargan los productos correspondientes a la categoría Smart TV*/
if(document.getElementById('idTv')) {
   
   //En la variable cad se cargan los estilos css de las tarjetas para mostrar los productos.

   


    cad=`
    

    <style>
    
    }
    .tv {
        max-width: 1300px%;
        flex-wrap: wrap;
        display: flex;
        
        
        
        
    }
    
    .card {
        
        
        margin: 20px;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
        cursor: default;
        transition: all 400ms ease;
    
    }

    .card:hover {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
        transform: translateY(-1%);
    }
    
    .card img {
        width: 100%;
        max-height: 210px;
    }
    
    .card .contCard {
        padding: 15px;
        text-align: center;
    }
    
    .card .contCard a {
        text-decoration: none;
        border-radius: 4px;
        background: #0b1ff6;
        color: #fff;
        padding: 5px;
        transition: all 400ms ease;
        
    
    }

    .card .contCard a:hover {
        background: #3099e9;
    }
    
    .card .contCard a:active {
        background: #3a3a3a;
    }

    .valor {
        color:#000;
    }
    </style>
        <table>`
          
        
        //Función "agregarProducto" está al final del codigo, tiene un bucle for para
        //iterar los 'objetos' y generar las tarjetas de cada producto
        agregarProducto (smartTv);
        cad+=`
            </table>`
            //Se carga las tarjetas creadas con la función en la etiqueta con id "idTv"
            document.getElementById('idTv').innerHTML=cad;
            
}
/*-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------*/

//Se repiten los pasos anteriores para crear las tarjetas de los prodctos en las otras categorias. 
var celulares = [
    {
        codigo: "cel001",
        marca: "Samsung",
        imagen: "./img/cel_samsung.png",
        precio: 863290,
        descripcion: "Celular Samsung Galaxy S22 5g 128gb + 8gb 120 Hz Negro",
        nombre: "Samsung Galaxy S22"
        
    },
    {
        codigo: "cel002",
        marca: "Motorola",
        imagen: "./img/cel_motorola.png",
        precio: 340000,
        descripcion: "Celular Motorola Moto G22 128gb + Ram 4 Gb",
        nombre: "Motorola Moto G22"
        
    },
    {
        codigo: "cel003",
        marca: "Xiaomi",
        imagen: "./img/cel_xiaomi.png",
        precio: 899999,
        descripcion: "Xiaomi Pocophone Poco X6 Pro 5G Dual SIM 512 GB negro 12 GB RAM",
        nombre: "Xiaomi Poco X6"
        
    },
    {
        codigo: "cel004",
        marca: "Apple",
        imagen: "./img/cel_iphone.png",
        precio: 1738999,
        descripcion: "Apple iPhone 14 Pro Max (128 GB) - Morado oscuro",
        nombre: "iPhone 14 Pro Max"
        
    }
]





if(document.getElementById('idCel')) {
    cad=`
    

    <style>
    
    }
    .tv {
        max-width: 1300px%;
        flex-wrap: wrap;
        display: flex;
        
        
        
        
    }
    
    .card {
        
        
        margin: 20px;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
        cursor: default;
        transition: all 400ms ease;
    
    }

    .card:hover {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
        transform: translateY(-1%);
    }
    
    .card img {
        width: 100%;
        max-height: 210px;
    }
    
    .card .contCard {
        padding: 15px;
        text-align: center;
    }
    
    .card .contCard a {
        text-decoration: none;
        border-radius: 4px;
        background: #0b1ff6;
        color: #fff;
        padding: 5px;
        transition: all 400ms ease;
        
    
    }

    .card .contCard a:hover {
        background: #3099e9;
    }
    
    .card .contCard a:active {
        background: #3a3a3a;
    }
    </style>
        <table>`
          

        
        agregarProducto (celulares);
        cad+=`
            </table>`

            document.getElementById('idCel').innerHTML=cad;
}
/*--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/



//Se repiten los pasos para la categoría "computación", en este punto ya hay mucho código repetido
var notebook = [
    {
        codigo: "nb001",
        marca: "Lenovo",
        imagen: "./img/not_lenovo.png",
        precio: 678399,
        descripcion: "Notebook Lenovo AMD Ryzen 3 15.6 Pulgadas Full HD 8GB de RAM, 256gb SSD IdeaPad 1, Windows 11",
        nombre: "Notebook Lenovo"
        
    },
    {
        codigo: "nb002",
        marca: "Asus",
        imagen: "./img/not_asus.png",
        precio: 971999,
        descripcion: "Notebook Asus X515EA slate gray 15.6', Intel Core i5 1135G7 16GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 60 Hz 1920x1080px FreeDOS",
        nombre: "Notebook Asus"
        
    }
]

if(document.getElementById('idNotb')) {
    cad=`
    

    <style>
    
    }
    .tv {
        max-width: 1300px%;
        flex-wrap: wrap;
        display: flex;
        
        
        
        
    }
    
    .card {
        
        
        margin: 20px;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
        cursor: default;
        transition: all 400ms ease;
    
    }

    .card:hover {
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
        transform: translateY(-1%);
    }
    
    .card img {
        width: 100%;
        max-height: 210px;
    }
    
    .card .contCard {
        padding: 15px;
        text-align: center;
    }
    
    .card .contCard a {
        text-decoration: none;
        border-radius: 4px;
        background: #0b1ff6;
        color: #fff;
        padding: 5px;
        transition: all 400ms ease;
        
    
    }

    .card .contCard a:hover {
        background: #3099e9;
    }
    
    .card .contCard a:active {
        background: #3a3a3a;
    }

   
    </style>
        <table>`
          

        
        agregarProducto (notebook);
        cad+=`
            </table>`

            document.getElementById('idNotb').innerHTML=cad;


   
    }

    //Funcion para iterar los objetos de cada categoría y generar las tarjetas de cada producto
    //para poder mostarlos.
    function agregarProducto (producto){

    for (var i = 0; i < producto.length; i++){
        cad+=`
            <td>
                
                <th><div class="card">
       
                    <figure>
                        <img src="${producto[i].imagen}">
                    </figure>
                    <div class="contCard">
                        <h5>${producto[i].nombre}</h5>
                        <p class="valor">$${producto[i].precio}</p>
                        <a href="${producto[i].codigo}.html" target="_blank">Ver producto</a>
                    </div>
                </div></th>
            </td>`
            
    }
}