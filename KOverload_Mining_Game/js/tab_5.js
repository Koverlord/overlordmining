// 탭 5 : 로봇 제작소

tab_robot_num = 0;
function tab_robot(num) {
    let tab_robot_list = document.getElementsByClassName("tab_robot")
    let robot_list = document.getElementsByClassName("robot");
    tab_robot_list[tab_robot_num].className = "tab_robot not_active";
    robot_list[tab_robot_num].style.display = "none";
    tab_robot_list[num].className = "tab_robot active";
    robot_list[num].style.display = "block";
    tab_robot_num = num;
}

const robot_material = {
    0 : ["alloy_iron_gold", "overlord_ingot"],
    1 : ["iron_ingot", "gold_ingot"],
    2 : ["enchantedoverlordingot", "circuit"],
    3 : ["diamond", "overlord_ingot"]
};

const robot_price = {
    0 : ["1000", "100"],
    1 : ["30", "30"],
    2 : ["1", "300"],
    3 : ['2000', "100"]
};
const robot_result = {
    0 : "robot_body",
    1 : "circuit",
    2 : "CPU",
    3 : "mining_drill"
};