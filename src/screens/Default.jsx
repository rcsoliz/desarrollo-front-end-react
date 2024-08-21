import Logo from './Default/_components/Logo';
import Description from  './Default/_components/Description';

import Openlink from '../components/OpenLink';
import LessonInfo from './Default/_components/LessonInfo';

import Contador from './Default/_components/Contador';


const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador/>
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