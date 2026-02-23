<template>   
  <div class="tonico-page">
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
          </div>
          <div class="brand-info">
            <h1>Tónicos</h1>
        
          </div>
        </div>
      </div>
    </section>
    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
        <!-- Anua -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Anua
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (anuaProducts || [])" 
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
      {
        //anua
        id: "ANUA-tónico-heartleaf-77%-40ml",
        name: "Tónico heartleaf 77%",
        tamanio: "40 ml",
        price: "$10.35",
        src: "/images/anua/3. Tónico heartleaf.png",
        description: "Tónico altamente hidratante que calma y protege la piel sensible. Su pH ligeramente ácido también ayuda a regular los niveles de sebo y humedad de la piel.",
        benefits: ["Tónico hidratante formulado con un 77% de extracto de houttuynia cordata que ayuda a calmar la piel sensible y a protegerla de las irritaciones externas.","Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.",
        "Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana."], 
        category: "anua",
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
        category: "anua",
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
        category: "anua",
        imageSize: "medium"
      },
      //boj
       {
        id: "BOJ-tónico-leche-arroz-150ml",
        name: "Tónico de arroz reponedora de brillo 150 ml",
        tamanio: "150 ml",
        price: "$23.10",
        src: "/images/boj/7. Tónico de arroz.png",
        description: "Tónico hidratante infusionado con extracto de arroz y aminoácidos del arroz que combate la resequedad de la piel",
        benefits: ["Ofrece nutrientes a piel seca y sensible para lograr un cutis suave y brillante.","Ofrece un cuidado adicional a los poros para pieles propensas al acné","Contiene aminoácidos que mejoran los efectos antioxidantes e hidratantes para la piel seca."], 
        category: "boj",
        imageSize: "medium"
      },
      //mixsoon
      	{
        id: "mixsoon-centella-toner-pad-280ml",
        name: "Discos de algodón con tónico de centella",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/16. mixsoon centella toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Almohadillas tónicas hidratantes con ingredientes de centella para calmar la piel irritada. ","Contiene extracto de Centella Asiática que tiene sinergia con alatoína, betaína y ceramida NP para proporcionar fuertes propiedades calmantes, calmantes y reparadoras de la piel. Las almohadillas se pueden dividir fácilmente en 2 pedazos para aplicarlas en diferentes áreas de la piel."], 
        category: "mixsoon",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-galactomices-toner-pad-280ml",
        name: "Discos de algodón con tónico de galactomices",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/17. mixsoon galactomices toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Toner pads hidratantes con galactomyces que ayudan a iluminar y mejorar el tono desigual de la piel. ","El galactomyces es rico en nutrientes como aminoácidos, vitaminas, proteínas y homo-péptidos que revitalizan la piel opaca para un acabado suave tipo porcelana. ","Formulado con alantoína para hidratar la piel y darle un brillo saludable. Los pads pueden dividirse fácilmente en 2 partes para aplicarlos en diferentes zonas del rostro."], 
        category: "mixsoon",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-bean-toner-pad-280ml",
        name: "Discos de algodón con tónico de frijól",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/19. mixsoon frijol toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Almohadillas tónicas hidratantes con ingredientes de frijoles ricos en proteínas para nutrir profundamente la piel. ","Contiene 7 tipos de extractos de frijol, como semillas de frijol, lentejas y soja silvestre, que contienen ricos aminoácidos con Lactobacillus para recargar nutrientes y proporcionar beneficios antienvejecimiento. ","Formulado con ácido hialurónico y alatoína para hidratar la piel y fortalecer la barrera de humedad de la piel. El material de la almohadilla está hecho de algodón natural que es suave y también contiene semillas de algodón para una exfoliación suave. Las almohadillas se pueden dividir fácilmente en 2 pedazos para aplicarlas en diferentes áreas de la piel."], 
        category: "mixsoon",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-bifida-toner-pad-280ml",
        name: "Discos de algodón con tónico de frijól",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/18. mixsoon bifida toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Almohadillas tónicas hidratantes con ingredientes de fermento bífida para ayudar a restaurar el equilibrio saludable de agua y grasa de la piel. ","Contiene 4 tipos de ingredientes fermentados, que ayudan a reparar la barrera cutánea colapsada y a equilibrar el nivel de agua y grasa de la piel. ","Formulado con 3 tipos de ácidos hialurónicos que hacen sinergia con pantenol, ceramida NP y aceite de semilla de Limnanthes alba (espuma de prado) para hidratar profundamente y formar una barrera contra la humedad."], 
        category: "mixsoon",
        imageSize: "medium"
      },

      //skin1004
      {
        id: "skin1004-ampoule-tonico-30ml",
        name: "Tonico Madagascar Centella",
        tamanio: "30ml",
        price: "$12.00",
        src: "/images/skin1004/toner-centella-toning-toner.jpg",
        description: "Ampolla concentrada con 100% centella asiatica para calmar e hidratar, para piel sensible, mixta con tendencia a seca.",
        benefits: ["Calmar e hidratar la piel irritada",
        "Proporciona una exfoliación suave con PHA para pieles sensibles", 
        "Aclara la piel con Niacinamida y mejora las arrugas con Adenosina."],
        category: "skin1004",
        featured: true,
        imageSize: "large"
      },
      {
        id: "skin1004-ampoule-tonico-210ml",
        name: "Tonico Madagascar Centella",
        tamanio: "210ml",
        price: "$28.50",
        src: "/images/skin1004/toner-210ml-centella-toning-toner.jpg",
        description: "Ampolla concentrada con 100% centella asiatica para calmar e hidratar, para piel sensible, mixta con tendencia a seca.",
        benefits: ["Calmar e hidratar la piel irritada",
        "Proporciona una exfoliación suave con PHA para pieles sensibles", 
        "Aclara la piel con Niacinamida y mejora las arrugas con Adenosina."],
        category: "skin1004",
        featured: true,
        imageSize: "large"
      },
      {
        id: "skin1004-ampoule-tonico-tono-iluminador-210ml",
        name: "Tónico Madagascar Centella Tono Iluminador",
        tamanio: "210ml",
        price: "$26.50",
        src: "/images/skin1004/tonico-tono-iluminador.jpg",
        description: "Tónico Tono Iluminador para pieles con hiperpigmentación, decoloración e inflamación.",
        benefits: ["Doble acción que ayuda a reponer la hidratación y mejorar el tono de la piel.",
        "MadeWhite™ , mantiene una piel radiante.", 
        "Elimina suavemente las células muertas.",
      "Deja la piel tersa, revitalizada y con un aspecto juvenil."],
        category: "skin1004",
        featured: true,
        imageSize: "large"
      },
      {
        id: "skin1004-ampoule-tonico-poremizing-210ml",
        name: "Tónico Madagascar Centella Tono Poremizing",
        tamanio: "210ml",
        price: "$26.50",
        src: "/images/skin1004/tonico-poremizing.jpg",
        description: "Tónico Poremizing para piel grasa con poros dilatados.",
        benefits: ["Diseñado para piel grasa que minimiza la apariencia de poros dilatados causados por el exceso de sebo.", 
        "Elimina suavemente las células muertas y los residuos de los poros, revitalizando la piel.",
      "Deja la piel fresca, suave e iluminada."],
        category: "skin1004",
        featured: true,
        imageSize: "large"
      },
      {
        id: "skin1004-ampoule-tonico-teatrica-210ml",
        name: "Tónico Madagascar Centella Tea-Trica",
        tamanio: "210ml",
        price: "$26.50",
        src: "/images/skin1004/tonico-teatrica.jpg",
        description: "Tónico Tono Tea-Trica para piel grasa con poros dilatados.",
        benefits: ["Probado dermatológicamente, no comedogénico", 
        "Adecuado para pieles sensibles y propensas al acné",
      "Ayuda a reducir el exceso de secreción de sebo, eliminar las células muertas de la piel y los residuos de los poros."],
        category: "skin1004",
        featured: true,
        imageSize: "large"
      },
      {
        id: "skin1004-ampoule-tonico-teatrica-210ml",
        name: "Tónico Priobio-Cica",
        tamanio: "210ml",
        price: "$26.50",
        src: "/images/skin1004/tonico-priobio-cica.jpg",
        description: "Tónico Priobio-Cica para piel seca y sensible.",
        benefits: ["Contiene ProBio-Cica vegano que cuida la barrera cutánea débil y sensible", 
        "Previene la evaporación de la humedad y cuida la piel seca y sensible",
      "Mejora la suavidad de la frente, mentón, nariz y mejillas, contorno de las cejas, los ojos y la boca"],
        category: "skin1004",
        featured: true,
        imageSize: "large"
      },
       {
        id: "skin1004-ampoule-tonico-hyalu-cica-210ml",
        name: "Tónico Hyalu-Cica",
        tamanio: "210ml",
        price: "$26.50",
        src: "/images/skin1004/tonico-hyalu-cica.jpg",
        description: "Tónico Hyalu-Cica para piel seca y sensible.",
        benefits: ["Un tónico multiusos que calma, hidrata y rejuvenece la piel", 
        "Elimina suavemente las células muertas de la piel y las impurezas",
      "Alivia las molestias cutáneas y calma las irritaciones."],
        category: "skin1004",
        featured: true,
        imageSize: "large"
      },
      {
        id: "skin1004-ampoule-discos-algodon-hialuronico-70discos",
        name: "Discos de Algodón con Ácido Hialurónico",
        tamanio: "70 Discos",
        price: "$25.60",
        src: "/images/skin1004/tonico-discos.webp",
        description: "70 Discos de algodón con ácido hialurónico para piel seca y sensible.",
        benefits: ["Ofrece una hidratación profunda a la vez que eliminan suavemente las células muertas de la piel y las impurezas.", 
        "Contienen un 49% de extracto de centella asiática de Madagascar para un efecto calmante.",
      "Ayuda a potenciar y retener la hidratación de la piel durante más tiempo."],
        category: "skin1004",
        featured: true,
        imageSize: "large"
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

.tonico-page {
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