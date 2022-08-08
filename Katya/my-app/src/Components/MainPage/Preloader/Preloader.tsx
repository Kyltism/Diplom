import { useRef } from 'react';
import './Preloader.css';


const Preloader = () => {
const loader = useRef<HTMLDivElement>(null);
window.setTimeout(function () {
    

        if (loader.current){
            if(loader.current.classList.contains('preloader')){
                loader.current.classList.add("preloader-remove")
            }
        }
        
    }, 300);

    return (
        <div className="preloader" ref={loader}>
            <p className='bookStore'>BOOKSTORE</p>
        </div>
    )
}


export default Preloader;