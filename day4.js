  // JS WITH HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS demo</title>
    <style>
        .green{color :green }
        .bold{font-weight: bold; font-size: 40px;}
        .small{font-weight:lighter; font-size: 5px;}
        .red{color: rgb(169, 20, 20);}
        .blue{color: blue;}
        .img1{width: 200px;
            height: auto;
            display: block;
            margin-top: 20px;
        background-image: url('data:image/png;base64,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');}
    </style>
</head>
<body>
    <body>
        <h1 id="h1" >Hello</h1>
        <p>Welcome</p>

        <button id="h1-grn">Click here to turn the h1  colour</button>
        <!-- <button id="wl-blue">Click here to turn the Welcome into b;ue colour</button>
        <button id="h1-red">Click here to turn the h1 into Red</button>
         -->
        <button id="reset"> Click here to remove the style</button>
        <button id="big">Click here to incress the size of font</button>
        <button id="small"> Click here to decress the size of font</button>
<div>
    
    <textarea name="contect" id="text" placeholder="enter the content and see the magic"></textarea>
</div>


        <script>
            let togbtn =document.getElementById("h1-grn");
            togbtn.addEventListener("click", function(){
                document.querySelector("h1").classList.toggle('green','red');
                document.querySelector("h1").classList.toggle('red');
            }) 
            
            let res = document.getElementById("reset");
            res.addEventListener("click",function(){
                document.querySelector('h1').classList.remove("green")
                document.querySelector('h1').classList.remove("red");
            })

            let b = document.getElementById('big');
            b.addEventListener("click", function(){
                document.querySelector("h1").classList.toggle("bold");
            })
            let s = document.getElementById('small');
            s.addEventListener("click", function(){
                document.querySelector("h1").classList.toggle("small");
            })

            let txt = document.getElementById('text');
            t =txt.addEventListener("input",function(){
                document.querySelector("h1").textContent=t;
            })
 
            


        </script>
    
</body>
</html>
