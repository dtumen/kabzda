import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';

function App() {
  console.log('App rendered')
  return (
    <div>
      <PageTitle title={'This is APP component'}/>
      <PageTitle title={'Hello, my Friend!'}/>
      Article 1
      <Rating value={2}/>
      <Accordion titleValue={'Menu'} collapsed={true}/>
      <Accordion titleValue={'Users'} collapsed={false} />
      Article 2
      <Rating value={3}/>

      <OnOff toggler={true}/>
      <OnOff toggler={false}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle({ title }: PageTitlePropsType) {
  console.log('AppTitle rendered')
  return <h2>{title}</h2>
}







export default App;
