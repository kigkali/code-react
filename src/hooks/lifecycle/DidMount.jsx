/**
 * ejemplo de uso  de metodo
 * el ciclo de vida en componentes clase y el hook de ciclo de vida
 * en componentes funcional
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {
      
    componentDidMount() {
        console.log('comportamiento antes de que el componente sea anadido al Dom (rederice)')
    }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}



export const DidMountHook = () => {
     
         useEffect(() => {
            console.log('comportamiento antes de que el componente sea anadido al Dom (rederice)');
        }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

export default DidMount;

