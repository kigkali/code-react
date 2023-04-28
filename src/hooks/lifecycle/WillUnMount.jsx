/**
 * Ejemplo de uso del metodo componentWillunmoint componente clase
 * ejemplo de uso del hooks para componente funcional 
 * cuando el componente va a desaparecer
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('comportamiento antes de que el comportamiento desaparezca')
    }

      render() {
          return (
        <div>
             <h1>
                 WillUnMount
             </h1>
          </div>
       )
    }
}


export const WillUnMountHook = () => {

    useEffect(()=>{
        // aqui no ponemos nada
        return () => {
            console.log('comportamiento antes de que el comportamiento desaparezca')

        };
    }, []);
    
    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
}

export default WillUnMount;

