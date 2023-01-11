import { Action } from "../ngrx-fake/ngrx";


// Un reducer es una funcion con un switch
export function contadorReducer( state = 10 , action: Action ) {

    switch( action.type ) {
        
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 10;
        case 'CUBO':
            return state **= 3;
        default:
            return state;

    }
    
}