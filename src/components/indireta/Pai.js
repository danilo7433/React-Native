import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)
    function exibirValor(numero){ 
        setNum(numero)

    }
return (
    <>
        <Text>{num}</Text>
        <Filho 
            min={2}
            max={20} 
            funcao={exibirValor}/>
    </>
)
}