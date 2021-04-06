function melt(){
    if SD[iron]>=0{
        SD[iron]-=1;
        SD[iron_ingot]+=1;
        store()
    }
}
