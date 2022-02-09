import React from "react";
import { Btn } from "../../components/Modal/Btn";
import { ModalWindow } from "../../components/Modal/ModalWindow";
import { PackageList } from "./PackageList";

export const Offer = ({offer}) => {
	return(<>
		<li className="item">
			<a className="item__link" href="#">
				<img className="order__img" src={offer.img} alt="" />
				<div className="item__inner">
					<p className="order__description">{offer.description}</p>
					<strong>{offer.title}</strong>
					<ul className="item__list">
						{offer.li.map((item, id) => {
							return(
								<PackageList 
									item={item}
									key={id}
								/>
							)
						})}	
					</ul>
				</div>
			</a>

			<ModalWindow>
				<Btn 
				className="offers__btn btn"
				text={offer.button}
				/>
			</ModalWindow>
			
		</li>
	</>)
}