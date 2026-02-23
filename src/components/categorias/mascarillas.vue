<template>   
  <div class="mascarillas-page">
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
          </div>
          <div class="brand-info">
            <h1>Mascarillas y Parches para el acné</h1>
           
          </div>
        </div>
      </div>
    </section>
    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
       
        <!-- Skin1004 -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Skin1004
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (skin1004Products || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🍃</span>
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
</template>

<script>
import { cartStore } from "@/store/cart.js";
import { computed, ref } from 'vue';

export default {
  name: "Categorias",
  setup() {

    
    const showToast = ref(false);
const toastMessage = ref("");
let toastTimer = null;
    // Productos de Skin1004 organizados
       const products = [
        //anua
      //boj
  
      //mixsoon

      //skin1004
        {
        id: "skin1004-mascarilla-poremizing-27gr",
        name: "Mascarilla de Arcilla Poremizing",
        tamanio: "27g",
        price: "$27.30",
        src: "/images/skin1004/mascarilla-poremizing-27gr.webp",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["No contiene fragancias ni colorantes, es apta para todo tipo de piel.",
"Contiene poderosas propiedades limpiadoras de poros y absorbentes de sebo.","Fácil de aplicar sin mancharse las manos."],
        category: "skin1004",
        imageSize: "medium"
      },
         {
        id: "skin1004-mascarilla-nocturna-hyalucica-30ml",
        name: "Mascarilla Nocturna Hyalu-Cica",
        tamanio: "30ml",
        price: "$10.60",
        src: "/images/skin1004/mascarilla-nocturna-hyalucica-30ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Piel suave, rejuvenecida y radiante.",
"Contiene ingredientes humectantes y calmantes para una piel más hidratada y equilibrada.",
"Hidratación profunda y duradera."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-mascarilla-nocturna-hyalucica-100ml",
        name: "Mascarilla Nocturna Hyalu-Cica",
        tamanio: "100ml",
        price: "$22.00",
        src: "/images/skin1004/mascarilla-nocturna-hyalucica-100ml.webp",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Piel suave, rejuvenecida y radiante.",
"Contiene ingredientes humectantes y calmantes para una piel más hidratada y equilibrada.",
"Hidratación profunda y duradera."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-pack-mascarillas-calabaza-16-piezas",
        name: "Pack de 16 Mascarillas Calabaza",
        tamanio: "16 piezas",
        price: "$16.00",
        src: "/images/skin1004/mascarilla-calabaza-16-piezas.webp",
        description: "Mascarillas multifuncionales diseñadas para pieles deshidratas y flacidas.",
        benefits: ["Mejora la textura de la piel gracias al extracto de miel, el extracto de jalea real y el extracto de propóleo.",
"Enriquecida con polvo y aceite de té verde para una revitalización cutánea excepcional."],
        category: "skin1004",
        imageSize: "medium"
      },
         {
        id: "skin1004-witch-pack-mascarillas-16-piezas",
        name: "Witch Pack de 16 Mascarillas",
        tamanio: "16 piezas",
        price: "$15.50",
        src: "/images/skin1004/mascarilla-witch-pack-16-piezas.jpg",
        description: "Mascarillas multifuncionales diseñadas para pieles deshidratas y flacidas.",
        benefits: ["Además, ayuda a reducir la apariencia de los poros dilatados y elimina suavemente las células muertas",
        "Contiene un 71 % de agua de té verde, que hidrata profundamente y calma la piel cansada e hinchada."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-zombie-pack-mascarillas-16-piezas",
        name: "Zombie Pack de 16 Mascarillas",
        tamanio: "16 piezas",
        price: "$25.00",
        src: "/images/skin1004/mascarilla-zombie-16-piezas.jpg",
        description: "Combate los puntos negros y ofrece un efecto lifting.",
        benefits: ["Enriquecido con adenosina, albúmina, pantenol y extracto de propóleo antibacteriano.",
        "Sin parabenos, aceites minerales, TEA, alcohol ni colorantes artificiales."],
        category: "skin1004",
        imageSize: "medium"
      }, {
        id: "skin1004-parches-tea-trica",
        name: "Parches de Tea - Trica",
        tamanio: "22 piezas",
        price: "$6.00",
        src: "/images/skin1004/parches-tea-trica.webp",
        description: "Parches para acné en diferentes tamaños.",
        benefits: ["Especialmente diseñado para pieles con problemas y propensas al acné.",
        "Los parches hidrocoloides absorben el pus y protegen la herida gracias a sus ingredientes activos.",
      "Probado dermatológicamente."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-mascarilla-tea-trica",
        name: "Mascarilla de Tea - Trica",
        tamanio: "1 pieza",
        price: "$3.50",
        src: "/images/skin1004/mascarilla-tea-trica.jpeg",
        description: "Mascarilla con centella y tea -trica.",
        benefits: ["Ofrece un efecto calmante e hidrtante instantáneo para la piel.",
        "El ácido salicílico y la niacinamida limpian los poros y suavizan la textura de la piel.",
      "Supera la prueba de irritación cutánea, por lo que es apta para todo tipo de piel."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-mascarilla-poremizing",
        name: "Mascarilla Poremizing",
        tamanio: "1 pieza",
        price: "$3.50",
        src: "/images/skin1004/mascarilla-poremizing.jpg",
        description: "Combate los problemas de los poros.",
        benefits: ["Elimina eficazmente las impurezas y el exceso de sebo de los poros, dejando la piel fresca y limpia.",
        "Proporciona un efecto de peeling rápido y uniforme, dejando la piel más suave y refinada.",
      "Ayuda a reducir la apariencia de los poros dilatados y mejora la textura de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
          {
        id: "skin1004-mascarilla-tono-iluminador",
        name: "Mascarilla Tono Iluminador",
        tamanio: "1 pieza",
        price: "$3.50",
        src: "/images/skin1004/mascarilla-tono-iluminador.jpg",
        description: "Ilumina y suaviza la piel.",
        benefits: ["Reduce las manchas oscuras y mejora el tono de la piel.",
        "Minimiza la irritación y proporcina un efecto calmante."],
        category: "skin1004",
        imageSize: "medium"
      },
     
    ];


    // Computed properties para organizar productos por categoría
    const anuaProducts = computed(() => 
      (products.filter(product => product.category === 'anua') || []).filter(p => p && p.id)
    );
  const bojProducts = computed(() => 
      (products.filter(product => product.category === 'boj') || []).filter(p => p && p.id)
    );
     const mixsoonProducts = computed(() => 
      (products.filter(product => product.category === 'mixsoon') || []).filter(p => p && p.id)
    );
     const skin1004Products = computed(() => 
      (products.filter(product => product.category === 'skin1004') || []).filter(p => p && p.id)
    );
     const celimaxProducts = computed(() => 
      (products.filter(product => product.category === 'celimax') || []).filter(p => p && p.id)
    );

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
  anuaProducts,
  bojProducts,
  mixsoonProducts,
  skin1004Products,
  celimaxProducts,
  addToCart,
  showToast,
  toastMessage
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

.mascarillas-page {
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
  color: #83c5be;
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

.product-benefits span {
  color: #83c5be;
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