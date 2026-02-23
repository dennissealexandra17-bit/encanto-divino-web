<template>
  <div class="shipping-info" :class="{ 'is-compact': compact }">
    <div class="shipping-items">
      <!-- Cobertura -->
      <div class="shipping-item">
        <span class="item-icon">🌍</span>
        <span class="item-text">Cobertura Nacional por Servientrega</span>
      </div>

      <div class="divider"></div>
      <!-- Cobertura -->
      <div class="shipping-item">
        <span class="item-icon"></span>
        <span class="item-text">En Quito entregas en persona o por Servientrega</span>
      </div>

      <div class="divider"></div>

      <!-- Tiempo de entrega -->
      <div class="shipping-item">
        <span class="item-icon">⏱️</span>
        <span class="item-text">Entregas en 1-3 días hábiles</span>
      </div>

      <div class="divider"></div>

      <!-- Costo -->
      <div class="shipping-item">
        <span class="item-icon">💰</span>
        <span class="item-text"
          >Entregas gratis en la Universidad Central del Ecuador y Seminario
          Mayor (Quito)</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformacionEnvios",
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.shipping-info {
  width: 100%;
  background: linear-gradient(90deg, #c5c2c3aa, #87898a7a, #adadada3);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(131, 197, 190, 0.08);
  margin: 0.8rem auto;
  border: solid 1px rgba(131, 197, 190, 0.2);
  padding: 0.5rem 0;
  max-width: 1250px;
}

.shipping-items {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  padding: 0 0.5rem;
}

.shipping-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.6rem;
  flex-shrink: 0;
}

.item-icon {
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.item-text {
  font-size: 0.75rem;
  color: #4a5759;
  font-weight: 600;
  line-height: 1.2;
  max-width: 180px;
  word-break: break-word;
}

.divider {
  width: 1px;
  height: 20px;
  background: rgba(131, 197, 190, 0.2);
  margin: 0 0.2rem;
  flex-shrink: 0;
}

/* Tablet */
@media (max-width: 1024px) {
  .shipping-info {
    padding: 0.6rem 0.5rem;
  }

  .shipping-item {
    padding: 0.4rem 0.5rem;
    gap: 0.3rem;
  }

  .item-icon {
    font-size: 0.95rem;
  }

  .item-text {
    font-size: 0.7rem;
    max-width: 140px;
  }

  .divider {
    height: 18px;
    margin: 0 0.2rem;
  }
}

/* Móvil Landscape */
@media (max-width: 768px) {
  .shipping-info {
    padding: 0.5rem 0.4rem;
    margin: 0.5rem auto;
  }

  .shipping-items {
    gap: 0.1rem;
    padding: 0 0.3rem;
  }

  .shipping-item {
    padding: 0.3rem 0.4rem;
    gap: 0.25rem;
  }

  .item-icon {
    font-size: 0.85rem;
    min-width: 25px;
  }

  .item-text {
    font-size: 0.65rem;
    max-width: 110px;
  }

  .divider {
    height: 15px;
    margin: 0 0.15rem;
  }
}

/* Móvil pequeño */
@media (max-width: 480px) {
  .shipping-info {
    padding: 0.4rem 0.3rem;
    margin: 0.4rem auto;
    border-radius: 8px;
  }

  .shipping-items {
    padding: 0.2rem;
    gap: 0;
  }

  .shipping-item {
    padding: 0.25rem 0.3rem;
    gap: 0.2rem;
    flex-wrap: wrap;
    flex-basis: 100%;
    justify-content: center;
  }

  .item-icon {
    font-size: 0.8rem;
    min-width: 20px;
    text-align: center;
  }

  .item-text {
    font-size: 0.6rem;
    max-width: 90px;
    line-height: 1.1;
  }

  .divider {
    display: none;
  }
}

/* Extra pequeño */
@media (max-width: 360px) {
  .shipping-info {
    padding: 0.3rem 0.2rem;
    margin: 0.3rem auto;
  }

  .shipping-item {
    padding: 0.2rem 0.25rem;
  }

  .item-icon {
    font-size: 0.75rem;
  }

  .item-text {
    font-size: 0.55rem;
    max-width: 70px;
  }
}
</style>