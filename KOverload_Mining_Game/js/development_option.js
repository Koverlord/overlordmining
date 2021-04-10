//테스트용 탭

function test() {
    var z = document.getElementById("testt");
    let test_text = " ";
    test_text += "할짓 모음 <br>"
    test_text += "1. 업그레이드, 조합소 탭 나누기 <br>"
    z.innerHTML = test_text
}

function reset() { //세이브 리셋
    SD = default_SD;
    store();
}
