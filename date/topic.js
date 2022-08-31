var topic = [
    "上課",
    "看WINTER IS COMING",
    "環境準備",
    "睡覺",
    "重複性",
    "條件判斷"
];
var startDate = new Date();
$("button").on("click",function(){
    var textval = $("#inputDate").val();
    });
$(function(){
    
    
    //設定第一次活動日期為2月21日
    setMonthAndDay(textval,1);
    
    
    //設定好活動的第一次日期
    function setMonthAndDay(textval){
        //JS的月份是0~11,所以這邊是-1
        startDate.setMonth(textval-1);
        startDate.setDay(textval);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
    };

});




