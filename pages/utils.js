// Funcion para crear la estructura de las vistas 
function createPage(title, content) {
    let html = "";

    html += `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="/assets/icons/pixelPalace.ico" type="image/x-icon">
        <link rel="stylesheet" href="/css/menu.css" type="text/css">
        <link rel="stylesheet" href="/css/style.css" type="text/css">`;
        
    html += "<title>" + title + "</title></head><body>";

    // html += ``;
    html += `
    <svg id="arrowsvg" xmlns="http://www.w3.org/2000/svg">
        <symbol id="arrow" viewbox="0 0 16 16">
            <polyline points="4 6, 8 10, 12 6" stroke="#FFF" stroke-width="2" fill="transparent"
            stroke-linecap="round" />
        </symbol>
    </svg>

    <header>
        <nav id="site-navigation" class="site-navigation" aria-label="Clickable Menu Demonstration">

            <div class="logoContainer">
                <img class="logo" src="/assets/imgs/logo.png" alt="Logo Pixel Palace">
                <a href="#">
                    <svg class="gradientText" width="500" height="50" xmlns="http://www.w3.org/2000/svg">

                        <defs>

                            <linearGradient id="gradiente" x1="0" y1="50%" x2="0" y2="100%">
                                <stop offset="0%" stop-color="#2f99d9" />
                                <stop offset="100%" stop-color="#3464b4" />
                            </linearGradient>

                        </defs>

                        <text x="0" y="40" fill="url(#gradiente)" class="gradientText">Pixel Palace</text>

                    </svg>
                </a>
            </div>

            <div class="menuContainer">

                <div class="menu-toggle">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>

                <ul id="main-menu" class="main-menu clicky-menu no-js">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">
                            Products
                            <svg aria-hidden="true" width="16" height="16">
                                <use xlink:href="#arrow" />
                            </svg>
                        </a>
                        <ul>
                        <li><a href="/products">Everything</a></li>
                        <li><a href="/microphone">Microphone</a></li>
                        <li><a href="/mouse">Mouse</a></li>
                        <li><a href="/keyboard">Keyboard</a></li>
                        <li><a href="/speakers">Speakers</a></li>
                        <li><a href="/headphones">Headphones</a></li>

                        </ul>
                    </li>
                    <!-- <li><a href="#">Contact</a></li> -->
                    <!-- <li><a href="#">Cart</a></li> -->
                </ul>

            </div>

        </nav>
    </header>`;


    html += "<h1>" + title + "</h1>";
    html += "<a class='btn' href='/products/new' >New Product</a>";
    html += content;
    html += `<script src="/scripts/menu.js"></script>`;
    html += "</body></html>";

    return html;
}

export {
    createPage,
}