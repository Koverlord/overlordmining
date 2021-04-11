//테스트용 탭

function test() {
    var z = document.getElementById("testt");
    let test_text = " ";
    test_text += "할짓 모음 <br>"
    test_text += "1. <br>"
    z.innerHTML = test_text
}

function reset() { //세이브 리셋
    SD = default_SD;
    for (i = 0; i < store_list.length; i++){
        store(i);
    }
    add_log("리셋되었습니다 세이브시 복구불가");
}
