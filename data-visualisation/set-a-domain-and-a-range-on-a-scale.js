<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();
    scale.domain([250, 500])
    .range([10, 150]);


    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
