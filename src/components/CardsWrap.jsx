import { useContext } from "react"
import {cardCon} from "../context/CardData"
import Cards from "./Cards"

const CardsWrap = () => {
    
    const data = useContext(cardCon)
    return (
        <div className='px-10 py-3 flex w-full gap-3 flex-wrap'>
            {data.map((elem, idx) => {
                return <Cards key={idx} icon={elem.icon} name={elem.name} number={elem.number} bgcolor={elem.bgcolor} text={elem.textcolor} />
            })}
        </div>
    )
}

export default CardsWrap