// popup
let button = document.querySelector('.popup');
let popup = document.querySelector('.popup_container');
let popup_main = document.querySelector('.popup-main');
let button_in = document.querySelector('.button__in');

// input
let money = document.getElementById("money");
let serial = document.getElementById("serial_number");
let card_number = document.querySelector('.card__number');
let year = document.getElementById('year');
let mounth = document.getElementById('mounth');
let cvv = document.getElementById('cvv');

// paragraph
let money_text = document.querySelector('#money_text');
let serial_text = document.querySelector('#serial_text');
let warning = document.querySelector('#warning');


// final button
// let final = document.querySelector('.link');

// functions
button.onclick = () => {
    if (money.value == '' || serial.value == '') {
        warning.classList.remove('text_white')
        warning.classList.add('text_black');
    }
    else {
        popup.classList.toggle('show');
        warning.classList.remove('text_black')
        warning.classList.add('text_white')

        // money_text.innerHTML = `<p>Сумма введенная вами = ${money.value} тг.</p>`;
        // money.value = '';

        // serial_text.innerHTML = `<p>Номер заказа = ${serial.value}</p>`;
        // serial.value = '';
    }
}

button_in.onclick = (event) => {
    popup.classList.toggle('show');
    event.stopPropagation();
}

popup_main.onclick = (event) => {
    popup.classList.add('show');
    event.stopPropagation();
}

popup.onclick = () => {
    popup.classList.remove('show');
}


// final.onclick = (event) => {
    // console.log(money.value);
    // money.value = '';

    // console.log(serial.value);
    // serial.value = '';

    // console.log(card_number.value)
    // card_number.value = '';

    // console.log(year.value);
    // year.value = '';

    // console.log(mounth.value);
    // mounth.value = '';

    // console.log(cvv.value);
    // cvv.value = '';

//     popup.classList.add('show');
//     event.preventDefault();
// }

// ///////////////////////////////// пошло усложнение //////////////////////////////////////

let tab = document.querySelectorAll('[data-active]');
let content = document.querySelectorAll('[data-content-active]');
let button_tab = document.querySelectorAll('.tab');
let button_pay = document.querySelectorAll('.link')
let button_back = document.querySelectorAll('#back');
let button_next = document.querySelectorAll('#next');

button_tab.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('[data-content-active]').forEach((i) => {i.classList.add('display_none')});
        const target = e.currentTarget;
        const content = document.querySelector(`[data-content-active="${target.dataset.active}"]`);
        content.classList.remove('display_none');
    })
});

button_back.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('[data-switch-content]').forEach((i) => {i.classList.add('display_none')});
        const target = event.currentTarget;
        const content = document.querySelector(`[data-content-active="${target.dataset.switchContent}"]`);
        content.classList.remove('display_none');
        console.log('display')
        element.classList.remove('display_none')
        content.nextSibling.switchContent;
    })
})

button_next.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('next')
    })
})


        // button_back.forEach((element) => {
        //     element.addEventListener('click', (event) => {
        //         event.preventDefault();
        //         content.classList.add('display_none')
        //         // content.nextElementSibling.id;
        //     })
        // })
        // button_back.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     console.log('hello')
        // })

                // console.log(content.nextSibling.switchContent)
        // element.addEventListener('click', () => {
        //     console.log(content)
        //     console.log('display')
        //     // content.classList.add('display_none');
        //     console.log(content)
        //     content.nextSibling.dataset.switchContent;
        //     element.nextSibling.dataset.switchContent;
        // })

// document.getElementById("b2").previousSibling.id

// for (i = 0; i < button_pay.length; i++) {
//     console.log(button_pay[i])
// }
// tab.forEach((i) => {
//     const content = document.querySelector(`[data-content-active="${i.dataset.active}"]`);
//     console.log(content)
//     // if (i.dataset.active == k.dataset.contentActive) {
//     //     console.log("Я нашел это:" + i.dataset.active + "=" + k.dataset.contentActive);
//     //     return true
//     // }
// })


// content.forEach((i) => {
//     content.style.display = 'none';
// })