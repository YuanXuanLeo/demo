
 
 
 
 
 $(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    
    var topicCount = topic.length;

    let millisecsPergay = 24*60*60*1000;//將1天單位換算成 ms
    
    for(var x=0;x<topicCount;x++){
        let dateString = new Date(startDate.getTime()+7*x*millisecsPergay).toLocaleDateString();
        
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+   
            //遇到字串要用``包起來,遇到有變數需再用${}將變數or變數+字串包起來
            //`<td>${startDate+7*x}</td>`+ //字串+數字會有問題,相同型態才能相加
            
            //問題:不要顯示年份V
            // 方法一:`<td>${dateString.slice(5)}</td>`+
            // 方法二:V
            `<td>${dateString.split("/")[1]}/${dateString.split("/")[2]}</td>`+ 
            // 方法三:V
            //`<td>${new Date(startDate.getTime()+7*x*millisecsPergay).getMonth()+1}/${new Date(startDate.getTime()+7*x*millisecsPergay).getDate()}</td>`+
            //變數.getTime()換算起始日期到今天多少ms?new Date()能將（ 日期字符串 ） or ms轉換成日期形式,並以預設形式輸出
            `<td>${topic[x]}</td>`+
            "</tr>"
            )
    }


});