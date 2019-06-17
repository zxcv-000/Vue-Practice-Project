import axios from '../../axios/configure'

const state = {
  cartInfo: {}
};

const getters = {
  cartInfo(state) {
    return state.cartInfo
  }
};

const mutations = {
  addData(state, newData) {
    state.cartInfo = newData;
  },
  cutNum(state, id) {
    state.cartInfo.shops[id.shop_id].products[id.product_id].num--;
  },
  addNum(state, id) {
    state.cartInfo.shops[id.shop_id].products[id.product_id].num++;
  },
  changeSum(state) {
    let sum = 0;
    if (state.cartInfo.shops) {
      state.cartInfo.shops.forEach(ele => {
        ele.products.forEach(ele => {
          if (ele.checked) {
            sum += (ele.price * 1000) * ele.num
          }
        })
      });
      state.cartInfo.totalPrice = sum / 1000;
    }
  },

  modifySelect(state, id) {
    state.cartInfo.shops[id.shop_id].products[id.product_id].checked = !state.cartInfo.shops[id.shop_id].products[id.product_id].checked
  },
  changeShopSelect(state, shop_id) {
    state.cartInfo.shops[shop_id].checked = state.cartInfo.shops[shop_id].products.every(ele => ele.checked)
  },
  changeAllSelect(state, shop_id) {
    if (state.cartInfo.shops[shop_id]) {
      state.cartInfo.checked = state.cartInfo.shops[shop_id].every(ele => ele.checked)
    }
  },
  modifyShopSelect(state, shop_id) {
    let medium = !state.cartInfo.shops[shop_id].checked;
    state.cartInfo.shops[shop_id].checked = medium;
    state.cartInfo.shops[shop_id].products.forEach(ele => {
      ele.checked = medium
    })
  },
  modifyAllSelect(state) {
    let medium = !state.cartInfo.checked;
    state.cartInfo.checked = medium;
    state.cartInfo.shops.forEach(ele => {
      ele.checked = medium;
      ele.products.forEach(ele => {
        ele.checked = medium;
      })
    })
  }
};

const actions = {
  getInfo(context, url) {
    axios.post(url).then(({
      data
    }) => {
      if (data.state) {
        context.commit('addData', data.resolveData)
        context.commit('changeSum')
      }
    }).catch(err => console.log(err))
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
