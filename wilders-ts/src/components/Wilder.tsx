import '../assets/styles/Card.css';
import blank_profile from '../assets/images/blank_profile.png';
import styledComponents from 'styled-components';
import { useState } from 'react';
import Skills from './Skill';

export default class Wilder {
    public name: string;
    public city: string;
    public skills: Skills;

    constructor(name: string, city: string, skills: Skills) {
        this.name = name;
        this.city = city;
        this.skills = skills;
    }

Wilder(Wilder:Wilder  ,_id: number, onWilderDeleted: any, onError: any) {
    const [isDelete, setIsDeleted] = useState(false)

    async function deleteWilder() {
        try {
            let result = window.confirm("Press a button!\nEither OK or Cancel.");
            console.log("Hello world");
            console.log(result);
            if (result === true) {
                await fetch("http://127.0.0.1:4000/api/wilders/" + _id, { method: "DELETE" })
                setIsDeleted(true);
                if (onWilderDeleted) {
                    onWilderDeleted();
                }
            } else {
                setIsDeleted(false);
            };
        } catch (error: any) {
            if (onError) {
                onError();
            }
        }
    }

    const Article = styledComponents.article`
    display: flex;
    padding: 20px;
    border: 1px solid #c9c9c9;
    border-radius: 7px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    img:first-child {
        border-radius: 7px 7px 0 0;
        margin-bottom: 20px;
        max-width: 100%;
        height: auto;
    }
    h3,h4 {
    color: #f76c6c;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    }
    `;

    const Section = styledComponents.section`
    display: grid;
    grid-template-columns: repeat(3, 32%);
    justify-content: space-between;
    `;

        return (
            <div>
                <Article>
                    <Section>
                        <img src={blank_profile} alt={this.name} />
                        <h3>
                            {this.name} from {this.city}
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illum doloremque, maxime ab voluptates quis, a, eius dolores asperiores tenetur quo inventore fuga qui sequi.
                        </p>
                        <h4>
                            Wild Skills
                        </h4>
                        {/* {this.skills?.map((skill, index: number) => <Skill key={index} title={skill.title} votes={skill.votes} />)} */}
                        <button type="button" onClick={() => deleteWilder()}> Delete ? </button>
                    </Section>
                </Article>
            </div>
        );
    }
}