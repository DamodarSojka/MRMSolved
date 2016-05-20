// sorry, couldn't resist I am aware that I should probably have used bit manipulation
export default function test8(){
    var result = 0;

    for(let i = 100; i >= 0; i--){
        result -= - i;
    }

    return result;
}