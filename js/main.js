$(document).ready(function(){
    var c = localStorage.getItem("count");
    var k = $('#count_num');
    var clrBtn = $('#clear-button');
    var result = $('#result');
//        k.textContent = c.toString(10);
    if(c == null){
        c = 0;
        k.html(c);
    }else{
        c = parseInt(c, 10);
        k.html(c);
    }
    var x = $('#boxes');
    x.click(function(){
        c = localStorage.getItem("count");
        c = parseInt(c, 10);
        c++;
        k.html(c.toString(10));
        localStorage.setItem("count",(c).toString(10));
    });
    clrBtn.click(function(){
        localStorage.setItem("count",'0');
        k.html(0);
    });

    var boxes = $('.box');
    var box1 = $('#box-1');
    var box2 = $('#box-2');
    var box3 = $('#box-3');
    var box4 = $('#box-4');
    var out = '';
    
    $('#change').click(function(){
        console.log(boxes);
        for(i=0;i<boxes.length;i++){
            console.log(boxes[i]);
            out += '<'
            out += boxes[i]['localName'];
            var attr = boxes[i]['attributes'];
            for(j=0;j<attr.length;j++){
                out += ' '
                out += attr[j]['localName'] + " = '"+attr[j]['value']+"'";
            }
            out += '>' + boxes[i]['innerHTML'];
            out += '</'+boxes[i]['localName'] + '>';
        };
    });
//    box1.ondragstart(function (event){
//        console.log(box1);
//        var boxx = box1;
//        box2.on('dragenter', function (event){
//            box1 = box2;
//            box2 = boxx;
//            showBoxes();
//        })
//    })
//    box1 = box2;
//    box2 = boxx;
//    console.log(boxes);
//        var out = '';
//    showBoxes();
    
//    var out;
//    out += box1;
//    out += box2;
//    out += box3;
//    out += box4;
//    $('#boxes').html(out);
});









































    function showBoxes(){
        var out;
        console.log(boxes);
        for(i=0;i<boxes.length;i++){
            console.log(boxes[i]);
            out += '<'
            out += boxes[i]['localName'];
            var attr = boxes[i]['attributes'];
            for(j=0;j<attr.length;j++){
                out += ' '
                out += attr[j]['localName'] + " = '"+attr[j]['value']+"'";
            }
            out += '>' + boxes[i]['innerHTML'];
            out += '</'+boxes[i]['localName'] + '>';
        };
        console.log(out);
        $('#boxes').html(out);
    }
