function saturdayFun (activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(word="special"){
    return function(adjective){
    return `You are ${word}${adjective}${word}!`;
    }
}