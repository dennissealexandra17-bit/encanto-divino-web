<template>
  

    <!-- Categorías Destacadas -->
    <section class="categories" id="productos">
      <div class="container">
        <div class="titulo">
          <h2 class="section-title">Categorías Populares</h2>
        </div>
        <div class="categories-grid">
          <div class="category-card">
            <div class="category-icon">🧴</div>
            <h3>Limpiadores</h3>
            <p>Gel, espuma y aceites desmaquillantes</p>
          </div>
          <div class="category-card">
            <div class="category-icon">💧</div>
            <h3>Tónicos</h3>
            <p>Hidratación y preparación de la piel</p>
          </div>
          <div class="category-card">
            <div class="category-icon">✨</div>
            <h3>Esencias</h3>
            <p>Nutrición profunda y luminosidad</p>
          </div>
          <div class="category-card">
            <div class="category-icon">🌸</div>
            <h3>Serums</h3>
            <p>Tratamientos concentrados específicos</p>
          </div>
          <div class="category-card">
            <div class="category-icon">🍃</div>
            <h3>Mascarillas</h3>
            <p>Hidratación intensiva y cuidado</p>
          </div>
          <div class="category-card">
            <div class="category-icon">☀️</div>
            <h3>Protección Solar</h3>
            <p>Protección UV con textura ligera</p>
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
/* Categories */
.categories {
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
  color: #a447e2;
  margin-bottom: 2rem;
  background: none;
  padding: 0;
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

.titulo {
  display: flex;
  justify-content: center;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
}

.category-card {
  background: linear-gradient(135deg, #FFFFFF 80%, #B5B7B8 110%);
  background-size: 200% 200%;
  background-position: right bottom;

  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-position 0.35s ease;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  aspect-ratio: 1 / 1.2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.category-card:hover {
    background: linear-gradient(135deg, #8F9192 10%,#FFFFFF 70%);
     background-size: 200% 200%;
  background-position: right bottom;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-position 0.35s ease;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  aspect-ratio: 1 / 1.2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.category-icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.category-card h3 {
  color: #333;
  margin-top: 0.75rem;
  font-size: 1.05rem;
  font-weight: 500;
}

.category-card p {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>