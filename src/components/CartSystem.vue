<template>
  <div class="cart-system">
    <!-- Botón flotante del carrito -->
    <div class="cart-float-btn" @click="cartStore.toggleCart()" :class="{ 'has-items': cartStore.totalItems > 0 }">
      <span class="cart-icon">🛒</span>
      <span v-if="cartStore.totalItems > 0" class="cart-badge">{{ cartStore.totalItems }}</span>
    </div>

    <!-- Overlay del carrito -->
    <div v-if="cartStore.isOpen" class="cart-overlay" @click="cartStore.toggleCart()">
      <div class="cart-panel" @click.stop>
        <!-- Header del carrito -->
        <div class="cart-header">
          <h3>🛒 Mi Carrito</h3>
          <button class="close-btn" @click="cartStore.toggleCart()">✕</button>
        </div>

        <!-- Lista de productos -->
        <div class="cart-content">
          <div v-if="cartStore.items.length === 0" class="empty-cart">
            <div class="empty-icon">🛍️</div>
            <p>Tu carrito está vacío</p>
            <small>Agrega productos para comenzar</small>
          </div>

          <div v-else class="cart-items">
            <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
              <div class="item-image">
                <span>📦</span>
              </div>
              <div class="item-details">
                <h4>{{ item.name }}</h4>
                <p class="item-price">{{ item.price }}</p>
                <div class="quantity-controls">
                  <button @click="decreaseQuantity(item)" class="qty-btn">-</button>
                  <span class="quantity">{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item)" class="qty-btn">+</button>
                </div>
              </div>
              <div class="item-actions">
                <button @click="cartStore.removeItem(item.id)" class="remove-btn">🗑️</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer del carrito -->
        <div v-if="cartStore.items.length > 0" class="cart-footer">
          <div class="cart-total">
            <div class="total-items">{{ cartStore.totalItems }} productos</div>
            <div class="total-price">Total: ${{ cartStore.totalPrice.toLocaleString() }}</div>
          </div>
          
          <div class="cart-actions">
            <button @click="cartStore.clearCart()" class="clear-btn">Limpiar</button>
            <button @click="sendToWhatsApp" class="whatsapp-btn">
              <span class="whatsapp-icon">📱</span>
              Comprar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartStore } from '@/store/cart.js'

export default {
  name: 'CartSystem',
  setup() {
    const increaseQuantity = (item) => {
      cartStore.updateQuantity(item.id, item.quantity + 1)
    }

    const decreaseQuantity = (item) => {
      cartStore.updateQuantity(item.id, item.quantity - 1)
    }

    const sendToWhatsApp = () => {
      cartStore.sendToWhatsApp()
      cartStore.toggleCart()
      
      // Opcional: limpiar carrito después de enviar
      setTimeout(() => {
        if (confirm('¿Deseas limpiar el carrito después de enviar el pedido?')) {
          cartStore.clearCart()
        }
      }, 1000)
    }

    return {
      cartStore,
      increaseQuantity,
      decreaseQuantity,
      sendToWhatsApp
    }
  }
}
</script>

<style scoped>
/* Botón flotante */
.cart-float-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #83C5BE, #CDB4DB);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(131, 197, 190, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
}

.cart-float-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(131, 197, 190, 0.6);
}

.cart-float-btn.has-items {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.cart-icon {
  font-size: 1.5rem;
  color: white;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #FF6B6B;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

/* Overlay del carrito */
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.cart-panel {
  width: 400px;
  height: 100%;
  background: white;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

/* Header */
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  background: linear-gradient(135deg, #FFAFCC, #FFC8DD);
}

.cart-header h3 {
  color: #4A5759;
  font-size: 1.3rem;
  font-weight: 700;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4A5759;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Contenido */
.cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.empty-cart {
  text-align: center;
  padding: 3rem 1rem;
  color: #999;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Items del carrito */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #eee;
}

.item-image {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #FFAFCC, #FFC8DD);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  color: #4A5759;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.item-price {
  color: #83C5BE;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.qty-btn {
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #4A5759;
}

.qty-btn:hover {
  background: #f0f0f0;
}

.quantity {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  color: #4A5759;
}

.item-actions {
  display: flex;
  align-items: center;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.3s;
}

.remove-btn:hover {
  background: rgba(255, 107, 107, 0.1);
}

/* Footer */
.cart-footer {
  border-top: 1px solid #eee;
  padding: 1.5rem;
  background: white;
}

.cart-total {
  text-align: center;
  margin-bottom: 1rem;
}

.total-items {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.total-price {
  color: #4A5759;
  font-size: 1.3rem;
  font-weight: 800;
}

.cart-actions {
  display: flex;
  gap: 1rem;
}

.clear-btn {
  flex: 1;
  padding: 0.8rem;
  border: 2px solid #ddd;
  background: white;
  color: #666;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.clear-btn:hover {
  border-color: #FF6B6B;
  color: #FF6B6B;
}

.whatsapp-btn {
  flex: 2;
  padding: 0.8rem;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;
}

.whatsapp-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
}

.whatsapp-icon {
  font-size: 1.2rem;
}

/* Responsive */
@media (max-width: 480px) {
  .cart-panel {
    width: 100%;
  }
  
  .cart-float-btn {
    bottom: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
  }
  
  .cart-icon {
    font-size: 1.2rem;
  }
}
</style>