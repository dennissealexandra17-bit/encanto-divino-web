<template>
      <!-- About Section -->
    <section class="about" id="nosotros">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>¿Por qué K-Beauty?</h2>
            <p>
              La belleza coreana se caracteriza por su enfoque en el cuidado
              preventivo, ingredientes naturales innovadores y rutinas que
              priorizan la salud de la piel a largo plazo.
            </p>
            <ul>
              <li>✅ Productos auténticos importados</li>
              <li>✅ Ingredientes naturales y efectivos</li>
              <li>✅ Rutinas personalizadas</li>
              <li>✅ Envío rápido y seguro</li>
            </ul>
          </div>
          <div class="about-image">
            <div class="about-placeholder">
              <span>🌸 Cuidado Natural 🌸</span>
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
  padding: 5rem 0;
  background: linear-gradient(135deg, #bde0fe 0%, #fff 50%, #cdb4db 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  color: #4a5759;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about-text p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.about-text ul {
  list-style: none;
  color: #666;
}

.about-text li {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.about-placeholder {
  background: linear-gradient(135deg, #ffafcc, #bde0fe);
  height: 250px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #4a5759;
  border: 3px dashed #83c5be;
}

</style>