let  numFromIn = document.getElementById("num_user")
let saveBtn = document.getElementById("save_nums")
function inputNumFunc() {
    saveBtn = +numFromIn.value;
    switch(saveBtn){
        case 3:
            console.log("hello");
            break;
        case 5:
            console.log("goodbay");
            break;
        case 7:
            console.log("thenks");
            break;
        default:
            console.log("not found number")
    }
}

let userNames = document.getElementById("aName_user")
let saveUserNames = document.getElementById("save_Names")
function inputNameFunc() {
    saveUserNames=userNames.value ; 
    console.log(saveUserNames)
    switch(saveUserNames){
        case "jacob":
            document.body.innerHTML ="<h1>"+ saveUserNames +"</h1>";
        break;

        case "nathan":
            document.body.innerHTML ="<h1>"+ saveUserNames.toUpperCase()  +"</h1>";
            break;
        case "DALYA":
            document.body.innerHTML = "<h1>"+ saveUserNames.toLowerCase()+"</h1>";
            break;
        default:
            document.body.innerHTML ="<h1>"+ "name not found"+"</h1>";
        
    }
}

function calculateFunc () {
    console.log(num_user1.value);
    switch(math_sign.value){
        case "+":
            resulte.innerHTML = +num_user1.value  +   +num_user2.value;
        break;

        case "-":
            resulte.innerHTML = +num_user1.value  -  +num_user2.value;
        break;

        case "*":
            resulte.innerHTML = +num_user1.value  *   +num_user2.value;
        break;

        case "/":
            resulte.innerHTML = +num_user1.value  /  +num_user2.value;
        break;
        default:
            resulte.innerHTML = +num_user1.value  + math_sign.value +   +num_user2.value;


    }
}

function saveTexColSize(){
    print_text.innerText = chose_text.value;
    print_text.style.color = chose_color.value;
    print_text.style.fontSize = chose_size.value + "px";
}

function printElementFunc() {
    switch (select_position.value) {
        case "top-right":
            box_div.style = "float:right;top:0;width:100px;height:100px;border-radius:50%;background:" + select_color.value;
            
            break;
        case "top-left":
            box_div.style = "float:left;top:0;width:100px;height:100px;border-radius:50%;background:" + select_color.value;
            
                break;
        case "bottom-right":
            box_div.style = "position:absolute;bottom:0;right:0;width:100px;height:100px;border-radius:50%;background:" + select_color.value;

            
            break;
        case "bottom-left":
            box_div.style = "position:absolute;bottom:0;left:0;width:100px;height:100px;border-radius:50%;background:" + select_color.value;
            
            break;
    
        default:
            break;
    }
}



