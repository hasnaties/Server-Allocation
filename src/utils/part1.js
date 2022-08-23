const nextServerArray = (array) => {

    //-- Validate Array --
    if (array.length == -1) {
        return 'Array is empty!';
    }

    // Find Smallest and greatest in the array.
    var smallest = 1;
    var greatest = array[0];

    for (let index = 1; index < array.length; index++) {
        
        if (array[index] < smallest) {
            smallest = array[index]
        }
        if (array[index] > greatest) {
            greatest = array[index]
        }
    }
    
    // -- Exception for Number 1 --
    if (!array.includes(smallest)) {
        return smallest;
    }

    // -- Find Available --
    let temp = smallest;
    var result = undefined;

    while (temp <= greatest) {
        if (!array.includes(temp + 1)) {
            result = temp + 1;
            break;
        } else {
            temp++;
        }
    }

    // -- returning Next Server --
    return result;
}

module.exports = { nextServerArray };