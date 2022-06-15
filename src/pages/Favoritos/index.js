import {useEffect, useState} from 'react'
import "./favoritos.css"
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'

function Favoritos (){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista =localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])


    function excluirFilme (id) { //essa função é para excluir o filme
        let filtroFilmes = filmes.filter((item) => { //varriável criada para filtrar os filmes, com uma fução anônima.
            return (item.id !== id )
        })

        // em outras palavras, essa função vai filtrar todos os itens da minha lista, menos o que eu no botão excluir e vai retornar essa lista, com a exceção mencionada. 

        setFilmes(filtroFilmes); // devole o filtro de filmes com a condição imposta anteriormente ( item.id !== id)
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes)) // código para tirar o filme do Localstorage e, de fato atualizar os dados salvos. 
        toast.warn('Filme removido da sua lista.')
    }
    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>
            
            {filmes.length === 0  && <span>Você não possui filmes salvos em sua lista! Clique <Link className='return-home' to='/'>aqui</Link> para adicionar!</span>} 

            <ul>
                {filmes.map((item) =>  {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;