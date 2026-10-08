EVALUACIÓN HTML - 5TO DE SECUNDARIA
======================================

Archivos:
- index.html
- styles.css
- app.js
- escudo.png  <- coloque aquí el escudo real de la Unidad Educativa.

Características:
- 45 preguntas, 45 puntos.
- Tiempo límite: 20 minutos.
- Registro de estudiante.
- Preguntas de selección múltiple.
- Temporizador visible.
- Barra de progreso.
- Panel docente con contraseña.
- Resultados almacenados en localStorage.
- Exportación CSV.
- Detección de cambio de pestaña.
- Detección de pérdida de foco de ventana.
- Bloqueo de copiar/cortar/pegar, menú contextual y atajos frecuentes.
- Aviso ante cierre/recarga.
- Intento de pantalla completa.

IMPORTANTE SOBRE SEGURIDAD:
Este proyecto es una solución del lado del cliente. HTML/CSS/JS por sí solos NO pueden ofrecer seguridad absoluta ni impedir que un estudiante con conocimientos técnicos manipule el código, el almacenamiento local o las herramientas del navegador.
Para una evaluación real por LAN con resultados centralizados y control docente, se recomienda usar un servidor/backend (por ejemplo Node.js + Express + SQLite/MySQL). Este proyecto deja la interfaz preparada para esa evolución.

CONTRASEÑA DOCENTE INICIAL:
Docente2026!
Cambiarla en app.js antes de utilizarla en clase.

ESCUDO:
El sistema intenta cargar "escudo.png". Si no existe, muestra un escudo provisional "UE".
Reemplace escudo.png por el escudo oficial de la Unidad Educativa.
