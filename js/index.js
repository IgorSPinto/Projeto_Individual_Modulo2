const unidades = {
    comprimento: ["metros", "centímetros", "polegadas"],
    peso: ["quilogramas", "gramas", "libras"],
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"]
  };
  
  // Referências aos elementos HTML
  const categoriaSelect = document.getElementById("categoria");
  const unidadeOrigemSelect = document.getElementById("unidadeOrigem");
  const unidadeDestinoSelect = document.getElementById("unidadeDestino");
  const valorInput = document.getElementById("valor");
  const resultadoOutput = document.getElementById("resultado");
  
  // Função para atualizar as opções de unidade de origem e destino
  function atualizarUnidades() {
    const categoriaSelecionada = categoriaSelect.value;
    const unidadesOrigem = unidades[categoriaSelecionada];
    const unidadesDestino = unidades[categoriaSelecionada];
  
    // Limpar as opções de unidade de origem e destino
    unidadeOrigemSelect.innerHTML = "";
    unidadeDestinoSelect.innerHTML = "";
  
    // Preencher as opções de unidade de origem
    unidadesOrigem.forEach(function (unidade) {
      const option = document.createElement("option");
      option.text = unidade;
      unidadeOrigemSelect.add(option);
    });
  
    // Preencher as opções de unidade de destino
    unidadesDestino.forEach(function (unidade) {
      const option = document.createElement("option");
      option.text = unidade;
      unidadeDestinoSelect.add(option);
    });
  }
  
  // Função para realizar a conversão
  function converter() {
    const valor = parseFloat(valorInput.value);
    const unidadeOrigem = unidadeOrigemSelect.value;
    const unidadeDestino = unidadeDestinoSelect.value;
    let resultado;
  
    // Verificar se todos os campos foram preenchidos
    if (isNaN(valor) || unidadeOrigem === "" || unidadeDestino === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    if (unidadeOrigem === unidadeDestino) {
      resultado = valor;
    } else {
      // Lógica de conversão de unidades
      // ...
  
      // Comprimento
      if (unidadeOrigem === "metros") {
        if (unidadeDestino === "centímetros") {
          resultado = valor * 100;
        } else if (unidadeDestino === "polegadas") {
          resultado = valor * 39.37;
        }
      } else if (unidadeOrigem === "centímetros") {
        if (unidadeDestino === "metros") {
          resultado = valor / 100;
        } else if (unidadeDestino === "polegadas") {
          resultado = valor / 2.54;
        }
      } else if (unidadeOrigem === "polegadas") {
        if (unidadeDestino === "metros") {
          resultado = valor / 39.37;
        } else if (unidadeDestino === "centímetros") {
          resultado = valor * 2.54;
        }
      }
  
      // Peso
      if (unidadeOrigem === "quilogramas") {
        if (unidadeDestino === "gramas") {
          resultado = valor * 1000;
        } else if (unidadeDestino === "libras") {
          resultado = valor * 2.20462;
        }
      } else if (unidadeOrigem === "gramas") {
        if (unidadeDestino === "quilogramas") {
          resultado = valor / 1000;
        } else if (unidadeDestino === "libras") {
          resultado = valor / 453.592;
        }
      } else if (unidadeOrigem === "libras") {
        if (unidadeDestino === "quilogramas") {
          resultado = valor / 2.20462;
        } else if (unidadeDestino === "gramas") {
          resultado = valor * 453.592;
        }
      }
  
      // Temperatura
      if (unidadeOrigem === "Celsius") {
        if (unidadeDestino === "Fahrenheit") {
          resultado = (valor * 9) / 5 + 32;
        } else if (unidadeDestino === "Kelvin") {
          resultado = valor + 273.15;
        }
      } else if (unidadeOrigem === "Fahrenheit") {
        if (unidadeDestino === "Celsius") {
          resultado = ((valor - 32) * 5) / 9;
        } else if (unidadeDestino === "Kelvin") {
          resultado = ((valor - 32) * 5) / 9 + 273.15;
        }
      } else if (unidadeOrigem === "Kelvin") {
        if (unidadeDestino === "Celsius") {
          resultado = valor - 273.15;
        } else if (unidadeDestino === "Fahrenheit") {
          resultado = ((valor - 273.15) * 9) / 5 + 32;
        }
      }
    }
  
    // Exibir o resultado da conversão
    resultadoOutput.value = resultado;
  }
  
  // Adicionar evento de "change" ao campo de seleção de categoria
  categoriaSelect.addEventListener("change", function () {
    atualizarUnidades();
  });
  
  // Adicionar evento de "click" ao botão "Converter"
  const botaoConverter = document.getElementById("converter");
  botaoConverter.addEventListener("click", converter);
  