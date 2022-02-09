import React from "react";
import {Offer1, Offer2} from '../../assets/images/img-prod/img'

export const Offers = () => {
    return(
        <section className="offers">
			<div className="offers__container">
				<h2>Специальные предложения</h2>
				<ul className="offers__list">
					<li className="offers__item">
						<a>
							<img src={Offer1} alt=""/>
							<h4>Выпускные</h4>
							<button>Супер выпускной</button>
						</a>
					</li>
					<li className="offers__item">
						<a>
							<img src= {Offer2} alt=""/>
							<h4>Коллективные посещения</h4>
							<div className="offers__buttons">
								<button>Подробнее</button>
								<button className="offers__btn-price">Цены</button>
							</div>
						</a>
					</li>
				</ul>
			</div>			
		</section>
    )
}