<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="result">Hello World</p>
    <input type="radio" value="res" name="gender">Male
    <input type="radio" value="res" name="gender">Female


    <script>
      const para = document.getElementById("result")
     // console.log(para)
      console.log(para.innerHTML)
      console.log(para.innerText)

      const form = document.getElementsByName("gender")
      console.log(form.length)
    
    </script>
</body>
</html>