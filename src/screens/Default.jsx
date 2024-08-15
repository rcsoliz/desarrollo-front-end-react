import Logo from './_components/Logo';
import Description from  './_components/Description';
 
import Openlink from '../components/OpenLink';

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

            </header>
        </>
    );
};

export default Default; 