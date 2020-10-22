import React, { useEffect } from 'react';
import * as pickmeup from 'pickmeup';
import './DatePicker.css';
import moment from 'moment';

pickmeup.defaults = {
    current                   : null,
    date                      : new Date,
    default_date              : new Date,
    flat                      : false,
    first_day                 : 1,
    prev                      : '&#9664;',
    next                      : '&#9654;',
    mode                      : 'single',
    select_year               : true,
    select_month              : true,
    select_day                : true,
    view                      : 'days',
    calendars                 : 1,
    format                    : 'd-m-Y',
    title_format              : 'B, Y',
    position                  : 'bottom',
    class_name                : '',
    separator                 : ' - ',
    hide_on_select            : false,
    min                       : null,
    max                       : null,
    render                    : function () {
    },
    locale                    : 'en',
    locales                   : {
        en : {
            days        : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort   : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin     : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        ru: {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
        }
    },
    instance_template         : function (options) {
        var days_of_week = options.locales[options.locale].daysMin.slice();
        // If Monday is the first day of the week
        if (options.first_day) {
            days_of_week.push(days_of_week.shift());
        }
        return '<div class="pmu-instance">' +
            '<nav>' +
            '<div class="pmu-prev pmu-button">' + options.prev + '</div>' +
            '<div class="pmu-month pmu-button"></div>' +
            '<div class="pmu-next pmu-button">' + options.next + '</div>' +
            '</nav>' +
            '<nav class="pmu-day-of-week"><div>' + days_of_week.join('</div><div>') + '</div></nav>' +
            '</div>';
    },
   
    instance_content_template : function (elements, container_class_name) {
        var root_element = document.createElement('div');
        // document.querySelector(root_element).classList.add(container_class_name);
        root_element.classList.add(container_class_name)
        for (var i = 0; i < elements.length; ++i) {
            // document.querySelector(elements[i]).classList.add('pmu-button');
            elements[i].classList.add('pmu-button')
            root_element.appendChild(elements[i]);
        }
        return root_element;
    }
};
function innerDiv() {
    document.querySelectorAll(".pickmeup .pmu-days > div").forEach( function (el) {
        let content = el.innerHTML;
        el.innerHTML = "<driv class='pmu-days__item'>" + content + "</div>";
    });
}

interface IDatePickerProps {
    onChange: (e: any) => void;
    from: Date;
    to: Date;
    onSubmit: any;
    opened: boolean;
    onClick: (e: any) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({ onChange, from, to, onSubmit, opened, onClick }) => {
    useEffect(
        () => {
            pickmeup(".calendar", {
                format: 'd/m/Y',
                flat : true,
                mode : 'range',
                title_format : 'b Y',
                locale : 'ru',
                prev: '<span class="icon-circle-arrow"><i class="icon-arrow_left"></i></span>',
                next: '<span class="icon-circle-arrow"><i class="icon-arrow_right"></i></span>',
                date: [from, to],
            });
            document.querySelector('#calendar').addEventListener("pickmeup-change", 
            (e) => {
                onChange(e);
            });
            document.querySelector("#calendar").addEventListener("pickmeup-fill", 
            function (e) {
                innerDiv();
                let list = document.querySelectorAll('.pmu-days > .pmu-selected');
                console.log(list);
                if (list.length) {
                    list[0].classList.add("first-date");

                    if (list.length > 1){
                        list[list.length - 1].classList.add("last-date");
                        list[0].classList.add("first-date--branch");
                        list[list.length - 1].classList.add("last-date--branch");
                    }
                }
            });
            innerDiv();
        },[]
    )
    
    return(
        <aside className={`col-12 col-xl right-sidebar calendar-sidebar ${opened ? "calendar-sidebar--open" : ""}`}>
            <div className="calendar-sidebar__wrapper">
                <h4 className="calendar-sidebar__title mb-4">Выберите дату <a href="#" id="closeCalendarSidebarLink"
                className="calendar-sidebar__close-link" onClick={onClick}><i
                className="icon-circle-close"></i></a></h4>
                <div id="calendar" className="calendar mb-4"></div>
                <div className="calendar-form">
                <h4 className="calendar-form__title">Ввести дату вручую</h4>
                    <label><input className="calendar-form__input" value={moment(from).format("DD.MM.YYYY")} type="text" defaultValue="13.07.2020"/></label>{" - "}
                    <label><input className="calendar-form__input" value={moment(to).format("DD.MM.YYYY")} type="text" defaultValue="23.07.2020"/></label>
                    <button onClick={onSubmit} className="btn btn-sm btn-primary calendar-form__btn">Ok</button>
                </div>
            </div>
        </aside>
    )
}