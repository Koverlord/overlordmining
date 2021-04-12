//탭2 - 제련소

const melt_ore = ["iron", "gold"];
const button_melt = document.getElementsByClassName("button_melt");

function real_melt(num) {
    if (SD[melt_ore[num]] >= SD["melt_count"]) {
        SD[melt_ore[num]] -= SD["melt_count"];
        SD[`${melt_ore[num]}_ingot`] += SD["melt_count"] * SD["melt_multiply"];
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
