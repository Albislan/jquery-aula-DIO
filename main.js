function consultaCep(){
    $(".barra").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#numeroCep").html("cep: " + response.cep)
            $(".cep").show();
            $(".barra").hide();
        }
    });
}
$(function(){
    $(".cep").hide();
    $(".barra").hide();
})