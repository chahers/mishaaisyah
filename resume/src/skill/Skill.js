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
    return ( 
        <>
        <div className='skill-wrapper'>
            <div className='skill-container'>
                <h1 className='skill-heading'>Applicable skills</h1>
                <div>
                    <p className='skill-description'>These are the tools and technologies I have worked with during my studies in Lancaster University.</p>
                </div>
                <ul className='apps'>

                </ul>
            </div>
        </div>
        <div className='skill-backlay'/>
        </>
     );
}

export default Skill;