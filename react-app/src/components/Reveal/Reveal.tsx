import './Reveal.css'

import React, {useEffect, useRef} from "react";

interface IRevealProps {
    children: any[],
    effect: string,
    offset: number
}

const Reveal: React.FC<IRevealProps> =({children, effect, offset = 300}) => {
    const ref = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if(ref.current === undefined)
            return;

        const element = ref.current as HTMLElement;
        const elementPosition = element?.offsetTop

        if(scrollPosition + offset >= elementPosition){
            addChildrenStyle(effect);
        }
    };

    const addChildrenStyle = (className : string) => {
        if(ref.current == null)
            return;

        const children = ref.current.children;

        for(let i = 0; i < children.length; i++){
            const child = children[i];
            child.classList.add(className)
        }
    }

    useEffect(() => {
        addChildrenStyle('reveal')

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (<span ref={ref}>
        {children}
    </span>)
}
export default Reveal;