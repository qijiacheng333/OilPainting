var flag=true; //全局变量 只加载一次

//单击显示菜单列表
function show_menu(){
    var menu_list=document.getElementById('menu_list');
    if(flag){
        menu_list.style.display='block';
        flag=false;
    }else{
        menu_list.style.display='none';
        flag=true;
    }
}

//鼠标移开，菜单列表不显示
function show_menu1(){
    var menu_list=document.getElementById('menu_list');
    menu_list.style.display='none';
    flag=true;
}
