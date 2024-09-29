export const initialState = {
    brand: [],  // Changed to an array to store multiple selected brands
    price: [],  // Changed to an array for multiple price ranges
    color: [],  // Changed to an array for multiple colors
    type: [],   // Added type as an array
};

export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BRAND':
            return { ...state, brand: action.payload }; // Action payload should be an array of selected brands
        case 'SET_PRICE':
            return { ...state, price: action.payload }; // Action payload should be an array of selected price ranges
        case 'SET_COLOR':
            return { ...state, color: action.payload }; // Action payload should be an array of selected colors
        case 'SET_TYPE':
            return { ...state, type: action.payload }; // Added handling for type
        case 'RESET_FILTER':
            return initialState; // Reset to initial state
        default:
            return state; // Return current state for unrecognized actions
    }
};
