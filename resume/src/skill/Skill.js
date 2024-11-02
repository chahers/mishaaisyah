import './Skill.css';
import reactIcon from './react.svg';
import htmlIcon from './html.svg';
import cssIcon from './css.svg';
import jsIcon from './js.svg';
import githubIcon from './github.svg';
import pythonIcon from './python.svg';
import javaIcon from './java.svg';
import cIcon from './c-programming.svg';
import mysqlIcon from './mysql.svg';
import postgresqlIcon from './postgresql.svg';

const Skill = () => {

    const skills = [
        { name: 'React', icon: reactIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'GitHub', icon: githubIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'C', icon: cIcon },
        { name: 'MySQL', icon: mysqlIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon },
    ];

    return ( 
        <>
        <div className='skill-wrapper'>
            <div className='skill-container'>
                <h1 className='skill-heading'>Applicable skills</h1>
                <div>
                    <p className='skill-description'>These are the tools and technologies I have worked with during my studies in Lancaster University.</p>
                </div>
                <ul className='apps'>
                {skills.map((skill, index) => (
                        <li key={index} className='skill-item'>
                            <img src={skill.icon} alt={`${skill.name} icon`} className='skill-icon' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='skill-backlay'/>
        </>
     );
}

export default Skill;