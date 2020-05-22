import React, { useState } from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import api from '../../services/api'

function Logon() {

    const [id, setId] = useState('')
    const history = useHistory()

    async function Logon(e) {
        e.preventDefault()

        try {

            const response = await api.post('sessions', { id })

            localStorage.setItem('id', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')

        } catch (error) {

            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt='Be The Hero' />

                <form onSubmit={Logon}>
                    <h1>Faça seu Logon</h1>

                    <input value={id} onChange={e => setId(e.target.value)} placeholder='Sua ID' />
                    <button className='button' type="submit">Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color='#e02041' />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}

export default Logon
