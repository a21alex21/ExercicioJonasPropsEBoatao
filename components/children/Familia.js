import React from "react";
import Membro from './Membro'

export default props => {

    return (
        <>
            <h2>[Inicio] Membros da Familia </h2>
            {props.children}
            <h2>[Fim] Membros da Familia </h2>
        </>
    )
}
 