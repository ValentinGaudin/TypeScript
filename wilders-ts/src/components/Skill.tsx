import styledComponents from 'styled-components';
import { ISkill } from "../interface/interface"
interface IProps extends ISkill {
}
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

const Badge = styledComponents.span<{ votes: number }>`
  /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
    /* Colors */
    background-color: ${({ votes }) => votes > 10 ? 'green' : 'red'};
    color: #fff;
    /* Rounded border */
    border-radius: 9999px;
    height: 20px;
    width: 20px;
`;


function Skill(props: IProps) {
    return (
        <Skills>
            <ul>
                <li>
                    {props.title}
                    <Badge votes={props.votes}>
                        {props.votes}
                    </Badge>
                </li>
            </ul>
        </Skills>
    );
}

export default Skill;