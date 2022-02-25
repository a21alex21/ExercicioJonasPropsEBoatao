export default props => {

    function gerarNumero() {

        return Math.random()
    }
    return (

        <button onClick={function () {

            const n = gerarNumero()

            props.funcao('O valor é: ', n)
        }} >

            Executar
        </button>
    )
}