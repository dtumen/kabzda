import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

function App() {
  console.log('App rendered')
  return (
    <div>
      <PageTitle title={'This is APP component'}/>
      <PageTitle title={'Hello, my Friend!'}/>
      Article 1
      <Rating value={2}/>
      <Accordion titleValue={'Menu'} collapsed={false}/>
      <Accordion titleValue={'Users'} collapsed={true} />
      Article 2
      <Rating value={3}/>
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
