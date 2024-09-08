// Função para alternar a visibilidade dos elementos
function toggleDisplay(element, displayStyle) {
    element.style.display = displayStyle;
}

// Função para atualizar o conteúdo da Lamborghini
function updateLamborghiniContent(element) {
    element.innerHTML = `
        <h2>Lamborghini Aventador (2018)</h2>
        <p>A Lamborghini é sinônimo de potência, design inovador e exclusividade. Fundada em 1963 na Itália, a marca é conhecida por seus carros esportivos de alto desempenho, que combinam uma estética agressiva e futurista com uma engenharia de ponta.</p>
        <p>Modelos como o Aventador e o Huracán tornaram-se ícones no mundo automotivo, atraindo admiradores e colecionadores. A Lamborghini não apenas produz carros rápidos, mas também verdadeiras obras de arte sobre rodas.</p>
        <h3>Preço: R$ 3.450.680,00</h3>
        <form action="">
            <button type="button" onclick="opcaoLambo1()">1x sem juros</button>
            <button type="button" onclick="opcaoLambo2()">2x sem juros</button>
            <button type="button" onclick="opcaoLambo3()">3x sem juros</button>
            <button type="button" onclick="compreJa()">Compre já</button>
        </form>
    `;
}


// Funções para as opções de pagamento da Lamborghini
function opcaoLambo1() {
    alert("Você deve pagar: R$3.450.680,00");
}
function opcaoLambo2() {
    alert("Você deve pagar: R$1.725.340,00");
}
function opcaoLambo3() {
    alert("Você deve pagar: R$1.150.226,70");
}

// Função para atualizar o conteúdo do Aston
function updateAstonContent(element) {
    element.innerHTML = `
        <h2>Aston Martin DB11 (2023)</h2>
        <p>O Aston Martin é conhecido por sua combinação de luxo e desempenho. Fundada em 1913, a marca britânica é sinônimo de elegância e sofisticação, com modelos como o DB11 e o Vantage.</p>
        <p>Estes carros não só oferecem uma experiência de condução excepcional, mas também são símbolos de status e prestígio.</p>
        <h3>Preço: R$ 120.000.000,00</h3>
        <form action="">
            <button type="button" onclick="opcaoAston1()">1x sem juros</button>
            <button type="button" onclick="opcaoAston2()">2x sem juros</button>
            <button type="button" onclick="opcaoAston3()">3x sem juros</button>
            <button type="button" onclick="compreJa()">Compre já</button>
        </form>
    `;
}


// Funções para as opções de pagamento do Aston
function opcaoAston1() {
    alert("Você deve pagar: R$120.000.000,00");
}
function opcaoAston2() {
    alert("Você deve pagar: R$60.000.000,00");
}
function opcaoAston3() {
    alert("Você deve pagar: R$40.000.000,00");
}

// Função para atualizar o conteúdo da Ferrari
function updateFerrariContent(element) {
    element.innerHTML = `
        <h2>Ferrari LaFerrari (2024)</h2>
        <p>A Ferrari é uma das marcas mais icônicas do automobilismo, conhecida por seu design elegante e performance de alto nível. Fundada em 1939, a Ferrari oferece carros que são verdadeiras obras de arte sobre rodas.</p>
        <p>Modelos como o LaFerrari e o 488 GTB são exemplos do que há de melhor em engenharia e estética.</p>
        <h3>Preço: R$ 1.500.000,00</h3>
        <form action="">
            <button type="button" onclick="opcaoF1()">1x sem juros</button>
            <button type="button" onclick="opcaoF2()">2x sem juros</button>
            <button type="button" onclick="opcaoF3()">3x sem juros</button>
            <button type="button" onclick="compreJa()">Compre já</button>
        </form>
    `;
}


// Funções para as opções de pagamento da Ferrari
function opcaoF1() {
    alert("Você deve pagar: R$1.500.000,00");
}
function opcaoF2() {
    alert("Você deve pagar: R$750.000,00");
}
function opcaoF3() {
    alert("Você deve pagar: R$500.000,00");
}

// Função para atualizar o conteúdo da Jaguar
function updateJaguarContent(element) {
    element.innerHTML = `
        <h2>Jaguar F-Type (2023)</h2>
        <p>A Jaguar combina desempenho e luxo com um design sofisticado. Desde sua fundação em 1922, a marca britânica oferece veículos que são sinônimo de elegância e potência.</p>
        <p>Modelos como o F-Type e o XJ são exemplos perfeitos de sua tradição de excelência.</p>
        <h3>Preço: R$ 900.000,00</h3>
        <form action="">
            <button type="button" onclick="opcaoJaguar1()">1x sem juros</button>
            <button type="button" onclick="opcaoJaguar2()">2x sem juros</button>
            <button type="button" onclick="opcaoJaguar3()">3x sem juros</button>
            <button type="button" onclick="compreJa()">Compre já</button>
        </form>
    `;
}


// Funções para as opções de pagamento da Jaguar
function opcaoJaguar1() {
    alert("Você deve pagar: R$900.000,00");
}
function opcaoJaguar2() {
    alert("Você deve pagar: R$450.000,00");
}
function opcaoJaguar3() {
    alert("Você deve pagar: R$300.000,00");
}

// Função para atualizar o conteúdo da Bugatti
function updateBugattiContent(element) {
    element.innerHTML = `
        <h2>Bugatti Chiron (2023)</h2>
        <p>A Bugatti é conhecida por sua engenharia de ponta e velocidade extrema. Fundada em 1909, a marca francesa oferece carros que são o ápice da performance e do luxo.</p>
        <p>Modelos como o Chiron e o Veyron são símbolos de inovação e exclusividade.</p>
        <h3>Preço: R$ 10.000.000,00</h3>
        <form action="">
            <button type="button" onclick="opcaoBugatti1()">1x sem juros</button>
            <button type="button" onclick="opcaoBugatti2()">2x sem juros</button>
            <button type="button" onclick="opcaoBugatti3()">3x sem juros</button>
            <button type="button" onclick="compreJa()">Compre já</button>
        </form>
    `;
}


// Funções para as opções de pagamento da Bugatti
function opcaoBugatti1() {
    alert("Você deve pagar: R$10.000.000,00");
}
function opcaoBugatti2() {
    alert("Você deve pagar: R$5.000.000,00");
}
function opcaoBugatti3() {
    alert("Você deve pagar: R$3.333.333,33");
}

// Função para atualizar o conteúdo da Rolls-Royce
function updateRollsContent(element) {
    element.innerHTML = 'A Rolls-Royce é sinônimo de luxo e sofisticação. Desde 1904, a marca britânica oferece veículos que são verdadeiras obras de arte, combinando design elegante e tecnologia avançada. Modelos como o Phantom e o Cullinan são exemplos da excelência da Rolls-Royce.<br><h2>Este carro é de 2024 Ele custa R$ 6.000.000,00 </h2> <form action=""> <button type="button" onclick="opcaoRolls1()">1x sem juros</button><button type="button" onclick="opcaoRolls2()">2x sem juros</button><button type="button" onclick="opcaoRolls3()">3x sem juros</button></form>';
}

// Funções para as opções de pagamento da Rolls-Royce
function opcaoRolls1() {
    alert("Você deve pagar: R$6.000.000,00");
}
function opcaoRolls2() {
    alert("Você deve pagar: R$3.000.000,00");
}
function opcaoRolls3() {
    alert("Você deve pagar: R$2.000.000,00");
}

// Adiciona os eventos de clique para cada carro
document.getElementById("toggleLamborghini").addEventListener("click", function() {
    let lamborghini = document.getElementById("Lamborghini");

    if (lamborghini.style.display === "none" || lamborghini.style.display === "") {
        toggleDisplay(lamborghini, "block");
        updateLamborghiniContent(lamborghini);
    } else {
        toggleDisplay(lamborghini, "none");
    }
});

document.getElementById("toggleAston").addEventListener("click", function() {
    let aston = document.getElementById("Aston");

    if (aston.style.display === "none" || aston.style.display === "") {
        toggleDisplay(aston, "block");
        updateAstonContent(aston);
    } else {
        toggleDisplay(aston, "none");
    }
});

document.getElementById("toggleFerrari").addEventListener("click", function() {
    let ferrari = document.getElementById("Ferrari");

    if (ferrari.style.display === "none" || ferrari.style.display === "") {
        toggleDisplay(ferrari, "block");
        updateFerrariContent(ferrari);
    } else {
        toggleDisplay(ferrari, "none");
    }
});

document.getElementById("toggleJaguar").addEventListener("click", function() {
    let jaguar = document.getElementById("Jaguar");

    if (jaguar.style.display === "none" || jaguar.style.display === "") {
        toggleDisplay(jaguar, "block");
        updateJaguarContent(jaguar);
    } else {
        toggleDisplay(jaguar, "none");
    }
});

document.getElementById("toggleBugatti").addEventListener("click", function() {
    let bugatti = document.getElementById("Bugatti");

    if (bugatti.style.display === "none" || bugatti.style.display === "") {
        toggleDisplay(bugatti, "block");
        updateBugattiContent(bugatti);
    } else {
        toggleDisplay(bugatti, "none");
    }
});

document.getElementById("toggleRolls").addEventListener("click", function() {
    let rolls = document.getElementById("Rolls-Royce");

    if (rolls.style.display === "none" || rolls.style.display === "") {
        toggleDisplay(rolls, "block");
        updateRollsContent(rolls);
    } else {
        toggleDisplay(rolls, "none");
    }
});

// Função de compra
function compreJa() {
    alert("Você pode seguir para o formulário de compra.");
}
