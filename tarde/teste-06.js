let a = 10
let b = 30

try {

    let c = a * b  + c //300

    console.log (c)
    
} catch (error) {

    console.log(error) //Error
    
}finally{

    console.log("Fim da execução")

}