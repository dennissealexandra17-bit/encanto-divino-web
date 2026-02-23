<template>
  <!-- About Section -->
  <section class="about" id="nosotros">
    <div class="container">
      <div class="titulo">
        <h2 class="section-title">¿Por qué K-Beauty?</h2>
      </div>
      <div class="about-content">
        <div class="about-card about-text">
          <div class="card-content">
            <p class="intro">
              La belleza coreana se caracteriza por su enfoque en el cuidado
              preventivo, ingredientes naturales innovadores y rutinas que
              priorizan la salud de la piel a largo plazo.
            </p>
            <div class="features">
              <div class="feature-item">
                <span class="feature-icon">✨</span>
                <div>
                  <h4>Productos Auténticos</h4>
                  <p>Importados directamente de Corea</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🌿</span>
                <div>
                  <h4>Ingredientes Naturales</h4>
                  <p>Fórmulas efectivas y seguras</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">💆‍♀️</span>
                <div>
                  <h4>Rutinas Personalizadas</h4>
                  <p>Adaptadas a tu tipo de piel</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🚚</span>
                <div>
                  <h4>Envío Rápido</h4>
                  <p>Entrega segura a todo el país</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about-card about-image">
           <!-- Rutina completa -->
        <div class="routine-section">
          <h2 class="routine-title">Rutina Completa SKIN1004</h2>
          <div class="routine-steps">
            <div class="routine-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Aceite Limpiador</h4>
                <p>Remueve maquillaje y protector solar</p>
              </div>
            </div>
            <div class="routine-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Espuma Limpiadora</h4>
                <p>Limpieza profunda y suave</p>
              </div>
            </div>
            <div class="routine-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Ampolla de Centella</h4>
                <p>Calma e hidrata intensamente</p>
              </div>
            </div>
            <div class="routine-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Crema Hidratante</h4>
                <p>Sella la hidratación</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
/* About */
.about {
  padding: 1.5rem 1rem;
  margin: 0.5rem auto;
  border-radius: 14px;
  background: #efb9cb37;
  border: 2px solid #E6ADEC;
  box-shadow: 0 4px 18px #E6ADEC33;
  max-width: 1400px;
  width: calc(100% - 2rem);
}

.section-title {
  font-size: clamp(1.5rem, 5vw, 28px);
  font-weight: 600;
  color: #5a189a;
  margin-bottom: 2rem;
  background: none;
  padding: 0;
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #ffafcc;
  margin: 8px auto 0;
  border-radius: 10px;
}

.titulo {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: stretch;
}

.about-card {
  background: #ffffff;
  border-radius: 20px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(223, 65, 176, 0.3);
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.intro {
  color: #666;
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: justify;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: clamp(0.75rem, 2vw, 1rem);
  background: linear-gradient(135deg, #ffafcc15, #ffc8dd15);
  border-radius: 12px;
  border-left: 4px solid #ffafcc;
  transition: all 0.25s ease;
}

.feature-item:hover {
  background: linear-gradient(135deg, #ffafcc25, #ffc8dd25);
  transform: translateX(5px);
  border-left-color: #ff8fb3;
}

.feature-icon {
  font-size: clamp(1.5rem, 4vw, 2rem);
  flex-shrink: 0;
}

.feature-item h4 {
  color: #333;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.feature-item p {
  color: #666;
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);
  line-height: 1.4;
  margin: 0;
}

/* Routine Section */
.routine-section {
  background: linear-gradient(135deg, #f0f9ff, #fef3f8);
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2rem);
  border: 2px solid #dbeafe;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.routine-title {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: #5a189a;
  margin: 0 0 1.5rem 0;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
}

.routine-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #ffafcc, #ffc8dd);
  border-radius: 2px;
}

.routine-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.routine-step {
  display: flex;
  gap: 1rem;
  padding: clamp(0.8rem, 2vw, 1rem);
  background: white;
  border-radius: 12px;
  border-left: 4px solid #83c5be;
  transition: all 0.3s ease;
  align-items: center;
}

.routine-step:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 16px rgba(131, 197, 190, 0.2);
  border-left-color: #26c0b1;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(2.5rem, 5vw, 3rem);
  height: clamp(2.5rem, 5vw, 3rem);
  border-radius: 50%;
  background: linear-gradient(135deg, #83c5be, #26c0b1);
  color: white;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h4 {
  color: #333;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  font-weight: 600;
  margin: 0 0 0.3rem 0;
}

.step-content p {
  color: #666;
  font-size: clamp(0.75rem, 1.5vw, 0.85rem);
  margin: 0;
  line-height: 1.4;
}

/* Desktop grande */
@media (min-width: 1200px) {
  .about {
    padding: 2rem 2rem;
  }

  .about-content {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
  }
}

/* Desktop normal */
@media (max-width: 1199px) and (min-width: 901px) {
  .about {
    padding: 1.5rem 1.2rem;
  }

  .about-content {
    gap: 2rem;
  }

  .features {
    gap: 1rem;
  }
}

/* Tablet horizontal */
@media (max-width: 900px) {
  .about {
    padding: 1.2rem 1rem;
    margin: 0.5rem 1rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .about-card {
    padding: 1.5rem;
  }

  .section-title {
    margin-bottom: 1.5rem;
  }

  .features {
    gap: 1rem;
  }

  .routine-steps {
    gap: 0.8rem;
  }
}

/* Tablet vertical */
@media (max-width: 768px) {
  .about {
    padding: 1rem 0.8rem;
    margin: 0.4rem 0.8rem;
    border-radius: 12px;
  }

  .about-content {
    gap: 1.2rem;
  }

  .about-card {
    padding: 1.2rem;
    border-radius: 16px;
  }

  .section-title {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  .feature-item {
    padding: 0.8rem;
    gap: 0.8rem;
  }

  .routine-section {
    padding: 1.2rem;
  }

  .routine-title {
    margin-bottom: 1rem;
  }
}

/* Móvil */
@media (max-width: 600px) {
  .about {
    padding: 1rem 0.6rem;
    margin: 0.4rem 0.6rem;
    border-radius: 10px;
  }

  .section-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .section-title::after {
    width: 50px;
  }

  .about-card {
    padding: 1rem;
    border-radius: 14px;
  }

  .intro {
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .features {
    gap: 0.8rem;
  }

  .feature-item {
    padding: 0.7rem;
    gap: 0.7rem;
  }

  .feature-item h4 {
    font-size: 0.85rem;
  }

  .feature-item p {
    font-size: 0.75rem;
  }

  .routine-section {
    padding: 1rem;
  }

  .routine-title {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .routine-step {
    padding: 0.7rem;
    gap: 0.7rem;
  }

  .step-number {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.9rem;
  }

  .step-content h4 {
    font-size: 0.8rem;
  }

  .step-content p {
    font-size: 0.7rem;
  }
}

/* Móvil pequeño */
@media (max-width: 480px) {
  .about {
    padding: 0.8rem 0.5rem;
    margin: 0.3rem 0.5rem;
    border-radius: 8px;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .about-card {
    padding: 0.8rem;
  }

  .intro {
    margin-bottom: 1.2rem;
    font-size: 0.9rem;
  }

  .features {
    gap: 0.6rem;
  }

  .feature-item {
    padding: 0.6rem;
    gap: 0.6rem;
    border-left-width: 3px;
  }

  .feature-icon {
    font-size: 1.3rem;
  }

  .feature-item h4 {
    font-size: 0.8rem;
  }

  .feature-item p {
    font-size: 0.7rem;
  }

  .routine-section {
    padding: 0.8rem;
  }

  .routine-title {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  .routine-title::after {
    width: 40px;
    height: 2px;
  }

  .routine-steps {
    gap: 0.6rem;
  }

  .routine-step {
    padding: 0.6rem;
    gap: 0.6rem;
    border-radius: 10px;
    border-left-width: 3px;
  }

  .step-number {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 0.8rem;
  }

  .step-content h4 {
    font-size: 0.75rem;
    margin-bottom: 0.2rem;
  }

  .step-content p {
    font-size: 0.65rem;
  }
}

/* Extra pequeño */
@media (max-width: 360px) {
  .about {
    padding: 0.6rem 0.4rem;
    margin: 0.2rem 0.4rem;
  }

  .section-title {
    font-size: 1rem;
  }

  .about-card {
    padding: 0.6rem;
  }

  .feature-item h4 {
    font-size: 0.75rem;
  }

  .routine-step {
    padding: 0.5rem;
  }

  .step-number {
    width: 2rem;
    height: 2rem;
    font-size: 0.75rem;
  }
}
</style>
