$(document).ready(function () {
    'use strict';
    var get_hidden_target = function (id) {
        var pair = $('#' + id).eq(0).data('pair');
        var target = $('#' + pair + ' div.hidden');
        target.prev('p').toggleClass('underlined');
        return target;
    };

    var change_bg = function () {
        $('body').toggleClass('molecule-bg');
    };

    var root = $('#impress')[0];

    root.addEventListener('impress:stepenter', function (event) {
        var id = event.target.id;
        if (id === 'final'){
            change_bg();
        }
        get_hidden_target(id).slideDown(150);
    }, false);

    root.addEventListener('impress:stepleave', function (event) {
        var id = event.target.id;
        if (id === 'final'){
            change_bg();
        }
        get_hidden_target(id).slideUp(150);
    }, false);

    $('.thumbnail').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('expanded');
    });
});
