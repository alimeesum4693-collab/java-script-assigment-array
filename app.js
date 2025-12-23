function btn1(){
    var arr = [];
    window.alert(arr);
}
function btn2() {
    var arr2 = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ];

    window.alert(
        arr2[0].join(" ") + "\n" +
        arr2[1].join(" ") + "\n" +
        arr2[2].join(" ")
    );
}
function btn3() {
    var a = document.getElementById("result");
    for (var i = 1; i <= 10; i++) {
        a.innerHTML += i + "<br>";
    }
}
function btn4() {
    var a = document.getElementById("result2");
    var A =prompt("Enter a number to show its multiplication table:");
    var B =prompt("Enter length of multiplication table:");
    for (var i = 1; i <= B; i++) {
        var result = A * i;
        a.innerHTML += A + " x " + i + " = " + result + "<br>";
    }
}
function btn5() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    var a = document.getElementById("result3");
    for (var i = 0; i < fruits.length; i++) {
        a.innerHTML += "Element at index " + i + " is " + fruits[i] + "<br>";
    }
}
function btn6() {
    var a = document.getElementById("result4");
    var b = document.getElementById("result5");
    var c = document.getElementById("result6");
    var d = document.getElementById("result7");
    var e = document.getElementById("result8");
    a.innerHTML += "Counting: <br>";
    for (var i = 1; i <= 15; i++) {
        a.innerHTML += i + ", ";
    }
     b.innerHTML += "Reverse Counting: <br>";
    for (var i = 10; i >= 1; i--) {
        b.innerHTML += i + ", ";
    }
        c.innerHTML += "Even: <br>";
    for (var i = 0; i <= 20; i += 2) {
        c.innerHTML += i + ", ";
    }
        d.innerHTML += "Odd: <br>";
    for (var i = 1; i <= 19; i += 2) {
        d.innerHTML += i + ", ";
    }
        e.innerHTML += "Series: <br>";
    for (var i = 2; i <= 20; i += 2) {
        e.innerHTML += i + "k, ";
    }
}
function btn7() {
    var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var B = prompt("Welcome to Cookie-bites. What do you want to order sir/ma'am?");
    var found = false;
    for (var i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === B.toLowerCase()) {
            found = true;
            var index = i;
            break;
        }
    }
    if (found) {
        window.alert(B + " is available at index " + index + " in our bakery.");
    } else {
        window.alert("We are sorry. " + B + " is not available in our bakery.");
    }

}
function btn8() {
    var A = [24, 53, 78, 91, 12];
    var max = A[0];
    for (var i = 1; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
        }
    }
    window.alert("The largest number is " + max);
}

function btn9() {
    var A = [24, 53, 78, 91, 12];
    var min = A[0];
    for (var i = 1; i < A.length; i++) {
        if (A[i] < min) {
            min = A[i];
        }
    }
    window.alert("The smallest number is " + min);
}

function btn10() {
    var a = document.getElementById("result9");
    for (var i = 1; i <= 20; i++) {
        var multiple = i * 5;
        a.innerHTML += multiple + "<br/>";
    }
}