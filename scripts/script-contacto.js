var add = $("#agregar").on("click", addItem);
var accept = $(".conf").on("click", acceptItem);
var cancel = $(".cancel").on("click", cancelItem);

function addItem(e) {
    e.preventDefault();
    var nombre = $("#name").val();
    var fecha = $("#date").val();
    var hora = $("#hour").val();
    var noVis = $("#visitantes").val();
    var list = $(".lista");

    var div = $("<div>");
    var li = $("<li>");
    var p = $("<p>");
    var h = $("<h3>");
    var btnConf = $("<button>");
    var btnCancel = $("<button>");

    div.attr("class", "visitStore");
    li.attr("class", "lis");
    p.attr("class", "visitShop");
    btnConf.attr("class", "conf");
    btnConf.attr("type", "text");
    btnCancel.attr("class", "cancel");
    btnCancel.attr("type", "text");

    h.html(nombre)
    p.html(fecha + " " + hora);
    btnConf.html("Accept");
    btnCancel.html("Cancel");

    li.append(h);
    li.append(p);
    li.append(btnConf);
    li.append(btnCancel);
    li.append($("<p>"))
    div.append(li);
    list.append(div);
}

function acceptItem() {
    console.log("acceptItem function")
    $(".lista").on("click", ".conf", function() {
        //var newVisit = req.body;
        //citas.push(newVisit);
        $(this).parent().parent().remove();
        alert("La visita ha sido agendada");
    })
}

function cancelItem() {
    $(".lista").on("click", ".cancel", function() {
        $(this).parent().parent().remove();
    })
}


acceptItem();
cancelItem();