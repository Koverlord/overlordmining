//탭2 - 제련소

const melt_ore = ["iron", "gold", "mythrill"];
const button_melt = document.getElementsByClassName("button_melt");

var firePowers = { // 광물 당 요구 화력
    iron : 1,
    gold : 2,
    mythrill : 100,
}

var Melt = {
    iron : 0,
    gold : 0,
    mythrill : 0,
}

var melt_result = { // 제련 결과
    iron : "iron_ingot",
    gold : "gold_ingot",
    mythrill : "mythrill_ingot",
}
function real_melt(num) {
    let final_melt_count = parseInt(SD["melt_count"] / firePowers[melt_ore[num]]);
    if (SD[melt_ore[num]] >= final_melt_count && final_melt_count != 0) {
        SD[melt_ore[num]] -= final_melt_count;
        SD[melt_result[melt_ore[num]]] += final_melt_count * SD["melt_multiply"];
        store(0); // 광물
        store(1); // 주괴
        // add_log(Name[melt_ore[num]] + " 1개 제련!");
    }
    else {
        add_log("제련 재료가 부족합니다");
        melt(num);
    }
}

//melt("iron");
function melt(num) {
    if (Melt[`${melt_ore[num]}`] == 0) {
        Melt[`${melt_ore[num]}`] = setInterval(real_melt, 1000, num);
        button_melt[num].innerHTML = "중단";
        add_log(Name[melt_ore[num]] + " 제련 시작");
    }
    else {
        clearTimeout(Melt[`${melt_ore[num]}`]);
        Melt[`${melt_ore[num]}`] = 0;
        button_melt[num].innerHTML = "제련";
        add_log(Name[melt_ore[num]] + " 제련 중지");
    }
}

function melt_text() {
    let melt_texts = document.getElementById("firepower");
    melt_texts.innerHTML = "현재 화력 : " + SD.melt_count;
}
