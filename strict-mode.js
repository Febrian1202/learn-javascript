function useStrictMode() {
    'use strict'
    const person = {
        firstName: "Muhammad"
    }

    const {firstName} = person;
    console.info(firstName);
    
}

useStrictMode();