import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOff from './components/UnControlledOnOff/UnControlledOnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import UnConOnOff from './components/OnOff/OnOff';

function App() {
    console.log('App rendered');

    const [toggler, setToggler] = useState<boolean>(false);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    const changeTogglerHandler = () => setToggler(prev => !prev);
    // const changeCollapsed = () => setAccordionCollapsed(prev => !prev);

    return (
        <div className="App">
            {/* <PageTitle title={'This is APP component'} />
      <PageTitle title={'Hello, my Friend!'} />
      Article 1
      <Rating value={2} />
      <Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'Users'} collapsed={false} />
      Article 2
      <Rating value={3} />

      <OnOff/>
      <OnOff/>
      <OnOff/>
      <hr />
      Article 3
      <UnControlledRating/>
      <UnControlledAccordion titleValue={'Menu 2'}/>
      <UnControlledAccordion titleValue={'Users 2'}/> */}

            <UnConOnOff toggler={toggler} changeTogglerHandler={changeTogglerHandler}/>
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle({title}: PageTitlePropsType) {
    console.log('AppTitle rendered')
    return <h2>{title}</h2>
}


export default App;

