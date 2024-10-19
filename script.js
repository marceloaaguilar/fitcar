AOS.init();

window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}

document.getElementById('btnNo').onclick = function() {
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('contentModal').style.display = 'none';
    document.querySelector('.modal-footer').style.display = 'none';
    document.querySelector('.modal-header').style.display = 'none';
}

const formOrcamentoFitcar = document.getElementById("formOrcamentoFitcar");
if (formOrcamentoFitcar) {
  formOrcamentoFitcar.addEventListener("submit", (e) => {
    swal({
      title: "Aguarde...",
      text: "Enviando seus dados.",
      icon: "info",
      buttons: false,
      closeOnClickOutside: false,
      closeOnEsc: false,
      timer: 150000, 
    });
  
    e.preventDefault();
    const nome = document.getElementById("name");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const bairro = document.getElementById("neighborhood");
    const anoVeiculo = document.getElementById("year");
    const modeloVeiculo = document.getElementById("model");
    const utilizacaoVeiculo = document.getElementById("usage");
  
    fetch("enviaEmail.php", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        bairro: bairro.value,
        anoVeiculo: anoVeiculo.value,
        modeloVeiculo: modeloVeiculo.value,
        utilizacaoVeiculo: utilizacaoVeiculo.value,
      }),
    }).then(function (response) {
      if (response.status !== 200) {
        console.log(response);
      }

      swal.close();
      swal({
          title: "E-mail enviado com sucesso!",
          text: "Entraremos em contato em breve!",
          icon: "success",
          showCloseButton: true,
        });
        
    });
  });

}

const phoneNumber = document.getElementById("telefone");
if (phoneNumber) {
  phoneNumber.addEventListener("input", (e)=> {
    let phone = e.target.value;
    phone = phone.replace(/\D/g, '');
    phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
    phone = phone.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
    e.target.value = phone;
  })
}