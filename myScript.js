function subData(){
    let data = document.getElementById('data');
    let dataArray = [];
    let datareversed = "";

    if(data.value.length === 0){
        alert("This input is required some word...!");
    }else{
        data.value.split("").forEach(val => {
            dataArray.push(val);
        });;
        
        for (let i = dataArray.length; i > 0; --i) {
           datareversed += dataArray[i-1];
        }

        if(datareversed == data.value){
            document.querySelector(".result-div").innerHTML = "<p><b>It's a Palindrome word</b></p>";
        }else{
            document.querySelector(".result-div").innerHTML = "<p><b>Not a Palindrome word</b></p>";
        }
    }
}