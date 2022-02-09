import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { increment } from "../store/slices/counterSlice";


export const ModalBtn = ({innerText, className}) => {
	const counter = useSelector(state => state.counter.value)
	console.log(counter);
	return(
		<button 
			className={className + " btn"}
			onClick={() => console.log('dsffdsfs')}
		>
			{innerText}
		</button>
	)
}