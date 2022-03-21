// Nice select
$(document).ready(function () {
    $('.filter').niceSelect();
});

// Alterar filtro de busca usuarios
$('#users-search-filter').change(function() {
    if ($(this).val() === 'email') {
        $('#users-search').attr('placeholder', 'Email do usuário');
    }  else if ($(this).val() === 'nome') {
        $('#users-search').attr('placeholder', 'Nome do usuário');
    } else {
        $('#users-search').attr('placeholder', 'ID do usuário');
    }
});

// Alterar filtro de busca monitor
$('#monitor-search-filter').change(function() {
    if ($(this).val() === 'id') {
        $('#monitor-search').attr('placeholder', 'ID do processo');
    }  else {
        $('#monitor-search').attr('placeholder', 'Nome do processo');
    }
});

// Alterar filtro de busca pipline
$('#pipline-search-filter').change(function() {
    if ($(this).val() === 'id') {
        $('#monitor-pipline').attr('placeholder', 'ID do relatório');
    }  else if ($(this).val() === 'cpf') {
        $('#pipline-search').attr('placeholder', 'CPF do usuário');  
    }   else {
        $('#pipline-search').attr('placeholder', 'Nome do usuário');  
    }
});

// Alterar abas pipline 

$('#card-process').click(function() {
    $('#pipline-table-process').toggleClass('d-none')
    if (!$('#pipline-table-review').hasClass('d-none')) {
        $('#pipline-table-review').toggleClass('d-none')
    }
    if (!$('#pipline-table-ok').hasClass('d-none')) {
        $('#pipline-table-ok').toggleClass('d-none')
    }
});

$('#card-review').click(function() {
    $('#pipline-table-review').toggleClass('d-none')
    if (!$('#pipline-table-process').hasClass('d-none')) {
        $('#pipline-table-process').toggleClass('d-none')
    }
    if (!$('#pipline-table-ok').hasClass('d-none')) {
        $('#pipline-table-ok').toggleClass('d-none')
    }
});

$('#card-ok').click(function() {
    $('#pipline-table-ok').toggleClass('d-none')
    if (!$('#pipline-table-review').hasClass('d-none')) {
        $('#pipline-table-review').toggleClass('d-none')
    }
    if (!$('#pipline-table-process').hasClass('d-none')) {
        $('#pipline-table-process').toggleClass('d-none')
    }
});


// Alterar abas monitor
var abas = function()
{
    document.getElementById(document.getElementsByClassName('selected_aba')[0].getAttribute('name')).style.display = 'none';
    document.getElementsByClassName('selected_aba')[0].classList.remove('selected_aba');
    document.getElementById(this.getAttribute('name')).style.display = 'block';
    this.classList.add('selected_aba');

}

document.getElementById('monitor_table_processo_aba').onclick = abas;
document.getElementById('monitor_table_status_aba').onclick = abas;
document.getElementById('monitor_table_analise_aba').onclick = abas;