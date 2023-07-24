//exercicio 1
const botao_ex1 = document.getElementById("enviar_ex1");

botao_ex1.addEventListener("click", () => {
    let diciplina = document.getElementById("diciplina");
    let titulo = document.getElementById("mostrar_ex1");

    titulo.innerHTML = diciplina.value;
})

//exercicio 2
const botao_ex2 = document.getElementById("enviar_ex2");

botao_ex2.addEventListener("click", () => {
    let numero1 = parseFloat(document.getElementById("entrada1_ex2").value);
    let numero2 = parseFloat(document.getElementById("entrada2_ex2").value);
    let res = document.getElementById("mostrar_ex2");

    const soma = numero1 + numero2;

    res.innerHTML = numero1 + " + " + numero2 + " = " + soma;
})

//exercicio 3
const botao_ex3 = document.getElementById("enviar_ex3");

botao_ex3.addEventListener("click", () => {
    let nota1 = parseFloat(document.getElementById("entrada1_ex3").value);
    let nota2 = parseFloat(document.getElementById("entrada2_ex3").value);
    let nota3 = parseFloat(document.getElementById("entrada3_ex3").value);
    let nota4 = parseFloat(document.getElementById("entrada4_ex3").value);
    let res = document.getElementById("mostrar_ex3");

    const valor = (nota1 + nota2 + nota3 + nota4)/4;

    if(valor>6){
       let situacao = "Aprovado."
       res.innerHTML = "Média do aluno: " + valor + ", o aluno esta " + situacao;

    }else{
       let situacao = "Reprovado."
       res.innerHTML = "Média do aluno: " + valor + ", o aluno esta " + situacao;

    }
})

//exercicio 4
const botao_ex4 = document.getElementById("enviar_ex4");

botao_ex4.addEventListener("click", () => {
    let inteiro = parseFloat(document.getElementById("entrada_ex4").value);

    for(i=0; i<=10; i++){
        let elemento = document.createElement("li");
        let calcular = inteiro * i;
        elemento.innerHTML = inteiro + " x " + i + " = " + calcular; 
    
        let res = document.getElementById("mostrar_ex4");     
        res.appendChild(elemento);
    }
})

//exercicio 5
const botao_ex5 = document.getElementById("enviar_ex5");

botao_ex5.addEventListener("click", () => {
    let numero1 = parseFloat(document.getElementById("entrada1_ex5").value);
    let numero2 = parseFloat(document.getElementById("entrada2_ex5").value);
    let numero3 = parseFloat(document.getElementById("entrada3_ex5").value);

    if(numero1 > numero2 && numero1 > numero3){
        
    }
})