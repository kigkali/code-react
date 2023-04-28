/**
 * ejemplo de uso de metodo componentDidUdate en componente clase
 * y uso en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

     componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o camnio en su estado privado')

     }
   

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {

    useEffect(()=>{
     console.log('Comportamiento cuando el componente recibe nuevos props o camnio en su estado privado')

    });

  return (
    <div>
        <h1>DidUpdate</h1>
    </div>
  );
}

