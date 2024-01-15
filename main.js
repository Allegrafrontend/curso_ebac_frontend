$(document).ready(function(){
    $('#formTarefa').submit(function(e){
        e.preventDefault();
        const nomeTarefa = $('#nomeTarefa').val();
        if (nomeTarefa.trim() !== '') {
            const novaTarefa = $('<li></li>').text(nomeTarefa);
            $('#listaTarefas').append(novaTarefa);
            $('#nomeTarefa').val('');
        }
    });

    $('#listaTarefas').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
});