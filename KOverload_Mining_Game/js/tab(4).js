//탭4

function test() {
    var z = document.getElementById("testt");
    test_text = " ";
    test_text += "<p>SD.iron : " + SD.iron + "</P>";
    test_text += "<p>SD.UGS.0.name : " + SD['UGS']['0']['name'] + "</P>";
    test_text += "<p>SD.UGS.0.level : " + SD['UGS']['0']['level'] + "</P>";
    // test_text += "<p>SD.UGS.0.result : " + SD['UGS']['0']['result'] + "</P>";
    // test_text += "<p>SD.UGS.0.result.0.0 : " + SD['UGS']['0']['result'][0][0] + "</P>";
    // test_text += "<p>SD.UGS.0.result.0.1 : " + SD['UGS']['0']['result'][0][1] + "</P>";
    // test_text += "<p></P>";
    z.innerHTML = test_text
}