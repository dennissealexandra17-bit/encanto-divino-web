<template>
     <section class="marcas" id="marcas">
      <div class="container">
        <h2 class="section-title">Marcas</h2>
        <div class="marcas-grid">
          <div class="marcas-card">
            <div class="marcas-icon">🧴</div>
            <h3>Skin1004</h3>
          </div>
          <div class="marcas-card">
            <div class="marcas-icon">💧</div>
            <h3>Mixsoon</h3>
          </div>
          <div class="marcas-card">
            <div class="marcas-icon">✨</div>
            <h3>Corxs</h3>
          </div>
          <div class="marcas-card">
            <div class="marcas-icon">🌸</div>
            <h3>Anua</h3>
          </div>
          <div class="marcas-card">
            <div class="marcas-icon">🍃</div>
            <h3>Beauty of Joseon</h3>
          </div>
          <div class="marcas-card">
            <div class="marcas-icon">☀️</div>
            <h3>Dr. Althea</h3>
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

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #4a5759;
  text-decoration-line: underline;
  font-family: 
}
/* Marcas */
.marcas {
  padding: 0.5rem 0 5rem 0;
  background: #fff;
}

.marcas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.marcas-card {
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 2px solid transparent;
}

.marcas-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 175, 204, 0.4);
  border-color: #83c5be;
}

.marcas-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.marcas-card h3 {
  color: #4a5759;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.marcas-card p {
  color: #666;
  font-size: 0.9rem;
}
</style>