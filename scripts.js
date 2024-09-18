function loadLesson(lesson) {
    fetch(`lições/${lesson}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a lição:', error));
}

function startCourse() {
    loadLesson('lição1');
}

// Carregar a introdução ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('content').innerHTML = `
        <section id="intro">
            <h2>Bem-vindo ao Estudo Musical Progressivo</h2>
            <p>Este curso irá guiá-lo através de várias lições para aprender música de forma progressiva.</p>
            <button onclick="startCourse()">Iniciar Curso</button>
        </section>
    `;
});
