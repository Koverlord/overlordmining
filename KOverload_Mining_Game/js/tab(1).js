//탭1 업그레이드

function UGS_load(num) {
    var y = document.getElementsByClassName("UGS_list");
    eval(SD["UGS"][num]["price_equation"]); // 가격 조정
    eval(SD["UGS"][num]["result"][0][0] + "=" + SD["UGS"][num]["result"][0][1]); // 다음레벨에 필요한 재료 갯수
    var upgrade_text = " "
    upgrade_text += SD["UGS"][num]["name"] + " level : " + SD["UGS"][num]["level"] + "<br>";
    upgrade_text += "업그레이드 재료 : "+ SD["UGS"][num]["material"][0] + " " + SD["UGS"][num]["price"] + "개<br>";
    y[num].innerHTML = upgrade_text;
}

function upgrade(num) {
    if ((SD["UGS"][num]["level"] < SD["UGS"][num]["max_level"]) || (SD["UGS"][num]["max_level"] == -1)){
        if (eval(SD["UGS"][num]["material"][1]) >= SD["UGS"][num]["price"]) { // 필요한 재료 >= 가격 일때
            eval(SD["UGS"][num]["material"][1] + "-=" + SD["UGS"][num]["price"]); // 필요한 재료 -= 가격
            SD["UGS"][num]["level"] += 1; // 레벨 증가
            //밑에 2줄은 UGS_load(num)으로 옮김
            // eval(SD["UGS"][num]["price_equation"]); // 가격 조정
            // eval(SD["UGS"][num]["result"][0][0] + "=" + SD["UGS"][num]["result"][0][1]); // 다음레벨에 필요한 재료 갯수
            store();
            UGS_load(num)
        }
        else{
            alert("업글 불가 (재료)");
        }
    }
    else {
        alert("업글 불가 (레벨)");
    }
}