const resolvedPromise = () => {
    setTimeout(() =>{
        let success = {'message': 'delayed sucess!'}
        console.log(success);
    }, 500)
}
const rejectedPromise = () => {
    setTimeout(() =>{
        try{
            throw new Error('error: delayed exception!');
        } catch (exception) {
            console.error(exception);
        }
    }, 500)
}
resolvedPromise()
rejectedPromise()