import React, {useRef, useEffect} from "react";
import { Tr } from "./Tr";
import { ShowMoreBtn } from "./ShowMoreBtn";


export const Table = (props) => {
	const thead = useRef(null)
	const tbody = useRef(null)
	const table = useRef(null)
	const tableWrap = useRef(null)
	
	return(
		<section className="birthdays__price price" ref={table} >
			<div style={{position: 'relative'}}>
				<div className="table__wrap" ref={tableWrap}>
					<table ref={table}>
						<thead ref={thead}>
							<tr>
								<th>Услуга</th>
								<th>Цена (руб.)</th>
								<th></th>
							</tr>
						</thead>
						<tbody ref={tbody}>
							{props.table.table.map((table, id) => {
								return(
									<Tr
										key={id}
										service={table.service}
										weekdays={table.weekdays}
										weekends={table.weekends}
									/>
								)
							})}
						</tbody>
					</table>
				</div>

				<ShowMoreBtn 
					props={props}
					table={table} 
					thead={thead} 
					tbody={tbody} 
					tableWrap={tableWrap} 
				/>
			</div>
			
		</section>

	)
}