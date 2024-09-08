function reservar(){
    let textoConfirmacao = "Reserva feita com sucesso!";
    document.getElementById("confirmacao").innerHTML = textoConfirmacao;
    document.getElementById("reservar").remove();
    document.getElementById("preco").remove();
}