/*
export function someMutation (state) {
}
*/
export function addCart (state, product) {
  state.product.push(product);
}

export function clearCart (state) {
  state.product = [];
}