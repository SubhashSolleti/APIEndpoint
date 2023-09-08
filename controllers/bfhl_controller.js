module.exports.getreq=async(req,res)=>{
    console.log('checking from console')
    res.send({
        "operation_code":1
    })
}

module.exports.postreq=async(req,res)=>{
    console.log('post')
    const data=req.body.data;

    console.log(data)
 
    const numbers = [];
    const alphabets = [];
    let highestAlphabet;
    let bool=false

    for (const item of data) {
        if (typeof item === 'string' && item.length === 1) {
            if (/[0-9]/.test(item)) {
                // It's a number
                numbers.push(item);
            } else if (/[a-zA-Z]/.test(item)) {
                bool=true
                // It's an alphabet
                alphabets.push(item);
                if (!highestAlphabet || item > highestAlphabet) {
                    highestAlphabet = item;
                    
                }
            }
        }
    }
    let highest_alphabet
    if(bool==true){
        highest_alphabet=[highestAlphabet]
    }
    else{
        highest_alphabet=[]
    }

    console.log(numbers)
    console.log(alphabets)
    // console.log(highest_alphabet)
    
    const response_data={
        "is_success":true,
        "user_id": "Solleti_Krishna_Chaitanya_Subhash_24052003",
        "email": "chaitanyasubhash_solleti@srmap.edu.in",
        "roll_number":"AP20110010232",
        "numbers": numbers,
        "alphabets":alphabets,
        "highest_alphabet":highest_alphabet
    }
    res.send(response_data)
}