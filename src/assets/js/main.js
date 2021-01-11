document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        if (document.documentElement.clientWidth <= 900) {
            document.querySelector('.menu__desktop').insertAdjacentElement('beforeend', document.querySelector('.header__socials'))
        }
    }
}
// $(window).on('load', () => {
window.addEventListener("load", function () {
    // variables
    // selecror
    const $menu = document.querySelector('.menu'),
        $menuBurger = document.querySelector('.menu__burger')
    // /selecror
    // /variables
    // ----------------------------------------------
    // universal function
    // function ajaxRequest(ajaxForm, url) {
    //     try {
    //         history.replaceState(null, null, "#")
    //     } catch (z) {
    //         console.log(z)
    //     }
    //     $.ajax({
    //         url: url,
    //         type: "POST",
    //         dataType: "html",
    //         data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
    //         success: function (response) {
    //             //Данные отправлены успешно
    //             let result = $.parseJSON(response)
    //             console.log(result)
    //         },
    //         error: function (response) {
    //             // Данные не отправлены
    //             alert("Ошибка. Данные не отправлены.")
    //         },
    //     })
    // }
    //  /universal function
    // ----------------------------------------------
    // event
    $menuBurger && $menuBurger.addEventListener('click', () => {
        $menu.classList.toggle('menu--open')
    })
    // forms
    // $("#registration-form").on("input, submit", (e) => {
    //     e.preventDefault()
    //     ajaxRequest("registration-form", "test.php")
    // })
    // /forms
    // /event
    // ----------------------------------------------
    // unique function
    // /unique function
    // ----------------------------------------------
    // Page load
    // /Page load
});
