import { cuboAction, 
        decrementadorAction, 
        dividirAction, 
        incrementadorAction, 
        multiplicarAction,
        resetAction
    } from "./contador/contador.actions";
import { reducer } from "./contador/contador.reducer";

// Usar el reducer y mostrarlo en consola
console.log(reducer(10, incrementadorAction));  // 11
console.log(reducer(10, decrementadorAction )); // 9
console.log(reducer(10, multiplicarAction ));   // 20
console.log(reducer(10, dividirAction ));       // 5
console.log(reducer(10, cuboAction ));          // 1000
console.log(reducer(10, resetAction ));         // 0
