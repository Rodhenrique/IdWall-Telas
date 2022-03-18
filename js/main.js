$('#users-search-filter').change(function() {
    if ($(this).val() === 'email') {
        $('#users-search').attr('placeholder', 'Email do usuário');
    }  else if ($(this).val() === 'nome') {
        $('#users-search').attr('placeholder', 'Nome do cliente');
    } else {
        $('#users-search').attr('placeholder', 'ID do usuário');
    }
});
            
