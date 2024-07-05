const theresLove = (firstPetal, secondPetal) =>
{
    let love= ''
if(firstPetal % 2 === 0 && secondPetal %2 !==0){
    love= true;
}
else if(firstPetal %2 !== 0 && secondPetal %2 === 0){
    love= true;
}
else{
    love= false;
}

return love;
};

theresLove()