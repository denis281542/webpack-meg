import React, {useState, useEffect, useRef} from "react";

export const ShowMoreBtn = (table) => {
    const [text, setText] = useState('ещё')
    const [heigth, setHeigth] = useState('400px')
    const btn = useRef(null)	   

	const showMore = () => {      
        let theadHeigth = table.thead.current.offsetHeight,
            tbodyHeigth = table.tbody.current.offsetHeight,
            heigthBtn = btn.current.offsetHeight

		setText(text === 'ещё' ? 'скрыть' : 'ещё')
        setHeigth(
            table.table.current.style.height = `${theadHeigth + tbodyHeigth + heigthBtn}px`,
            table.tableWrap.current.style.height = `${theadHeigth + tbodyHeigth}px`
        )
        if(text === 'скрыть') {
            table.table.current.style.height = `${heigthBtn + 400}px`,
            table.tableWrap.current.style.height = `400px`
        }
    }

    return(
        <button
            className="btn__show-more btn"
            onClick={showMore}
            ref={btn}
        >
            {text}
        </button>
    )
}