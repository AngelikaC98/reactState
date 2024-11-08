import "./card.css"
import Modal from "./modal"
import { useState } from "react"

type Props = {
    title: string;
    text: string;
    image: string;
}

export const Card = ({ title, text, image }: Props) => {
    const [visible, setVisible] = useState(true)

    return (
        <>
        { visible ? (
             <div className="border">
             <div>
                 <img className="image" src={image} />
                 <h2 className="text">{title}</h2>
                 <p className="paragraph"> {text}</p>
             </div>
                 <button onClick={() => {setVisible(!visible)}} className="button">
                     Read more
                 </button>
         </div>
        ) : (
            <>
            <div className="border">
            <div>
                <img className="image" src={image} />
                <h2 className="text">{title}</h2>
                <p className="paragraph"> {text}</p>
            </div>
                <button onClick={() => {setVisible(!visible)}} className="button">
                    Read more
                </button>
        </div>
            <Modal ModalTitle={title} ModalText={text} ModalImage={image} closeModal={() => {setVisible(!visible)}}/>
            </>
        )}
       
        
        </>
    )
}