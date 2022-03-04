module.exports = {
    PI: 3.14,
    // sum: function(){
    //     var sum = 0;
    //     Array.from(arguments).forEach(function(e){
    //         sum += e;
    //     })

    //     return sum;
    // },
    max: function() {
        var max = Number.MIN_SAFE_INTEGER;   //MIN_SAFE 가장 작은값을 의미
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });

        return max;
    },
    min: function() {
        var max = Number.MAX_SAFE_INTEGER;   //MIN_SAFE 가장 작은값을 의미
        Array.from(arguments).forEach(function(e){
            min = e < min ? e : minx;
        });

        return max;
    }

}