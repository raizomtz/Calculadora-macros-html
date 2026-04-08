// Funciones de modal de error
function mostrarError(mensaje) {
    // Crear el modal dinámicamente
    const modal = document.createElement('div');
    modal.className = 'modal-error-overlay';
    modal.id = 'modalError';
    modal.innerHTML = `
        <div class="modal-error-content">
            <div class="modal-error-icon">⚠️</div>
            <div class="modal-error-title">Campos incompletos</div>
            <div class="modal-error-message">${mensaje}</div>
            <button class="modal-error-btn" onclick="cerrarError()">Entendido</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function cerrarError() {
    const modal = document.getElementById('modalError');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Función para mostrar error de validación de rango
function mostrarErrorRango(campo, min, max) {
    const modal = document.createElement('div');
    modal.className = 'modal-error-overlay';
    modal.id = 'modalError';
    modal.innerHTML = `
        <div class="modal-error-content">
            <div class="modal-error-icon">📊</div>
            <div class="modal-error-title">Valor fuera de rango</div>
            <div class="modal-error-message">${campo} debe estar entre ${min} y ${max}</div>
            <button class="modal-error-btn" onclick="cerrarError()">Entendido</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modalError');
    if (modal && e.target === modal) {
        cerrarError();
    }
});