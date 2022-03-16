import styledComponents from 'styled-components';
import { ISkill } from "../interface/interface"
interface Iprops extends ISkill{
}

function Skill(props: Iprops) {

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
    background-color: ${(props.votes) > 10 ? 'red' : 'green'};
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
                        {props.title}
                        <Votes>
                            <span>
                                {props.votes}
                            </span>
                        </Votes>
                    </li>
                </ul>
            </Skills>
        </div>
    );
}

export default Skill;