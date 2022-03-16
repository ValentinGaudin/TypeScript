import { title } from 'process';
import React from 'react';
import { useState } from 'react';
import { ISkill } from './Skill';
import Wilder, { IWilder } from './Wilder';



function AddWilder(props: {
    onWilderCreated: () => void,
    onError: () => void
}) {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [skill, setSkill] = useState([
        { title: useState('') },
        { votes: useState(0) }
    ]);
    const [error, setError] = useState("");

    return (
        <form
            onSubmit={async (e) => {
                try {
                    e.preventDefault();
                    const data = {
                        name: name,
                        city: city,
                        skills: [{
                            title: title,
                            votes: votes,
                        }]
                    };

                    const res = await fetch('http://127.0.0.1:4000/api/wilders', { method: "POST", body: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
                    console.log(data);
                    setName('');
                    setName('');
                    if (props.onWilderCreated) {
                        props.onWilderCreated()
                    }
                    if (res.data.success) {
                        setError("");
                    }
                } catch (error) {
                    if (props.onError) {
                        props.onError();
                    }
                }
            }}

        >
            <label htmlFor="name">Name :</label>
            <input
                id="name"
                type="text"
                placeholder="Type the name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="city">City :</label>
            <input
                id="city"
                type="text"
                placeholder="Type the city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="city">Skills :</label>
            <input
                id="title"
                type="text"
                placeholder="Your's skill"
                value={title}
                onChange={(e) => setSkill(e.target.value)}
            />
            <input
                id="votes"
                type="number"
                placeholder="Type the votes"
                value={votes}
                onChange={(e) => setSkill(e.target.value)}
            />
            {error !== "" && <error>{error}</error>}
            <button>Add</button>
        </form>
    );
}
export default AddWilder;