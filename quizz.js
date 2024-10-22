function Avancar(Resposta) {
    var Acertos = parseInt(document.querySelector("#TotalAcertos").value);
    var Pergunta = parseInt(document.querySelector("#Numero").value);

    Acertos = Acertos + ValidarResposta2(Pergunta, Resposta);							
    document.querySelector("#TotalAcertos").value = Acertos;	
    ProximaPergunta2(Pergunta)

}

function ValidarResposta2(Pergunta, Resposta) {
    var respostas = [2,2,4,3,1,3,4,2,3,2];
    var acerto = 0;

    if (respostas[Pergunta-1] == Resposta) {
        acerto = 1
    }
    return acerto
}   

function ProximaPergunta2(Pergunta) {
    var ProximaPergunta = [ 
        ["Qual dos dispositivos é exemplo de sensor para a telemonitorização?","A) Smartphone","B) Patch de ECG", "C) Termómetro digital","D) Ecografia"],
        ["Qual é um dos principais objetivos da telemonitorização?"," A) Reduzir o número de visitas ao hospital","B) Possibilitar um melhor estado de saúde do doente", "C) Fornecer diagnósticos automáticos sem intervenção humana","D) Substituir o tratamento médico tradicional"],
        ["Que tipo de tecnologia da informação NÃO é utilizada para a telemonitorização?","A) Linhas telefónicas","B) Banda larga", "C) Redes sem fio","D) Tecnologia de impressão 3D"],
        ["Primeiras tecnologias utilizadas na teleconsultas no final do século XX?","A) Videoconferências e e-mails","B) Redes sociais e chats online", "C) Telefone e fax","D) Aplicativos de mensagens instantâneas"],
        ["Qual é uma das principais vantagens da teleconsulta para os doentes?","A) Eliminação da necessidade de deslocamento ","B) Diagnósticos automáticos sem intervenção humana","C) Acesso a todos os tipos de exames médicos","D) Aumento da interação face a face com médicos"],
        ["Qual é um dos principais desafios da teleconsulta?","A) Falta de interesse dos doente","B) Necessidade de diagnósticos rápidos","C) Garantir a privacidade e a segurança dos dados dos doentes","D) Dificuldade em encontrar profissionais de saúde qualificados"],
        ["Principais fatores que impulsionaram o avanço da teletriagem durante a pandemia de COVID-19?","A) Desenvolvimento de novos medicamentos","B) Aumento do número de profissionais de saúde","C) Redução dos custos de equipamentos médicos","D) Necessidade obrigatória de distanciamento social"],
        ["Qual é um dos principais desafios enfrentados pela teletriagem?","A) Falta de interesse dos doentes","B) Garantir a privacidade e segurança das informações dos doentes","C) Alto custo de manutenção de dispositivos médicos","D) Dificuldade em realizar exames físicos detalhados"],
        ["Quando se realizou a primeira telecirurgia?","1985","1988","2001","2003"],
        ["Como ficou conhecida a primeira telecirurgia?","Operação Da Vinci","Operação Lindberg","Operação Endowrist","Operação Zeus"],


    ]
    
if (Pergunta == 10) {
        Acertos = parseInt(document.querySelector("#TotalAcertos").value);
        document.querySelector("#Quiz").innerHTML = 
        "<INPUT TYPE='Text' NAME='Mensagem' VALUE='Acertou " 
        + Acertos + " de " + Pergunta + 
        " .'" + " ID='Mensagem' style='width:auto' disabled;'/><br><br><br><INPUT TYPE='BUTTON' NAME='RefazerQuiz' VALUE='Refazer Quiz' ID='RefazerQuiz' style='width:200px;' onclick='window.location.reload();'/>";
}
else {
    var Perguntas2 = "";

    var i = 0;
    for (i=1; i<5; i++) {
        Perguntas2 = Perguntas2 + 
        "<Input Type='Button' Name ='Alternativa'" + i + " Value='" + ProximaPergunta[Pergunta][i] + "' Id='Alternativa" + i + "' onclick='Avancar(" + i +   ");'/><br><br>";


    }	

    document.querySelector("#Quiz2").innerHTML = Perguntas2;
    document.querySelector("#Numero").value = Pergunta+1;	
    document.querySelector("#Pergunta").value = ProximaPergunta[Pergunta][0];	
}

}