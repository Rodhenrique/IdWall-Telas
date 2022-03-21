// Nice select
$(document).ready(function () {
    $('#users-table-sort').niceSelect();
    $('#users-table-filter').niceSelect();
});

// Alterar filtro de busca
$('#users-search-filter').change(function() {
    if ($(this).val() === 'id') {
        $('#users-search').attr('placeholder', 'ID do usuário');
    }  else if ($(this).val() === 'nome') {
        $('#users-search').attr('placeholder', 'Nome do processo');
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