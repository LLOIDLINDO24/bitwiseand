
function bitwise_and(){
    var a =("5.13".split("."));
    var c =("3.11".split("."));
    var b = []; var v= [];
        for (var z=0; z<a.length; z++){
            b[z]=parseInt(a[z]);
            v[z]=parseInt(c[z]);
            var gg1 = b[0] & v[0];
            var gg2 = b[1] & v[1];
         }
    document.write("["+gg1+","+gg2+"]");
}