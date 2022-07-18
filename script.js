function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    //variaveis da função de editar
    var nome = document.getElementById("nome_row"+no);
    var categ = document.getElementById("categ_row"+no);
    var plat = document.getElementById("plat_row"+no);
    var temp = document.getElementById("temp_row"+no);
     
    //retorna texto e html que existe na variavel
    var nome_data = nome.innerHTML;
    var categ_data = categ.innerHTML;
    var plat_data = plat.innerHTML;
    var temp_data = temp.innerHTML;
    //abre a edição para as celulas   
    nome.innerHTML="<input type='text' id='nome_text"+no+"' value='"+nome_data+"'>";
    categ.innerHTML="<input type='text' id='categ_text"+no+"' value='"+categ_data+"'>";
    plat.innerHTML="<input type='text' id='plat_text"+no+"' value='"+plat_data+"'>";
    temp.innerHTML="<input type='text' id='temp_text"+no+"' value='"+temp_data+"'>";
}

function save_row(no)
{   
    //variaveis para a alteração
    var nome_val = document.getElementById("nome_text"+no).value;
    var categ_val=document.getElementById("categ_text"+no).value;
    var plat_val=document.getElementById("plat_text"+no).value;
    var temp_val=document.getElementById("temp_text"+no).value;
    
    var result= confirm("Deseja editar o item: ");

    //condição para confirmar a alteração
    if(result == true ){
        alert("O item será alterado da lista!");

        //troca dos elementos da celula
        document.getElementById("nome_row"+no).innerHTML = nome_val;
        document.getElementById("categ_row"+no).innerHTML = categ_val;
        document.getElementById("plat_row"+no).innerHTML = plat_val;
        document.getElementById("temp_row"+no).innerHTML = temp_val;

        document.getElementById("edit_button"+no).style.display="block";
        document.getElementById("save_button"+no).style.display="none";
    }else{
        alert("Você desistiu de alterar o item da lista!");
    }
}

function delete_row(no)
{
    //condição para ter certeza que deseja excluir o elemento
    var result= confirm("Deseja excluir o item: ");
    if(result == true ){
        alert("O item será excluído da lista!");
        document.getElementById("row"+ no +"").outerHTML="";
    } else{
        alert("Você desistiu de excluir o item da lista!");
    }
}

function add_row()
{
    //variaveis para adicionar o elemento
    var nome_new = document.getElementById("nome_new").value;
    var categ_new = document.getElementById("categ_new").value;
    var plat_new = document.getElementById("plat_new").value;
    var temp_new = document.getElementById("temp_new").value;

    document.getElementById("nome_new").value="";
    document.getElementById("categ_new").value="";
    document.getElementById("plat_new").value="";
    document.getElementById("temp_new").value="";

    //condição para adicionar o elemento para que nao seja vazio
    if (nome_new && categ_new && plat_new && temp_new) {
        alert("Jogo adicionado");	
        var table = document.getElementById("data_table");
        var table_len = (table.rows.length)-1;
        //vai adionar os valores inseridos na celula
        var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='nome_row"+table_len+"'>"+nome_new+"</td><td id='categ_row"+table_len+"'>"+categ_new+"</td><td id='plat_row"+table_len+"'>"+plat_new+"</td><td id='temp_row"+table_len+"'>"+temp_new+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
        }

    if (!nome_new || !categ_new || !temp_new || !temp_new) {
        alert("Jogo não informado.\nDigite novamente!");
    }
}

