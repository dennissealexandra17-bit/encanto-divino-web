<template>   
  <div class="anua-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/anua.png" alt="Anua" />
          </div>
          <div class="brand-info">
            <h1>Anua</h1>
            <p class="brand-description">
            Anua es una marca coreana reconocida por su enfoque en el cuidado de la piel 
            con ingredientes naturales y fórmulas suaves. Sus productos están diseñados 
            para equilibrar, calmar e hidratar la piel, siendo ideales para pieles sensibles 
            o propensas a la irritación. Anua destaca por su compromiso con la transparencia, 
            la sostenibilidad y la efectividad, utilizando extractos botánicos como el de 
            artemisa y centella asiática para ofrecer resultados visibles y duraderos.
            </p>
            <div class="brand-features">
              <span class="feature">🌸 Formulaciones minimalistas</span>
              <span class="feature">🧖‍♀️ Texturas Ligeras</span>
              <span class="feature">🌱 Vegano</span>
              <span class="feature">💎 Cruelty -  free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
        <!-- Limpiadores -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🫧</span>
            Limpiadores
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (cleansingProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
            >
              <div class="product-image" :class="`image-${product.imageSize}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🫧</span>
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

        <!-- Serums -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">💧</span>
            Serums
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (serumsProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">💧</span>
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

        <!-- Tonicos -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Tónicos
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (tonicosProducts || [])" 
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
  name: "Skin1004Page",
  setup() {

    
    const showToast = ref(false);
const toastMessage = ref("");
let toastTimer = null;
    // Productos de Skin1004 organizados
       const products = [
      // ANUA
      {
        id: "ANUA-Aceite-limpiador-200ml",
        name: "Aceite limpiador heartleaf control poros",
        tamanio: "200 ml",
        price: "$25.10",
        src: "/images/anua/1. aceite limpiador.png",
        description: "Este aceite limpiador elimina eficazmente las impurezas de la piel, dejando un acabado fresco e hidratado",
        benefits: ["Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.","Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana.","Perfecta para piel propensa al acné y poros abiertos."], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "ANUA-espuma-limpiadora-150ml",
        name: "Espuma limpiador heartleaf control de poros",
        tamanio: "150 ml",
        price: "$18.40",
        src: "/images/anua/2. Espuma limpiadora.png",
        description: "Espuma limpiadora enriquecida con polvo de planta camaleón para eliminar las células muertas de la piel y purificar los poros.",
        benefits: ["Elimina las células muertas de la piel y las impurezas en los poros.","Calma la irritación causada por la limpieza. Incluye el ingrediente patentado Anti-Sebum P para eliminar el exceso de sebo.","Perfecta para piel propensa al acné y poros abiertos."], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "ANUA-tónico-heartleaf-77%-40ml",
        name: "Tónico heartleaf 77%",
        tamanio: "40 ml",
        price: "$10.35",
        src: "/images/anua/3. Tónico heartleaf.png",
        description: "Tónico altamente hidratante que calma y protege la piel sensible. Su pH ligeramente ácido también ayuda a regular los niveles de sebo y humedad de la piel.",
        benefits: ["Tónico hidratante formulado con un 77% de extracto de houttuynia cordata que ayuda a calmar la piel sensible y a protegerla de las irritaciones externas.","Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.",
        "Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana."], 
        category: "tónico",
        imageSize: "medium"
      },
      {
        id: "ANUA-tónico-heartleaf-77%-150ml",
        name: "Tónico heartleaf 77%",
        tamanio: "150 ml",
        price: "$18.60",
        src: "/images/anua/3. Tónico heartleaf.png",
        description: "Tónico altamente hidratante que calma y protege la piel sensible. Su pH ligeramente ácido también ayuda a regular los niveles de sebo y humedad de la piel.",
        benefits: ["Tónico hidratante formulado con un 77% de extracto de houttuynia cordata que ayuda a calmar la piel sensible y a protegerla de las irritaciones externas.","Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.",
        "Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana."], 
        category: "tónico",
        imageSize: "medium"
      },
      {
        id: "ANUA-tónico-heartleaf-77%-250ml",
        name: "Tónico heartleaf 77%",
        tamanio: "250 ml",
        price: "$24.90",
        src: "/images/anua/3. Tónico heartleaf.png",
        description: "Tónico altamente hidratante que calma y protege la piel sensible. Su pH ligeramente ácido también ayuda a regular los niveles de sebo y humedad de la piel.",
        benefits: ["Tónico hidratante formulado con un 77% de extracto de houttuynia cordata que ayuda a calmar la piel sensible y a protegerla de las irritaciones externas.","Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.",
        "Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana."], 
        category: "tónico",
        imageSize: "medium"
      },
      {
        id: "ANUA-Sérum-niacinamida-30ml",
        name: "Sérum con niacinamida 0%+ TXA 4%",
        tamanio: "30 ml",
        price: "$30",
        src: "/images/anua/4. serum con niacinamida.png",
        description: "Este sérum contienen una poderosa combinación iluminadora de 10% de niacinamida y 4 % de ácido tranexámico, el cual ayuda a eliminar las manchas oscuras y las marcas postacné",
        benefits: ["Combate las manchas oscuras rebeldes y la hiperpigmentación ayudando a reducir la decoloración.",
        "Ayudar a corregir el tono desigual de la piel al limitar la producción de melanina.","Una textura ligera y sin pegajosidad."], 
        category: "sérum",
        imageSize: "medium"
      },
      {
        id: "Anua-Sérum-ácido-hialurónico-30ml",
        name: "Sérum con ácido hialurónico",
        tamanio: "30 ml",
        price: "$35.50",
        src: "/images/anua/5. serum con ácido hialuronico.png",
        description: "Refuerza la barrera de hidratación y firmeza de la piel con este sérum hidratante que contiene PDRN, colágeno y 11 tipos de ácido hialurónico",
        benefits: ["Mejora la textura general de la piel y proporcionar una hidratación profunda a la piel deshidratada.","Ayuda a restaurar la vitalidad de la piel y a reducir la apariencia de líneas de expresión y arrugas."], 
        category: "sérum",
        imageSize: "medium"
      },
      {
        id: "ANUA-Sérum-calmante-ácido-azelaico-30ml",
        name: "Sérum calmante con ácido azelaico 10%",
        tamanio: "30 ml",
        price: "$30",
        src: "/images/anua/6. serum con acido azelaico.png",
        description: "Este sérum ligero se caracteriza por un 10% de ácido azelaico, un ingrediente estrella para aliviar el acné, la rosácea y la hiperpigmentación, mientras el ácido hialurónico da una hidratación de larga duración.",
        benefits: ["Calma la piel irritada debido a la sequedad.","Hidratación duradera a la piel y ayuda a calmar la piel con ingredientes de aceite de tansy azul y agua de hoja de té verde.","Ayuda a calmar el enrojecimiento de la piel causado por la sequedad."], 
        category: "sérum",
        imageSize: "medium"
      },
      {
        id: "ANUA-serum-acido-hialuronico-30ml",
        name: "Sérum con extracto de durazno",
        tamanio: "30 ml",
        price: "$32.50",
        src: "/images/anua/7. serum peach 70.png",
        description: "Sérum con un 70% de extracto de durazno y un 5% de niacinamida que dejará tu piel más suave y con un tono más unificado",
        benefits: ["Mejora el tono de la piel mediante extracto de melocotón y niacinamida.","Elimina la piel muerta y limpia los poros cansados con Peach Yogurt Complex","Aporta un brillo hidratantegracias a tres tipos de ácido hidrónico y aceite de levadura del desierto"], 
        category: "sérum",
        imageSize: "medium"
      },
    ];


    // Computed properties para organizar productos por categoría
    const cleansingProducts = computed(() => 
      (products.filter(product => product.category === 'cleansing') || []).filter(p => p && p.id)
    );
    const tonicosProducts = computed(() => 
      (products.filter(product => product.category === 'tónico') || []).filter(p => p && p.id)
    );
    const moisturizerProducts = computed(() => 
      (products.filter(product => product.category === 'cream') || []).filter(p => p && p.id)
    );
    const serumsProducts = computed(() => 
      (products.filter(product => product.category === 'sérum') || []).filter(p => p && p.id)
    );
    const sunscreenProducts = computed(() => 
      (products.filter(product => product.category === 'protector solar') || []).filter(p => p && p.id)
    );
    const exfoliantesProducts = computed(() => 
      (products.filter(product => product.category === 'exfoliante') || []).filter(p => p && p.id)
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
  cleansingProducts,
  tonicosProducts,
  moisturizerProducts,
  serumsProducts,
  sunscreenProducts,
  exfoliantesProducts,
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