const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!')
        } else {
            reject('Whoooooops!')
        }
    })
}

somethingWillHappen()
   .then(response => console.log(response))
   .catch( err => console.error(err))