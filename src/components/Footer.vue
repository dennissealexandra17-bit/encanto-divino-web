<template>
  <footer class="footer" id="contacto">
    <div class="footer-wrapper">
      <div class="footer-content">

        <!-- Marca -->
        <div class="footer-section brand-section">
          <div class="brand-header">
            <h3>✨ Encanto Divino</h3>
            <p class="brand-subtitle">K-Beauty Shop</p>
          </div>
          <p class="brand-desc">Tu tienda especializada en productos coreanos de skincare premium en Ecuador.</p>

          <div class="social-icons">
            <a href="https://www.instagram.com/encanto_divino.kbeauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="social-link" aria-label="Instagram" title="Instagram">📷</a>
            <a href="mailto:encanto.divino@outlook.com" class="social-link" aria-label="Email" title="Email">📧</a>
          </div>
        </div>

        <!-- Productos -->
        <div class="footer-section">
          <h4>🛍️ Categorías</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Todos los Productos</a></li>
            <li><a href="#rutinas">Rutinas Skincare</a></li>
            <li><a href="#maquillaje">Maquillaje</a></li>
          </ul>
        </div>

        <!-- Información -->
        <div class="footer-section">
          <h4>ℹ️ Información</h4>
          <ul>
            <li><a href="#nosotros">¿Por qué K-Beauty?</a></li>
            <li><a href="#envios">Envíos</a></li>
            <li><a href="#politica">Política de privacidad</a></li>
            <li><a href="#terminos">Términos de servicio</a></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="footer-section contact-section">
          <h4>📞 Contacto</h4>
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div>
              <p class="contact-label">Email</p>
              <a href="mailto:encanto.divino@outlook.com">encanto.divino@outlook.com</a>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <div>
              <p class="contact-label">Teléfono</p>
              <a href="tel:+593967372026">+593 96 737 2026</a>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div>
              <p class="contact-label">Ubicación</p>
              <a href="https://maps.app.goo.gl/eezknQx4my9uuPMK6">Quito, Ecuador</a>
            </div>
          </div>
        </div>

      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p>© 2025 Encanto Divino K-Beauty. Todos los derechos reservados.</p>
        <p class="footer-credits">Diseñado con 💜 para la belleza coreana</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  padding: 3rem 1rem;
  margin-top: 3rem;
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  color: #4a5759;
}

.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

/* Grid principal */
.footer-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.3fr;
  gap: 2.5rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Secciones generales */
.footer-section h4 {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #5a189a;
  margin-bottom: 1.2rem;
  font-weight: 700;
}

.footer-section p {
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: #666;
  line-height: 1.6;
}

/* Sección Marca */
.brand-section {
  display: flex;
  flex-direction: column;
}

.brand-header {
  margin-bottom: 1rem;
}

.brand-header h3 {
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  color: #5a189a;
  margin: 0 0 0.3rem 0;
  font-weight: 700;
}

.brand-subtitle {
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  color: #83c5be;
  margin: 0;
  font-weight: 600;
}

.brand-desc {
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

/* Íconos sociales */
.social-icons {
  display: flex;
  gap: 0.8rem;
  margin-top: auto;
}

.social-link {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #83c5be, #26c0b1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.social-link:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 12px 24px rgba(131, 197, 190, 0.4);
  background: linear-gradient(135deg, #26c0b1, #1aa197);
}

/* Enlaces */
.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.8rem;
}

.footer-section a {
  text-decoration: none;
  color: #4a5759;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  position: relative;
  transition: color 0.3s ease;
}

.footer-section a::before {
  content: "→";
  margin-right: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

.footer-section a:hover {
  color: #5a189a;
}

.footer-section a:hover::before {
  opacity: 1;
  transform: translateX(3px);
}

/* Sección Contacto */
.contact-section {
  background: rgba(131, 197, 190, 0.08);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid #83c5be;
}

.contact-item {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
  align-items: flex-start;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  font-size: 1.3rem;
  min-width: 30px;
}

.contact-item a {
  color: #4a5759;
  text-decoration: none;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #5a189a;
}

.contact-label {
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  color: #83c5be;
  font-weight: 600;
  margin: 0 0 0.2rem 0;
}

.contact-item p {
  margin: 0;
}

/* Divisor */
.footer-divider {
  height: 1px;
  background: rgba(131, 197, 190, 0.2);
  margin: 1.5rem 0;
}

/* Footer bottom */
.footer-bottom {
  text-align: center;
  padding: 1.5rem 0;
}

.footer-bottom p {
  font-size: clamp(0.75rem, 1.3vw, 0.85rem);
  color: #5a189a;
  margin: 0.5rem 0;
}

.footer-credits {
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  color: #83c5be;
  font-weight: 500;
}

/* ==================== RESPONSIVE ==================== */

/* Desktop grande XL */
@media (min-width: 1400px) {
  .footer {
    padding: 3rem 2rem;
  }

  .footer-content {
    grid-template-columns: 1.3fr 1.1fr 1.1fr 1.3fr;
    gap: 3rem;
    padding: 2.5rem;
  }

  .footer-section h4 {
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    margin-bottom: 1.2rem;
  }
}

/* Tablet grande - 1280px */
@media (max-width: 1280px) {
  .footer-content {
    grid-template-columns: 1.2fr 1fr 1fr 1.3fr;
    gap: 2.3rem;
  }
}

/* Tablet - 1024px */
@media (max-width: 1024px) {
  .footer {
    padding: clamp(1.8rem, 3vw, 2.5rem) clamp(0.8rem, 2vw, 1rem);
    margin-top: clamp(1.8rem, 3vw, 2.5rem);
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: clamp(1.5rem, 2.5vw, 2rem);
    padding: clamp(1.5rem, 2.5vw, 2rem);
  }

  .brand-section {
    grid-column: 1 / -1;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(131, 197, 190, 0.15);
  }

  .footer-section h4 {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  }

  .footer-section li {
    margin-bottom: 0.7rem;
  }
}

/* Tablet intermedio - 900px */
@media (max-width: 900px) {
  .footer {
    padding: clamp(1.5rem, 2.5vw, 2rem);
    margin-top: clamp(1.5rem, 2.5vw, 2rem);
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: clamp(1.3rem, 2vw, 1.8rem);
    padding: clamp(1.3rem, 2vw, 1.8rem);
  }

  .contact-section {
    padding: clamp(1rem, 1.8vw, 1.4rem);
  }

  .social-icons {
    gap: clamp(0.5rem, 1vw, 0.7rem);
  }

  .social-link {
    width: clamp(34px, 4vw, 38px);
    height: clamp(34px, 4vw, 38px);
    font-size: clamp(0.9rem, 1.3vw, 1rem);
  }
}

/* Tablet vertical - 768px */
@media (max-width: 768px) {
  .footer {
    padding: clamp(1.5rem, 2vw, 1.8rem) clamp(0.8rem, 1.5vw, 1rem);
    margin-top: clamp(1.5rem, 2vw, 1.8rem);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: clamp(1.3rem, 2vw, 1.6rem);
    padding: clamp(1.3rem, 2vw, 1.6rem);
    border-radius: 15px;
  }

  .brand-section {
    grid-column: auto;
    padding-bottom: 0;
    border-bottom: none;
  }

  .footer-section h4 {
    font-size: clamp(0.95rem, 1.6vw, 1.05rem);
    margin-bottom: clamp(0.7rem, 1.2vw, 0.9rem);
  }

  .brand-header h3 {
    font-size: clamp(1.2rem, 1.8vw, 1.35rem);
    margin-bottom: 0.3rem;
  }

  .brand-desc {
    font-size: clamp(0.8rem, 1.2vw, 0.9rem);
    margin-bottom: 1rem;
  }

  .social-icons {
    gap: clamp(0.5rem, 1vw, 0.65rem);
  }

  .social-link {
    width: clamp(34px, 3.5vw, 37px);
    height: clamp(34px, 3.5vw, 37px);
    font-size: clamp(0.9rem, 1.2vw, 0.95rem);
  }

  .footer-section ul {
    column-count: 2;
    column-gap: clamp(0.8rem, 1.5vw, 1.2rem);
  }

  .footer-section li {
    margin-bottom: clamp(0.5rem, 0.8vw, 0.65rem);
    break-inside: avoid;
  }

  .contact-section {
    padding: clamp(1rem, 1.5vw, 1.3rem);
    border-left-width: 4px;
  }

  .contact-item {
    gap: clamp(0.6rem, 1vw, 0.75rem);
    margin-bottom: clamp(0.9rem, 1.3vw, 1.1rem);
  }

  .contact-icon {
    font-size: clamp(1.1rem, 1.5vw, 1.25rem);
  }

  .contact-item a {
    font-size: clamp(0.85rem, 1.3vw, 0.95rem);
  }

  .contact-label {
    font-size: clamp(0.75rem, 1vw, 0.85rem);
  }

  .footer-divider {
    margin: clamp(1rem, 1.5vw, 1.3rem) 0;
  }

  .footer-bottom p {
    font-size: clamp(0.75rem, 1.2vw, 0.85rem);
    margin: clamp(0.3rem, 0.6vw, 0.5rem) 0;
  }
}

/* Mobile - 600px */
@media (max-width: 600px) {
  .footer {
    padding: clamp(1.3rem, 2vw, 1.6rem) clamp(0.6rem, 1.2vw, 0.8rem);
    margin-top: clamp(1.3rem, 2vw, 1.6rem);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: clamp(1rem, 1.5vw, 1.3rem);
    padding: clamp(1rem, 1.5vw, 1.3rem);
    border-radius: 12px;
  }

  .footer-section h4 {
    font-size: clamp(0.9rem, 1.3vw, 1rem);
    margin-bottom: clamp(0.7rem, 1vw, 0.8rem);
  }

  .brand-header h3 {
    font-size: clamp(1.15rem, 1.5vw, 1.25rem);
    margin-bottom: 0.25rem;
  }

  .brand-desc {
    font-size: clamp(0.8rem, 1vw, 0.85rem);
    margin-bottom: 0.9rem;
  }

  .social-icons {
    gap: clamp(0.45rem, 0.8vw, 0.6rem);
  }

  .social-link {
    width: clamp(32px, 3vw, 35px);
    height: clamp(32px, 3vw, 35px);
    font-size: clamp(0.85rem, 1vw, 0.9rem);
  }

  .footer-section ul {
    column-count: 2;
    column-gap: clamp(0.7rem, 1vw, 0.9rem);
  }

  .footer-section li {
    margin-bottom: clamp(0.45rem, 0.7vw, 0.55rem);
  }

  .contact-section {
    padding: clamp(0.95rem, 1.3vw, 1.1rem);
    border-left-width: 3px;
  }

  .contact-item {
    gap: clamp(0.55rem, 0.9vw, 0.65rem);
    margin-bottom: clamp(0.75rem, 1vw, 0.9rem);
  }

  .contact-icon {
    font-size: clamp(1.05rem, 1.2vw, 1.15rem);
    min-width: 28px;
  }

  .contact-item a {
    font-size: clamp(0.8rem, 1.2vw, 0.88rem);
  }

  .contact-label {
    font-size: clamp(0.7rem, 0.9vw, 0.8rem);
  }

  .footer-divider {
    margin: clamp(0.9rem, 1.2vw, 1.1rem) 0;
  }

  .footer-bottom p {
    font-size: clamp(0.72rem, 1vw, 0.8rem);
    margin: clamp(0.35rem, 0.5vw, 0.45rem) 0;
  }

  .footer-credits {
    font-size: clamp(0.68rem, 0.9vw, 0.78rem);
  }
}

/* Mobile pequeño - 480px */
@media (max-width: 480px) {
  .footer {
    padding: clamp(1.1rem, 1.5vw, 1.4rem) clamp(0.5rem, 1vw, 0.65rem);
    margin-top: clamp(1.1rem, 1.5vw, 1.4rem);
  }

  .footer-content {
    gap: clamp(0.95rem, 1.3vw, 1.1rem);
    padding: clamp(0.95rem, 1.3vw, 1.1rem);
  }

  .footer-section h4 {
    font-size: clamp(0.88rem, 1.1vw, 0.96rem);
    margin-bottom: clamp(0.65rem, 0.9vw, 0.75rem);
  }

  .brand-header h3 {
    font-size: clamp(1.1rem, 1.3vw, 1.2rem);
  }

  .footer-section ul {
    column-count: 1;
  }

  .footer-section li {
    margin-bottom: clamp(0.4rem, 0.6vw, 0.5rem);
  }

  .social-icons {
    gap: clamp(0.4rem, 0.7vw, 0.5rem);
  }

  .social-link {
    width: clamp(30px, 2.8vw, 33px);
    height: clamp(30px, 2.8vw, 33px);
    font-size: clamp(0.8rem, 0.9vw, 0.85rem);
  }

  .contact-section {
    padding: clamp(0.9rem, 1.1vw, 1rem);
  }

  .contact-item {
    gap: clamp(0.5rem, 0.8vw, 0.6rem);
    margin-bottom: clamp(0.65rem, 0.9vw, 0.75rem);
  }

  .contact-icon {
    font-size: clamp(1rem, 1.1vw, 1.1rem);
  }

  .footer-divider {
    margin: clamp(0.8rem, 1vw, 0.95rem) 0;
  }

  .footer-bottom p {
    font-size: clamp(0.7rem, 0.9vw, 0.77rem);
    margin: clamp(0.3rem, 0.4vw, 0.4rem) 0;
  }
}

/* Extra pequeño - 360px */
@media (max-width: 360px) {
  .footer {
    padding: clamp(1rem, 1.2vw, 1.3rem) clamp(0.45rem, 0.8vw, 0.6rem);
  }

  .footer-content {
    gap: clamp(0.85rem, 1.1vw, 1rem);
    padding: clamp(0.85rem, 1.1vw, 1rem);
  }

  .brand-header h3 {
    font-size: clamp(1.05rem, 1.1vw, 1.15rem);
  }

  .footer-section h4 {
    font-size: clamp(0.85rem, 1vw, 0.93rem);
    margin-bottom: clamp(0.6rem, 0.8vw, 0.7rem);
  }

  .contact-item {
    margin-bottom: clamp(0.6rem, 0.8vw, 0.7rem);
  }

  .social-link {
    width: clamp(28px, 2.5vw, 31px);
    height: clamp(28px, 2.5vw, 31px);
    font-size: clamp(0.75rem, 0.85vw, 0.8rem);
  }

  .footer-bottom p {
    font-size: clamp(0.68rem, 0.85vw, 0.75rem);
  }
}
</style>
