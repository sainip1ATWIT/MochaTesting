//Define a rooster
Rooster = {};

//Return a morning rooster call
Rooster.annouceDawn = () => {
    //change moo to 'cock-a-doodle-doo'
    //return 'moo!';
    return 'cock-a-doodle-doo';
}

//return hour as string
//Throws Error is hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
    if(hour < 0 || hour > 23) {
        throw new RangeError;
    } else {
        return hour.toString();
    };
}

module.exports = Rooster;