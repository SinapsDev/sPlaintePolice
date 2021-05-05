$(function () {
    // Plainte code
    function displayPlainte(bool) {
        if (bool) {
            $(".plainte-container").show();
        } else {
            $(".plainte-container").hide();
        }
    }

    displayPlainte(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "plainteui") {
            if (item.status == true) {
                displayPlainte(true)
            } else {
                displayPlainte(false)
            }
        }
    })
    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('https://sPlaintePolice/exitplainte', JSON.stringify({}));
            return
        }
    };
    $("#close").click(function () {
        $.post('https://sPlaintePolice/exitplainte', JSON.stringify({}));
        return
    })


    //when the user clicks on the submit button, it will run
    $("#submitPlainte").click(function () {
        let fname = $("#fname").val()
        let sname = $("#sname").val()
        let phone = $("#phone").val()
        let date = $("#date").val()
        let subject = $("#subject").val()
        let message = $("#message").val()

        if(!fname){
            $.post('https://sPlaintePolice/errorplainte', JSON.stringify({error: "~r~Vous devez remlire tout les champs !"}))
            return
        }else if(!sname){
            $.post('https://sPlaintePolice/errorplainte', JSON.stringify({error: "~r~Vous devez remlire tout les champs !"}))
            return
        }else if(!sname){
            $.post('https://sPlaintePolice/errorplainte', JSON.stringify({error: "~r~Vous devez remlire tout les champs !"}))
            return
        }else if(!phone){
            $.post('https://sPlaintePolice/errorplainte', JSON.stringify({error: "~r~Vous devez remlire tout les champs !"}))
            return
        }else if(!date){
            $.post('https://sPlaintePolice/errorplainte', JSON.stringify({error: "~r~Vous devez remlire tout les champs !"}))
            return
        }else if(!subject){
            $.post('https://sPlaintePolice/errorplainte', JSON.stringify({error: "~r~Vous devez remlire tout les champs !"}))
            return
        }else if(!message){
            $.post('https://sPlaintePolice/errorplainte', JSON.stringify({error: "~r~Vous devez remlire tout les champs !"}))
            return
        }
        
        // if there are no errors from above, we can send the data back to the original callback and hanndle it from there
        $.post('https://sPlaintePolice/postplainte', JSON.stringify({
            fname: fname,
            sname: sname,
            phone: phone,
            date: date,
            subject: subject,
            message: message
        }));
        return;
    })
})
