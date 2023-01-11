

// Acciones interfaz
export interface Action {
    type: string;  // el tipo de dato
    payload?: any; // payload seria por ejemplo 'suma 1 o resta 3' y es opcional. Es un ergumento con el que se hace la operacion
}

export interface Reducer<T> { // operador diamante quiere decir que es generico
    ( state: T, action: Action): T
}