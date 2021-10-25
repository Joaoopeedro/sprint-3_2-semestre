import { Component } from "react"

export default class Repository extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDeRepository: [],
            NomeUsuario: '',
            
        }

    }
    buscarRepository = () => {
        console.log("agora vamos fazer a chamada para a API")

        // informamos o end point.

        fetch(`https://api.github.com/users/${this.state.NomeUsuario}/repos?per_page=10`)


            .then(resposta => resposta.json())



            ////atualizado o statis listaTiposEventos com os dados obtidos.
            .then(dados => this.setState({ listaDeRepository: dados }))

            //caso ocorra algum erro, mostra no console do computador.
            .catch(erro => console.log(erro))


    }

    atualizaEstadodoTitulo = async (event) => {
        //Nome titulo > valor input.
        await this.setState({ NomeUsuario: event.target.value })
        console.log(this.state.NomeUsuario)
    }

    render() {
        return (
            //JSX
            <div>
                <main className='main1'>
                    <section>
                        <h2 className='H1'>Lista de Repositorios</h2>
                        <input className='input_name' type='text'
                            value={this.state.NomeUsuario}
                            placeholder="Nome Usuario"
                            onChange={this.atualizaEstadodoTitulo}
                        ></input>
                        <button className='bnt_buscar' type='submit' disabled={this.state.NomeUsuario === '' ? 'none' : ''} onClick={() => this.buscarRepository()}> Buscar</button>
                    </section>
                    <section>
                        <table className='tabela'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Nome Repositorio</th>
                                    <th> Descrição</th>
                                    <th> Data Criação</th>
                                    <th> Tamanho Repositorio</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaDeRepository.map((repositorio) => {
                                        return (
                                            <tr >
                                                <td>{repositorio.id}</td>
                                                <td>{repositorio.name}</td>
                                                <td>{repositorio.description}</td>
                                                <td>{repositorio.created_at}</td>
                                                <td className='alinhartexto'>{repositorio.size}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }

}