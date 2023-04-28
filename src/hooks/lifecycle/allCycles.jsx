/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';

const allCycles = () => {

    
     useEffect(() => {
        console.log('componente creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualizacion del componente')

        },1000);

        return () => {
            console.log('componentes va a desparecer')
            document.title = "tiempo detenido";
            clearInterval(intervalID);
        };
     }, []);



    return (
       <div>
      
       </div>
   );
}

export default allCycles