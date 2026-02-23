<template>   
  <div class="hidratantes-page">
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
          </div>
          <div class="brand-info">
            <h1>Cremas hidratantes para cara y ojos</h1>
            </div>
        </div>
      </div>
    </section>
    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
       
        <!-- Beauty of Joseon -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Beauty of Joseon
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (bojProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
         <!-- Celimax -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Celimax
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (celimaxProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
        <!-- Mixsoon -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Mixsoon
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (mixsoonProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
  name: "Categorias",
  setup() {

    
    const showToast = ref(false);
    const toastMessage = ref("");
    const showModal = ref(false);
    const selectedImage = ref("");
    let toastTimer = null;
    // Productos de Skin1004 organizados
       const products = [
      //boj
    {
        id: "BOJ-serúm-para-ojos-30ml",
        name: "Crema para ojos",
        tamanio: "30 ml",
        price: "$19",
        src: "/images/boj/6. Serum de ojos.png",
        description: "Crema para contornos de ojos",
        benefits: ["Mejora las arrugas en el área sensible de los ojos. Brinda una rica hidratación profunda en la piel y la mantienen completamente hidratada durante todo el día.","Aplicación suave y deja un acabado sedoso no pegajoso."], 
        category: "boj",
        imageSize: "medium"
      },
      //celimax
      {
        id: "Celimax-crema-reparadora-50ml",
        name: "Crema facual reparadora de noni de 50 ml",
        tamanio: "50 ml",
        price: "$39.10",
        src: "/images/celimax/9. Crema reparadora.png",
        description: "Crema facial reparadora, enriquecida con un 55% de extracto de noni y un 1% de aceite de semilla de noni, que calma e ilumina la piel dañada.",
        benefits: ["Calma e hidrata la piel seca y dañada. Contiene ceramida para fortalecer la barrera de humedad y ayudar a prevenir la pérdida de agua de la piel.","Mejora las arrugas, y se funde en la piel con una textura ligera y suave y deja un aroma a romero."], 
        category: "celimax",
        imageSize: "medium"
      },
         {
        id: "Celimax-pad-exfoliante-60pcs",
        name: "Pad exfoliante jowoogae heartleaf BHA 60 piezas",
        tamanio: "60 piezas",
        price: "$26",
        src: "/images/celimax/10. peeling pad.png",
        description: "Estas almohadillas multitarea empapadas en tónico de ácido hialurónico eliminan y pulen las impurezas de la piel, como la suciedad y las células muertas.",
        benefits: ["Su suave formulación y sus ingredientes que fortalecen la piel lo hacen adecuado para el uso diario.","BHA ayuda a exfoliar las células muertas de la piel y el sebo sin causar estimulación.",
        "El ácido hialurónico suave y agradable a la piel se infiltra profundamente en la piel para una hidratación duradera."], 
        category: "celimax",
        imageSize: "medium"
      },
      //mixsoon
      	{
        id: "mixsoon-bean-cream-15ml",
        name: "Crema de frijol mini",
        tamanio: "15ml",
        price: "$13",
        src: "/images/mixsoon/14. mixsoon crema mini de frijol.png",
        description: "Crema altamente hidratante y rica en nutrientes.",
        benefits: ["Ayuda a mantener el equilibrio hidro-oleoso de la piel con extracto de fermento de soja. ","Suaviza la textura de la piel y reduce las células muertas gracias al extracto de fermento de fruta de Lactobacillus. ","Su textura densa y firme ayuda a mantener la piel hidratada durante mucho tiempo con un acabado no pegajoso."], 
        category: "mixsoon",
        imageSize: "large"
      },
	{
        id: "mixsoon-bean-cream-50ml",
        name: "Crema de frijol",
        tamanio: "50ml",
        price: "$30.90",
        src: "/images/mixsoon/15. mixsoon crema de frijol .png",
        description: "Crema altamente hidratante y rica en nutrientes.",
        benefits: ["Ayuda a mantener el equilibrio hidro-oleoso de la piel con extracto de fermento de soja. ","Suaviza la textura de la piel y reduce las células muertas gracias al extracto de fermento de fruta de Lactobacillus. ","Su textura densa y firme ayuda a mantener la piel hidratada durante mucho tiempo con un acabado no pegajoso."], 
        category: "mixsoon",
        imageSize: "large"
      },
      {
        id: "mixsoon-crema-de-ojos-20ml",
        name: "Crema de ojos",
        tamanio: "20 ml",
        price: "$26",
        src: "/images/mixsoon/1. mixsoon crema de ojos.png",
        description: "Crema hidratante  para el contorno de ojos ",
        benefits: ["Brinda un efecto calmante, a la vez que minimiza las arrugas y estimula la renovación celular.","Potencia la hidratación de la piel y la síntesis de colágeno.","Test de irritación cutánea superado."], 
        category: "mixsoon",
        imageSize: "medium"
      },
      {
        id: "mixsoon-balsamo-en-barra-11.5ml",
        name: "Bálsamo en barra de frijol",
        tamanio: "11.5 ml",
        price: "$26",
        src: "/images/mixsoon/2. balsamo en barra.png",
        description: "Bálsamo en barra que hidrata y nutre la piel en cualquier momento del día.",
        benefits: ["Formulado con aceite de soya (Glycine soja), ingrediente exclusivo de mixsoon, que brinda nutrición profunda y refuerza la barrera cutánea.","Enriquecido con 9 tipos de probióticos que ayudan a mantener el equilibrio natural de la piel.","Deja la piel con un brillo saludable y un aspecto visiblemente más relleno."], 
        category: "mixsoon",
        imageSize: "medium"
      },
      //skin1004
      {
        id: "skin1004-crema-hidratante-30ml",
        name: "Madagascar Centella Crema Hidratante",
        tamanio: "30ml",
        price: "$12.30",
        src: "/images/skin1004/crema-hidratante-30ml.png",
        description: "Para pieles sensibles, mixtas con tendencia a seca.",
        benefits: ["Calma la piel con humedad al crear una barrera protectora.", 
        "La técnica de mezcla de aceite en agua proporciona un acabado refrescante e hidratante mientras mantiene una textura suave de aceite.", 
        "Es adecuado para todo tipo de piel, incluidas las pieles sensibles."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-crema-hidratante-75ml",
        name: "Madagascar Centella Crema Hidratante",
        tamanio: "75ml",
        price: "$25.10",
        src: "/images/skin1004/crema-hidratante-75ml.avif",
        description: "Para pieles sensibles, mixtas con tendencia a seca.",
        benefits: ["Calma la piel con humedad al crear una barrera protectora.", 
        "La técnica de mezcla de aceite en agua proporciona un acabado refrescante e hidratante mientras mantiene una textura suave de aceite.", 
        "Es adecuado para todo tipo de piel, incluidas las pieles sensibles."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-crema-hidratante-tono-iluminador-75ml",
        name: "Crema Hidratante Tono Iluminador",
        tamanio: "75ml",
        price: "$25.50",
        src: "/images/skin1004/crema-hidratante-tono-iluminador-75ml.png",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Ayuda a mejorar el tono desigual de la piel a la vez repone la hidratación.", 
        "Combate las imperfecciones de la piel con MadeWhite™ que aclara y calma la piel.", 
        "Su textura de gel de aceite en agua proporciona una hidratación ligera y duradera."],
        category: "skin1004",
        imageSize: "medium"
      },
          {
        id: "skin1004-crema-hidratante-poremizing-75ml",
        name: "Crema Hidratante Poremizing",
        tamanio: "75ml",
        price: "$24.50",
        src: "/images/skin1004/crema-hidratante-poremizing-75ml.webp",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["Ayuda a reducir la apariencia de los poros dilatados mientras repone la piel", 
        "Junto con la niacinamida, tu piel queda iluminada y revitalizada"],
        category: "skin1004",
        imageSize: "medium"
      },
          {
        id: "skin1004-crema-hidratante-teatrica-75ml",
        name: "Crema Humectante Tea-Trica",
        tamanio: "75ml",
        price: "$24.50",
        src: "/images/skin1004/crema-hidratante-teatrica-75ml.jpg",
        description: "Tipo de piel: Grasa propensa al acné.",
        benefits: ["Contiene propiedades hidratantes, protectoras y calmantes.", 
        "Promueve la renovación de la piel y fortalece la barrera cutánea.","El 50% del producto esta elaborado a partir de una formulación de Tea-Trica."],
        category: "skin1004",
        imageSize: "medium"
      },   
       {
        id: "skin1004-crema-spot-teatrica-20ml",
        name: "Spot Crema Tea-Trica",
        tamanio: "20ml",
        price: "$24.50",
        src: "/images/skin1004/crema-spot-teatrica-20ml.webp",
        description: "Tipo de piel: Grasa propensa al acné.",
        benefits: ["La calamina ayuda a absorber el exceso de sebo para mantener la piel suave", 
        "La textura de loción en gel es fácil de absorber y deja un acabado refrescante.",
        "Aplicar una capa gruesa sobre la zona afectada de 1 a 3 veces al día"],
        category: "skin1004",
        imageSize: "medium"
      },   
      {
        id: "skin1004-crema-ojos-probiocica-20ml",
        name: "Crema de Ojos Probio cica",
        tamanio: "20ml",
        price: "$18.90",
        src: "/images/skin1004/crema-ojos-probiocica-20ml.webp",
        description: "Tipo de piel: Piel seca y con linea de expresión. Anti-edad.",
        benefits: ["Probado por dermatólogos", 
        "Contiene bakuchiol para restaurar la firmeza de la piel.",
      "Propiedades anti-edad que ayudan a reducir la apariencia de líneas finas y arrugas alrededor de los ojos."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-crema-hidratante-probiocica-50ml",
        name: "Crema Hidratante Probio cica",
        tamanio: "50ml",
        price: "$26.10",
        src: "/images/skin1004/crema-hidratante-probiocica-50ml.webp",
        description: "Tipo de piel: Piel seca y con linea de expresión. Anti-edad.",
        benefits: ["Se estira como un hilo, lo que permite masajear y acariciar la piel sin irritación, y equilibra la grasa y la humedad", 
        "repara la barrera cutánea débil y sensible con ProBio-Cica vegano, cuidando la piel seca y sensible",],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-crema-hidratante-probiocica-15ml",
        name: "Crema Hidratante Probio cica",
        tamanio: "15ml",
        price: "$12.30",
        src: "/images/skin1004/crema-hidratante-probiocica-15ml.webp",
        description: "Tipo de piel: Piel seca y con linea de expresión. Anti-edad.",
        benefits: ["Se estira como un hilo, lo que permite masajear y acariciar la piel sin irritación, y equilibra la grasa y la humedad", 
        "repara la barrera cutánea débil y sensible con ProBio-Cica vegano, cuidando la piel seca y sensible",],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-crema-hidratante-hyalucica-75ml",
        name: "Crema Hidratante Hyalu cica",
        tamanio: "75ml",
        price: "$24.75",
        src: "/images/skin1004/crema-hidratante-hyalucica-75ml.png",
        description: "Tipo de piel: Piel seca,irritada y sensible.",
        benefits: ["Un humectante que empapa la piel proporciona una hidratación profunda y duradera", 
        "Calma la piel irritada y fortalece la barrera protectora de la piel",
      "Mejora la elasticidad de la piel y combate los signos del envejecimiento prematuro."],
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
    anuaProducts,
    bojProducts,
    mixsoonProducts,
    skin1004Products,
    celimaxProducts,
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

.hidratantes-page {
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