document.addEventListener("DOMContentLoaded", function () {
  // 1. Datos de las redes sociales (¡Personaliza esto!)
  const socialMediaData = [
    {
      name: "TikTok",
      username: "Rasteck7",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="63.304" height="72" viewBox="0 0 63.304 72">
                <g id="Tiktok" transform="translate(-818 -291)">
                    <path id="Trazado_1" data-name="Trazado 1"
                        d="M60.913,28.54a28.568,28.568,0,0,1-16.7-5.344V47.508A22.109,22.109,0,1,1,25.153,25.6V37.827a10.143,10.143,0,1,0,7.1,9.681V0H44.216a16.479,16.479,0,0,0,.258,3.019h0a16.616,16.616,0,0,0,7.329,10.9,16.507,16.507,0,0,0,9.11,2.733Z"
                        transform="translate(820.391 293.389)" fill="#f7004d" />
                    <path id="Trazado_2" data-name="Trazado 2"
                        d="M60.913,28.54a28.568,28.568,0,0,1-16.7-5.344V47.508A22.109,22.109,0,1,1,25.153,25.6V37.827a10.143,10.143,0,1,0,7.1,9.681V0H44.216a16.479,16.479,0,0,0,.258,3.019h0a16.616,16.616,0,0,0,7.329,10.9,16.507,16.507,0,0,0,9.11,2.733Z"
                        transform="translate(818.002 291)" fill="#00efe8" />
                    <path id="Intersección_1" data-name="Intersección 1"
                        d="M5.331,61.9A22.109,22.109,0,0,1,22.767,25.4V35.439a10.144,10.144,0,0,0-8.923,17.944l.085.118a10.143,10.143,0,0,0,18.324-5.992V0h9.735q.044.316.1.63a16.617,16.617,0,0,0,5.837,9.822,16.613,16.613,0,0,0,3.88,3.472,16.509,16.509,0,0,0,6.722,2.561v9.667a28.568,28.568,0,0,1-16.7-5.344V45.12A22.109,22.109,0,0,1,5.331,61.9Z"
                        transform="translate(820.388 293.389)" fill="#fff" />
                </g>
            </svg>`,
    },
    {
      name: "Instagram",
      username: "Rasteck7",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="0 0 448 512"><path fill="#fe68d7" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>`,
    },
    {
      name: "YouTube",
      username: "Rasteck7",
      svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="0 0 576 512"><path fill="#ff0033" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>`
    },
    {
      name: "X",
      username: "Rasteck7",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="0 0 448 512"><path fill="#1a8cd8" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>`,
    },
    {
      name: "Twitch",
      username: "Rasteck7",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="0 0 512 512"><path fill="#a970ff" d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z"/></svg>`
    },
    {
      name: "Kick Streaming",
      username: "Rasteck7",
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="0 0 512 512"  fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M37 .036h164.448v113.621h54.71v-56.82h54.731V.036h164.448v170.777h-54.73v56.82h-54.711v56.8h54.71v56.82h54.73V512.03H310.89v-56.82h-54.73v-56.8h-54.711v113.62H37V.036z" fill="#53fc18"/></svg>`,
    }
  ];

  // 2. Selecciona el contenedor
  const container = document.getElementById("social-media");

  // 3. Crea e inserta los spans dinámicamente
  socialMediaData.forEach((social) => {
    console.log(social);
    // Crea un elemento span
    const span = document.createElement("span");
    span.classList.add("social-item"); // Añade la clase 'social-item' para CSS

    // Inserta el SVG y el nombre de usuario dentro del span
    span.innerHTML = `
            ${social.svgIcon}
            ${social.username}
        `;

    // Añade el span al contenedor
    container.appendChild(span);
  });

  // 4. Animación de "diapositivas" (¡igual que antes!)
  const socialItems = document.querySelectorAll(".social-item");
  let currentIndex = 0;

  function showNextSocialItem() {
    socialItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % socialItems.length;
    socialItems[currentIndex].classList.add("active");
  }

  // Muestra la primera diapositiva al inicio
  socialItems[0].classList.add("active");

  // Inicia la animación (cambia cada 5 segundos - ajusta si quieres)
  setInterval(showNextSocialItem, 5000);
});
