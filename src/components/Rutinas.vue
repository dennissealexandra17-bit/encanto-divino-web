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
  padding: 1rem 1rem;
  margin-top: 2rem;
  border-radius: 14px;
  background: #efb9cb37;
  border: 2px solid #E6ADEC;
  box-shadow: 0 4px 18px #E6ADEC33;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  color: #5a189a;
  margin-bottom: 3rem;
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
  padding: 2.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
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
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: justify;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ffafcc15, #ffc8dd15);
  border-radius: 12px;
  transition: all 0.25s ease;
}

.feature-item:hover {
  background: linear-gradient(135deg, #ffafcc25, #ffc8dd25);
  transform: translateX(5px);
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.feature-item h4 {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.feature-item p {
  color: #666;
  font-size: 0.875rem;
  line-height: 1.4;
}

.image-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-placeholder {
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  height: 200px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease;
}

.about-placeholder:hover {
  transform: scale(1.02);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat {
  background: linear-gradient(135deg, #83c5be15, #cdb4db15);
  padding: 1.5rem 1rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.25s ease;
}

.stat:hover {
  background: linear-gradient(135deg, #83c5be25, #cdb4db25);
  transform: translateY(-3px);
}

.stat h3 {
  color: #5a189a;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat p {
  color: #666;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .stats {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .about-card {
    padding: 2rem;
  }
}
@media (max-width: 900px) {
  .about {
    padding: 0.7rem 0.7rem;
  }
  .about-content {
    gap: 1rem;
  }
  .about-card {
    padding: 1.2rem 0.7rem;
    font-size: 0.95rem;
  }
  .about-placeholder {
    height: 120px;
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 0.7rem 0.7rem;
  }
  .section-title {
    font-size: 1.2rem;
  }
  .about-card {
    padding: 0.7rem 0.3rem;
    font-size: 0.85rem;
  }
  .about-placeholder {
    height: 80px;
    font-size: 0.8rem;
  }
}
</style>