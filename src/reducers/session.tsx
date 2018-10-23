const initialState = {
  isLoggedIn: false,
  isGuest: false,
};

const defaultAction = { type: '', payload: {} };

export default function(state = initialState, action = defaultAction) {
  const { type, payload = {} } = action;
  switch (type) {
    case 'ROUTE_CHANGE': {
      return {
        ...state,
      };
    };
    default:
      return state;
  }
}
