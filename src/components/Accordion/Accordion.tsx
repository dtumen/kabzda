type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendered')
  return (
    <div>
      {props.collapsed ? (
        <AccordionTitle title={props.titleValue}/>
      ) : (
      <>
        <AccordionTitle title={props.titleValue}/>  
        <AccordionBody />
      </>
      )}
    </div>
  )
}

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