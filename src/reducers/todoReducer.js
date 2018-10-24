const initState = {
    items: [
        'Задача 1',
        'Задача 2',
        'Задача 3',
        'Задача 4',
        'Задача 5'
    ],
}

const todoReducer = (state = initState, action) => {

    switch (action.type) {   
        case "ADD_ITEM": 
            return ADD_ITEM(state, action);
        case "DELETE_ITEM": 
           return DELETE_ITEM(state, action);
        default:
            return state;
    }

};

function ADD_ITEM(state, action) {

  return { ...state, items: [...state.items, action.payload.value] };  

}

function DELETE_ITEM(state, action) {

    return { ...state, items: [...state.items.filter((item, i) => i !== action.payload.id)] };  
}

export default todoReducer;
