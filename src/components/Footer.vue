<template>
  
      <!-- Footer -->
      <footer class="footer" id="contacto">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Encanto Divino K-Beauty</h3>
              <p>Tu tienda especializada en productos coreanos de skincare.</p>
              <div class="social-icons">
                <span>📱</span> <span>📧</span> <span>📍</span>
              </div>
            </div>
            <div class="footer-section">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#marcas">Marcas</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Contacto</h4>
              <p>📧 encanto.divino@outlook.com</p>
              <p>📱 +593 96 737 2026</p>
              <p>📍 Quito, Ecuador</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>
              &copy; 2025 Encanto Divino K-Beauty. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
</template>

<script>
export default {

}
</script>

<style scoped>


/* Footer */
.footer {
  background: linear-gradient(135deg, #4a5759, #83c5be);
  color: white;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #bde0fe;
}

.footer-section ul {
  list-style: none;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #bde0fe;
}

.social-icons {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.footer-bottom {
  border-top: 1px solid rgba(189, 224, 254, 0.3);
  padding-top: 1rem;
  text-align: center;
  color: #bde0fe;
}

</style>