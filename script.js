const cifra = [
    'cifrar',
    'decifrar'
  ].map(document.getElementById, document)
  
  const elementos = [
    'mensagem-entrada',
    'saida-menagem'
  ].map(document.getElementById, document)
  
  for (let elemento of cifra) {
    if (elemento.value === 'Cifrar mensagem') {
      elemento.addEventListener('click', function(e) {
        e.preventDefault()
        return elementos[2].value = encode(elementos[0].value, parseInt(elementos[1].value));
      })
    }
    else {
      elemento.addEventListener('click', function(e) {
        e.preventDefault()
        return elementos[2].value = encode(elementos[0].value, parseInt(elementos[1].value) < 0);
      })
    }
  }

  const botaoLimpar = document.querySelector('#limpar')
  botaoLimpar.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('#mensagem-form').reset()
  })

  // for (let i = 0; i < cifra.length; i++) {
  //   if (cifra[i].value === 'Cifrar mensagem'){
  //       cifra[i].addEventListener('click', function(e){
  //         e.preventDefault()
  //         return elementos[2].value = encode(elementos[0].value, parseInt(elementos[1].value));
  //       })
  //     }
  //     else {
  //       cifra[i].addEventListener('click', function(e) {
  //         e.preventDefault()
  //         return elementos[2].value = encode(elementos[0].value, parseInt(elementos[1].value) < 0);
  //       })
  //     }
  // }
  
  // let cesar = document.querySelectorAll('.cifrarDecifrar')
  //   for (let i = 0; i < cesar.length; i++) {
  //     if (cesar[i].value === "Cifrar mensagem") {
  //       cesar[i].addEventListener('click', (event) => {
  //         event.preventDefault()
  //         let rota = parseInt(document.querySelector('#rota').value);
  //         let texto = document.querySelector('#mensagem-entrada').value;
  //         return document.querySelector('#mensagem-saida').value = encode(texto, rota);
  //       })
  //     }
  //     else {
  //         cesar[i].addEventListener('click', (event) => {
  //         event.preventDefault()
  //         let rota = (parseInt(document.querySelector('#rota')).value) < 0;
  //         let texto = document.querySelector('#mensagem-entrada').value;
  //         return document.querySelector('#mensagem-saida').value = encode(texto, rota);
  //       })
  //     }
  //   }
  
  const encode = (text, shift) => {
    if (shift < 0) {
      shift = 26 + (shift % 26);
    }
    return (
      text
        .split("")
        .map.call(text, function(char) {
          let cipherChar = char.charCodeAt(0);
          if (cipherChar >= 65 && cipherChar <= 90) {
            return String.fromCharCode((cipherChar - 65 + shift) % 26 + 65);
          }
          else if (cipherChar >= 97 && cipherChar <= 122) {
            return String.fromCharCode((cipherChar - 97 + shift) % 26 + 97);
          }
          else {
            return char
          }
        })
        .join("")
    );
  }