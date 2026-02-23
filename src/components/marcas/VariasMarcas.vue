<template>
  <div class="varias-marcas-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/varias-marcas.png" alt="Varias Marcas" />
          </div>
          <div class="brand-info">
            <h1>Varias Marcas</h1>
            <p class="brand-description">
              Podrás encontrar una variedad de productos de diferentes marcas
              reconocidas en el mundo del cuidado de la piel, cada una con su
              enfoque único y beneficios específicos para tu rutina de cuidado
              facial.
            </p>
            <div class="brand-features">
              <span class="feature">🌿 Dr. Althea</span>
              <span class="feature">✨ Purito</span>
              <span class="feature">🍃 VT cosmetics</span>
              <span class="feature">🕶️ Arencia</span>
              <span class="feature">🏖️ Seoul 1988</span>
              <span class="feature">🧴 Medicube</span>
              <span class="feature">🌤️ The Face shop</span>
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
              <div
                class="product-image"
                :class="`image-${product.imageSize}`"
                @click="openImageModal(product.src)"
              >
                <img
                  v-if="product.src"
                  :src="product.src"
                  :alt="product.name"
                  style="cursor: pointer"
                />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <h4>{{ product.marca }}</h4>
                <p v-if="product.tamanio" class="product-size">
                  {{ product.tamanio }}
                </p>
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
        <!-- Balsamos -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🫧</span>
            Bálsamos Faciales y Labiales
          </h2>
          <div class="products-grid">
            <!-- Producto dinámico usando v-for -->
            <div
              v-for="product in balsamoProducts"
              :key="product.id"
              class="product-card"
            >
              <div
                class="product-image"
                :class="`image-${product.imageSize}`"
                @click="openImageModal(product.src)"
              >
                <img
                  v-if="product.src"
                  :src="product.src"
                  :alt="product.name"
                  style="cursor: pointer"
                />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <h4>{{ product.marca }}</h4>
                <p v-if="product.tamanio" class="product-size">
                  {{ product.tamanio }}
                </p>
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
              <div
                class="product-image"
                :class="`image-${product.imageSize}`"
                @click="openImageModal(product.src)"
              >
                <img
                  v-if="product.src"
                  :src="product.src"
                  :alt="product.name"
                  style="cursor: pointer"
                />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <h4>{{ product.marca }}</h4>
                <p v-if="product.tamanio" class="product-size">
                  {{ product.tamanio }}
                </p>
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
              <div
                class="product-image"
                :class="`image-${product.imageSize}`"
                @click="openImageModal(product.src)"
              >
                <img
                  v-if="product.src"
                  :src="product.src"
                  :alt="product.name"
                  style="cursor: pointer"
                />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <h4>{{ product.marca }}</h4>
                <p v-if="product.tamanio" class="product-size">
                  {{ product.tamanio }}
                </p>
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
              <div
                class="product-image"
                :class="`image-${product.imageSize}`"
                @click="openImageModal(product.src)"
              >
                <img
                  v-if="product.src"
                  :src="product.src"
                  :alt="product.name"
                  style="cursor: pointer"
                />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <h4>{{ product.marca }}</h4>
                <p v-if="product.tamanio" class="product-size">
                  {{ product.tamanio }}
                </p>
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
              <div
                class="product-image"
                :class="`image-${product.imageSize}`"
                @click="openImageModal(product.src)"
              >
                <img
                  v-if="product.src"
                  :src="product.src"
                  :alt="product.name"
                  style="cursor: pointer"
                />
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <h4>{{ product.marca }}</h4>
                <p v-if="product.tamanio" class="product-size">
                  {{ product.tamanio }}
                </p>
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
import { computed } from "vue";
import { ref } from "vue";

export default {
  name: "Skin1004Page",
  setup() {
    const showToast = ref(false);
    const toastMessage = ref("");
    let toastTimer = null;
    const showModal = ref(false);
    const selectedImage = ref("");
    // Productos de Skin1004 organizados
    const products = [
      // VARIAS MARCAS
      {
        id: "The-Fase-Shop-aceite limpiador-150ml",
        name: "Aceite limpiador de arroz 150 ml",
        tamanio: "150 ml",
        marca: "The Face Shop",
        price: "$18.90",
        src: "/images/varias-marcas/9. TFS aceite de arroz.png",
        description:
          "Aceite de agua de arroz que limpia y elimina el maquillaje y las impurezas de la piel.",
        benefits: [
          "Piel suave después de la limpieza.",
          "Elimina los restos persistentes de maquillaje. Y tiene un aroma refrescante",
        ],
        category: "cleansing",
        imageSize: "medium",
      },
      {
        id: "Macqueen-balsamo-vita-colageno-10gr",
        name: "Bálsamo vita de colágeno de 10 gr",
        tamanio: "10 gramos",
        marca: "Macqueen",
        price: "$14.90",
        src: "/images/varias-marcas/10. macqueen balsamo.png",
        description:
          "Bálsamo facial nutritivo con colágeno, complejo de péptidos y vitamina C que ofrece potentes beneficios antienvejecimiento para la piel flácida.",
        benefits: [
          "Mantiene radiante, hidratada y rellana la piel.",
          "Contiene ingredientes con excelentes propiedades antienvejecimiento.",
          "Previene la pérdida de humedad de la piel",
        ],
        category: "bálsamo",
        imageSize: "medium",
      },
      {
        id: "Rohto-Mentholatum-balsamo-labial-",
        name: "Bálsamo labial con protector solar SPF 20 PA++ sin fragancia",
        tamanio: "15 gramos",
        marca: "Rohto-Mentholatum",
        price: "$5",
        src: "/images/varias-marcas/11. ronhto - balsamo sin fragancia.png",
        description:
          "Este bálsamo labial combina el poder hidratante del super ácido hialurónico y el colágeno para mantener los labios frescos y con volumen.",
        benefits: [
          "Proporciona hidratación y ayuda a retener la humedad de los labios.",
          "Combina ácido hialurónico con colágeno.",
          "Protege a los labios contra la resequedad y rayos ultravioletas.",
          "Combina ácido hialurónico con colágeno.",
          "Protege a los labios contra la resequedad y rayos ultravioletas",
        ],
        category: "bálsamo",
        imageSize: "medium",
      },
      {
        id: "Rohto-Mentholatum-balsamo-labial-",
        name: "Bálsamo labial con protector solar SPF 20 PA++ fragancia de menta",
        tamanio: "15 gramos",
        marca: "Rohto-Mentholatum",
        price: "$5",
        src: "/images/varias-marcas/12. rohto balsamo de menta.png",
        description:
          "Este bálsamo labial combina el poder hidratante del super ácido hialurónico y el colágeno para mantener los labios frescos y con volumen.",
        benefits: [
          "Proporciona hidratación y ayuda a retener la humedad de los labios.",
          "Combina ácido hialurónico con colágeno.",
          "Protege a los labios contra la resequedad y rayos ultravioletas",
        ],
        category: "bálsamo",
        imageSize: "medium",
      },
      {
        id: "Rohto-Mentholatum-balsamo-labial-",
        name: "Bálsamo labial con protector solar SPF 20 PA++ fragancia de leche",
        tamanio: "15 gramos",
        marca: "Rohto-Mentholatum",
        price: "$5",
        src: "/images/varias-marcas/13. rohto balsamo leche.png",
        description:
          "Este bálsamo labial combina el poder hidratante del super ácido hialurónico y el colágeno para mantener los labios frescos y con volumen.",
        benefits: [
          "Proporciona hidratación y ayuda a retener la humedad de los labios.",
          "Combina ácido hialurónico con colágeno.",
          "Protege a los labios contra la resequedad y rayos ultravioletas.",
        ],
        category: "bálsamo",
        imageSize: "medium",
      },
      //ISNTREE
      {
        id: "Isntree-bloquedor-acido-hialuronico-50ml",
        name: "Bloqueador con ácido hialurónico",
        tamanio: "50 ml",
        marca: "Isntree",
        price: "$32",
        src: "/images/varias-marcas/14 Isntree bloqueador.png",
        description:
          "Protector solar acuoso en gel que cuida tu piel de los rayos dañinos UV y aporta hidratación con ocho tipos de ácido hialurónico de distintos pesos moleculares.",
        benefits: [
          "Calma la irritación y suaviza la textura de la piel.",
          "Amplio espectro SPF 50 + PA. Contiene ocho tipos de ácido hialurónico, astaxantina y ceramida.",
        ],
        category: "bloqueador solar",
        imageSize: "medium",
      },
      //DR ALTHEA
      {
        id: "Dr.Althea-crema-facial-147-50ml",
        name: "Crema facial hidratante 147",
        tamanio: "50 ml",
        marca: "Dr. Althea",
        price: "$35.50",
        src: "/images/varias-marcas/15. dr althea crema 147.png",
        description:
          "Hidratante calmante enriquecida con azuleno derivado de las flores de manzanilla, que ayuda a aliviar la irritación.",
        benefits: [
          "Calma la piel desigual e irritada, dejándola hidratada.",
          "Hidrata la piel en profundidad y forma una barrera de humedad para una hidratación duradera.",
          "No contiene fragancias artificiales, colorantes ni conservantes.",
        ],
        category: "cream",
        imageSize: "medium",
      },
      {
        id: "Dr.Althea-crema-facial-345-50ml",
        name: "Crema facial hidratante 345",
        tamanio: "50 ml",
        marca: "Dr. Althea",
        price: "$30.25",
        src: "/images/varias-marcas/16. dr althea crema 345.png",
        description:
          "Suave pero potente, la 345 Relief Cream combina tres ingredientes para tratar imperfecciones, cuatro ingredientes nutritivos y cinco ingredientes calmantes para un cuidado completo post-acné. ",
        benefits: [
          "Protege la piel de agresores externos y cuenta con función antioxidante con Resveratrol.",
          "Mejora las lineas de la piel con Adenosina para un resultado brillante y elástico en la piel.",
          "Nutre y humecta la piel con extracto de calendula, extracto de girasol y Propolis.",
        ],
        category: "cream",
        imageSize: "medium",
      },
      {
        id: "Dr.Althea-balsamo-limpiador-50ml",
        name: "Bálsamo limpiador",
        tamanio: "50 ml",
        marca: "Dr. Althea",
        price: "$23.05",
        src: "/images/varias-marcas/17. dr althea balsamo limpiador.jpeg",
        description:
          "Está formulado con aceite de semilla de té verde, madecassoside y pantenol para eliminar suavemente el maquillaje, el protector solar y las impurezas, dejando un acabado calmante.",
        benefits: [
          "Limpia suavemente y en profundidad las impurezas de la piel y el maquillaje.",
          "Contiene madecasósido, que ayuda a calmar la piel sensible.",
          "Fórmula vegana, sin fragancias ni colorantes artificiales, apta para todo tipo de piel, incluso la sensible.",
        ],
        category: "cleansing",
        imageSize: "medium",
      },
      {
        id: "Dr.Althea-bloqueador-solar-45ml",
        name: "Bloqueador solar de te verde",
        tamanio: "45 ml",
        marca: "Dr. Althea",
        price: "$21",
        src: "/images/varias-marcas/18. dr althea bloqueador solar.png",
        description:
          "Protector solar químico ligero que protege la piel contra los dañinos rayos UV y proporciona protección de amplio espectro SPF50+ PA++++.",
        benefits: [
          "Ayuda a calmar la piel irritada y a atenuar las imperfecciones.",
          "Ayuda a potenciar el proceso natural de regeneración de la piel para una tez más saludable.",
          "Es apta para todo tipo de piel, como piel seca y sensible.",
        ],
        category: "bloqueador solar",
        imageSize: "medium",
      },
      //VT
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 50 agujas",
        tamanio: "50 ml",
        marca: "VT cosmetics",
        price: "$37.50",
        src: "/images/varias-marcas/20. VT reedle shot 50.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "serum",
        imageSize: "medium",
      },
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 100 agujas",
        tamanio: "50 ml",
        marca: "VT cosmetics",
        price: "$43",
        src: "/images/varias-marcas/19. VT REEDLE SHOT 100.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "serum",
        imageSize: "medium",
      },
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 300 agujas",
        marca: "VT cosmetics",
        tamanio: "50 ml",
        price: "$57",
        src: "/images/varias-marcas/21. VT reedle shot 300.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "serum",
        imageSize: "medium",
      },
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 700 agujas",
        marca: "VT cosmetics",
        tamanio: "50 ml",
        price: "$63.50",
        src: "/images/varias-marcas/22. VT reedle shot 700.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "serum",
        imageSize: "medium",
      },
      //MEDICUBE
      {
        id: "Medicube-crema-vita-C-55gr",
        name: "Crema facial deep vita C cápsula",
        marca: "Medicube",
        tamanio: "55 gramos",
        price: "$34.50",
        src: "/images/varias-marcas/23. MEDICUBE CREMA VITA C.png",
        description:
          "La fotogénica Deep Vita C Capsule Cream de medicube contiene cápsulas doradas que incluyen agua de espino amarillo, niacinamida y cinco derivados de vitamina C para reducir manchas y marcas en la piel.",
        benefits: [
          "Ofrece la posibilidad de borrar imperfecciones y pecas profundas y antiguas.",
          "La cápsula de vitamina C logra el poderoso efecto blanqueador de la piel.",
          "Ayuda a refinar la textura de la piel y mejora su elasticidad para lograr una apariencia radiante y luminosa.",
        ],
        category: "cream",
        imageSize: "medium",
      },
      {
        id: "Medicube-serum-one-day-30ml",
        name: "sérum obe day exosome 7500",
        marca: "Medicube",
        tamanio: "30 ml",
        price: "$30.30",
        src: "/images/varias-marcas/24. medicube one day shot.png",
        description:
          "Este sérum esta infusionado con 7,500ppm de exosomas más pantenol y adenosina para barrer las impurezas de los poros, aumenta la elasticidad de la piel y aumenta los neveles de hidratción en la piel.",
        benefits: [
          "Reafirmación inmediata y definitiva de los poros notables.",
          "Las inyecciones de exosomas penetran la piel profunda y directamente, lo que mejora su absorción.",
          "Penetra en diez capas de la piel sin dejar sensación pegajosa.",
        ],
        category: "serum",
        imageSize: "medium",
      },
      //ARENCIA
      {
        id: "Arencia-ampolla-holy-hyssop-50gr",
        name: "Sérum holy hyssop 30",
        marca: "Arencia",
        tamanio: "50 gramos",
        price: "$26.40",
        src: "/images/varias-marcas/25. Arencia holy hysoop.png",
        description:
          "Este sérum como gelatina esta formulado con extracto de hisopo francés, complejo de vitamina ACE y niacinamida para combatir la hiperpigmentación y redefine la textura de la piel.",
        benefits: [
          "Revitaliza e ilumina la piel apagada. Cuida los poros y ayuda a mejorar la textura de la piel.",
          "Potencia la luminosidad de la piel. Textura elástica que se siente ligera, fresca e hidratante.",
        ],
        category: "serum",
        imageSize: "medium",
      },
      //purito
      {
        id: "Purito-bloqueador-solar-60ml",
        name: "Bloqueador solar suave",
        marca: "Purito",
        tamanio: "60 ml",
        price: "$19.50",
        src: "/images/varias-marcas/26. purito bloqueador solar.png",
        description:
          "Protector solar vegano compuesto por filtros químicos para proporcionar una protección solar de amplio espectro de SPF 50+ PA++++.",
        benefits: [
          "Ofrece protección solar SPF50+ PA++++ y una poderosa barrera de defensa para proporcionar 10 horas de protección sin necesidad de múltiples reaplicaciones.",
          "Proporciona 5 niveles de defensa al aire libre, agua, al sudor y a la arena.",
          "No grasosa, ligera con un acabado no pegajoso.",
        ],
        category: "bloqueador solar",
        imageSize: "medium",
      },
      //pyunkang yul
      {
        id: "Pyunkang-yul-tonico-200ml",
        name: "Tónico facial",
        marca: "Pyunkang Yul",
        tamanio: "200 ml",
        price: "$21.90",
        src: "/images/varias-marcas/27. Pyukay tónico.png",
        description:
          "Ayuda a reducir la inflamación y fortalecer la barrera de la piel, pero son los hidratantes sencillos como la glicerina y el butilenglicol los que lo hacen el tónico ideal para pieles deshidratadas y estresadas.",
        benefits: [
          "Un tónico hidratante formulado con hidroxietilcelulosa, arginina y extracto de raíz de astrágalo para mejorar la tez.",
        ],
        category: "tonico",
        imageSize: "medium",
      },
      //SEOUL 1988
      {
        id: "Seoul-1988-crema-ojos-30ml",
        name: "Crema de contorno de ojos: retinal liposome 4% + frijol fermentado",
        marca: "Seoul 1988",
        tamanio: "30 ml",
        price: "$21",
        src: "/images/varias-marcas/29. seoul 1988 crema de ojos.png",
        description:
          "Crema de contorno de ojos eficaz para líneas de expresión y ojeras.",
        benefits: [
          "Reduce visiblemente las bolsas bajo los ojos, suavizar las líneas de expresión e iluminar la piel cansada.",
          "Estimula el colágeno y reduce la apariencia de las patas de gallo.",
          "Rápida absorción se siente suave y no grasa; sin sensación pegajosa, solo confort.",
        ],
        category: "cream",
        imageSize: "medium",
      },
      {
        id: "Seoul-1988-serum-30ml",
        name: "Sérum facial: retinal liposome 2% + frijol fermentado",
        marca: "Seoul 1988",
        tamanio: "30 ml",
        price: "$30",
        src: "/images/varias-marcas/30. seoul 1988 crema.png",
        description:
          "El sérum SEOUL 1988 aporta los potentes efectos antiedad del 2% de retinal en liposomas a las capas más profundas de la piel para mejorar la elasticidad y combatir líneas finas, manchas oscuras y textura irregular.",
        benefits: [
          "Enriquecido con un 2% de retinal en liposomas y extracto de ginseng negro, el sérum SEOUL 1988 suaviza las líneas finas y las arrugas.",
          "Contiene niacinamida para difuminar la decoloración y aportar luminosidad a las zonas apagadas, logrando una apariencia más clara y uniforme.",
          "Contiene humectantes como la glicerina para atraer la humedad a la piel, junto con ingredientes calmantes como el bakuchiol. Esta combinación ayuda a reforzar la barrera cutánea y a minimizar los efectos secundarios comunes del retinal.",
        ],
        category: "serum",
        imageSize: "medium",
      },
      {
        id: "Seoul-1988-crema-50ml",
        name: "Crema facial: retinal liposome 1% + arroz fermentado",
        marca: "Seoul 1988",
        tamanio: "50 ml",
        price: "$24.60",
        src: "/images/varias-marcas/31. seoul 1988 serum.png",
        description:
          "Crema antienvejecimiento con 1% de liposoma de retinal y filtrado de fermento de arroz que reduce la apariencia de líneas de expresión y arrugas mientras mejora la elasticidad y firmeza de la piel.",
        benefits: [
          "Proporciona efectos antiedad e iluminadores, además de mejorar la elasticidad de la piel con mínima irritación.",
          "Estimula la producción de colágeno para un efecto antiarrugas.",
          "Su textura suave y cremosa se absorbe al instante, hidratando sin dejar sensación pegajosa y con un acabado suave.",
        ],
        category: "cream",
        imageSize: "medium",
      },
      //MARY&MAY
      {
        id: "Mary&May-crema-ojos-20ml",
        name: "Crema de contorno de ojos ácido tranexamic + glutathione",
        marca: "Mary & May",
        tamanio: "20 ml",
        price: "$4.50",
        src: "/images/varias-marcas/32. mary&may crema de ojos.png",
        description:
          "Crema para contorno de ojos enriquecida con 1,000ppm de ácido tranexámico y glutatión que ilumina las ojeras y revitaliza la piel.",
        benefits: [
          "Mejoar la apariencia de ojeras y pecas, logrando una mirada más luminosa y definida.",
          "Ilumina la piel e inhiben la síntesis de melanina para revitalizar la mirada.",
          "Su fórmula con vitamina C mejora la apariencia de las pecas y favorece la formación de colágeno.",
        ],
        category: "cream",
        imageSize: "medium",
      },
    ];

    // Computed properties para organizar productos por categoría
    const cleansingProducts = computed(() =>
      products.filter((product) => product.category === "cleansing"),
    );

    const tonicosProducts = computed(() =>
      products.filter((product) => product.category === "tonico"),
    );

    const moisturizerProducts = computed(() =>
      products.filter((product) => product.category === "cream"),
    );
    const serumProducts = computed(() =>
      products.filter((product) => product.category === "serum"),
    );
    const sunscreenProducts = computed(() =>
      products.filter((product) => product.category === "bloqueador solar"),
    );
    const balsamoProducts = computed(() =>
      products.filter((product) => product.category === "bálsamo"),
    );
    const mascarillaProducts = computed(() =>
      products.filter((product) => product.category === "mascarilla"),
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

          toastMessage.value = `🛒 ${product.name} ${
            product.tamanio ? `(${product.tamanio})` : ""
          } agregado al carrito`;
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
      serumProducts,
      sunscreenProducts,
      balsamoProducts,
      mascarillaProducts,
      addToCart,
      showToast,
      toastMessage,
      showModal,
      selectedImage,
      openImageModal,
      closeImageModal,
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

.varias-marcas-page {
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

.product-info h4 {
  color: #b218ca;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  line-height: 1.3;
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
  background: linear-gradient(135deg, #1100ffaf, #564fea90, #1100ffaf);
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
  transform: translateX(-50%);
  background: linear-gradient(130deg, #c28e00, rgb(250, 168, 46), #ffbc0a);
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
