import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addComentThunk } from "../../store/modules/user/thunk"
import "./style.css"

const CardComents = ()=>{

    const dispatch = useDispatch()
    const [input, setInput]=useState("")
    const {comments, name}= useSelector((state)=>state.user)

    const handleClick = ()=>{
        dispatch(addComentThunk(input))
        setInput("")
    }

    return(
        <div className="container_all">
            <h2><div>{`${name.substr(0,1).toUpperCase()}`}</div> {name}</h2>
            <div >
                {comments && comments.map((comment, index)=>(
                    <p className="comment" key={index}>{comment}</p>
                ))}
            </div>
        <div className="input_comment">
            <input placeholder="New Comment" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button className="add_comment" onClick={handleClick}>New Comment </button>
        </div>
        </div>
    )
}
export default CardComents