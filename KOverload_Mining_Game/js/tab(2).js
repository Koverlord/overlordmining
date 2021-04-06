function melt(ore){
    var a=ore;
    var b=a;
    b+='_ingot';
    if SD[a]>=0{
        SD[a]-=1;
        SD[b]+=1;
        store()
    }
}
