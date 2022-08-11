const App = {
  data() {
    return {
      products,
      isProducts: true,
      cart: {
        totalCost: 0,
        items: {}
      }
    };
  },
  methods: {
    addProductToCart(product) {
        product = this.products[product.target.id - 1];
        if (product.stock == 0) alert('You can\'t add this product to cart !!!');
        else {
            this.cart.totalCost += product.price * 1;
            if (this.cart.items[`${product.id}`]) this.cart.items[`${product.id}`] ++;
            else this.cart.items[`${product.id}`] = 1;
            this.products[product.id -1].stock --;
        }
    },
    removeProductFromCart(product) {
        product = this.products[product.target.id - 1];
        this.cart.totalCost -= product.price * 1;
        if (this.cart.items[`${product.id}`] == 1) delete this.cart.items[`${product.id}`] ;
        else this.cart.items[`${product.id}`] -= 1;
        this.products[product.id -1].stock ++;
    },
    reverseShow() {
        this.isProducts = ! this.isProducts;
    }
  }
};

Vue.createApp(App).mount("#app");
