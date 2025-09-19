<!DOCTYPE html>
<html>
<head>
    <title>Simple JavaScript Example</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p id="message">Click the button to see magic ✨</p>


    <button onclick="showMessage()">Click Me</button>


    <script>
        function showMessage() {
            document.getElementById("message").innerHTML = "Hello, You clicked the button! 🎉";
        }
    </script>
</body>
</html>

