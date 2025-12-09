resumo();

/*Cadastrar Salário */
document.getElementById("casl").addEventListener("click", function () {
    var salario = document.getElementById("salario").value;

    if (salario === "") {
        alert("Digite um salário!");
        return;
    }
    else if (isNaN(salario)) {
        alert("Digite apenas números.")
        return
    }
    localStorage.setItem("salario", salario);
    alert("Salário cadastrado.");
    document.getElementById("salario").value = "";

});


/*Cadastrar Despesa */
document.getElementById("formDespesa").addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value
    var data = document.getElementById("data").value
    var valor = document.getElementById("valor").value

    if (data === "" || descricao === "" || isNaN(valor) || valor === "") {
        alert("Preencha todos os campos de modo correto.");
        return;
    }

    var despesa = {
        data: data,
        nome: nome,
        valor: valor
        /*Cria um objeto */
    }

    var listadespesas = JSON.parse(localStorage.getItem("lista")) || []
    listadespesas.push(despesa) 
    localStorage.setItem("lista", JSON.stringify(listadespesas))
    document.getElementById("formulario").reset() 
    exibirDespesas() 

});

