import {useEffect, useRef, useState} from "react";

interface IRevealProps {
    children: any[],
    effect: string
}

export default (props: IRevealProps) => {
    const myRef = useRef();
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if(myRef.current == undefined)
            return;

        const element = myRef.current as HTMLElement;
        const elementPosition = element?.offsetTop

        if(scrollPosition >= elementPosition){
            const children = props.children as HTMLElement[];

            children.forEach(child => {
                child.classList.add(props.effect)
            })
        }

        console.log('xD')
    };

    useEffect(() => {
        /*const children = props.children as HTMLElement[];

        children.forEach(child => {
           child.style.setProperty('display', 'none')
        });
*/
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (<>
        {props.children}
    </>)
}