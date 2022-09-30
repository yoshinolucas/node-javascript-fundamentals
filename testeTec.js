

    var i = 1;
    while(200 >= i) {

        if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
            console.log('FizzBuzzDazz')
        } else if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz')
        } else if(i % 3 == 0 && i % 7 == 0){
            console.log('FizzDazz')
        } else if(i % 5 == 0 && i % 7 == 0){
            console.log('BuzzFizz')
        } else if(i % 3 == 0){
            console.log('Fizz')
        } else if(i % 5 == 0){
            console.log('Buzz')
        } else if(i % 7 == 0){
            console.log('Dazz')
        } else {
            console.log(i)
        }
        i++
    }




