// Nice select
$(document).ready(function () {
    $('#users-search-filter, #users-table-sort, #users-table-filter').niceSelect();
});

// Alterar filtro de busca
$('#users-search-filter').change(function() {
    if ($(this).val() === 'email') {
        $('#users-search').attr('placeholder', 'Email do usuário');
    }  else if ($(this).val() === 'nome') {
        $('#users-search').attr('placeholder', 'Nome do usuário');
    } else {
        $('#users-search').attr('placeholder', 'ID do usuário');
    }
});

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