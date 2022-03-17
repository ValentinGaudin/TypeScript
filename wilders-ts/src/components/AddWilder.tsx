import { useState } from 'react';
import { ISkill } from '../interface/interface';

function AddWilder(props: {
    onWilderCreated: () => void,
    onError: () => void
}) {
    const [name, setName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [skill, setSkill] = useState<ISkill>({ title: "Hello World", votes: 10 })
    const [skills, setSkills] = useState<ISkill[]>([])
    const [error, setError] = useState("");
    

    const addSkill = (): void => {
        setSkills([...skills, skill]);
        setSkill({ title: "Hello World", votes: 10 });
    };

    return (
        <form
            onSubmit={async (e) => {
                try {
                    e.preventDefault();
                    const data = {
                        name: name,
                        city: city,
                        skills: skills
                    };
                    const res = await fetch('http://127.0.0.1:4000/api/wilders', { method: "POST", body: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
                    console.log(data);
                    setName('');
                    setName('');
                    if (props.onWilderCreated) {
                        props.onWilderCreated()
                    }
                    if (res.ok) {
                        setError("");
                    }
                } catch (error: any) {
                    if (props.onError) {
                        props.onError();
                    };
                };
            }
        }
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
                value={skill.title}
                onChange={(e) => setSkill({ ...skill, title: e.target.value })}
            />
            <input
                id="votes"
                type="number"
                placeholder="Type the votes"
                value={skill.votes}
                onChange={(e) => setSkill({ ...skill, votes: +e.target.value })}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addSkill()
                }}
            >
                Add Skill
            </button>
            {error !== "" && <>{error}</>}
            <button>Add</button>
        </form>
    );
}
export default AddWilder;