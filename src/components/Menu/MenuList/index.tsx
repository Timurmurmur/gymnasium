import React from 'react'

import { MenuListItem } from '../..'

import './MenuList.scss'

const MenuList: React.FC<{
    onClick: () => void;
}> = ({ onClick }) => {


    return (
        <ul className="menu-list cabinet-header__menu-list">
            <MenuListItem onClick={onClick} url="/dashboard" title="Главная" active={true}>
                <i className="menu-list__icon icon-home"/>
            </MenuListItem>
            <MenuListItem onClick={onClick} url="/dashboard/performance" title="Успеваемость">
                <i className="menu-list__icon icon-five_plus"/>
            </MenuListItem>
            <MenuListItem onClick={onClick} url="/dashboard/shedule" title="Расписание">
                <i className="menu-list__icon icon-star"/>
            </MenuListItem>
            <MenuListItem onClick={onClick} url="/dashboard/documents" title="Документы">
                <i className="menu-list__icon icon-download"></i>
            </MenuListItem>
        </ul>
    )
}
/* 
<MenuListItem url="#" title="Оплата">
    <i className="menu-list__icon icon-pay"/>
</MenuListItem>
<MenuListItem url="#" title="Настройки">
    <i className="menu-list__icon icon-settings"/>
</MenuListItem>
*/
export default MenuList