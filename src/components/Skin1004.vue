<template>
  <div class="skin1004-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/skin1004.webp" alt="Skin1004" />
          </div>
          <div class="brand-info">
            <h1>SKIN1004</h1>
            <p class="brand-description">
              SKIN1004 es una popular marca coreana de skincare famosa
               por su uso de la Centella Asiática de Madagascar como 
               ingrediente estrella, ofreciendo productos calmantes 
               y reparadores, especialmente para pieles sensibles o 
               irritadas, con fórmulas minimalistas, veganas, hipoalergénicas 
               y cruelty-free, enfocándose en la pureza y la efectividad para 
               lograr una "piel de ángel"
            </p>
            <div class="brand-features">
              <span class="feature">🌿 Ingredientes Naturales</span>
              <span class="feature">✨ Piel Sensible</span>
              <span class="feature">🇰🇷 K-Beauty Auténtico</span>
              <span class="feature">🍃 Centella Asiática</span>
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
            <!-- Producto dinámico usando v-for -->
            <div 
              v-for="product in cleansingProducts" 
              :key="product.id"
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
                  <span v-for="benefit in product.benefits" :key="benefit">
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
            <span class="category-icon">✨</span>
            Tónicos
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in tonicosProducts" 
              :key="product.id"
              class="product-card"
              :class="{ featured: product.featured }"
            >
            <!--  <div v-if="product.featured" class="featured-badge">Bestseller</div>-->
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">✨</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in product.benefits" :key="benefit">
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

        <!-- Cremas Hidratantes -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">💧</span>
            Cremas Hidratantes
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in moisturizerProducts" 
              :key="product.id"
              class="product-card"
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
                  <span v-for="benefit in product.benefits" :key="benefit">
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
        <!-- Protectores Solares-->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">💧</span>
            Protectores Solares
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in sunscreenProducts" 
              :key="product.id"
              class="product-card"
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
                  <span v-for="benefit in product.benefits" :key="benefit">
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
 <!-- Ampollas - Serums -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">💧</span>
            Ampollas - Serums
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in serumProducts" 
              :key="product.id"
              class="product-card"
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
                  <span v-for="benefit in product.benefits" :key="benefit">
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
            <span class="category-icon">💧</span>
            Mascarillas
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in mascarillaProducts" 
              :key="product.id"
              class="product-card"
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
                  <span v-for="benefit in product.benefits" :key="benefit">
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
import { computed } from 'vue';
import { ref } from "vue";

export default {
  name: "Skin1004Page",
  setup() {

const showToast = ref(false);
const toastMessage = ref("");
let toastTimer = null;

    // Productos de Skin1004 organizados
    const products = [
      // LIMPIADORES
      {
        id: "skin1004-cleansing-oil-30ml",
        name: "Aceite Limpiador Madagascar Centella",
        tamanio: "30ml",
        price: "$10.30",
        src: "/images/skin1004/aceite.png",
        description: "Aceite limpiador suave que remueve maquillaje y protector solar sin irritar.",
        benefits: ["Elimina fácilmente todo rastro de maquillaje e impurezas de la piel.", "Formulado con aceites que no generan hidratación.", "Purifica los poros y absorbe las impurezas mientras hidrata la piel por completo"],
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "skin1004-cleansing-oil-200ml",
        name: "Aceite Limpiador Madagascar Centella",
        tamanio: "200ml",
        price: "$26.45",
        src: "/images/skin1004/aceite200ml.png",
        description: "Aceite limpiador suave que remueve maquillaje y protector solar sin irritar.",
        benefits: ["Elimina fácilmente todo rastro de maquillaje e impurezas de la piel.", "Formulado con aceites que no generan hidratación.", "Purifica los poros y absorbe las impurezas mientras hidrata la piel por completo"],        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "skin1004-foaming-cleanser-20ml",
        name: "Espuma Limpiadora Madagascar Centella",
        tamanio: "20ml",
        price: "$8.75",
        src: "/images/skin1004/20mlampoulefoam.jpg",
        description: "Espuma limpiadora suave con centella asiatica para limpieza profunda.",
        benefits: ["Adecuada para piel sensible", "Calma e hidrata la piel irritada", "Limpia los poros y elimina las impurezas de la piel"],
        category: "cleansing",
        imageSize: "medium"
      },
       {
        id: "skin1004-cleansing-foam-125ml",
        name: "Espuma Limpiadora Madagascar Centella",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/foam125ml.webp",
         description: "Espuma limpiadora suave con centella asiatica para limpieza profunda.",
        benefits: ["Adecuada para piel sensible", "calma e hidrata la piel irritada", "Limpia los poros y elimina las impurezas de la piel"],
       category: "cleansing",
        imageSize: "medium"
      },
        {
        id: "skin1004-cleansing-foam-poremizing-125ml",
        name: "Gel Limpiador Poremizing",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/Poremizing-foam-gel.png",
         description: "Gel limpiador para piel con poros abiertos y puntos negros.",
        benefits: ["Elimina los residuos de los poros, incluido el protector solar, al mismo tiempo que refina la textura de la piel",
         "Contiene sal rosa del Himalaya con ricos minerales que purifican y rejuvenecen la piel"],
       category: "cleansing",
       imageSize: "large-medium"

      },
      {
        id: "skin1004-cleansing-foam-teatrica",
        name: "Espuma Limpiadora Tea-Trica BHA",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/tea-trica-bha-foam.jpg",
         description: "Espuma Limpiadora para piel grasa propensa al acné.",
        benefits: ["Adecuada para piel sensible",
         "Diseñada para piel propensa al acné", 
         "Ayuda a eliminar el exceso de secreción de sebo, las células muertas de la piel y los desechos de los poros."],
       category: "cleansing",
        imageSize: "medium-large"
      },
     
       {
        id: "skin1004-cleansing-foam-iluminador-125ml",
        name: "Gel Limpiador Tono Iluminador",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/125ml-tone-brightening-cleansing-gel-foam.jpg",
         description: "Gel limpiador para piel con hiperpigmentación, decoloración e inflmación",
        benefits: ["Elimina cualquier resto de maquillaje e impurezas, a la vez que ayuda a eliminar las células muertas de la piel.", 
         "Exfolian suavemente la suciedad, favoreciendo una tez suave y tersa.",
          "Con MadeWhite™ ,mejora el tono de la piel."],
       category: "cleansing",
       imageSize: "medium-large"
      },
      {
        id: "skin1004-cleansing-foam-limpiador-de-leche",
        name: "Espuma Limpiadora Hyalu-Cica Limpiador de Leche",
        tamanio: "200ml", 
        price: "$24.90",
        src: "/images/skin1004/limpiador-leche.jpg",
         description: "Limpiador de leche para piel seca, irritada y sensible.",
        benefits: ["Elimina el maquillaje y las células muertas de la piel.", 
        "Fortalece la barrera de hidratación de la piel gracias a la ceramida, el péptido de proteína vegetal y la vitamina E.", 
        "Su textura cremosa se extiende fácilmente sobre la piel y proporciona un acabado hidratante."],
       category: "cleansing",
       imageSize: "medium-large"

      },

      // TONICOS
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
        category: "tonicos",
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
        category: "tonicos",
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
        category: "tonicos",
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
        category: "tonicos",
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
        category: "tonicos",
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
        category: "tonicos",
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
        category: "tonicos",
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
        category: "tonicos",
        featured: true,
        imageSize: "large"
      },
      // HIDRATANTES
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
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
        category: "moisturizer",
        imageSize: "medium"
      },
      //protectores solares
      {
        id: "skin1004-bloqueador-solar-centella-madagascar-50ml",
        name: "Bloqueador Solar Centella Madagascar",
        tamanio: "50ml",
        price: "$23.50",
        src: "/images/skin1004/bloqueador-solar-centella-madagascar-50ml.jpg",
        description: "Tipo de piel: sensible, irritada y propensa al enrojecimiento.",
        benefits: ["Un protector solar físico con SPF 30+ protege la piel de los rayos UV.","Disminuye la posible irritación de la piel", "Contiene extracto de centella asiática de Madagascar para un efecto calmante suave pero potente."],
        category: "sunscreen",
        imageSize: "medium"
      },
      {
        id: "skin1004-bloqueador-solar-air-fit-plus-50ml",
        name: "Bloqueador Solar Air Fit Plus Centella Madagascar",
        tamanio: "50ml",
        price: "$21.00",
        src: "/images/skin1004/bloqueador-solar-air-fit-plus-centella-madagascar-50ml.jpg",
        description: "Tipo de piel: sensible, irritada y propensa al enrojecimiento.",
        benefits: ["Un protector solar físico con un potente SPF de amplio espectro protege la piel de los rayos UV.","Contiene extracto de Centella Asiática para un excelente efecto calmante",
         "Enriquecido con niacinamida, ayuda a mejorar el tono general de la piel."],
        category: "sunscreen",
        imageSize: "medium"
      },
      {
        id: "skin1004-bloqueador-solar-tono-iluminador-50ml",
        name: "Bloqueador Solar Tono Iluminador",
        tamanio: "50ml",
        price: "$25.50",
        src: "/images/skin1004/bloqueador-solar-tono-iluminador-50ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Calmante, corrector de manchas y opacidad de la piel",
         "Protector solar híbrido (combinación de filtros minerales y químicos) con alta protección UV FPS 50+ y PA++++."],
        category: "sunscreen",
        imageSize: "medium"
      },
      
      {
        id: "skin1004-bloqueador-solar-liquido-hyalucica-50ml",
        name: "Bloqueador Solar Líquido Hyalu cica",
        tamanio: "50ml",
        price: "$22.00",
        src: "/images/skin1004/bloqueador-solar-liquido-hyalucica-50ml.jpg",
        description: "Tipo de piel: Seca, irritada y sensible.",
        benefits: ["Ayuda con el enrojecimiento de la piel.",
         "Combate los problemas con el acné e hipersensibilidad al sol.",
          "Hidrata profundamente la piel mientras la protege de los rayos UV con SPF50+ PA++++.",
        "Combate los poros dilatados y mejora la textura de la piel."],
        category: "sunscreen",
        imageSize: "medium"
      },
      {
        id: "skin1004-bloqueador-solar-barra-hyalucica-20g",
        name: "Bloqueador Solar Barra Hyalu cica",
        tamanio: "20g",
        price: "$19.80",
        src: "/images/skin1004/bloqueador-solar-barra-hyalucica-20g.jpg",
        description: "Tipo de piel: Seca, irritada y sensible.",
        benefits: ["Ayuda con el enrojecimiento de la piel.",
         "Combate los problemas con el acné e hipersensibilidad al sol.",
          "Hidrata profundamente la piel mientras la protege de los rayos UV con SPF50+ PA++++.",
        "Combate los poros dilatados y mejora la textura de la piel."],
        category: "sunscreen",
        imageSize: "medium"
      },
      //Ampollas  - Serums
        {
        id: "skin1004-serum-centella-madagascar-30ml",
        name: "Serum Centella Madagascar",
        tamanio: "30ml",
        price: "$12.30",
        src: "/images/skin1004/serum-centella-madagascar-30ml.jpg",
        description: "Tipo de piel: sensible, mixta con tendencia a seca.",
        benefits: ["Adecuada para todo tipo de piel y mejora su salud",
         "Hidrata, calma y fortalece la barrera cutánea con un 100% de extracto de centella asiática de Madagascar.",
          "Equilibra el nivel natural agua - aceite y repara piel dañada, ayuda con el irritamiento de la piel."],
        category: "serum",
        imageSize: "medium"
      },
        {
        id: "skin1004-serum-centella-madagascar-55ml",
        name: "Serum Centella Madagascar",
        tamanio: "55ml",
        price: "$22.10",
        src: "/images/skin1004/serum-centella-madagascar-55ml.png",
        description: "Tipo de piel: sensible, mixta con tendencia a seca.",
        benefits: ["Adecuada para todo tipo de piel y mejora su salud",
         "Hidrata, calma y fortalece la barrera cutánea con un 100% de extracto de centella asiática de Madagascar.",
          "Equilibra el nivel natural agua - aceite y repara piel dañada, ayuda con el irritamiento de la piel."],
        category: "serum",
        imageSize: "medium"
      },
        {
        id: "skin1004-serum-centella-madagascar-100ml",
        name: "Serum Centella Madagascar",
        tamanio: "100ml",
        price: "$30.00",
        src: "/images/skin1004/serum-centella-madagascar-100ml.jpg",
        description: "Tipo de piel: sensible, mixta con tendencia a seca.",
        benefits: ["Adecuada para todo tipo de piel y mejora su salud",
         "Hidrata, calma y fortalece la barrera cutánea con un 100% de extracto de centella asiática de Madagascar.",
          "Equilibra el nivel natural agua - aceite y repara piel dañada, ayuda con el irritamiento de la piel."],
        category: "serum",
        imageSize: "medium"
      },
      {
        id: "skin1004-serum-tono-iluminador-30ml",
        name: "Serum Tono Iluminador",
        tamanio: "30ml",
        price: "$13.10",
        src: "/images/skin1004/serum-tono-iluminador-30ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Elimina celulas muertas de la piel",
         "Contiene MadeWhite™ con beneficios calmantes y aclarantes de piel.",
          "Doble función, hidratación profunda y mejora el tono de piel."],
        category: "serum",
        imageSize: "medium"
      },
       {
        id: "skin1004-serum-tono-iluminador-50ml",
        name: "Serum Tono Iluminador",
        tamanio: "50ml",
        price: "$21.00",
        src: "/images/skin1004/serum-tono-iluminador-50ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Elimina celulas muertas de la piel",
         "Contiene MadeWhite™ con beneficios calmantes y aclarantes de piel.",
          "Doble función, hidratación profunda y mejora el tono de piel."],
        category: "serum",
        imageSize: "medium"
      },
       {
        id: "skin1004-serum-tono-iluminador-100ml",
        name: "Serum Tono Iluminador",
        tamanio: "100ml",
        price: "$30.00",
        src: "/images/skin1004/serum-tono-iluminador-100ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Elimina celulas muertas de la piel",
         "Contiene MadeWhite™ con beneficios calmantes y aclarantes de piel.",
          "Doble función, hidratación profunda y mejora el tono de piel."],
        category: "serum",
        imageSize: "medium"
      },
       	{
        id: "skin1004-ampolla-serum-poremizing-30ml",
        name: "Ampolla - Serúm Poremizing",
        tamanio: "30ml",
        price: "$12.95",
        src: "/images/skin1004/ampolla-serum-poremizing-30ml.webp",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["Fortalece la barrera de la piel.",
         "Diseñada para pieles grasas para minimizar la apariencia de los poros.",
        "Elimina células muertas de la piel y desechos de los poros."],
        category: "serum",
        imageSize: "medium"
      },
      
       	{
        id: "skin1004-ampolla-serum-poremizing-50ml",
        name: "Ampolla - Serúm Poremizing",
        tamanio: "50ml",
        price: "$21.50",
        src: "/images/skin1004/ampolla-serum-poremizing-50ml.png",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["Fortalece la barrera de la piel.",
         "Diseñada para pieles grasas para minimizar la apariencia de los poros.",
        "Elimina células muertas de la piel y desechos de los poros."],
        category: "serum",
        imageSize: "medium"
      },
       	{
        id: "skin1004-ampolla-serum-poremizing-100ml",
        name: "Ampolla - Serúm Poremizing",
        tamanio: "100ml",
        price: "$27.40",
        src: "/images/skin1004/ampolla-serum-poremizing-100ml.webp",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["Fortalece la barrera de la piel.",
         "Diseñada para pieles grasas para minimizar la apariencia de los poros.",
        "Elimina células muertas de la piel y desechos de los poros."],
        category: "serum",
        imageSize: "medium"
      },
 	{
        id: "skin1004-ampolla-serum-teatrica-30ml",
        name: "Ampolla - Serúm Tea-Trica",
        tamanio: "30ml",
        price: "$12.30",
        src: "/images/skin1004/ampolla-serum-teatrica-30ml.jpg",
        description: "Tipo de piel: Grasa propensa al acné.",
        benefits: ["Efectivo para el cuidado de poros y textura de la piel.",
        "Regula la producción de sebo.",
         "Apto para la piel propensa a ser grasa y al acné.",
        "Efectos calmantes para la irritación de la piel."],
        category: "serum",
        imageSize: "medium"
      },

 	{
        id: "skin1004-ampolla-serum-teatrica-100ml",
        name: "Ampolla - Serúm Tea-Trica",
        tamanio: "100ml",
        price: "$30.10",
        src: "/images/skin1004/ampolla-serum-teatrica-100ml.jpg",
        description: "Tipo de piel: Grasa propensa al acné.",
        benefits: ["Efectivo para el cuidado de poros y textura de la piel.",
        "Regula la producción de sebo.",
         "Apto para la piel propensa a ser grasa y al acné.",
        "Efectos calmantes para la irritación de la piel."],
        category: "serum",
        imageSize: "medium"
      },
      {
        id: "skin1004-ampolla-serum-probio-cica-30ml",
        name: "Ampolla - Serúm Probi-Cica",
        tamanio: "30ml",
        price: "$13.30",
        src: "/images/skin1004/ampolla-serum-probio-cica-30ml.jpg",
        description: "Tipo de piel: Piel seca y con líneas finas de expresión. Anti-edad.",
        benefits: ["No contiene fragancias ni colorantes artificiales, es apta para todo tipo de piel.",
        "Mantiene la humedad de la piel sin ninguna sensación pegajosa o grasosa.",
         "Repara la barrera cutánea débil y dañada para evitar la evaporación de la humedad."],
        category: "serum",
        imageSize: "medium"
      },
 {
        id: "skin1004-ampolla-serum-probio-cica-50ml",
        name: "Ampolla - Serúm Probi-Cica",
        tamanio: "50ml",
        price: "$25.20",
        src: "/images/skin1004/ampolla-serum-probio-cica-50ml.jpg",
        description: "Tipo de piel: Piel seca y con líneas finas de expresión. Anti-edad.",
        benefits: ["No contiene fragancias ni colorantes artificiales, es apta para todo tipo de piel.",
        "Mantiene la humedad de la piel sin ninguna sensación pegajosa o grasosa.",
         "Repara la barrera cutánea débil y dañada para evitar la evaporación de la humedad."],
        category: "serum",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-serum-probio-cica-95ml",
        name: "Ampolla - Serúm Probi-Cica",
        tamanio: "95ml",
        price: "$31.00",
        src: "/images/skin1004/ampolla-serum-probio-cica-95ml.jpg",
        description: "Tipo de piel: Piel seca y con líneas finas de expresión. Anti-edad.",
        benefits: ["No contiene fragancias ni colorantes artificiales, es apta para todo tipo de piel.",
        "Mantiene la humedad de la piel sin ninguna sensación pegajosa o grasosa.",
         "Repara la barrera cutánea débil y dañada para evitar la evaporación de la humedad."],
        category: "serum",
        imageSize: "medium"
      },
 {
        id: "skin1004-hyalu-cica-blue-serum-30ml",
        name: "Blue Serúm Hyalu-Cica",
        tamanio: "30ml",
        price: "$16.40",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-blue-30ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Un serum diseñado para pieles deshidratadas, secas y sensibles que necesitan una hidratación profunda y duradera.",
         "Contiene 5 tipos de ácido hialurónico y ceramida que ayudan a aumentar el nivel de hidratación de la piel.",
        "Alivia las molestias cutáneas y calma las irritaciones, repara la barrera cutánea débil y sensible."],
        category: "serum",
        imageSize: "medium"
      }, {
        id: "skin1004-hyalu-cica-blue-serum-50ml",
        name: "Blue Serúm Hyalu-Cica",
        tamanio: "50ml",
        price: "$22.90",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-blue-50ml.webp",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Un serum diseñado para pieles deshidratadas, secas y sensibles que necesitan una hidratación profunda y duradera.",
         "Contiene 5 tipos de ácido hialurónico y ceramida que ayudan a aumentar el nivel de hidratación de la piel.",
        "Alivia las molestias cutáneas y calma las irritaciones, repara la barrera cutánea débil y sensible."],
        category: "serum",
        imageSize: "medium"
      },
      {
        id: "skin1004-ampolla-serum-hyalu-cica-50ml",
        name: "Ampolla - Serúm Hyalu-Cica",
        tamanio: "50ml",
        price: "$23.60",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-50ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Apto para uso posterior a limpieza facial.",
         "Hidratación profunda y duradera mientras calma la piel.",
        "Fortalece la barrera cutánea débil y sensible para mejorar la salud general de la piel.",
      "Se encuentra conformada por 5 tipos de ácido hialurónico y ceramida para aumentar el nivel de hidratación de la piel."],
        category: "serum",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-serum-hyalu-cica-100ml",
        name: "Ampolla - Serúm Hyalu-Cica",
        tamanio: "100ml",
        price: "$26.50",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-100ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Apto para uso posterior a limpieza facial.",
         "Hidratación profunda y duradera mientras calma la piel.",
        "Fortalece la barrera cutánea débil y sensible para mejorar la salud general de la piel.",
      "Se encuentra conformada por 5 tipos de ácido hialurónico y ceramida para aumentar el nivel de hidratación de la piel."],
        category: "serum",
        imageSize: "medium"
      },
        {
        id: "skin1004-ampolla-shot-retinol-0.2-30ml",
        name: "Ampolla Shot Retinol 0.2%",
        tamanio: "30ml",
        price: "$26.50",
        src: "/images/skin1004/ampolla-shot-retinol-0.2-30ml.webp",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Ampolla enriquecida con retinol y microespiculas para potenciar la elasticidad y firmeza de la piel.",
         "La combinación de retinol y escualano potencia la elasticidad y fortalece la barrera cutánea",
        "Su fórmula elastica se adhiere perfectamente a la piel para brindarle un cuidado intensivo que realza su elasticidad y firmeza."],
        category: "serum",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-shot-niacinamida-30ml",
        name: "Ampolla Shot Niacinamida",
        tamanio: "30ml",
        price: "$23.50",
        src: "/images/skin1004/ampolla-shot-niacinamida-30ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Ampolla iluminadora con microespiculas para mejorar el tono desigual de la piel, reducir los poros y potenciar su luminosidad.",
         "Combaten los poros horizontales, verticales y pigmentados, a lavez que refinan y suavizan la piel.",
        "Enriquecida con glucósido de ascorbillo para unificar el tono y lograr un efecto iluminador general."],
        category: "serum",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-shot-matrixyl-10-30ml",
        name: "Ampolla Shot Matrixyl 10%",
        tamanio: "30ml",
        price: "$30.50",
        src: "/images/skin1004/ampolla-shot-matrixyl-10-30ml.webp",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Aporta principios activos hidratantes a la piel para restaurar la firmeza y elasticidad de la piel.",
         "Las espículasas contienen centella asiática de Madagascar y pantenol para nutrir en profundiad y mejorar su salud general de la piel.",
        "Enriquecida con Maxtrixyl y ácido hialurónico, hidrata hasta las capas más profundas de la piel, fortaleciendo al mismo tiempo la piel debilitada y sensible."],
        category: "serum",
        imageSize: "medium"
      },
      //Mascarillas
    {
        id: "skin1004-mascarilla-poremizing-27gr",
        name: "Mascarilla de Arcilla Poremizing",
        tamanio: "27g",
        price: "$27.30",
        src: "/images/skin1004/mascarilla-poremizing-27gr.webp",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["No contiene fragancias ni colorantes, es apta para todo tipo de piel.",
"Contiene poderosas propiedades limpiadoras de poros y absorbentes de sebo.","Fácil de aplicar sin mancharse las manos."],
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
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
        category: "mascarilla",
        imageSize: "medium"
      },
    ];

    // Computed properties para organizar productos por categoría
    const cleansingProducts = computed(() => 
      products.filter(product => product.category === 'cleansing')
    );

    const tonicosProducts = computed(() => 
      products.filter(product => product.category === 'tonicos')
    );

    const treatmentProducts = computed(() => 
      products.filter(product => product.category === 'treatment')
    );

    const moisturizerProducts = computed(() => 
      products.filter(product => product.category === 'moisturizer')
    );
    const serumProducts = computed(() => 
      products.filter(product => product.category === 'serum')
    );
    const sunscreenProducts = computed(() => 
      products.filter(product => product.category === 'sunscreen')
    );
    const mascarillaProducts = computed(() => 
      products.filter(product => product.category === 'mascarilla')
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
      treatmentProducts,
      moisturizerProducts,
      serumProducts,
      sunscreenProducts,
      mascarillaProducts,
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

.skin1004-page {
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

@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* Responsive Design */
@media (max-width: 1200px) {
  .brand-intro {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }
  
  .brand-header {
    padding: 2rem 0;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .product-card {
    max-width: 100%;
  }
}
</style>

