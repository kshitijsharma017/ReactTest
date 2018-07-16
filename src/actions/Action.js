/* To set image url*/
export function setImageUrl(obj) {
  const action = {
    type: 'SET_IMAGE_URL',
    imageUrl: obj,
  }
  return action;
}
