/*function move_img(str) {

    switch(str){

    
    case "right":
    document.getElementById('i1').style.left=1200 + "px";
    break;
    
    
    }
    }*/

    function imageChange()
    {
    document.getElementById("tr1").src="./assets/trex.gif" ;
    }

    function move_img(str) {

        switch(str){
        case "right":
        document.getElementById('tr').style.left=1200 + "px";
        break;
        }
        }

    function moveimage() {
        const trex= document.getElementById('tr');trex.style.left = '850';
     }