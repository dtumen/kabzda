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
        <AccordionTitle title={props.titleValue} setCollapsedHandler={setCollapsedHandler} />
        {!collapsed && <AccordionBody />}  
      </>
    </div>
  );
};

export default UnControlledAccordion;

type AccordionTitlePropsType = {
  title: string
  setCollapsedHandler: () => void
}

function AccordionTitle({ title, setCollapsedHandler }: AccordionTitlePropsType) {
  console.log('AccordionTitle rendered')
  return <h3 onClick={setCollapsedHandler} >{title}</h3>
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