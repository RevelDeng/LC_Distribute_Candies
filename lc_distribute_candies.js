var distributeCandies = function(candyType) {
    var map = {}
    for (let i = 0; i < candyType.length; i++) {
        map[candyType[i]] = (map[candyType[i]] || 0) + 1
    }
    if (candyType.length / 2 >= Object.entries(map).length) {
        return Object.entries(map).length
    }
    else {
        return candyType.length / 2
    }
};