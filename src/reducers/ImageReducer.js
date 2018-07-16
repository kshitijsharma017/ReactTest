const defaultState = {
  imageUrl: "",
}

/* Image reducer - performs state changes according to action type */
export default function ImageReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_IMAGE_URL':
      return Object.assign({}, state, {
        imageUrl:action.imageUrl 
      })
   
    default:
      return state
  }
}
