import React from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'
import api from '../../services/api'

function NewIncident() {
    const ongId = localStorage.getItem('id')
    const history = useHistory()

    const [title, setTile] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    async function handleNewIncident(e) {
        e.preventDefault()

        try {
            const data = { title, description, value }
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }


    return (
        <div className='new-incident-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt='Be The Hero' />

                    <h1>Cadastro novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='#e02041' />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input value={title} onChange={e => setTile(e.target.value)} placeholder='Titulo do caso' />
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Descrição' />
                    <input value={value} onChange={e => setValue(e.target.value)} placeholder='Valor em reais' />

                    <button onClick={handleNewIncident} className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident
