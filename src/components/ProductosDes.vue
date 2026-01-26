<template>
  
    <!-- Productos Destacados -->
    <section class="featured-products">
      <div class="container">
        <div class="titulo">
          <h2 class="section-title">Productos Destacados</h2>
        </div>
        <div class="products-grid">
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Cleanser Gentle</h3>
            <p class="brand">CosRX</p>
            <p class="price">$25.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Snail Mucin Essence</h3>
            <p class="brand">COSRX</p>
            <p class="price">$32.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Glow Deep Serum</h3>
            <p class="brand">Beauty of Joseon</p>
            <p class="price">$28.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Centella Toner</h3>
            <p class="brand">Purito</p>
            <p class="price">$19.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
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

/* Featured Products */
.featured-products {
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
}

.product-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  aspect-ratio: 1 / 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(223, 65, 176, 0.575);
}

.product-image {
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  width: 100%;
  height: 120px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.product-card h3 {
  color: #333;
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.brand {
  color: #83c5be;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.price {
  color: #5a189a;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.add-to-cart {
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  font-size: 0.9rem;
}

.add-to-cart:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(131, 197, 190, 0.4);
}
@media (max-width: 900px) {
  .featured-products {
    padding: 0.7rem 0.7rem;
  }
  .products-grid {
    gap: 1rem;
  }
  .product-card {
    padding: 1.2rem 0.7rem;
    font-size: 0.95rem;
  }
  .product-image {
    height: 80px;
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .featured-products {
    padding: 0.7rem 0.7rem;
  }
  .section-title {
    font-size: 1.2rem;
  }
  .product-card {
    padding: 0.7rem 0.3rem;
    font-size: 0.85rem;
  }
  .product-image {
    height: 50px;
    font-size: 1rem;
  }
}
</style>