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