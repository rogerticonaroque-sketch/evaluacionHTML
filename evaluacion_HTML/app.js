(() => {
  "use strict";

  /* ============================================================
     EVALUACIÓN HTML - 5TO DE SECUNDARIA
     45 preguntas / 45 puntos / 20 minutos
     ============================================================ */

  const CONFIG = {
    durationSeconds: 45 * 60,
    teacherPassword: "Docente2026!", // CAMBIAR ANTES DE USAR
    storageKey: "evaluacionHTML5to_resultados_v1",
    attemptKey: "evaluacionHTML5to_intento_v1",
    lockOnSecurityEvent: true
  };

  const questions = [
    ["¿Qué significa HTML?", ["Hyper Text Markup Language","High Tech Modern Language","Hyperlink and Text Markup Language","Home Tool Markup Language"], 0],
    ["¿Cuál es la etiqueta HTML para crear un hipervínculo?", ["<link>","<a>","<href>","<url>"], 1],
    ["¿Cuál es la etiqueta HTML para insertar una línea horizontal?", ["<line>","<hr>","<linebreak>","<horizontal>"], 1],
    ["¿Qué etiqueta HTML se utiliza para crear una lista numerada?", ["<ul>","<li>","<ol>","<dl>"], 2],
    ["¿Cuál es la etiqueta HTML para crear un salto de línea?", ["<br>","<nl>","<lb>","<newline>"], 0],
    ["¿Cuál es la versión más reciente de HTML?", ["HTML4","HTML5","XHTML","HTML6"], 1],
    ["¿Qué elemento HTML se utiliza para definir encabezados de nivel 1?", ["<header>","<h1>","<heading>","<h>"], 1],
    ["¿Cuál es la etiqueta HTML para crear una imagen?", ["<img>","<picture>","<image>","<imgsrc>"], 0],
    ["¿Cuál es la etiqueta HTML para crear un párrafo?", ["<p>","<paragraph>","<text>","<para>"], 0],
    ["¿Cuál es la etiqueta HTML para crear una tabla?", ["<table>","<tab>","<data>","<tb>"], 0],
    ["¿Cuál de los siguientes elementos HTML se utiliza para definir el contenido de un formulario que se enviará al servidor?", ["<input>","<form>","<button>","<label>"], 1],
    ["¿Cuál es la diferencia clave entre las etiquetas <div> y <span> en HTML?", ["<div> se utiliza para elementos en línea, mientras que <span> se utiliza para elementos de bloque.","<div> se utiliza para agrupar elementos en bloque, mientras que <span> se utiliza para elementos en línea.","<div> se utiliza para crear vínculos, mientras que <span> se utiliza para crear divisiones de texto.","<div> se utiliza para agregar imágenes, mientras que <span> se utiliza para agregar videos."], 1],
    ["¿Cuál de las siguientes etiquetas HTML se utiliza para crear una lista de elementos desplegables?", ["<list>","<menu>","<select>","<dropdown>"], 2],
    ["¿Cuál es la forma correcta de comentar múltiples líneas en HTML?", ["// Este es un comentario","<!-- Este es un comentario -->","* Este es un comentario *","# Este es un comentario"], 1],
    ["¿Cuál es el propósito de la etiqueta <iframe> en HTML?", ["Mostrar imágenes en una página web.","Reproducir videos en una página web.","Incrustar contenido externo, como otro sitio web, en una página web.","Crear formularios en una página web."], 2],
    ["¿Cuál es la función del atributo «alt» en la etiqueta <img>?", ["Define el estilo de la imagen.","Proporciona una descripción de la imagen para usuarios con discapacidades visuales y se muestra si la imagen no se carga.","Enlaza la imagen a otro recurso web.","Establece la posición de la imagen en la página."], 1],
    ["¿Cuál es la etiqueta HTML para insertar un video en una página web?", ["<video>","<media>","<movie>","<embed>"], 0],
    ["¿Cuál de los siguientes elementos HTML se utiliza para agrupar elementos de nivel de encabezado?", ["<group>","<header>","<nav>","<section>"], 3],
    ["¿Cuál es la etiqueta HTML para crear una línea de separación temática entre contenidos en una página?", ["<separator>","<div>","<hr>","<line>"], 2],
    ["¿Cuál de las siguientes afirmaciones sobre <header>, <nav>, <main>, <article>, <section>, <aside> y <footer> en HTML5 es correcta?", ["Todas estas etiquetas son obsoletas y no se deben usar en el desarrollo web moderno.","Estas etiquetas son opcionales y no tienen un propósito claro en la estructura de una página web.","Estas etiquetas son elementos semánticos utilizados para definir la estructura y el significado de una página web.","Solo se deben usar estas etiquetas en páginas web en inglés."], 2],

    ["¿Qué declaración se utiliza para indicar que un documento utiliza HTML5?", ["<!HTML>","<!DOCTYPE html>","<DOCTYPE HTML5>","<html5>"], 1],
    ["¿Qué etiqueta contiene el contenido visible de una página web?", ["<head>","<meta>","<body>","<content>"], 2],
    ["¿Qué atributo permite proporcionar un identificador único a un elemento HTML?", ["class","id","name","key"], 1],
    ["¿Qué atributo se utiliza normalmente para asignar una o varias clases CSS a un elemento?", ["style","class","css","group"], 1],
    ["¿Qué etiqueta se utiliza para definir una celda de encabezado en una tabla?", ["<td>","<tr>","<th>","<theadcell>"], 2],
    ["¿Qué etiqueta representa una fila de una tabla HTML?", ["<row>","<tr>","<td>","<line>"], 1],
    ["¿Qué etiqueta representa una celda normal de una tabla?", ["<cell>","<td>","<tr>","<tablecell>"], 1],
    ["¿Qué etiqueta HTML se utiliza para crear una lista no ordenada?", ["<ul>","<ol>","<list>","<li>"], 0],
    ["Dentro de una lista HTML, ¿qué etiqueta representa cada elemento?", ["<item>","<li>","<element>","<point>"], 1],
    ["¿Qué atributo de <a> indica la dirección del recurso enlazado?", ["src","href","link","url"], 1],
    ["¿Qué atributo de <img> indica la ubicación del archivo de imagen?", ["href","src","path","image"], 1],
    ["¿Cuál es la función principal de <title>?", ["Mostrar un título dentro del contenido visible.","Definir el título que aparece normalmente en la pestaña del navegador.","Crear un encabezado H1.","Nombrar una imagen."], 1],
    ["¿Qué etiqueta se utiliza para vincular un archivo CSS externo?", ["<style>","<css>","<link>","<script>"], 2],
    ["¿Qué etiqueta se utiliza para incorporar JavaScript en una página HTML?", ["<javascript>","<js>","<script>","<code>"], 2],
    ["¿Cuál es la etiqueta semántica apropiada para la navegación principal de un sitio?", ["<navigate>","<nav>","<menu-main>","<links>"], 1],
    ["¿Qué elemento semántico representa el contenido principal de un documento?", ["<main>","<content>","<principal>","<center>"], 0],
    ["¿Qué etiqueta semántica suele utilizarse para contenido independiente, como una noticia o publicación?", ["<article>","<post>","<news>","<independent>"], 0],
    ["¿Qué etiqueta se utiliza para definir una sección temática de contenido?", ["<part>","<section>","<area>","<theme>"], 1],
    ["¿Qué elemento semántico se utiliza para contenido complementario al contenido principal?", ["<extra>","<aside>","<secondary>","<complement>"], 1],
    ["¿Qué etiqueta suele contener información final de una página o sección, como derechos de autor?", ["<bottom>","<footer>","<end>","<final>"], 1],
    ["¿Cuál es una ventaja de utilizar HTML semántico?", ["Hace innecesario CSS.","Ayuda a estructurar el contenido y mejora la accesibilidad y comprensión del documento.","Impide utilizar JavaScript.","Convierte automáticamente la página en una aplicación móvil."], 1],
    ["¿Qué etiqueta se utiliza para definir una etiqueta descriptiva asociada a un control de formulario?", ["<caption>","<label>","<description>","<name>"], 1],
    ["¿Qué atributo de un control de formulario ayuda a identificar el dato que será enviado al servidor?", ["name","id-only","send","field"], 0],
    ["¿Qué tipo de input permite seleccionar una sola opción entre varias opciones?", ["checkbox","radio","text","range"], 1],
    ["¿Qué tipo de input permite seleccionar varias opciones de manera independiente?", ["radio","checkbox","single","option"], 1],
    ["¿Qué atributo hace que un campo de formulario deba completarse antes de enviarlo?", ["needed","required","must","validate"], 1]
  ];

  const $ = (id) => document.getElementById(id);
  let state = {
    started: false,
    finished: false,
    invalidated: false,
    secondsLeft: CONFIG.durationSeconds,
    timer: null,
    securityEvents: 0,
    student: null
  };

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));
  }

  function renderQuestions() {
    $("questions").innerHTML = questions.map((q, i) => `
      <article class="question" data-q="${i}">
        <div class="question-title">Pregunta ${i + 1}. ${escapeHTML(q[0])}</div>
        ${q[1].map((opt, j) => `
          <label class="option">
            <input type="radio" name="q${i}" value="${j}">
            <span>${String.fromCharCode(97+j)}) ${escapeHTML(opt)}</span>
          </label>
        `).join("")}
      </article>
    `).join("");
  }

  function updateProgress() {
    let answered = 0;
    questions.forEach((_, i) => {
      if (document.querySelector(`input[name="q${i}"]:checked`)) answered++;
    });
    $("progressText").textContent = `${answered} / ${questions.length}`;
    $("progressBar").style.width = `${answered / questions.length * 100}%`;
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2,"0");
    const s = (seconds % 60).toString().padStart(2,"0");
    return `${m}:${s}`;
  }

  function showSecurityMessage(message) {
    const box = $("securityWarning");
    box.textContent = message;
    box.classList.remove("hidden");
  }

  function invalidate(reason) {
    if (!state.started || state.finished || state.invalidated) return;
    state.invalidated = true;
    clearInterval(state.timer);
    showSecurityMessage(`Evaluación anulada: ${reason}`);
    document.querySelectorAll("#examForm input, #examForm button").forEach(el => el.disabled = true);
    finishEvaluation(true, reason);
  }

  function startTimer() {
    $("timer").textContent = formatTime(state.secondsLeft);
    state.timer = setInterval(() => {
      state.secondsLeft--;
      $("timer").textContent = formatTime(Math.max(0, state.secondsLeft));
      if (state.secondsLeft <= 120) $("timer").classList.add("warning");
      if (state.secondsLeft <= 30) $("timer").classList.add("danger");
      if (state.secondsLeft <= 0) {
        clearInterval(state.timer);
        finishEvaluation(false, "Tiempo agotado");
      }
    }, 1000);
  }

  function getAnswersAndScore() {
    let score = 0;
    let unanswered = 0;
    questions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) unanswered++;
      else if (Number(selected.value) === q[2]) score++;
    });
    return { score, unanswered };
  }

  function getResults() {
    try { return JSON.parse(localStorage.getItem(CONFIG.storageKey)) || []; }
    catch { return []; }
  }

  function saveResult(result) {
    const results = getResults();
    results.push(result);
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(results));
  }

  function finishEvaluation(invalid = false, reason = "") {
    if (state.finished) return;
    state.finished = true;
    clearInterval(state.timer);

    const result = getAnswersAndScore();
    const percentage = Math.round(result.score / questions.length * 100);
    const status = invalid ? "ANULADA" : "FINALIZADA";

    saveResult({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      name: state.student.name,
      course: state.student.course,
      code: state.student.code,
      score: invalid ? 0 : result.score,
      percentage: invalid ? 0 : percentage,
      status,
      reason,
      unanswered: result.unanswered,
      securityEvents: state.securityEvents,
      date: new Date().toLocaleString("es-BO")
    });

    $("examScreen").classList.add("hidden");
    $("resultScreen").classList.remove("hidden");

    $("resultIcon").textContent = invalid ? "⚠" : "✓";
    $("resultTitle").textContent = invalid ? "Evaluación anulada" : "Evaluación finalizada";
    $("resultMessage").textContent = invalid
      ? reason
      : "Tus respuestas fueron registradas correctamente.";
    $("scoreNumber").textContent = invalid ? "0" : result.score;
    $("resultDetails").innerHTML = `
      <div><strong>${invalid ? 0 : percentage}%</strong><span>Porcentaje</span></div>
      <div><strong>${invalid ? 0 : result.score}</strong><span>Correctas</span></div>
      <div><strong>${result.unanswered}</strong><span>Sin responder</span></div>
    `;
    window.scrollTo({top:0, behavior:"smooth"});
  }

  function enterExam(student) {
    state.started = true;
    state.finished = false;
    state.invalidated = false;
    state.secondsLeft = CONFIG.durationSeconds;
    state.securityEvents = 0;
    state.student = student;

    sessionStorage.setItem(CONFIG.attemptKey, JSON.stringify({
      active: true, startedAt: Date.now(), student
    }));

    $("startScreen").classList.add("hidden");
    $("resultScreen").classList.add("hidden");
    $("teacherScreen").classList.add("hidden");
    $("examScreen").classList.remove("hidden");
    $("liveStudent").textContent = `${student.name} · ${student.course}`;
    renderQuestions();
    startTimer();
    updateProgress();

    // Intento de pantalla completa. Si el navegador no lo permite, la evaluación continúa.
    document.documentElement.requestFullscreen?.().catch(() => {});
  }

  $("studentForm").addEventListener("submit", e => {
    e.preventDefault();
    enterExam({
      name: $("studentName").value.trim(),
      course: $("studentCourse").value.trim(),
      code: $("studentCode").value.trim()
    });
  });

  $("examForm").addEventListener("change", updateProgress);
  $("examForm").addEventListener("submit", e => {
    e.preventDefault();
    if (!state.started || state.invalidated) return;
    if (confirm("¿Deseas finalizar la evaluación? Revisa tus respuestas antes de continuar.")) {
      finishEvaluation(false, "");
    }
  });

  // Seguridad: cambio de pestaña/ventana.
  document.addEventListener("visibilitychange", () => {
    if (state.started && !state.finished && document.hidden) {
      state.securityEvents++;
      invalidate("Se detectó un cambio de pestaña o la salida de la página de evaluación.");
    }
  });

  window.addEventListener("blur", () => {
    if (state.started && !state.finished) {
      state.securityEvents++;
      invalidate("Se detectó pérdida de foco de la ventana. El intento fue anulado.");
    }
  });

  // Seguridad: bloquear menú contextual y acciones típicas de copiar/pegar.
  ["copy","cut","paste","contextmenu"].forEach(eventName => {
    document.addEventListener(eventName, e => {
      if (state.started && !state.finished) {
        e.preventDefault();
        state.securityEvents++;
        showSecurityMessage(`Acción bloqueada: ${eventName}.`);
      }
    }, true);
  });

  document.addEventListener("keydown", e => {
    if (!state.started || state.finished) return;
    const key = e.key.toLowerCase();
    const forbidden =
      (e.ctrlKey || e.metaKey) && ["c","v","x","a","u","s","p"].includes(key);
    const devtools = e.key === "F12" || ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i","j","c"].includes(key));
    if (forbidden || devtools) {
      e.preventDefault();
      e.stopPropagation();
      state.securityEvents++;
      showSecurityMessage("Atajo de teclado bloqueado durante la evaluación.");
    }
  }, true);

  // Advertencia/anulación al intentar recargar o cerrar.
  window.addEventListener("beforeunload", e => {
    if (state.started && !state.finished) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  // Panel docente
  $("teacherBtn").addEventListener("click", () => {
    $("startScreen").classList.add("hidden");
    $("examScreen").classList.add("hidden");
    $("resultScreen").classList.add("hidden");
    $("teacherScreen").classList.remove("hidden");
    $("teacherLogin").classList.remove("hidden");
    $("teacherPanel").classList.add("hidden");
    $("teacherPassword").value = "";
  });

  $("closeTeacherBtn").addEventListener("click", () => {
    $("teacherScreen").classList.add("hidden");
    if (!state.started && !state.finished) $("startScreen").classList.remove("hidden");
  });

  $("teacherLoginForm").addEventListener("submit", e => {
    e.preventDefault();
    if ($("teacherPassword").value === CONFIG.teacherPassword) {
      $("teacherLogin").classList.add("hidden");
      $("teacherPanel").classList.remove("hidden");
      refreshTeacherPanel();
    } else {
      alert("Contraseña incorrecta.");
      $("teacherPassword").value = "";
    }
  });

  function refreshTeacherPanel() {
    const results = getResults();
    $("totalAttempts").textContent = results.length;
    const valid = results.filter(r => r.status === "FINALIZADA");
    const avg = valid.length ? Math.round(valid.reduce((a,r)=>a+r.score,0)/valid.length*10)/10 : 0;
    const max = results.length ? Math.max(...results.map(r => Number(r.score)||0)) : 0;
    $("averageScore").textContent = avg;
    $("highestScore").textContent = max;

    $("resultsBody").innerHTML = results.slice().reverse().map((r,i) => `
      <tr>
        <td>${i+1}</td>
        <td>${escapeHTML(r.name)}</td>
        <td>${escapeHTML(r.course)}</td>
        <td>${escapeHTML(r.code)}</td>
        <td>${r.score}/45</td>
        <td>${r.percentage}%</td>
        <td class="${r.status === "FINALIZADA" ? "status-ok" : "status-cancel"}">${escapeHTML(r.status)}</td>
        <td>${escapeHTML(r.date)}</td>
      </tr>
    `).join("") || `<tr><td colspan="8">No existen evaluaciones registradas en este navegador.</td></tr>`;
  }

  $("exportBtn").addEventListener("click", () => {
    const results = getResults();
    if (!results.length) return alert("No hay resultados para exportar.");
    const header = ["Nombre","Curso","Código","Puntaje","Porcentaje","Estado","Motivo","Sin responder","Eventos seguridad","Fecha"];
    const rows = results.map(r => [
      r.name,r.course,r.code,r.score,r.percentage,r.status,r.reason,r.unanswered,r.securityEvents,r.date
    ]);
    const csv = [header,...rows].map(row =>
      row.map(v => `"${String(v ?? "").replaceAll('"','""')}"`).join(";")
    ).join("\n");
    const blob = new Blob(["\ufeff"+csv], {type:"text/csv;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "resultados_evaluacion_HTML_5to.csv";
    a.click(); URL.revokeObjectURL(url);
  });

  $("clearResultsBtn").addEventListener("click", () => {
    if (confirm("¿Seguro que deseas borrar TODOS los resultados de este navegador? Esta acción no se puede deshacer.")) {
      localStorage.removeItem(CONFIG.storageKey);
      refreshTeacherPanel();
    }
  });

  $("newAttemptBtn").addEventListener("click", () => {
    state = {started:false,finished:false,invalidated:false,secondsLeft:CONFIG.durationSeconds,timer:null,securityEvents:0,student:null};
    $("resultScreen").classList.add("hidden");
    $("startScreen").classList.remove("hidden");
    $("studentForm").reset();
    $("timer").className = "timer";
    $("securityWarning").classList.add("hidden");
    sessionStorage.removeItem(CONFIG.attemptKey);
    document.documentElement.exitFullscreen?.().catch(() => {});
    window.scrollTo({top:0, behavior:"smooth"});
  });

  // Evita recuperar accidentalmente un intento activo después de una recarga.
  // Al cargar de nuevo, el intento previo se marca como inválido en los datos de sesión.
  (() => {
    const previous = sessionStorage.getItem(CONFIG.attemptKey);
    if (previous) {
      try {
        const data = JSON.parse(previous);
        if (data.active && data.student) {
          saveResult({
            id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-reload`,
            name: data.student.name,
            course: data.student.course,
            code: data.student.code,
            score: 0, percentage:0, status:"ANULADA",
            reason:"Recarga o reapertura de la página durante un intento activo.",
            unanswered: questions.length,
            securityEvents:1,
            date:new Date().toLocaleString("es-BO")
          });
        }
      } catch {}
      sessionStorage.removeItem(CONFIG.attemptKey);
    }
  })();

  renderQuestions();
})();
