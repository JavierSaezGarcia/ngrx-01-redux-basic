

import { cuboAction, decrementadorAction, 
            dividirAction, 
            incrementadorAction, 
            multiplicarAction, 
            resetAction} from "./contador/contador.actions";

import { contadorReducer } from './contador/contador.reducer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: contadorReducer
});
store.subscribe( () => {
    console.log('Subs:', store.getState() );    
})

store.dispatch( incrementadorAction ); // 11
store.dispatch( incrementadorAction ); // 12
store.dispatch( incrementadorAction ); // 13
store.dispatch( resetAction );         // el reset lo tengo a 10 
                                       // por tanto result = 10
store.dispatch( incrementadorAction ); // 11
store.dispatch( decrementadorAction ); // 10
store.dispatch( multiplicarAction );   // 20
store.dispatch( dividirAction );       // 10
store.dispatch( cuboAction );          // 1000





