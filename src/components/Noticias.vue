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
  border-radius: 10px;
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  color: #5a189a;
  margin-bottom: 2.5rem;
}

/* Grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

/* Cards */
.info-card {
  background: linear-gradient(135deg, #ffe5ec, #fff);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
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

</style>