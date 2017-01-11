
exports.square = function(number){
    return number*number;
};

exports.root_square = function(number){
    var result = Math.sqrt(number);
    return isNaN(result)?-1:result;
};
