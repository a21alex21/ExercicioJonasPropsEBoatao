import If from './If'

export default props => {
    const usuario = props.usuario || {}

    return (
        <>
            <If test={usuario && usuario.nome && usuario.email}>
                <h2>Usuario Logado</h2>
                <h3>
                    {usuario.nome} -  {UsuarioLogado.email}
                </h3>
            </If>
        </>
    )
}
