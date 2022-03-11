// Initial Data

let currentQuestion = 0;

showQuestion();

//functions

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        let optionHTML = '';
        for(let i in q.option) {
            optionHTML += `<div class="opition"><span>${parseInt(i)+1}</span> ${q.option[i]}</div>`;
        }

        document.querySelector('.options').innerHTML = optionHTML;
    }
}