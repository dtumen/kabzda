type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
  const { collapsed, onChange, titleValue } = props;
  return (
    <div>
      <>
        <AccordionTitle title={titleValue} onChange={onChange}/>  
        { !collapsed && <AccordionBody />}
      </>
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle({ title, onChange }: AccordionTitlePropsType) {
  console.log('AccordionTitle rendered')
  return <h3 onClick={onChange} >{title}</h3>
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