
// ==========================================
// SORPRESA PARA MI NEGRA
// ==========================================

// BOTÓN PRINCIPAL
const boton = document.getElementById("abrirCarta");

// CONTROL DE MÚSICA
const musica = document.getElementById("musica");
const controlMusica = document.getElementById("controlMusica");

// ==========================================
// ENVIAR RESPUESTA AL CORREO MEDIANTE FORMSPREE
// ==========================================

async function enviarRespuesta(opcion) {
    try {
        const respuesta = await fetch(
            "https://formspree.io/f/xzerpvre",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    respuesta: opcion,
                    proyecto: "Sorpresa Mi Negra",
                    fecha: new Date().toLocaleString("es-PE")
                })
            }
        );

        if (!respuesta.ok) {
            throw new Error("No se pudo enviar la respuesta");
        }

        console.log("Respuesta enviada correctamente");
        return true;

    } catch (error) {
        console.error("Error al enviar:", error);
        return false;
    }
}

// ==========================================
// ABRIR CARTA
// ==========================================

if (boton) {
    boton.addEventListener("click", function () {

        const overlay = document.createElement("div");
        overlay.className = "carta-overlay";

        overlay.innerHTML = `
            <div class="carta">

                <button class="cerrar">×</button>

                <div class="corazon-carta">♥</div>

                <h2>Mi negra...</h2>

                <p>
                    No sé si estas palabras puedan expresar
                    todo lo que llevo dentro, pero quería
                    encontrar una manera especial de decirte
                    algo que para mí es importante.
                </p>

                <p>
                    No quiero volver al pasado para repetir
                    nuestra historia de la misma manera.
                    Quiero aprender de lo que vivimos,
                    reconocer mis errores y construir algo
                    diferente, con más comprensión,
                    respeto y sinceridad.
                </p>

                <p>
                    No quiero ofrecerte solamente palabras.
                    Quisiera demostrarte con hechos que
                    podemos hacer las cosas mejor.
                </p>

                <p>
                    No espero que olvides lo que pasó
                    ni que respondas inmediatamente.
                    Solo quería que supieras lo que siento.
                </p>

                <p class="despedida">
                    Con mucho cariño,<br>
                    alguien que guarda nuestros recuerdos.
                </p>

                <button class="ver-recuerdos">
                    Ver nuestros recuerdos ♥
                </button>

            </div>
        `;

        document.body.appendChild(overlay);

        overlay.querySelector(".cerrar").addEventListener("click", () => {
            overlay.remove();
        });

        overlay.querySelector(".ver-recuerdos").addEventListener("click", () => {
            overlay.remove();
            abrirGaleria();
        });

        overlay.addEventListener("click", (evento) => {
            if (evento.target === overlay) {
                overlay.remove();
            }
        });

    });
}

// ==========================================
// GALERÍA DE FOTOGRAFÍAS
// ==========================================

function abrirGaleria() {

    const galeria = document.createElement("div");
    galeria.className = "carta-overlay";

    galeria.innerHTML = `
        <div class="carta galeria">

            <button class="cerrar">×</button>

            <div class="corazon-carta">♥</div>

            <h2>Nuestros recuerdos</h2>

            <p>
                Hay momentos que el tiempo pasa,
                pero que el corazón conserva.
            </p>

            <div class="foto-recuerdo">

                <img src="img/beso.jpg" alt="Nuestro primer beso">

                <h3>Nuestro primer beso</h3>

                <p>
                    Un recuerdo que siempre tendrá
                    un lugar especial.
                </p>

            </div>

            <div class="foto-recuerdo">

                <img src="img/recuerdo.jpg" alt="Una fotografía juntos">

                <h3>Una fotito para recordar</h3>

                <p>
                    Un instante de nuestra historia
                    que guardo con cariño.
                </p>

            </div>

            <p class="despedida">
                Gracias por cada recuerdo bonito.
            </p>

            <button class="pregunta-final">
                ¿Y si escribimos una historia diferente? ♥
            </button>

        </div>
    `;

    document.body.appendChild(galeria);

    galeria.querySelector(".pregunta-final").addEventListener("click", () => {
        galeria.remove();
        mostrarPreguntaFinal();
    });

    galeria.querySelector(".cerrar").addEventListener("click", () => {
        galeria.remove();
    });

    galeria.addEventListener("click", (evento) => {
        if (evento.target === galeria) {
            galeria.remove();
        }
    });

}

// ==========================================
// PANTALLA DE NUEVA OPORTUNIDAD
// ==========================================

function mostrarPreguntaFinal() {

    const final = document.createElement("div");
    final.className = "carta-overlay";

    final.innerHTML = `
        <div class="carta pantalla-final">

            <button class="cerrar">×</button>

            <div class="corazon-carta">♥</div>

            <p class="subtitulo">
                UNA NUEVA OPORTUNIDAD
            </p>

            <h2>Mi negra...</h2>

            <p>
                Sé que no podemos cambiar nuestro pasado,
                pero sí podemos decidir qué hacer con
                lo que aprendimos de él.
            </p>

            <p>
                No quiero que volvamos a ser los mismos
                de antes. Quiero que podamos conocernos
                de nuevo, cuidarnos, escucharnos y
                construir algo mucho más bonito.
            </p>

            <p>
                No te prometo una historia perfecta.
                Te propongo una historia sincera,
                donde mis acciones hablen más que mis palabras.
            </p>

            <h2 class="pregunta">
                ¿Me darías una oportunidad más
                para comenzar de cero?
            </h2>

            <div class="opciones-finales">

                <button class="aceptar">
                    Sí, intentémoslo ♥
                </button>

                <button class="pensarlo">
                    Necesito pensarlo
                </button>

                <button class="volver-recuerdos">
                    Volver a nuestros recuerdos ♥
                </button>

            </div>

            <p class="despedida">
                Cualquiera que sea tu respuesta,
                gracias por haber formado parte de mi historia.
            </p>

        </div>
    `;

    document.body.appendChild(final);

    // ======================================
    // RESPUESTA POSITIVA
    // ======================================

    final.querySelector(".aceptar").addEventListener("click", async () => {

        // ENVIAR RESPUESTA AL CORREO
        const enviado = await enviarRespuesta("Sí, intentémoslo");

        final.querySelector(".pantalla-final").innerHTML = `

            <div class="lluvia-corazones"></div>

            <div class="corazon-carta corazon-animado">♥</div>

            <p class="subtitulo">
                UN NUEVO COMIENZO
            </p>

            <h2>Mi negra...</h2>

            <p class="mensaje-final">
                No sabes lo bonito que sería
                volver a construir algo contigo.
            </p>

            <p>
                Esta vez quiero que cada día,
                cada detalle y cada acción
                demuestren lo importante que eres para mí.
            </p>

            <h2 class="frase-final">
                Nuestra historia todavía
                puede tener capítulos hermosos.
            </h2>

            <p class="despedida">
                Con todo mi cariño,
                para ti, mi negra. ♥
            </p>

            <p class="estado-envio">
                ${enviado ? "♥ Respuesta registrada." : "No se pudo registrar la respuesta. Intenta nuevamente."}
            </p>

            <button class="volver-recuerdos">
                Volver a nuestros recuerdos ♥
            </button>
        `;

        // LLUVIA DE CORAZONES
        const lluvia = final.querySelector(".lluvia-corazones");

        for (let i = 0; i < 25; i++) {

            const corazon = document.createElement("span");

            corazon.innerHTML = "♥";
            corazon.className = "corazon-flotante";

            corazon.style.left = Math.random() * 100 + "%";

            corazon.style.animationDelay =
                Math.random() * 5 + "s";

            corazon.style.animationDuration =
                (4 + Math.random() * 4) + "s";

            lluvia.appendChild(corazon);
        }

    });

    // ======================================
    // RESPUESTA: NECESITA PENSARLO
    // ======================================

    final.querySelector(".pensarlo").addEventListener("click", async () => {

        // ENVIAR RESPUESTA AL CORREO
        const enviado = await enviarRespuesta("Necesito pensarlo");

        final.querySelector(".pantalla-final").innerHTML = `

            <div class="corazon-carta">♥</div>

            <p class="subtitulo">
                NO HAY PRISA
            </p>

            <h2>Tómate tu tiempo...</h2>

            <p>
                No quiero que sientas presión.
                Respeto lo que sientes y el tiempo
                que necesites para pensarlo.
            </p>

            <p>
                Lo único que quería era que conocieras
                lo que realmente siento.
            </p>

            <p class="despedida">
                Gracias por escucharme, mi negra. ♥
            </p>

            <p class="estado-envio">
                ${enviado ? "♥ Respuesta registrada." : "No se pudo registrar la respuesta. Intenta nuevamente."}
            </p>

            <button class="volver-recuerdos">
                Volver a nuestros recuerdos ♥
            </button>

        `;

    });

    // ======================================
    // VOLVER A LOS RECUERDOS
    // ======================================

    final.addEventListener("click", (evento) => {

        if (evento.target.classList.contains("volver-recuerdos")) {
            final.remove();
            abrirGaleria();
        }

    });

    // CERRAR PANTALLA
    final.querySelector(".cerrar").addEventListener("click", () => {
        final.remove();
    });

    final.addEventListener("click", (evento) => {
        if (evento.target === final) {
            final.remove();
        }
    });

}

// ==========================================
// CONTROL DE MÚSICA
// ==========================================

if (controlMusica && musica) {

    controlMusica.addEventListener("click", async () => {

        if (musica.paused) {

            try {

                await musica.play();

                controlMusica.textContent = "♫ Pausar melodía";

            } catch (error) {

                controlMusica.textContent = "No se pudo reproducir";

                console.error("Error al reproducir música:", error);

            }

        } else {

            musica.pause();

            controlMusica.textContent = "♫ Escuchar nuestra melodía";

        }

    });

}
