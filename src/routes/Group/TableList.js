import React from "react";
import { Table } from "./Table"; 
import { TableSubHeader } from "./TableSubHeader";

export const TableList = () => {
    let tableData1 = [
        {id: 1, programm: 'Групповой конструктор', description: 'Аттракцион на выбор для групп от 15 чел', price: ''},
        {id: 2, programm: '', description: 'Батутная арена 1 час, рост от 110 см', price: '200 руб./чел'},
        {id: 3, programm: '', description: 'Экстрим парк одна трасса 1 час, рост от 120 см', price: '150 руб./чел'},
        {id: 4, programm: '', description: 'Батут-горка от 100 см 1 час', price: '150 руб./чел'},
        {id: 5, programm: '', description: '	Лабиринт от 110 см 1 час', price: '150 руб./чел'},
        {id: 6, programm: '', description: 'Билет в кино', price: '120 руб./чел'},
        {id: 7, programm: '', description: 'Поп-корн + напиток на выбор', price: '190 руб./чел'},
        {id: 8, programm: '', description: 'Ланч на выбор', price: '190 руб./чел'},
        {id: 9, programm: 'Игровая карта', description: '1+1', price: '250 руб. + 250 бонусов или 350 руб. + 350 бонусов'},
        {id: 10, programm: 'Летний лагерь', description: 'При покупке билетов в кино игровые площадки по спец цене', price: 'Кино 120 руб./чел, игровая площадка 1 час - 100 руб.'}
    ]
    let tableData2 = [
        {id: 1, description: 'Поздравление с аниматором 30 мин. (конкурсы + дискотека) группа до 15 детей при заказе выпускного', priceDay: '200 руб./чел.', priceEnd: '200 руб./чел.'},
        {id: 2, description: 'Абонемент в кино на любой фильм от 20 шт.', priceDay: '250 руб./чел.', priceEnd: '250 руб./чел.'},
        
    ]

    let headsTable1 = ['Программа', 'Условия', 'Цена'],
        headsTable2 = ['Условия', 'Цена']
    
    return(
        <div className="wrapper">
            <div className="slider-container">
            <div className="slider-track">
                <section className="tabcontent">
                    <h4>Отдохни с классом весело и активно!</h4>
                    <div className="tabcontent__inner">
                        <strong>Собери конструктор развлечений на свой выбор.</strong>
                        <p>Группы от 15 человек, сопровождающий бесплатно.<br/> Предварительная бронь.</p>					
                    </div>

                    <Table 
                        table={tableData1}
                        heads={headsTable1}
                    />
                    
                </section>
                <section data-tab="2" id="2" className="tabcontent">
                    <h4>Украсьте свой праздник, сделайте его интересным, ярким и запоминающимся!</h4>
                    <TableSubHeader 
                        table={tableData2}
                        heads={headsTable2}
                    />
                    {/* <Table /> */}
                    {/* <table>
                        <thead>
                            <tr>
                                <th className="service">Услуга</th>
                                <th>Цена (руб.)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Дополнительные услуги</td>
                                <td>Будни</td>
                                <td>Выходные</td>
                            </tr>
                            <tr>
                                <td>Поздравление с аниматором 30 мин. (конкурсы + дискотека) группа до 15 детей при заказе выпускного</td>
                                <td>200 руб./чел.</td>
                                <td>200 руб./чел.</td>
                            </tr>
                            <tr>
                                <td>Абонемент в кино на любой фильм от 20 шт.	</td>
                                <td>250 руб./чел.	</td>
                                <td>250 руб./чел.	</td>
                            </tr>
                        </tbody>
                    </table> */}
                </section>
            </div>
            </div>
        </div>
    )
}