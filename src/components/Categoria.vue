<template>
  

    <!-- Categorías Destacadas -->
    <section class="categories" id="productos">
      <div class="container">
        <h2 class="section-title">Categorías Populares</h2>
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
  padding: 5rem 0;
  background: #fff;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 2px solid transparent;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 175, 204, 0.4);
  border-color: #83c5be;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  color: #4a5759;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: #666;
  font-size: 0.9rem;
}
</style>