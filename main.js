$(document).ready(function(){
    function showTime(){
        var date = new Date();

        var hourse = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        var session = "AM";


        if(hourse == 0){
            hourse = 12;
        }
        if(hourse >= 12){
            session = "pm";
        }
        if(hourse > 12){
                hourse = hourse - 12;
        }



        hourse = hourse < 10 ? "0" + hourse : hourse;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;


        $("#hourse").text(hourse);
        $("#Min").text(min);
        $("#Sec").text(sec);
        $("#Period").text(session);


        setTimeout(showTime,1000);
    }
    showTime();
    
});