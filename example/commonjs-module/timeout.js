var EXE_TIME = 2;

(function(second){
    var start = +new Date();
    while(start+second*1000>new Date()){} 
})(EXE_TIME);



console.log('2000ms exe done')
