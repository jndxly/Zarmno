const initResInfo = {
  restaurant:{
    info: {
      id: '',
      name: ''
    },
    menu: []
  }
}

export const currentRes = (state = initResInfo, action) => {
  switch (action.type) {
    case 'SET_CURRENT_RES':
      return {
        restaurant: action.restaurant
      };
    default:
      return state;
  }
};

export const restaurantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_RES_LIST':
      return action.restaurantList;
    case 'ADD_RESTAURANT':
      return [
        ...state,
        action.restaurant
      ];
    default: return state;
  }
};
