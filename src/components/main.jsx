import { useState } from 'react';

const materie = ["storia", "letteratura", "filosofia", "matematica", "fisica"]
// componente
export default function Main() {

    const [firstName, setFirstName] = useState('Stefano');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Il nome inviato è:' + firstName)
    }
    function stampaLista() {
        return materie.map(lista => {
            return <li>{lista}</li>
        }

        )
    }
    return (
        <>
           
            {stampaLista()}
        </>
    )
}