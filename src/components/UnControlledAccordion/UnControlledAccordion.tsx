import React, { useState } from 'react';

type PropsType = {
  titleValue: string
}

const UnControlledAccordion = (props: PropsType) => {
  const [collapsed, setCollapsed] = useState(true);

  const setCollapsedHandler = () => setCollapsed(prev => !prev);

  return (
    <div>
      <>
        <AccordionTitle title={props.titleValue} />
        <button onClick={setCollapsedHandler}>Toggle</button>
        {!collapsed && <AccordionBody />}  
      </>
    </div>
  );
};

export default UnControlledAccordion;

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle({ title }: AccordionTitlePropsType) {
  console.log('AccordionTitle rendered')
  return <h3>{title}</h3>
}

function AccordionBody() {
  console.log('AccordionBody rendered')
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}