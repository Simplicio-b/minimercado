document.querySelectorAll('input[name="entrega"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const agendamentoSection = document.getElementById('agendamento');
        if (document.getElementById('retirada').checked || document.getElementById('entrega').checked) {
            agendamentoSection.classList.remove('d-none');
        }
    });
});

document.querySelectorAll('input[name="pagamento"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        const formCartao = document.getElementById('form-cartao');
        const formPix = document.getElementById('form-pix');
        if (document.getElementById('cartao').checked) {
            formCartao.classList.remove('d-none');
            formPix.classList.add('d-none');
        } else if (document.getElementById('pix').checked) {
            formCartao.classList.add('d-none');
            formPix.classList.remove('d-none');
        }
    });
});

// Cálculo do preço de entrega
document.getElementById('entrega').addEventListener('change', function () {
    if (this.checked) {
        let total = parseFloat(document.getElementById('total-compra').innerText.replace('R$', '').trim());
        total += 5.00; // Adiciona R$ 5 para entrega
        document.getElementById('total-compra').innerText = 'R$ ' + total.toFixed(2);
    }
});

document.getElementById('retirada').addEventListener('change', function () {
    if (this.checked) {
        let total = parseFloat(document.getElementById('total-compra').innerText.replace('R$', '').trim());
        total -= 5.00; // Remove a taxa de entrega
        document.getElementById('total-compra').innerText = 'R$ ' + total.toFixed(2);
    }
});


const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: 'http://google.com',
    width: 200,
    height: 200,
    colorDark : '#222',
    colorLight : '#FFF',
    correctLevel : QRCode.CorrectLevel.H
  });