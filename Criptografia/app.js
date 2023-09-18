const input=document.querySelector("#input")
const btn=document.querySelector(".btn")
const h2=document.querySelector("#h2")

btn.addEventListener("click", cript);

function cript() {
    let texto=input.value
    let newtexto = texto
    input.value = '';

    for (let cont = 0; cont < texto.length; cont++) {
        switch (texto[cont]) {

            case 'a':
                let numeroAleatorioA = Math.floor(Math.random() * 11);
                newtexto = newtexto.replace('a', numeroAleatorioA);
                break;
            case 'b':
                newtexto = newtexto.replace('b', '»');
                break;
            case 'c':
                newtexto = newtexto.replace('c', '#');
                break;
            case 'd':
                let numeroAleatorio = Math.floor(Math.random() * 10);
                newtexto = newtexto.replace('d', numeroAleatorio);
                break;
            case 'e':
                newtexto = newtexto.replace('e', '@');
                break;
            case 'f':
                newtexto = newtexto.replace('f', '!');
                break;
            case 'g':
                newtexto = newtexto.replace('g', '+');
                break;
            case 'h':
                newtexto = newtexto.replace('h', '=');
                break;
            case 'i':
                newtexto = newtexto.replace('i', '&');
                break;
            case 'j':
                newtexto = newtexto.replace('j', '*');
                break;
            case 'k':
                newtexto = newtexto.replace('k', '(');
                break;
            case 'l':
                newtexto = newtexto.replace('l', ')');
                break;
            case 'm':
                newtexto = newtexto.replace('m', '-');
                break;
            case 'n':
                newtexto = newtexto.replace('n', '_');
                break;
            case 'o':
                newtexto = newtexto.replace('o', '[');
                break;
            case 'p':
                newtexto = newtexto.replace('p', ']');
                break;
            case 'q':
                newtexto = newtexto.replace('q', '{');
                break;
            case 'r':
                newtexto = newtexto.replace('r', '}');
                break;
            case 's':
                newtexto = newtexto.replace('s', '|');
                break;
            case 't':
                newtexto = newtexto.replace('t', ':');
                break;
            case 'u':
                newtexto = newtexto.replace('u', ';');
                break;
            case 'v':
                newtexto = newtexto.replace('v', '<');
                break;
            case 'w':
                newtexto = newtexto.replace('w', '>');
                break;
            case 'x':
                newtexto = newtexto.replace('x', ',');
                break;
            case 'y':
                newtexto = newtexto.replace('y', '.');
                break;
            case 'z':
                newtexto = newtexto.replace('z', '?');
                break;
    }
   
}  

 h2.textContent = newtexto;
}

