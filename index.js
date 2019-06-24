// Code your solution in this file!
function distanceFromHqInBlocks(no){
  return Math.abs(42 - no);
}
function distanceFromHqInFeet(no){
  return distanceFromHqInBlocks(no) * 264;
}

  function distanceTravelledInFeet(distance1 , distance2){
    return Math.abs(distance1 - distance2) * 264;
  }
function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance <= 400) {
    return 0;
  }else if (distance >400 && distance <=2000){
    return (distance * 2 - 800) / 100;
  }else if (distance < 2500){
    return 25;
  }else{
    return "cannot travel that far";
  }
}
