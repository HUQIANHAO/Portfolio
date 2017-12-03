var pages = [];
$.getJSON("../json", function(data) {
    // console.log('loaded');
    $.each(data.key, function(index, key) {
        pages.push(key.name);
    });
    // console.log(pages);
});

function analysis() {
    var text = $('#txt').val(),
        doc = nlp(text).normalize(),
        str = doc.nouns().toSingular().toLowerCase().hyphenate().trim().out('text');

    console.log(str);
    if ($.inArray(str, pages) == -1) {
        $('#nopage').show();
    } else {
        window.open(str + '.html');
    }

    $('#txt').val('');
}

$(document).keypress(function(e) {
    if (e.which == 13) {
        analysis();
    }
});

$('#btn').click(function() {
    analysis();
});

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function() {
    window.open('easter.html');
});