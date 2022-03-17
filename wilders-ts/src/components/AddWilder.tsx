import { useState } from 'react';
import { ISkill } from '../interface/interface';

function AddWilder(props: {
    onWilderCreated: () => void,
    onError: () => void
}) {
    const [name, setName] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [skills, setSkills] = useState<ISkill[]>([]);
    const [imgFile, setImgFile] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [error, setError] = useState("");

    const changeHandler = (e: any) => {
        setImgFile(URL.createObjectURL(e.target.files[0]))
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
    };

    const addSkill = (): void => {
        const newSkill = skills.slice();
        newSkill.push({ title: "", votes: 0 });
        setSkills(newSkill);
    };
    const deleteSkill = ():void => {
        
    }

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
                const formData = new FormData();
                formData.append('File', 'avatar');
                console.log(formData);
                await fetch('http://127.0.0.1:4000/api/images', { method: "POST", body: formData })

                    .then((response) => response.json())
                    .then((response) => console.log(response))
                    .then((result) => {
                        console.log('Success:', result);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

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

            <button
                onClick={(e) => {
                    e.preventDefault();
                    addSkill()
                }}
            >
                Add Skill
            </button>

            {skills.map((skill, index) => <div key={index}>
                <input
                    id="title"
                    type="text"
                    placeholder="Your's skill"
                    value={skill.title}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        const newSkills = skills.slice();
                        newSkills.splice(index, 1, { ...skill, title: newValue })
                        setSkills(newSkills);
                    }}
                />
                <input
                    id="votes"
                    type="number"
                    placeholder="Type the votes"
                    value={skill.votes}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        const newSkills = skills.slice();
                        newSkills.splice(index, 1, { ...skill, votes: +newValue })
                        setSkills(newSkills);

                    }}
                />
                <button onClick={(e) => {
                    e.preventDefault();
                    deleteSkill()
                }}>Delete Skill</button>
            </div>)}
            <input
                id="avatar"
                type="file"
                onChange={changeHandler}
            />
            <img src={imgFile} height="200" width="200" />
            {error !== "" && <>{error}</>}
            <button>Add</button>
        </form>
    );
}
export default AddWilder;