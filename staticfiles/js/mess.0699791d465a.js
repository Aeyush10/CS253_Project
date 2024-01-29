let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let total6 = 0;

function disp() {
    console.log("function called");
    var name1 = document.getElementById('extra1').innerHTML;
    var name2 = document.getElementById('extra2').innerHTML;
    var name3 = document.getElementById('extra3').innerHTML;
    var name4 = document.getElementById('extra4').innerHTML;
    var name5 = document.getElementById('extra5').innerHTML;
    var name6 = document.getElementById('extra6').innerHTML;
    var count = parseInt(document.getElementById('number1').value, 10);
    var pount = parseInt(document.getElementById('number2').value, 10);
    var zount = parseInt(document.getElementById('number3').value, 10);
    var dount = parseInt(document.getElementById('number4').value, 10);
    var gount = parseInt(document.getElementById('number5').value, 10);
    var kount = parseInt(document.getElementById('number6').value, 10);
    var price_1 = parseInt(document.getElementById('cost_1').innerHTML, 10);
    var price_2 = parseInt(document.getElementById('cost_2').innerHTML, 10);
    var price_3 = parseInt(document.getElementById('cost_3').innerHTML, 10);
    var price_4 = parseInt(document.getElementById('cost_4').innerHTML, 10);
    var price_5 = parseInt(document.getElementById('cost_5').innerHTML, 10);
    var price_6 = parseInt(document.getElementById('cost_6').innerHTML, 10);
    //document.getElementById('test').innerHTML += '<div class = "row" style = "margin-right: 4px;margin-left: 4px;" > <div class = "col" > <p style = "font-family: Nunito, sans-serif;" >yay </p></div><div class = "col"> <p style = "text-align: right;font-family: Nunito, sans-serif;" > ₹30.00 <br></br></p></div > </div>'
    //document.getElementById('test').innerHTML += "<h3> mommu </h3>"
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

function increment_value_1(price_1) {
    document.getElementById('number_quant_1').style.color = 'black';
    document.getElementById('temp_quant_1').style.color = 'black';

    var count = parseInt(document.getElementById('number1').value, 10);

    if (count < 9) count = count + 1;
    document.getElementById('number1').value = count;
    document.getElementById('number_quant_1').innerHTML = count;
    total1 = count * parseInt(price_1, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function decrement_value_1(price_1) {
    var count = parseInt(document.getElementById('number1').value, 10);

    if (count > 0) count = count - 1;
    document.getElementById('number1').value = count;
    document.getElementById('number_quant_1').innerHTML = count;
    if (count == 0) {
        document.getElementById('number_quant_1').style.color = 'rgba(33,37,41,0.35)';
        document.getElementById('temp_quant_1').style.color = 'rgba(33,37,41,0.35)';

    }
    total1 = count * parseInt(price_1, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function MyFunc_1() {
    var count = parseInt(document.getElementById('number1').value, 10);
    document.getElementById('number_quant_1').innerHTML = count;


    var pount = parseInt(document.getElementById('number2').value, 10);
    document.getElementById('number_quant_2').innerHTML = pount;

    var zount = parseInt(document.getElementById('number3').value, 10);
    document.getElementById('number_quant_3').innerHTML = zount;

    var dount = parseInt(document.getElementById('number4').value, 10);
    document.getElementById('number_quant_4').innerHTML = dount;

    var gount = parseInt(document.getElementById('number5').value, 10);
    document.getElementById('number_quant_5').innerHTML = gount;

    var kount = parseInt(document.getElementById('number6').value, 10);
    document.getElementById('number_quant_6').innerHTML = kount;



}

function increment_value_2(price_2) {
    document.getElementById('number_quant_2').style.color = 'black';
    document.getElementById('temp_quant_2').style.color = 'black';
    var count = parseInt(document.getElementById('number2').value, 10);

    if (count < 9) count = count + 1;
    document.getElementById('number2').value = count;
    document.getElementById('number_quant_2').innerHTML = count;
    total2 = count * parseInt(price_2, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function decrement_value_2(price_2) {
    var count = parseInt(document.getElementById('number2').value, 10);

    if (count > 0) count = count - 1;
    document.getElementById('number2').value = count;
    document.getElementById('number_quant_2').innerHTML = count;
    if (count == 0) {
        document.getElementById('number_quant_2').style.color = 'rgba(33,37,41,0.35)';
        document.getElementById('temp_quant_2').style.color = 'rgba(33,37,41,0.35)';

    }
    total2 = count * parseInt(price_2, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function increment_value_3(price_3) {
    document.getElementById('number_quant_3').style.color = 'black';
    document.getElementById('temp_quant_3').style.color = 'black';

    var count = parseInt(document.getElementById('number3').value, 10);

    if (count < 9) count = count + 1;
    document.getElementById('number3').value = count;
    document.getElementById('number_quant_3').innerHTML = count;

    total3 = count * parseInt(price_3, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;

}

function decrement_value_3(price_3) {
    var count = parseInt(document.getElementById('number3').value, 10);



    if (count > 0) count = count - 1;
    document.getElementById('number3').value = count;
    document.getElementById('number_quant_3').innerHTML = count;
    if (count == 0) {
        document.getElementById('number_quant_3').style.color = 'rgba(33,37,41,0.35)';
        document.getElementById('temp_quant_3').style.color = 'rgba(33,37,41,0.35)';

    }
    total3 = count * parseInt(price_3, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function increment_value_4(price_4) {
    document.getElementById('number_quant_4').style.color = 'black';
    document.getElementById('temp_quant_4').style.color = 'black';

    var count = parseInt(document.getElementById('number4').value, 10);

    if (count < 9) count = count + 1;
    document.getElementById('number4').value = count;
    document.getElementById('number_quant_4').innerHTML = count;

    total4 = count * parseInt(price_4, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;

}

function decrement_value_4(price_4) {
    var count = parseInt(document.getElementById('number4').value, 10);



    if (count > 0) count = count - 1;
    document.getElementById('number4').value = count;
    document.getElementById('number_quant_4').innerHTML = count;
    if (count == 0) {
        document.getElementById('number_quant_4').style.color = 'rgba(33,37,41,0.35)';
        document.getElementById('temp_quant_4').style.color = 'rgba(33,37,41,0.35)';

    }
    total4 = count * parseInt(price_4, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function increment_value_5(price_5) {
    document.getElementById('number_quant_5').style.color = 'black';
    document.getElementById('temp_quant_5').style.color = 'black';

    var count = parseInt(document.getElementById('number5').value, 10);

    if (count < 9) count = count + 1;
    document.getElementById('number5').value = count;
    document.getElementById('number_quant_5').innerHTML = count;

    total5 = count * parseInt(price_5, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;

}

function decrement_value_5(price_5) {
    var count = parseInt(document.getElementById('number5').value, 10);



    if (count > 0) count = count - 1;
    document.getElementById('number5').value = count;
    document.getElementById('number_quant_5').innerHTML = count;
    if (count == 0) {
        document.getElementById('number_quant_5').style.color = 'rgba(33,37,41,0.35)';
        document.getElementById('temp_quant_5').style.color = 'rgba(33,37,41,0.35)';

    }
    total5 = count * parseInt(price_5, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function increment_value_6(price_6) {
    document.getElementById('number_quant_6').style.color = 'black';
    document.getElementById('temp_quant_6').style.color = 'black';
    var count = parseInt(document.getElementById('number6').value, 10);

    if (count < 9) count = count + 1;
    document.getElementById('number6').value = count;
    document.getElementById('number_quant_6').innerHTML = count;

    total6 = count * parseInt(price_6, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;

}

function decrement_value_6(price_6) {
    var count = parseInt(document.getElementById('number6').value, 10);



    if (count > 0) count = count - 1;
    document.getElementById('number6').value = count;
    document.getElementById('number_quant_6').innerHTML = count;
    if (count == 0) {
        document.getElementById('number_quant_6').style.color = 'rgba(33,37,41,0.35)';
        document.getElementById('temp_quant_6').style.color = 'rgba(33,37,41,0.35)';

    }

    total6 = count * parseInt(price_6, 10);
    document.getElementById('Total_Extras').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
    document.getElementById('Final').innerHTML = total1 + total2 + total3 + total4 + total5 + total6;
}

function confirm() {
    var url = 'http://127.0.0.1:8000/api/order-create/';
    var name1 = document.getElementById('extra1').innerHTML;
    var name2 = document.getElementById('extra2').innerHTML;
    var name3 = document.getElementById('extra3').innerHTML;
    var name4 = document.getElementById('extra4').innerHTML;
    var name5 = document.getElementById('extra5').innerHTML;
    var name6 = document.getElementById('extra6').innerHTML;
    var count = parseInt(document.getElementById('number1').value, 10);
    var pount = parseInt(document.getElementById('number2').value, 10);
    var zount = parseInt(document.getElementById('number3').value, 10);
    var dount = parseInt(document.getElementById('number4').value, 10);
    var gount = parseInt(document.getElementById('number5').value, 10);
    var kount = parseInt(document.getElementById('number6').value, 10);
    var price_1 = parseInt(document.getElementById('cost_1').innerHTML, 10);
    var price_2 = parseInt(document.getElementById('cost_2').innerHTML, 10);
    var price_3 = parseInt(document.getElementById('cost_3').innerHTML, 10);
    var price_4 = parseInt(document.getElementById('cost_4').innerHTML, 10);
    var price_5 = parseInt(document.getElementById('cost_5').innerHTML, 10);
    var price_6 = parseInt(document.getElementById('cost_6').innerHTML, 10);
    var total = parseInt(document.getElementById('Total_Extras').innerHTML, 10);


    var today = new Date();
    var month = parseInt(today.getMonth(), 10);
    month = month + 1;
    var month_string;
    if (month < 10) month_string = "0" + month.toString();
    else month_string = month.toString();
    var roll_no = parseInt(document.getElementById('roll_no').innerHTML, 10);
    //console.log(today.getFullYear() + "-" + "03" + "-" + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "Z")
    fetch(url, {
        //credentials: 'include',
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-CSRFtoken': csrftoken,
        },
        body: JSON.stringify({
            'id': 1,
            'rollno': roll_no,
            'orderedDate': today.getFullYear() + "-" + month_string + "-" + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "Z",
            'item_1': name1,
            'quantity_1': count,
            'price_1': price_1,
            'item_2': name2,
            'quantity_2': pount,
            'price_2': price_2,
            'item_3': name3,
            'quantity_3': zount,
            'price_3': price_3,
            'item_4': name4,
            'quantity_4': dount,
            'price_4': price_4,
            'item_5': name5,
            'quantity_5': gount,
            'price_5': price_5,
            'item_6': name6,
            'quantity_6': kount,
            'price_6': price_6,
            'total': total,
        })
    })

}