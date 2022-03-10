```function calculaNota(ex, p1, p2) {
   let calculaMedia = (ex*1 + p1*2 +p2*3)/6
  
  if(calculaMedia >= 9){
    return "A"
  }else if (calculaMedia < 9 && calculaMedia >= 7.5){
    return "B"
  }else if (calculaMedia < 7.5 && calculaMedia >= 6){
    return "C"
  }else{
    return "D"
  }
  
}