//탭5 - 테스트용

function test() {
    var z = document.getElementById("testt");
    var test_text = " ";
    test_text += "<p>테스트</p>"
    z.innerHTML = test_text
}

function reset() { //세이브 리셋
    SD = default_SD;
    for (i = 0; i < store_list.length; i++){
        store(i);
    }
}
