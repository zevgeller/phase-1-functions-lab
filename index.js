
let location;
function distanceFromHqInBlocks(location) {
    if (location < 42)  {
        return 42 - location;
    }
    return location - 42;
    }
console.log(distanceFromHqInBlocks(location))

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
    
}

console.log(distanceFromHqInFeet(location))

function distanceTravelledInFeet(start, destination) {
    let totalDistance = (destination - start) * 264;
    if (totalDistance < 0) {
        return (totalDistance) * -1;
    }
    return totalDistance;
}

function calculatesFarePrice(start, destination) {
    let fareTravelled = distanceTravelledInFeet(start, destination)
    
    if (fareTravelled < 400) {
        return 0;
    }   else{
        if (fareTravelled > 2500) {
            return `cannot travel that far`;
        }
    }  
    if (fareTravelled > 2000) {
        return 25
    }
    while (fareTravelled < 2000) {
        let fare = (fareTravelled - 400) * 0.02;
        return fare;
    }
}