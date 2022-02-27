<template>
<div class="container">
  <h2>購物車</h2>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="
              height: 100px;
              background-size: cover;
              background-position: center;
            "
          ></div>
        </td>
        <td>{{ product.title }}</td>
        <td>
          <div class="h5" v-if="product.price === product.origin_price">
            {{ product.price }} 元
          </div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="openProductModal(product.id)"
            >
              查看更多
            </button>
            <!-- isLoadingItem內的值跟id一樣 按鈕會被disabled -->
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addToCart(product.id)"
              :disabled="isLoadingItem === product.id"
            >
              <!-- isLoadingItem內的值跟id一樣 會顯示loading圖示 -->
              <span
                class="spinner-border spinner-border-sm text-light"
                role="status"
                v-show="isLoadingItem === product.id"
              >
              </span>
              加到購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  data () {
    return {
      cartData: {},
      products: [],
      isLoadingItem: ''
    }
  },
  methods: {
    getProductList () {
      this.$http.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      this.$http.post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, { data }).then((res) => {
        this.getCarts()
        this.isLoadingItem = ''
      })
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>
