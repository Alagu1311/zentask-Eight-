let number=document.createElement("div");
document.body.append(number);
number.style.textAlign="center";
number.style.margin="200px"
setTimeout(()=>{
    number.textContent="5";
    setTimeout(()=>{
        number.textContent="4";
        setTimeout(()=>{
            number.textContent="3";
            setTimeout(()=>{
                number.textContent="2";
                setTimeout(()=>{
                    number.textContent="1";
                    setTimeout(()=>{
                        number.textContent="Hi Wellcome Have a nice Day";
                        number.style.color="Green"
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)