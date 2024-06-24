var minDate; //Data m�nima aceit�vel para valida��o
var cards; //Cont�m os cart�es msotrados na tela
var cardsArray = []; //Mant�m lista dos dados no front end
var cardsCount = 0; //Monitora mudan�a na quantidade de cart�es
var lockNewCard = 0;
async function deleteCard(id) {

    var lastId = 0;
    cards.find("li > div").each(function (i, e) {
        //Percorre cart�es lendo as infos
        lastId = $(e).data("id");
    });

    if (id == lastId && lockNewCard == 1) lockNewCard = 0;
    else {
        try {
            const response = await fetch('/Tasks/JsDelete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // json encode
                body: JSON.stringify(id)
            });

            if (response.ok) {
                cardsCount = cardsArray.length;
                //window.location.href = '/Tasks/Index'; // Redireciona para a p�gina de �ndice
            }
        } catch (error) {
            console.error('Network error:', error);
            //alert('Failed to create task. Please check your network connection.');
        }
    }
}

async function editCards(taskData) {
    try {
        const response = await fetch('/Tasks/JsEdit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // json encode
            body: JSON.stringify(taskData)
        });

        if (response.ok) {
            cardsCount = cardsArray.length;
            //window.location.href = '/Tasks/Index'; // Redireciona para a p�gina de �ndice
        }
    } catch (error) {
        console.error('Network error:', error);
        //alert('Failed to create task. Please check your network connection.');
    }
}

async function saveCards(taskData) {
    var newTaskData = {
        title: taskData.title,
        description: taskData.description,
        deadLineDate: taskData.deadLineDate,
        deadLineHour: taskData.deadLineHour
    }

    try {
        const response = await fetch('/Tasks/JsCreate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // json encode
            body: JSON.stringify(newTaskData)
        });

        if (response.ok) {
            var lastItemId = cardsArray[cardsArray.length - 1].id;
            var newId = lastItemId + 1;
            cardsArray.push({ id: newId, title: taskData.title, description: "", deadLineDate: "", deadLineHour: "" }); //Adiciona cart�o vazio ao array de dados de cart�o
            //window.location.href = '/Tasks/Index'; // Redireciona para a p�gina de �ndice
        }
    } catch (error) {
        console.error('Network error:', error);
        //alert('Failed to create task. Please check your network connection.');
    }
}

// Verifica se algum cart�o foi alterado e salva
function saveData() {
    var id;
    var title;
    var description;
    var dayFinal;
    var horaFinal;

    //Armazana dados dos cart�es percorridos nas fun��es abaixo
    var taskData;

    cards.find("li > div").each(function (i, e) {
        //Percorre cart�es lendo as infos
        id = $(e).data("id");
        title = $(e).find("#card-title").val();
        description = $(e).find("#card-description").val();
        dayFinal = $(e).find("#input-date").val();
        horaFinal = $(e).find("#input-hora").val();

        taskData = {
            id: id,
            title: title,
            description: description,
            deadLineDate: dayFinal,
            deadLineHour: horaFinal
        };

        // Verifica se algum cart�o foi alterado e salva
        var i = 0;
        for (i = 0; i < cardsArray.length; i++) {
            if (cardsArray[i].id == id) {
                if (cardsArray[i].title !== title ||
                    cardsArray[i].description !== description ||
                    cardsArray[i].deadLineDate !== dayFinal ||
                    cardsArray[i].deadLineHour !== horaFinal) {
                    editCards(taskData);
                }
            }
        }
    });

    if (cardsCount > cardsArray.length) {
        if (taskData.title != "") {
            lockNewCard = 0;
            saveCards(taskData);
        }
    }

    location.reload();
}

// Adiciona manipulador de eventos para o cart�o (faz aparecer e simir bot�o X exclus�o)
function addCardEvent(cardElement) {
    var div = cardElement.children("div");
    var closeImg = div.find("img");

    div.focus(function () {
        closeImg.removeClass("hide");
    });

    div.children().focus(function () {
        closeImg.removeClass("hide");
    });

    div.hover(function () {
        closeImg.removeClass("hide");
    }, function () {
        closeImg.addClass("hide");
        //saveCards();
    });

    div.children().hover(function () {
        closeImg.removeClass("hide");
    }, function () {
        closeImg.addClass("hide");
    });
}

//  adiciona um novo cart�o a lista
function addNewCard(id, title, description, dayFinal, horaFinal) {
    var colourPick = cardColor(dayFinal);
    // adiciona novo cart�o ao final da lista
    cards.append("<li><div class=\"" + colourPick + "\" data-id=\"" + id + "\">" +
        "<input type=\"text\" id=\"card-title\" placeholder=\"T&#237tulo?\" maxlength=\"19\"/>" +
        "<textarea id=\"card-description\" placeholder=\"Descri&#231&#227o...\"></textarea>" +
        "<label class=\"card-entrega\">Prazo final</label>" +
        "<label class=\"card-date\">Data: </label><input id=\"input-date\" type=\"date\"/>" +
        "<label class=\"card-hora\">Hora: </label><input id=\"input-hora\" type=\"time\"/>" +
        "<img class=\"hide\" src=\"images/del.png\"/>" +
        "</div></li>");


    // pega a novo cart�o que acabou de ser adicionada e atrela o manipulator de eventos de click ao seu bot�o de excluir
    var newCard = cards.find("li:last");
    newCard.find("img").click(function () {

        //Atualiza BD
        deleteCard(id);

        // remove o cart�o da tela
        newCard.remove();
    });

    // liga o manipulador de eventos para ocultar/mostrar o bot�o excluir corretamente
    addCardEvent(newCard);

    //Restringe que seja escolhido no calend�rio datas anteriores a hoje
    newCard.find("#input-date").attr('min', minDate);

    // se for fornecido um t�tulo, define o t�tulo do novo cart�o
    if (title) newCard.find("#card-title").val(title);

    // se for fornecida descri��o, define a descri��o do novo cart�o
    if (description) newCard.find("#card-description").val(description);

    if (dayFinal) newCard.find("#input-date").val(dayFinal);

    if (horaFinal) newCard.find("#input-hora").val(horaFinal);
}

function cardColor(dayFinal) {
    var colourPick = "colour" + 0;
    if (dayFinal != undefined) {
        var dateToday = new Date();

        var fDay = parseInt(dayFinal.substring(8, 10));
        var fMonth = parseInt(dayFinal.substring(5, 7));
        var fYear = parseInt(dayFinal.substring(0, 4));
        var aDay = dateToday.getDate();
        var aMonth = dateToday.getMonth() + 1;
        var aYear = dateToday.getFullYear();


        if (fDay - aDay >= 7 && fMonth >= aMonth && fYear >= aYear) colourPick = "colour" + 1;
        else if (fDay - aDay >= 5 && fMonth >= aMonth && fYear >= aYear) colourPick = "colour" + 2;
        else if (fDay - aDay >= 2 && fMonth >= aMonth && fYear >= aYear) colourPick = "colour" + 3;
        else if (fDay - aDay >= 0 && fMonth >= aMonth && fYear >= aYear) colourPick = "colour" + 4;
        return colourPick;
    }
    return colourPick;
}

function loadCards() {
    fetch('/Tasks/JsGetTasks') // Endpoint para obter as tarefas em JSON
        .then(response => response.json())
        .then(data => {
            // Manipular os dados recebidos
            //console.log(data); // Exemplo de como acessar os dados de tarefas

            // Passa o JSON armazenado de volta para uma array de objetos do tipo cart�o
            cardsArray = data;
            var count = cardsArray.length;

            var i;
            for (i = 0; i < count; i++) {
                var storedCard = cardsArray[i];
                addNewCard(storedCard.id, storedCard.title, storedCard.description, storedCard.deadLineDate, storedCard.deadLineHour);
                cardsCount++;
            }//Atualiza vari�vel que monitora atualiza��o dos cards
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}

$(document).ready(function () {
    ///////////////////////////////////////////
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    minDate = year + '-' + month + '-' + day;
    //////////////////////////////////////////


    // obtem refer�ncias � lista de 'cart�es'
    cards = $("#cards");

    // carrega cart�es do armazenamento local, se estiver dispon�vel
    loadCards();

    // clicar no bot�o 'Novo cart�o' adiciona um Novo cart�o � lista
    $("#btnNew").click(function () {
        if (lockNewCard == 0) {
            var lastItemId;
            var newId;
            try {

                lastItemId = cardsArray[cardsArray.length - 1].id;
                newId = lastItemId + 1;
            } catch {
                newId = 0;
            }
            lockNewCard = 1;
            addNewCard(newId, "", "", "", ""); // Cria um cart�o vazio na tela do usu�rio
            cardsCount++;
        }
    });

    $("#btnSaveData").click(function () {
        saveData();
    });
});