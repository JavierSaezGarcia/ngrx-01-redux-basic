import { Action } from "../ngrx-fake/ngrx";

// como usar esta accion
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
const resetAction: Action = {
    type: 'RESET'    
};
const cuboAction: Action = {
    type: 'CUBO'
    
};

export {
    incrementadorAction,
    decrementadorAction,
    multiplicarAction,
    dividirAction,
    cuboAction,
    resetAction
}