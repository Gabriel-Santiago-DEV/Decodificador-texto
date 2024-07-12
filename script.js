document.addEventListener('DOMContentLoaded', function() {
    const botaoCriptografar = document.querySelector('.botao-criptografar');
    const botaoDescriptografar = document.querySelector('.botao-descriptografar');
    const textarea = document.getElementById('imput-text');
    const textoResultado = document.querySelector('.texto-resultado');
    const botaoCopiar = document.querySelector('.botao-copiar');
    const botaoLimpar = document.querySelector('.botao-limpar');
    let imagemLupa;
    let nenhumaMensagem;

    function validaTexto(texto) {
        const padrao = /^[a-z ]+$/;
        return padrao.test(texto);
    }

    function criptografarTexto(texto) {
        let textoCriptografado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return textoCriptografado;
    }

    function descriptografarTexto(texto) {
        let textoDescriptografado = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return textoDescriptografado;
    }

    function mostrarResultado(texto) {
        imagemLupa = document.querySelector('.imagem-lupa');
        nenhumaMensagem = document.querySelector('.nenhuma-mensagem');
        
        if (imagemLupa && nenhumaMensagem && botaoCopiar && botaoLimpar) {
            imagemLupa.style.display = 'none';
            nenhumaMensagem.style.display = 'none';
            
            textoResultado.style.display = 'block';
            textoResultado.textContent = texto;
            
            botaoCopiar.style.display = 'block';
            botaoLimpar.style.display = 'block';

            botaoCopiar.addEventListener('click', function() {
                navigator.clipboard.writeText(texto).then(function() {
                }, function(err) {
                    console.error('Falha ao copiar o texto: ', err);
                });
            });
        } else {
            console.error('Elementos não encontrados: imagemLupa, nenhumaMensagem, botaoCopiar ou botaoLimpar.');
        }
    }

    botaoCriptografar.addEventListener('click', function() {
        const texto = textarea.value.trim(); 
        if (texto !== '' && validaTexto(texto)) {
            const textoCriptografado = criptografarTexto(texto);
            mostrarResultado(textoCriptografado);
        } else {
            alert('Texto inválido! Por favor, digite apenas letras minúsculas sem acentos nem caracteres especiais.');
        }
    });

    botaoDescriptografar.addEventListener('click', function() {
        const texto = textarea.value.trim(); 
        if (texto !== '' && validaTexto(texto)) {
            const textoDescriptografado = descriptografarTexto(texto);
            mostrarResultado(textoDescriptografado);
        } else {
            alert('Texto inválido! Por favor, digite apenas letras minúsculas sem acentos nem caracteres especiais.');
        }
    });

    botaoLimpar.addEventListener('click', function() {
        textarea.value = '';
        imagemLupa.style.display = 'block';
        nenhumaMensagem.style.display = 'block';
        textoResultado.style.display = 'none';
        botaoCopiar.style.display = 'none';
        botaoLimpar.style.display = 'none';
    });
});
