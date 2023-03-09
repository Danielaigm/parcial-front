import React, { useState } from 'react'
import Card from '../card/Card'
import './style.scss'

const Form = () => {

    const [user,setUser] = useState({
        name: '',
        color: '',
        animal: '',
        hobbie: '',
    })
    const [show,setShow] = useState(false)
    const [err,setErr] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.name.length >= 3 && user.color.length >= 6 && user.name[0] !== " "){
            setShow(true)
            setErr(false)
        }else{
            setShow(false)
            setErr(true)
        }
    }
    const handleReset = () => {
        setUser({
            name: '',
            color: '',
            animal: '',
            hobbie: '',
        })
        setErr(false)
    }
    return (
        <div>
            <span></span>
            <form className='form' onSubmit={handleSubmit}>
                <input className='form__input' type="text" 
                value={user.name} 
                onChange={(e) => setUser({...user, name:e.target.value})} 
                placeholder='Ingrese su nombre'/>

                <input className='form__input' type="text" 
                value={user.color} 
                onChange={(e) => setUser({...user, color:e.target.value})} 
                placeholder='Ingrese el color que lo identifica'/>

                <input className='form__input' type="text" 
                value={user.animal} 
                onChange={(e) => setUser({...user, animal:e.target.value})}
                placeholder='Ingrese su animal favorito'/>

                <input className='form__input' type="text" 
                value={user.hobbie} 
                onChange={(e) => setUser({...user, hobbie:e.target.value})} 
                placeholder='Ingresa tu hobbie'/>

                <button type='submit' className='form__button' >Enviar</button>
                <button onClick={handleReset} className='form__button' >Reset</button>
            </form>
            <div className='error'>{err && "Por favor chequea que la información sea correcta"}</div> 
            {show && <Card name={user.name} color={user.color} animal={user.animal} hobbie={user.hobbie} />}
        </div>
    )
}

export default Form