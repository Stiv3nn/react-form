import { useState } from 'react';

const materieScolastiche = [

    "storia",
    "letteratura", 
    "filosofia", 
    "matematica", 
    "fisica",
    "geografia",
    "psicologia",
    "chimica"
];

export default function Main() {

    const [newSubject, setNewSubjects] = useState('');

    const [subjetcs, setSubjects] = useState(materieScolastiche);

    const addSubject = event => {
        event.preventDefault();
        const updatedSubjects = [...subjetcs, newSubject];
        setSubjects(updatedSubjects);
        setNewSubjects('');
    }
    const removeSubject = i => {
        const updatedSubjects = subjetcs.filter((subjetcs, index) => {
            return index !== i
        });
        setSubjects(updatedSubjects);
    }

    return (
        <>
         
         {subjetcs.lenght === 0 ? <h2>La tua lista è vuota</h2> :
         
         <ul class="subjects-list">
         {
            subjetcs.map((book, bookindex) => (
                <li key = {bookindex}>{book}
                <button onClick={() => removeSubject(bookindex)}>
                Elimina
                </button>
                </li>))
         }
            </ul>}

            <form onSubmit={addSubject}>
            <input type="text" value={newSubject}
                onChange={event => { setNewSubjects(event.target.value) }} />
            <button>Aggiungi subject</button>
            </form>
        
        </>
    )
}