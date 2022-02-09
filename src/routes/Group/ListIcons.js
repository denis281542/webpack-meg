import React from "react";
import { Icon } from "./Icon";
import { iconGroup1, iconGroup2, iconGroup3, iconGroup4 } from '../../assets/images/img-prod/img'

export const ListIcons = () => {
    const icons = [
        {id: 1, title: 'Индивидуальное предложение', description: 'составим и рассчитаем предложение для активного отдыха взрослых и детей', img: iconGroup1},
        {id: 2, title: 'Работаем со всеми', description: 'индивидуальные предложения как физическим, так и юридическим лицам', img: iconGroup2},
        {id: 3, title: 'Подарочные сертификаты', description: 'для детей и взрослых ко дню знаний, новому году, профессиональным праздникам', img: iconGroup3},
        {id: 4, title: 'Большие группы? Легко!', description: 'работаем с группами более 15 человек', img: iconGroup4},
    ]

    return(
        <div className="icons__list">
            {icons.map(icon => {
                return(
                    <Icon
                        icon={icon}
                        key={icon.id}
                    />
                )
            })}
            
        </div>
    )
}