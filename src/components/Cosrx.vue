<template>   
  <div class="tocobo-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/tocobo.png" alt="Tocobo" />
          </div>
          <div class="brand-info">
            <h1>Tocobo</h1>
            <p class="brand-description">
                  Tocobo es una marca coreana de cuidado de la piel reconocida 
                  por su enfoque minimalista y fórmulas innovadoras. Sus productos 
                  destacan por ingredientes naturales, texturas ligeras y resultados 
                  visibles, ideales para quienes buscan una rutina efectiva y sencilla.
                   Descubre la esencia de la belleza coreana con Tocobo.
            </p>
            <div class="brand-features">
                <span class="feature">☀️ Proteccion Solar superior</span>
                <span class="feature">🧖‍♀️ Texturas Ligeras y Sedosas</span>
                <span class="feature">🌱 Fórmulas veganas y Cruelty-Free</span>
                <span class="feature">🧴 Fácil de aplicar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
        <!-- Esencias -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">💧</span>
            Esencias
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (esenciasProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
                          <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
                    • {{ benefit }}
                  </span>
                </div>
                <div class="product-price">{{ product.price }}</div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
  <!-- Protector Solar -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🧴</span>
            Protector Solar
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (sunscreenProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
                         <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
                    • {{ benefit }}
                  </span>
                </div>
                <div class="product-price">{{ product.price }}</div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- mascarillas -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Mascarillas
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (mascarillaProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
                        <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                                             <div class="product-benefits">
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
                    • {{ benefit }}
                  </span>
                </div>
                <div class="product-price">{{ product.price }}</div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>     
        </div>            
      </div>
    </section>
  </div>
     <div v-if="showToast" class="toast">
  {{ toastMessage }}
</div>
<!-- Modal para ver imagen en grande -->
<div v-if="showModal" class="modal-overlay" @click="closeImageModal">
  <div class="modal-content" @click.stop>
    <button class="modal-close" @click="closeImageModal">✕</button>
    <img :src="selectedImage" :alt="selectedImage" class="modal-image" />
  </div>
</div>
</template>

<script>
import { cartStore } from "@/store/cart.js";
import { computed, ref } from 'vue';

export default {
  name: "Skin1004Page",
  setup() {
const showModal = ref(false);
const selectedImage = ref("");
    
    const showToast = ref(false);
const toastMessage = ref("");
let toastTimer = null;
    // Productos de Skin1004 organizados
       const products = [
 // COSRX
      {
        id: "COSRX-mascarilla-nocturna-60ml",
        name: "Mascarilla noctura de arroz 60 ml",
        tamanio: "60 ml",
        price: "$23.50",
        src: "/images/varias-marcas/8. cosrx mascarilla.png",
        description: "Mascarilla nocturna que contiene un 65% de extracto de arroz y otros ingredientes naturales para hidratar, nutrir e iluminar la piel mientras duermes.",
        benefits: ["Hidrata, ilumina y nutre la piel mientras duermes.","Aplica como último paso de la rutina del cuidado de la piel y lava con abundante agua en la mañana siguiente."],  
        category: "mascarilla",
        imageSize: "medium"
      },
      {
        id: "COSRX-esencia-caracol-100ml",
        name: "Esencia con baba de caracol 96 de 100 ml",
        tamanio: "100 ml",
        price: "$18.70",
        src: "/images/varias-marcas/7.cosrx esencia.png",
        description: "La esencia de mucina de caracol agrega humectación intensa para hidratar la piel mientras ayuda a repararla, reduce el enrojecimiento y mejora la textura y pigmentación de la piel.",
        benefits: ["Hidrata la piel y alivia la sequedad de la piel. Ayuda a reparar la piel dañada y reducir la hiperpigmentación y las líneas finas.","Está dirigido a diversos problemas de la piel y es  adecuado."],  
        category: "esencia",
        imageSize: "medium"
      },
      {
        id: "COSRX-bloqueador-solar-50ml",
        name: "Bloqueador solar iluminador aloe 54.2 aqua",
        tamanio: "50 ml",
        price: "$18.50",
        src: "/images/varias-marcas/28. cosrx bloqueador solar.png",
        description: "Este protector solar utiliza filtros químicos para ofrecer protección SPF 50+ PA++++.",
        benefits: ["Protege la piel del daño de los rayos UV con SPF 50+ PA++++ mientras brinda propiedades calmantes e hidratantes.","Le da a la piel un tinte rosado natural y vivo y también difumina la apariencia de los poros y la textura de la piel.","Brinda un acabado suave y aireado y no deja una sensación grasosa en la piel."],  
        category: "bloqueador solar",
        imageSize: "medium"
      },

    ];


    // Computed properties para organizar productos por categoría

    const esenciasProducts = computed(() => 
      (products.filter(product => product.category === 'esencia') || []).filter(p => p && p.id)
    );
    const sunscreenProducts = computed(() => 
      (products.filter(product => product.category === 'bloqueador solar') || []).filter(p => p && p.id)
    );
    const mascarillaProducts = computed(() => 
      (products.filter(product => product.category === 'mascarilla') || []).filter(p => p && p.id)
    );
const openImageModal = (imageSrc) => {
  selectedImage.value = imageSrc;
  showModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeImageModal = () => {
  showModal.value = false;
  selectedImage.value = "";
  document.body.style.overflow = "auto";
};
  const addToCart = (product) => {
      try {
        // Verificar que cartStore existe antes de usarlo
        if (cartStore && cartStore.addItem) {
          cartStore.addItem(product);
          

      toastMessage.value = `🛒 ${product.name} ${product.tamanio ? `(${product.tamanio})` : ""} agregado al carrito`;
      showToast.value = true;

      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        showToast.value = false;
      }, 3000);
        } else {
          console.error("Cart store no está disponible");
          alert("Error: No se pudo agregar al carrito");
        }
      } catch (error) {
        console.error("Error al agregar al carrito:", error);
        alert("Error al agregar el producto al carrito");
      }
    };

  return {
  esenciasProducts,
  sunscreenProducts,
  mascarillaProducts,
  addToCart,
  showToast,
  toastMessage,
    showModal,
  selectedImage,
  openImageModal,
  closeImageModal
   };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.anua-page {
  font-family: "Nunito", "Segoe UI", sans-serif;
  line-height: 1.6;
}

/* Header de la marca */
.brand-header {
  background: linear-gradient(135deg, #ffafcc 0%, #ffc8dd 50%, #bde0fe 100%);
  padding: 4rem 0;
  margin-bottom: 3rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.brand-intro {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
}

.brand-logo img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  background: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(255, 175, 204, 0.3);
}

.brand-info h1 {
  font-size: 3rem;
  color: #4a5759;
  margin-bottom: 1rem;
  font-weight: 800;
}

.brand-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.brand-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.feature {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #4a5759;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 175, 204, 0.2);
}

/* Secciones de productos */
.category-section {
  margin-bottom: 4rem;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.2rem;
  color: #4a5759;
  margin-bottom: 2rem;
  font-weight: 700;
}

.category-icon {
  font-size: 3.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
  justify-items: center;
  max-width: 100%;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(189, 224, 254, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(131, 197, 190, 0.2);
  border-color: #cdb4db;
}

.product-card.featured {
  border: 3px solid #83c5be;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
}

.image-small {
  height: 120px;
}

.image-medium {
  height: 160px;
}

.image-medium-large {
  height: 170px;
}
.image-large-medium {
  height: 180px;
}

.image-large {
  height: 200px;
}

.image-extra-large {
  height: 240px;
}


.product-image img {
  width: 90%;
  height: 90%;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px;
  box-sizing: border-box;
}

/* Tamaños específicos para cada imagen */
.image-small img {
  width: 70%;
  height: 70%;
}

.image-medium img {
  width: 85%;
  height: 85%;
}

.image-large img {
  width: 95%;
  height: 95%;
}

.image-extra-large img {
  width: 100%;
  height: 100%;
  padding: 2px;
}

.product-info {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  color: #4a5759;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  line-height: 1.3;
}

.product-size {
  color: #26c0b1;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.product-description {
  color: #666;
  margin-bottom: 0.8rem;
  line-height: 1.5;
  font-size: 0.9rem;
}

.product-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1rem;
}
/* Estilos para el Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  background: rgba(104, 102, 102, 0.58);
  border-radius: 20px;
  padding: 20px;
  max-width: 90%;
  max-height: 90vh;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 15px;
}

.modal-close {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e71919, #d61e09e1,#eb0a0a);
  color: rgba(252, 255, 255, 0.989);
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}
.modal-close:hover {
  transform: scale(1.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.product-benefits span {
  color: #58bab0;
  font-size: 0.8rem;
  font-weight: 500;
}
.product-price {
  font-size: 1.3rem;
  font-weight: 800;
  color: #4a5759;
  margin-bottom: 1rem;
  margin-top: auto;
  text-align: center;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(135deg, #1100ffaf,#564fea90, #1100ffaf);
  color: rgb(7, 7, 7);
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(131, 197, 190, 0.4);
}
.toast {
  position: fixed;
  top: 34px;
  left: 40%;
  transform:translateX(-50%);
  background: linear-gradient(130deg, #c28e00, rgb(250, 168, 46), #FFBC0A);
  color: #02090d;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  animation: toastSlideIn 0.3s ease;
  z-index: 5000;
}

  .product-card {
    max-width: 100%;
  }

</style>