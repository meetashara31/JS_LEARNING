<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Change Background Color</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      transition: background-color 0.4s ease;
      padding: 2rem;
    }

    label {
      font-weight: bold;
      font-size: 1.2rem;
    }

    select {
      padding: 0.5rem;
      font-size: 1rem;
      margin-left: 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>

  <label for="bgColor">Choose Background Color:</label>
  <select id="bgColor">
    <option value="white">White</option>
    <option value="lightgray">Light Gray</option>
    <option value="black">Black</option>
  </select>

  <script>
    const bgSelect = document.getElementById('bgColor');

    bgSelect.addEventListener('change', () => {
      const selectedColor = bgSelect.value;
      document.body.style.backgroundColor = selectedColor;

      // Optional: Change text color if background is black
      document.body.style.color = selectedColor === 'black' ? 'white' : 'black';
    });
  </script>

</body>
</html>
