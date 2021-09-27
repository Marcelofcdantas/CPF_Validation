document.addEventListener('DOMContentLoaded', function(){

    const submit = document.querySelector('#btn');
    const CPFField = document.querySelector('#CPF');
    const answer = document.querySelector('#answer');
    const btnClean = document.querySelector('#btnClean');

    submit.addEventListener('click', function(){
        if (answer.innerText){
            answer.innerText = '';
        }
        const CPF = CPFField.value;
        function numberCPF(CPF) {
            const array = [1,2,3,4,5,6,7,8,9,0];
            let check = '';
            for (let index = 0; index < CPF.length; index +=1){
                let numero = parseInt(CPF[index]);
                if (array.includes(numero)) {
                    check += CPF[index];
                }
            }
            if (check.length !== 11){
                const textAnswer = document.createElement('p')
                textAnswer.innerText = `CPF ${check} Inválido, precisa conter 11 caracteres`;
                textAnswer.style.color = 'red';
                answer.appendChild(textAnswer);
                return 0;
                // window.alert(`CPF ${check} Inválido, precisa conter 11 caracteres`);
                // return `CPF ${check} Inválido, precisa conter 11 caracteres`;
            }
            let sum = 0;
            let multiply = 0;
            for (let index = 10; index > 1; index -= 1){
                sum += check[multiply] * index;
                multiply += 1;
                console.log(sum);
            }
            let residue = sum * 10 % 11
            if ((residue) !== parseInt(check[9])){
                const textAnswer = document.createElement('p')
                textAnswer.innerText = `CPF ${check} Inválido`;
                textAnswer.style.color = 'red';
                answer.appendChild(textAnswer);
                return 0;
                // window.alert(`CPF ${check} Inválido`);
                // return `CPF ${check} Inválido`;
            }
            sum = 0;
            multiply = 0;
            for (let index = 11; index > 1; index -= 1){
                sum += check[multiply] * index;
                multiply += 1;
            }
            residue = sum * 10 % 11
            console.log('residue', residue);
            if ((residue) !== parseInt(check[10])){
                const textAnswer = document.createElement('p')
                textAnswer.innerText = `CPF ${check} Inválido`;
                textAnswer.style.color = 'red';
                answer.appendChild(textAnswer);
                return 0;
                    // window.alert(`CPF ${check} Inválido`);
                    // return `CPF ${check} Inválido`;
            } else {
                const textAnswer = document.createElement('p')
                textAnswer.innerText = `CPF ${check} Válido`;
                textAnswer.style.color = 'darkgreen';
                answer.appendChild(textAnswer);
                return 0;
                // window.alert(`CPF ${check} Aprovado`);
                // return `CPF ${check} Válido`;
            }
        } 
        window.alert = numberCPF(CPF);
    });

    btnClean.addEventListener('click', function(){
        answer.innerText = '';
    })
})