 var imgfood = [
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1CX28FgB9PBHI9osfIJYcyAcuAAs-4Vc5Q&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsWK_fY4ESANUYWlfGiZPxCZ5F9lMr1rgxg&usqp=CAU",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoB1Nw6PdKd_TRubaYEEey1IshVO2NZG8qw&usqp=CAU",
     "lab1menu/mushroomburger.jpeg"
 ];
// var images = [
//     "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
//     "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
//     "https://img.ltn.com.tw/Upload/food/page/2020/07/15/200715-10980-0-WClGQ.jpg"
//  ];
$(function(){
    //確認能夠知道使用者按了按鈕
    //$("input") => document.getElementsByTagname("input")[0];
    //on addEventListener
    $("input").on("click",function(){
        //alert("Hi");
        //$("h2").text("Hello!")
        //$("h2").text($("li:first").text())指定li第一個內容
        var numberOfListItem = $("#choices li").length;
        var radomli = Math.floor(Math.random()*numberOfListItem)
        $("h1").text($("#choices li").eq(radomli).text())
        $( "img" ).attr( "src",imgfood[radomli]);
        });
        
        // $( "img" ).attr({
        //     src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        //     title: "jQuery",
        //     alt: "jQuery Logo"
        //   });
       
});