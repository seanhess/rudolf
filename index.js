console.log("HI")

// while pressed, 

var KEY_UP = 38
var KEY_DOWN = 40
var KEY_RIGHT = 39
var KEY_LEFT = 37

var KEY_Q = 81
var KEY_A = 65
var KEY_W = 87
var KEY_S = 83

var STOP = 0;
var FORWARD = 1;
var BACK = 2;
var LEFT = 3;
var RIGHT = 4;

var pressed = false

// $(document)

// .on('keyup', function(e) {
//     // setMode(STOP)
//     setLeft(STOP)
//     setRight(STOP)
//     e.preventDefault()
//     pressed = false
//     return false
// })

// .on('keydown', function(e) {
//     if (!pressed) {

//         var code = e.keyCode
//         console.log("DOWN", code)

//         if (code == KEY_UP) {
//             setMode(FORWARD)
//         }

//         else if (code == KEY_DOWN) {
//             setMode(BACK)
//         }

//         else if (code == KEY_RIGHT) {
//             setMode(RIGHT)
//         }

//         else if (code == KEY_LEFT) {
//             setMode(LEFT)
//         }

//         else if (code == KEY_Q) {
//             setLeft(FORWARD)
//         }

//         else if (code == KEY_A) {
//             setLeft(BACK)
//         }

//         else if (code == KEY_W) {
//             setRight(FORWARD)
//         }

//         else if (code == KEY_S) {
//             setRight(BACK)
//         }

//         pressed = true    
//     }
    
//     return false
// })


$(".control.left.up")
.on('touchdown', function() {
    $(this).text("DOWN")
})
.on('touchup', function() {
    $(this).text("UP")  
})


// $(".control.right")
// .on('touchdown', function() {
//     $(this).text("DOWN")
// })

// .on('touchup', function() {
//     $(this).text("UP")
// })


function setMode(code) {
    setUrl("/setMode", code)
}

function setUrl(name, code) {
    var baseUrl = "https://api.spark.io/v1/devices/55ff7c064989495331422587"
    var queryParams = "?access_token=c2f2a62c4a749546e4770cdde518cf55804afd88"
    console.log("SENDING", code)
    $.post(baseUrl + name + queryParams, {mode: code}, function(response) {
        // console.log("sent", response)
        console.log("-sent")
    })
}

function setLeft(code) {
    setUrl("/setLeft", code)
}

function setRight(code) {
    setUrl("/setRight", code)
}



