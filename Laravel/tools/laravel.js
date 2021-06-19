var classes = {
    'index': {
        'title': 'Index',
        'url': '../home.html',
    },
    'laravel': {
        'title': 'Laravel Home',
        'url': 'laravel.html',
        'section_start': 'Section 1 - Laravel'
    },
    'image_upload': {
        'title': 'Image Upload',
        'url': 'image_upload.html',
    },
    'laravel_custom_pagination': {
        'title': 'Custom Pagination',
        'url': 'laravel_custom_pagination.html',
    },
    'laravel_switch': {
        'title': 'Switch',
        'url': 'laravel_switch.html',
    },
    'laravel_validation': {
        'title': 'Validation',
        'url': 'laravel_validation.html',
    },
    'laravel_mail': {
        'title': 'Mail',
        'url': 'laravel_mail.html',
    },
    'severalFiles': {
        'title': 'Mail',
        'url': 'laravel_mail.html',
    },
    'livewire': {
        'title': 'Livewire Home',
        'url': '../livewire/livewire.html',
        'section_start': 'Section 2 - Livewire'
    },
    'laravue': {
        'title': 'Laravue',
        'url': '../laravue/laravue.html',
        'section_start': 'Section 3 - Laravue'
    },
};

var classes_names = Object.keys(classes);

document.addEventListener('DOMContentLoaded', function () {
    var index_element = document.getElementById("class_index");
    var prev_class = document.getElementById("prev_class");
    var next_class = document.getElementById("next_class");

    if (current_class != classes_names[0]) {
        the_prev_url = classes[classes_names[classes_names.indexOf(current_class) - 1]].url;
        prev_class.innerHTML = "<a href='" + the_prev_url + "'>" + "&lt;&lt; Previous" + "</a>";
    }

    if (current_class != classes_names[classes_names.length - 1]) {
        the_next_url = classes[classes_names[classes_names.indexOf(current_class) + 1]].url;
        next_class.innerHTML = "<a href='" + the_next_url + "'>" + "Next &gt;&gt;" + "</a>";
    }

    for (a = 0; a < classes_names.length; a++) {
        if (classes[classes_names[a]].section_start) {
            index_element.innerHTML += "<div class='section-index'>" + classes[classes_names[a]].section_start + "</div>";
        }
        if (current_class != classes_names[a]) {
            index_element.innerHTML += "<li>" + "<a href='" + classes[classes_names[a]].url + "'>" + classes[classes_names[a]].title + "</a>" + "</li>";
        } else {
            index_element.innerHTML += "<li>" + classes[classes_names[a]].title + "</li>";
        }

    }

    if (document.getElementById("user_greeting_confirm")) {
        document.getElementById("user_greeting_confirm").onclick = function () {
            var username = document.getElementById("user_greeting_input").value;

            if (!username) {
                username = "guest user";
            }

            document.getElementById("user_greeting_message").innerHTML = "Welcome " + username + "!"
            document.getElementById("user_greeting_input").value = "";
        };
    }

}, false);