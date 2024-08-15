import Logo from './_components/Logo';
import Description from  './_components/Description';
 
import Openlink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />  

                <Openlink title ="Lear React" 
                    url="https://reactjs.org"
                />
                <Openlink title ="Mi proyecto React (Git)" 
                    url="https://github.com/rcsoliz/desarrollo-front-end-react"
                />

                <LessonInfo unit ="1:" 
                    name="Introducción a react y estructura de proyecto"
                />
                <LessonInfo  unit ="2:" 
                    name="Context API para la gestión del estado global en aplicaciones react"
                />
            </header>
        </>
    );
};

export default Default; 