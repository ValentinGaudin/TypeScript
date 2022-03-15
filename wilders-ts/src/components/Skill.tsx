import '../assets/styles/Skills.css'
import styledComponents from 'styled-components';

export default class Skill {
    public title: string;
    public votes: number;

    constructor(title: string, votes: number) {
        this.title = title;
        this.votes = votes;
    }


    Skill(skill: Skill) {

    const Skills = styledComponents.div`
    margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-transform: uppercase;
        li {
            margin: 4px 0;
            display: flex;
            justify-content: space-around;
            border: #f76c6c 1px solid;
            border-radius: 4px;
            padding: 2px;
        }
    `;

    const Votes = styledComponents.div`
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: ${(skill.votes) > 10 ? 'red' : 'green'};
    color: #fff;

    /* Rounded border */
    border-radius: 9999px;
    height: 20px;
    width: 20px;
    `;

    return (
        <div>
            <Skills>
                <ul >
                    <li>
                        {skill.title}
                        <Votes>
                            <span >
                                {skill.votes}
                            </span>
                        </Votes>
                    </li>
                </ul>
            </Skills>
        </div>
    );

    }
}
