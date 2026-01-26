<template>
  <section class="info-section">

    <h2 class="section-title">Información</h2>

    <div class="info-grid">

      <!-- Noticias -->
      <div class="info-card">
        <h3>📰 Noticias</h3>
        <p>
          Mantente al día con nuestras novedades, lanzamientos y promociones
          especiales en productos de skincare coreano.
        </p>
      </div>

      <!-- Envíos -->
      <div class="info-card">
        <h3>🚚 Formas de envío</h3>
        <ul>
          <li>Entrega a domicilio en Quito</li>
          <li>Envíos a nivel nacional por Servientrega</li>
        </ul>
      </div>

    </div>

  </section>
</template>


<script>
export default {

}
</script>

<style scoped>
.info-section {
  padding: 1rem 1rem;
  margin-top: 2rem;
  border-radius: 14px;
  background: #efb9cb37;
  border: 2px solid #E6ADEC;
  box-shadow: 0 4px 18px #E6ADEC33;
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  color: #C287E8;
  margin-bottom: 2.5rem;
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #8129bc;
  margin: 8px auto 0;
  border-radius: 10px;
}

/* Grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

/* Cards */
.info-card {
  background: linear-gradient(135deg, #FFFFFF 80%, #eecdf4 100%);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px #EFB9CB33;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.info-card:hover {
  background: linear-gradient(135deg, #eecdf4 10%, #FFFFFF 20%);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px #EFB9CB33;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.info-card h3 {
  font-size: 1.3rem;
  color: #5a189a;
  margin-bottom: 1rem;
}

.info-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4a5759;
}

/* Lista de envíos */
.info-card ul {
  list-style: none;
  padding: 0;
}

.info-card li {
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
  position: relative;
  padding-left: 1.4rem;
}

.info-card li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #ffafcc;
  font-weight: bold;
}

@media (max-width: 900px) {
  .info-section {
    padding: 0.7rem 0.7rem;
  }
  .info-grid {
    gap: 1rem;
  }
  .info-card {
    padding: 1.2rem 0.7rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 600px) {
  .info-section {
    padding: 0.7rem 0.7rem;
  }
  .section-title {
    font-size: 1.2rem;
  }
  .info-card {
    padding: 0.7rem 0.3rem;
    font-size: 0.85rem;
  }
}
</style>