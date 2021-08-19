// must enter all the dishes here in this price array.
const price = [50, 55, 55, 40, 50, 45, 55, 65, 60, 70, 70, 80, 50, 55, 65, 70, 90, 70, 15, 20, 15, 20, 25, 30, 25, 25, 25, 45, 40, 180, 100, 80, 90, 120, 100, 110, 120, 130, 140, 150];

let total = 0;
function func1() {
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    // South Indian
    if (text1.value == "IDLI SAMBAR" || text1.value == "idli sambar") {
        text2.value += "50\n";
        total = total + price[0];
        text1.value = "";
    }
    else if (text1.value == "FRIED IDLI" || text1.value == "fried idli") {
        text2.value += "55\n";
        total = total + price[1];
        text1.value = "";
    }
    else if (text1.value == "MEDU WADA" || text1.value == "medu wada") {
        text2.value += "55\n";
        total = total + price[2];
        text1.value = "";
    }
    else if (text1.value == "PLAIN DOSA" || text1.value == "plain dosa") {
        text2.value += "40\n";
        total = total + price[3];
        text1.value = "";
    }
    else if (text1.value == "MASALA DOSA" || text1.value == "masala dosa") {
        text2.value += "50\n";
        total = total + price[4];
        text1.value = "";
    }
    else if (text1.value == "MYSORE PLAIN DOSA" || text1.value == "mysore plain dosa") {
        text2.value += "45\n";
        total = total + price[5];
        text1.value = "";
    }
    else if (text1.value == "MYSORE MASALA DOSA" || text1.value == "mysore masala dosa") {
        text2.value += "55\n";
        total = total + price[6];
        text1.value = "";
    }
    else if (text1.value == "CHEESE MYSORE MASALA DOSA" || text1.value == "cheese mysore masala dosa") {
        text2.value += "65\n";
        total = total + price[7];
        text1.value = "";
    }
    else if (text1.value == "SPRING DOSA" || text1.value == "spring dosa") {
        text2.value += "60\n";
        total = total + price[8];
        text1.value = "";
    }
    else if (text1.value == "CREAM CHEESE DOSA" || text1.value == "cream cheese dosa") {
        text2.value += "70\n";
        total = total + price[9];
        text1.value = "";
    }
    else if (text1.value == "PAPER PLAIN DOSA" || text1.value == "paper plain dosa") {
        text2.value += "70\n";
        total = total + price[10];
        text1.value = "";
    }
    else if (text1.value == "PAPER MASALA DOSA" || text1.value == "paper masala dosa") {
        text2.value += "80\n";
        total = total + price[11];
        text1.value = "";
    }
    else if (text1.value == "PLAIN UTAPPA" || text1.value == "plain utappa") {
        text2.value += "50\n";
        total = total + price[12];
        text1.value = "";
    }
    else if (text1.value == "ONION UTAPPA" || text1.value == "onion utappa") {
        text2.value += "55\n";
        total = total + price[13];
        text1.value = "";
    }
    else if (text1.value == "MASALA UTAPPA" || text1.value == "masala utappa") {
        text2.value += "65\n";
        total = total + price[14];
        text1.value = "";
    }
    else if (text1.value == "CHEESE UTAPPA" || text1.value == "cheese utappa") {
        text2.value += "90\n";
        total = total + price[15];
        text1.value = "";
    }
    else if (text1.value == "ONION TOMATO CHEESE UTAPPA" || text1.value == "onion tomato cheese utappa") {
        text2.value += "90\n";
        total = total + price[16];
        text1.value = "";
    }
    else if (text1.value == "TOMATO OMELETTE" || text1.value == "tomato omelette") {
        text2.value += "70\n";
        total = total + price[17];
        text1.value = "";
    }

    // Indian Breads
    else if (text1.value == "ROTI" || text1.value == "roti") {
        text2.value += "15\n";
        total = total + price[18];
        text1.value = "";
    }
    else if (text1.value == "BUTTER ROTI" || text1.value == "butter roti") {
        text2.value += "20\n";
        total = total + price[19];
        text1.value = "";
    }
    else if (text1.value == "CHAPATI" || text1.value == "chapati") {
        text2.value += "15\n";
        total = total + price[20];
        text1.value = "";
    }
    else if (text1.value == "BUTTER CHAPATI" || text1.value == "butter chapati") {
        text2.value += "20\n";
        total = total + price[21];
        text1.value = "";
    }
    else if (text1.value == "NAAN" || text1.value == "naan") {
        text2.value += "25\n";
        total = total + price[22];
        text1.value = "";
    }
    else if (text1.value == "BUTTER NAAN" || text1.value == "butter naan") {
        text2.value += "30\n";
        total = total + price[23];
        text1.value = "";
    }
    else if (text1.value == "LACCHA PARATHA" || text1.value == "laccha paratha") {
        text2.value += "25\n";
        total = total + price[24];
        text1.value = "";
    }
    else if (text1.value == "METHI PARATHA" || text1.value == "methi paratha") {
        text2.value += "25\n";
        total = total + price[25];
        text1.value = "";
    }
    else if (text1.value == "KULCHA/BUTTER KULCHA" || text1.value == "kulcha/butter kulcha") {
        text2.value += "25\n";
        total = total + price[26];
        text1.value = "";
    }
    else if (text1.value == "STUFFED KULCHA" || text1.value == "stuffed kulcha") {
        text2.value += "45\n";
        total = total + price[27];
        text1.value = "";
    }
    else if (text1.value == "GARLIC CHEESE NAAN" || text1.value == "garlic cheese naan") {
        text2.value += "40\n";
        total = total + price[28];
        text1.value = "";
    }
    else if (text1.value == "ROTI BASKET" || text1.value == "roti basket") {
        text2.value += "180\n";
        total = total + price[29];
        text1.value = "";
    }
    else if (text1.value == "khakra" || text1.value == "khakra") {
        text2.value += "100\n";
        total = total + price[30];
        text1.value = "";
    }

    // RICE ITEMS
    else if (text1.value == "STEAMED RICE" || text1.value == "steamed rice") {
        text2.value += "80\n";
        total = total + price[31];
        text1.value = "";
    }
    else if (text1.value == "JEERA RICE" || text1.value == "jeera rice") {
        text2.value += "90\n";
        total = total + price[32];
        text1.value = "";
    }
    else if (text1.value == "VEG PULAO" || text1.value == "veg pulao") {
        text2.value += "120\n";
        total = total + price[33];
        text1.value = "";
    }
    else if (text1.value == "GREEN PEAS PULAO" || text1.value == "green peas pulao") {
        text2.value += "100\n";
        total = total + price[34];
        text1.value = "";
    }
    else if (text1.value == "TAVA PULAO" || text1.value == "tava pulao") {
        text2.value += "110\n";
        total = total + price[35];
        text1.value = "";
    }
    else if (text1.value == "METHI CORN PULAO" || text1.value == "methi corn pulao") {
        text2.value += "120\n";
        total = total + price[36];
        text1.value = "";
    }
    else if (text1.value == "KASHMIRI PULAO" || text1.value == "kashmiri pulao") {
        text2.value += "130\n";
        total = total + price[37];
        text1.value = "";
    }
    else if (text1.value == "VEG BIRIYANI" || text1.value == "veg biriyani") {
        text2.value += "140\n";
        total = total + price[38];
        text1.value = "";
    }
    else if (text1.value == "VEG DUM BIRIYANI" || text1.value == "veg dum biriyani") {
        text2.value += "150\n";
        total = total + price[39];
        text1.value = "";
    }

}
function func2() {
    document.getElementById("text2").value = alert("Your order calculations:" + "\n" + text2.value + "Total price is :" + total);
}
function func3(){
    alert("ORDER PLACED, THANK YOU.")
}