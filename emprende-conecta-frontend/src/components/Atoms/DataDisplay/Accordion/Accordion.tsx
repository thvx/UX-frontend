import React from 'react';

type AccordionItem = {
    title: string;
    content: string;
}

type AccordionProps = {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                    <div className="collapse-title text-xl font-medium">
                        {item.title}
                    </div>
                    <div className="collapse-content">
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Accordion;