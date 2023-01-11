import { Action, Reducer } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { cuboAction, decrementadorAction, incrementadorAction } from './contador/contador.actions';

// El store se encarga de ejecutar las funciones
class Store<T> {

    // private state: T;

    constructor( private reducer: Reducer<T>, 
                 private state: T) {

    }

    getState() {
        return this.state;
    }

    dispatch( action: Action) {
        this.state = this.reducer( this.state, action );
    }


}

const store = new Store( contadorReducer, 10 );
console.log(store.getState()); // 10

store.dispatch( incrementadorAction );
console.log(store.getState()); // 11

store.dispatch( incrementadorAction );
console.log(store.getState()); // 12

store.dispatch( decrementadorAction );
console.log(store.getState()); // 11

store.dispatch( cuboAction );
console.log(store.getState()); // 1331

store.dispatch( incrementadorAction );
console.log(store.getState()); // 1330
