import './Reveal.css'

import React, {CSSProperties, useEffect, useRef} from "react";

interface IRevealProps {
    children: any[] | any,
    effect: string,
    offset: number,
    style?: CSSProperties,
    className?: string
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const Reveal: React.FC<IRevealProps> =({children, effect, offset = 300, style = {}, className = undefined}) => {
    const ref = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if(ref.current === undefined)
            return;

        const element = ref.current as HTMLElement;
        const elementPosition = element?.getBoundingClientRect().top - element?.getBoundingClientRect().height / 2;
        const displayHeight = window.screen.height

        const reveal = offset >= elementPosition - displayHeight / 2;

        if(reveal){
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

    const waitAndReveal = async () => {
        await delay(5);
        addChildrenStyle(effect);
    }

     useEffect( () => {
        addChildrenStyle('reveal')

        window.addEventListener('scroll', handleScroll, { passive: true });

        if(offset === 0){
            waitAndReveal();
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (<span ref={ref} style={style} className={className} >
        {children}
    </span>)
}
export default Reveal;