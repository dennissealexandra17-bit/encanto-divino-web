<template>
  <footer class="footer" id="contacto">
    <div class="footer-wrapper">
      <div class="footer-content">

        <!-- Marca -->
        <div class="footer-section brand">
          <h3>Encanto Divino K-Beauty</h3>
          <p>Tu tienda especializada en productos coreanos de skincare.</p>

          <div class="social-icons">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="mailto:encanto.divino@outlook.com" aria-label="Email">✉️</a>
            <a href="#" aria-label="Ubicación">📍</a>
          </div>
        </div>

        <!-- Enlaces -->
        <div class="footer-section">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#marcas">Marcas</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="footer-section">
          <h4>Contacto</h4>
          <p>📧 encanto.divino@outlook.com</p>
          <p>📱 +593 96 737 2026</p>
          <p>📍 Quito, Ecuador</p>
        </div>

      </div>

      <div class="footer-bottom">
        © 2025 Encanto Divino K-Beauty. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  padding: 4rem 1.5rem 2rem;
  color: #4a5759;
}

/* Contenedor real */
.footer-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

/* Grid principal */
.footer-content {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* Secciones */
.footer-section h3 {
  font-size: 1.4rem;
  color: #5a189a;
  margin-bottom: 0.8rem;
}

.footer-section h4 {
  font-size: 1.1rem;
  color: #5a189a;
  margin-bottom: 1rem;
}

.footer-section p,
.footer-section a {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Marca */
.brand p {
  max-width: 280px;
}

/* Enlaces */
.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  text-decoration: none;
  color: #4a5759;
  position: relative;
}

.footer-section a::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ffafcc;
  transition: width 0.3s ease;
}

.footer-section a:hover::after {
  width: 100%;
}

/* Íconos */
.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-icons a {
  width: 42px;
  height: 42px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-icons a:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(255, 175, 204, 0.5);
}

/* Footer bottom */
.footer-bottom {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.85rem;
  color: #5a189a;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .brand p {
    margin: 0 auto;
  }

  .social-icons {
    justify-content: center;
  }
}

</style>
