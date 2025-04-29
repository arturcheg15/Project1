'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Исключение накладывания контента на хедер при скроле/прокрутке страницы */

    const header = document.querySelector('.header');       // создаем переменную находя блок по классу

    if (header) {                                           // проверяем существование элемента в DOM
        console.log('Константа header существует');

        /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем высоту блока/элемента (создание переменной, которая не будет меняться).
        *   3. Проверка условия (навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку): если страница прокручивается.
        *       3.1. Да: Получаем значение насколько прокрутили страницу (создание переменной, которая будет меняться).
        *           3.1.1 Проверка условия (сравниваем высоту элемента и значение прокрученной страницы): если расстояние от верха страницы больше высоты элемента
        *               3.1.1.1. Да: устанавливаем класс модификатора на элемент
        *               3.1.1.2. Нет (если расстояние от верха экрана меньше высоты элемента): удаляем класс модификатора у элемента
        *       3.2. Нет: Конец
        *   4. Конец
        * 
        *   Блок-схема: /images/block-schema.png
        */

        const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

        document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

            if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
                header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
            } else {
                header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
            }

        })

    }
});
/*Появление модального окна*/
const HeaderButton=document.querySelector(".header__button");
const MainButton=document.querySelector(".email");
const dialogLayout = document.querySelector('.dialog');
if (HeaderButton && dialogLayout) {
    console.log("Кнопка и форма существуют");
    //Открытие модального окна при клике на кнопку "Вход"
    HeaderButton.addEventListener("click", () => {
        console.log(MainButton);
        dialogLayout.removeAttribute("hidden");
    })
    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', (event) => {
        if (event.target === dialogLayout) {
            dialogLayout.setAttribute('hidden', true);
        }})
    }
        
//Объявляем переменную CreditsContainer и сохраняем в нее элементы treners
const CreditsContainer = document.querySelector(".credits");

//  проверяем существует ли элемент CreditsContainer, если он существует то переходим далее
if (CreditsContainer) {
    //далее создаем массив dataTitleCredits, который содержит строки с названиями услуг.(здесь уже пишем те значения, которые надо подставить вместо слова Услуга 1, Услуга 2 и т.д)
            const dataTitleCredits = [
                "Кредиты",
                "Автокредит",
                "Ипотека",
                "Рефинансирование",
                "Образовательный кредит",
            ];
//Объявляем переменную titleTreners и сохраняем в нее все элементы на странице с классом credits__title (где должны стоять названия кредитов)
const TitleCredits =
CreditsContainer.querySelectorAll(".credits__title");

// Проходим по каждому элементу массива titleCredits с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
TitleCredits.forEach((item, index) => {

//здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitleCredits, используя индекс текущего заголовка.
item.textContent = dataTitleCredits[index];
});
}

//Объявляем переменную cardsPrice и сохраняем в нее элемент с классом price
const priceList = document.querySelector('.card__list');

// Если такой элемент существует
if (priceList) {

//Создаем объект cardsPriceData, которая содержит данные для трех карточки.
        const CreditsPriceData = {
// каждая ссылка содержит button (кнопка), image (изображение),  (цена), link (ссылка).
            price1: {
                button: '– Вариант 1 –',
                image: 'images/png-clipart-yellow-and-black-magstripe-card-emoji-credit-card-symbol-money-credit-card-angle-rectangle.png',
                link: 'ссылка 1',
                
            },
            price2: {
                button: '– Вариант 2 –',
                image: 'images/синяя карта.webp',
                link: 'ссылка 2',
            },
            price3: {
                button: '– Вариант 3 –',
                image: 'images/зеленая карта.webp',
                link: 'ссылка 3',
            },
            price4: {
                button: '– Вариант 4 –',
                image: 'images/red-bank-card-.webp',
                link: 'ссылка 4',
            }
        }

//Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки)
        const createCard = (button, image, link) => {
// Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
            const card = `
            <li class="card__item button"> ${button}
            <img class="card__image img"
              src="${image}"
              alt="карта 1" width="200" height="200">
            <a class="card__link  button" href="#">${link}</a>
            </li>

        `;
//  Возвращаем значение переменной card
            return card;
        }
// Создаем цикл for и проходим по всем элементам объекта cardsPriceData.
        for (const cardKey in CreditsPriceData) {
//Получаем данные одной карточки из объекта cardsPriceData 
            const card = CreditsPriceData[cardKey];
//создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
            const cardElement = createCard(card.button, card.image, card.link);
// с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка priceList.
            priceList.insertAdjacentHTML('beforeend', cardElement);
        }
}

