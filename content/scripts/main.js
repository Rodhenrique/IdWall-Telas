// Nice select
$(document).ready(function () {
    $('#users-search-filter, #users-table-sort, #users-table-filter, #monitor-table-sort, #monitor-table-filter').niceSelect();
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
        $('#monitor-search').attr('placeholder', 'ID do usuário');
    }  else if ($(this).val() === 'nome') {
        $('#monitor-search').attr('placeholder', 'Nome do processo');
    }
});

// alterar abas monitor
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