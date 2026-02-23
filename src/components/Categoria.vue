<template>
  <section class="categories" id="productos">
    <div class="container">
      <div class="titulo">
        <h2 class="section-title">Categorías Populares</h2>
      </div>
      <div class="categories-grid">
        <router-link to="/limpiadores" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-limpiadores"
                src="../assets/categorias/limpiadores.jpg"
                alt="Limpiadores"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Limpiadores</h3>
              <p>Gel, espuma y aceites desmaquillantes</p>
            </div>
          </div>
        </router-link>
        <router-link to="/tonicos" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-tonicos"
                src="../assets/categorias/tonicos.jpg"
                alt="Tónicos"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Tónicos</h3>
              <p>Hidratación y preparación de la piel</p>
            </div>
          </div>
        </router-link>
        <router-link to="/esencias-y-serums" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-esencias"
                src="../assets/categorias/esencias.png"
                alt="Esencias"
              />
            </div>
            <div class="texto">
              <h3 class="category-title" id="serums">Serums y Esencias</h3>
              <p>Nutrición profunda y luminosidad</p>
            </div>
          </div>
        </router-link>
        <router-link to="/mascarillas" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-mascarillas"
                src="../assets/categorias/mascarillas.jpeg"
                alt="Mascarillas"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Mascarillas</h3>
              <p>Hidratación intensiva y cuidado</p>
            </div>
          </div>
        </router-link>
        <router-link to="/hidratantes" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-protector"
                src="../assets/categorias/hidratantes.jpeg"
                alt="Cremas"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Cremas Hidratantes</h3>
              <p>Cremas hidratantes para la cara y los ojos</p>
            </div>
          </div>
        </router-link>
        <router-link to="/proteccion-solar" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-protector"
                src="../assets/categorias/protector solar.jpg"
                alt="Cremas"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Protección Solar</h3>
              <p>Protección UV con textura ligera</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Categories */
.categories {
  padding: 1rem 1rem;
    margin: 5px 22px 0px 22px;
  border-radius: 14px;
  background: #efb9cb37;
  border: 2px solid #e6adec;
  box-shadow: 0 4px 18px #e6adec33;
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
  background: linear-gradient(135deg, #ffffff 70%, #6d696a 110%);
  padding: 2rem 1.5rem;
  
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.4, 1.5, 0.5, 1), box-shadow 0.3s,
    background 0.3s;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  aspect-ratio: 1 / 1.2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border: 2px double #6d696a;
}

.link {
  text-decoration: none;
}
.marcas-icon,
.marcas-card h3 {
  transition: transform 0.35s cubic-bezier(0.4, 1.5, 0.5, 1), box-shadow 0.3s;
}

.category-card:hover {
  background: linear-gradient(135deg, #757575 30%, #ffffff 80%);

  background-position: left top;
  transform: translateY(-6px);
  border: 2px solid #6d696a;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-position 0.35s ease;
  box-shadow: 0 0 0 3px rgba(133, 133, 133, 0.25);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
}

.category-icon img {
  width: auto;
  height: auto;
}

.img-limpiadores {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  margin-top: 50px;
  border-radius: 15px;
  border: 1px solid #ddd;
}
.img-tonicos {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  margin-top: 50px;
  border-radius: 15px;
  border: 1px solid #ddd;
}
.img-esencias {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  margin-top: 60px;
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
}
.img-mascarillas {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  margin-top: 50px;
  border-radius: 15px;
  border: 1px solid #ddd;
}
.img-protector {
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  margin-top: 50px;
  border-radius: 15px;
  border: 1px solid #ddd;
}

.category-card h3 {
  color: #590d22;
  margin-top: 1rem;
  font-size: 17px;
  font-weight: 550;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.category-card p {
  color: #540b0e;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.texto {
  margin-top: 60px;
}

@media (max-width: 900px) {
  .categories {
    padding: 0.7rem 0.7rem;
  }
  .categories-grid {
    gap: 1rem;
  }
  .category-card {
    padding: 1.2rem 0.7rem;
    font-size: 0.95rem;
  }
  .category-icon {
    font-size: 2rem;
    height: 40px;
  }
}

@media (max-width: 600px) {
  .categories {
    padding: 0.7rem 0.7rem;
  }
  .section-title {
    font-size: 1.2rem;
  }
  .category-card {
    padding: 0.7rem 0.3rem;
    font-size: 0.85rem;
  }
  .category-icon {
    font-size: 1.5rem;
    height: 32px;
  }
}
</style>
