import React from 'react'

function People() {

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }]

    const listItems = people.map(person => <li key={person}>{person.name}</li>)

    const listItems2 = []
    for (const p of people) {
        listItems2.push(<li key={p.id}>{p.name}</li>)
    }
    const peopleList2 = <ul>{listItems2}</ul>


    return (
        <>
            <h2>People</h2>
            <ul>
                {listItems}
            </ul>
            <strong>peopleList2 </strong>
            {peopleList2}

            <strong>peopleList3 </strong>
            <ul>
                {people.map((p, i) =>
                    <li key={p.id}>
                        {p.name}
                    </li>
                )}
            </ul>
        </>
    )
}

export default People
