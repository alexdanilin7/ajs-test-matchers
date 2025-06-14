export default function liveLine(lineLive){
    if (lineLive.health < 15){
        return "critical";
    }

    if(lineLive.health >= 15 && lineLive.health <= 50){
        return "wounded";
    }
    
    return "healthy";
}