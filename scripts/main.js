// Nice select
$(document).ready(function () {
    $('#users-table-sort').niceSelect();
    $('#users-table-filter').niceSelect();
});

// Alterar filtro de busca
$('#users-search-filter').change(function() {
    if ($(this).val() === 'email') {
        $('#users-search').attr('placeholder', 'Email do usuário');
    }  else if ($(this).val() === 'nome') {
        $('#users-search').attr('placeholder', 'Nome do cliente');
    } else {
        $('#users-search').attr('placeholder', 'ID do usuário');
    }
});


            
