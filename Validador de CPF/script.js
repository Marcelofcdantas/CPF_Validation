document.addEventListener('DOMContentLoaded', function(){

    const submit = document.querySelector('#btn');
    const CPFField = document.querySelector('#CPF');
    const answer = document.querySelector('#answer');
    const btnClean = document.querySelector('#btnClean');

    const clearAnswer = () => {
        if (answer.innerText){
            answer.innerText = '';
        }
    }

    const clearCPF = (CPF) => {
        const array = [1,2,3,4,5,6,7,8,9,0];
        let check = '';
        for (let index = 0; index < CPF.length; index +=1){
            let numero = parseInt(CPF[index]);
            console.log(numero);
            if (array.includes(numero)) {
                check += CPF[index];
            }
        }
        return check;
    };

    const validatingLengthCPF = (clearedCPF) => {
        if (clearedCPF.length !== 11){
            const textAnswer = document.createElement('p')
            textAnswer.innerText = `CPF ${clearedCPF} Inválido, precisa conter 11 caracteres`;
            textAnswer.style.color = 'red';
            answer.appendChild(textAnswer);
            return;
        }
    };

    const validatingCPF = (clearedCPF) => {
        let sum = 0;
        let multiply = 0;
        for (let index = 10; index > 1; index -= 1){
            sum += clearedCPF[multiply] * index;
            multiply += 1;
        }
        let residue = sum * 10 % 11;
        if (residue === 10) residue = 0;
        if ((residue) !== parseInt(clearedCPF[9])){
            console.log('problema primeiro digito');
            const textAnswer = document.createElement('p')
            textAnswer.innerText = `CPF ${clearedCPF} Inválido`;
            textAnswer.style.color = 'red';
            answer.appendChild(textAnswer);
            return;
        }
        sum = 0;
        multiply = 0;
        for (let index = 11; index > 1; index -= 1){
            sum += clearedCPF[multiply] * index;
            multiply += 1;
        }
        residue = sum * 10 % 11
        if (residue === 10) residue = 0;
        if ((residue) !== parseInt(clearedCPF[10])){
            const textAnswer = document.createElement('p')
            textAnswer.innerText = `CPF ${clearedCPF} Inválido`;
            textAnswer.style.color = 'red';
            answer.appendChild(textAnswer);
            return;
        } else {
            const textAnswer = document.createElement('p')
            textAnswer.innerText = `CPF ${clearedCPF} Válido`;
            textAnswer.style.color = 'darkgreen';
            answer.appendChild(textAnswer);
            return;
        }
    }

    submit.addEventListener('click', function(){

        clearAnswer();
        const CPF = CPFField.value;

        function numberCPF(CPF) {
            const clearedCPF = clearCPF(CPF);
            validatingLengthCPF(clearedCPF)
            console.log(clearedCPF);
            validatingCPF(clearedCPF);
        } 
        window.alert = numberCPF(CPF);
    });

    btnClean.addEventListener('click', function(){
        answer.innerText = '';
        CPFField.value = '';
    })
})