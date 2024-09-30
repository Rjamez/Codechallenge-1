function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 12;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);
        
        if (demeritPoints > demeritPointThreshold) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// lets try them out hope it work because it took almost the whole sartuday!
console.log(checkSpeed(80));  // If the speed is 80 the Output will be: Points: 2
console.log(checkSpeed(90));  // If the speed is 90 the Output will be: Points: 4
console.log(checkSpeed(130)); // If the speed is 130 then the Output will be: License suspended
console.log(checkSpeed(60));  // If the speed is 60 then the Output will be: Ok
