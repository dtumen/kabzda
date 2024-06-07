export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    handleCollapsedChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    const {collapsed, handleCollapsedChange, titleValue, items} = props;
    return (
        <div>
            <>
                <AccordionTitle title={titleValue} handleCollapsedChange={handleCollapsedChange}/>
                {!collapsed && <AccordionBody items={items} onClick={props.onClick} />}
            </>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    handleCollapsedChange: () => void
}

function AccordionTitle({title, handleCollapsedChange}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return <h3 onClick={handleCollapsedChange}>{title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {
                props?.items.map((item: ItemType, i: number) => (
                    <li key={i} onClick={() => props.onClick(item.value)} >{item.title}</li>
                ))
            }
        </ul>
    )
}