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