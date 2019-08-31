/*
export function someAction (context) {
}
*/
export function addCart ({ commit }, product) {
  commit('addCart', product)
}

export function clearCart ({ commit }) {
  commit('clearCart')
}