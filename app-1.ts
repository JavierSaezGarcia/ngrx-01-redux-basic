
// Acciones
interface Action {
    type: string;  // el tipo de dato
    payload?: any; // payload seria por ejemplo 'suma 1 o resta 3' y es opcional
}

// Un reducer es una funcion
function reducer( state: number, action: Action ) {

    // if( action.type === 'CUBO') {
    //     return state **= 3; // Halla el cubo
    // }

    switch( action.type ) {
        
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'CUBO':
            return state **= 3;
        default:
            return state;

    }
    
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
    
};

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
    
};
const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
    
};

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
    
};
// como usar esta accion
const cuboAction: Action = {
    type: 'CUBO'
    
};



// Usar el reducer y mostrarlo en consola

console.log(reducer(10, incrementadorAction));  // 11
console.log(reducer(10, decrementadorAction )); // 9
console.log(reducer(32, multiplicarAction ));   // 64
console.log(reducer(10, dividirAction ));       // 5
console.log(reducer(25, cuboAction ));          // 15625

