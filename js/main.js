
const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Variables para el triángulo 
      const width = canvas.width = 850;
      const height = canvas.height = 850;
      const x1 = width / 2;
      const y1 = 5;
      const x2 = 5;
      const y2 = height - 5;
      const x3 = width - 5;
      const y3 = height - 5;
      const points = [[x1, y1], [x2, y2], [x3, y3]];
      let iter;

      // Función para obtener un punto medio
      function getMidpoint(point1, point2) {
        return [
          (point1[0] + point2[0]) / 2,
          (point1[1] + point2[1]) / 2
        ];
      }

      // Función para dibujar un triángulo
      function drawTriangle(points) {
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        ctx.lineTo(points[1][0], points[1][1]);
        ctx.lineTo(points[2][0], points[2][1]);
        ctx.closePath();
        ctx.stroke();
      }

      // Función recursiva para dibujar el triángulo de Sierpinski
      function sierpinski(points, degree) {
        drawTriangle(points);

        if (degree > 0) {
          // Obtenemos los puntos medios de cada lado del triángulo
          const mid1 = getMidpoint(points[0], points[1]);
          const mid2 = getMidpoint(points[1], points[2]);
          const mid3 = getMidpoint(points[2], points[0]);

          // Llamamos recursivamente la función para cada nuevo triángulo
          sierpinski([points[0], mid1, mid3], degree - 1);
          sierpinski([points[1], mid1, mid2], degree - 1);
          sierpinski([points[2], mid2, mid3], degree - 1);
        }
      }


      const rango = document.getElementById("iter");

      rango.addEventListener("input", function() {
        iter = parseInt(this.value); // actualiza el valor de la variable con el valor del input
        console.log(`El valor de miVariable ha sido actualizado a ${iter}`);
     
       // Borramos el canvas
    ctx.clearRect(0, 0, width, height);
  
    // Dibujamos el triángulo de Sierpinski con el nuevo valor de iter
    sierpinski(points, iter);
  
  
  
      
      });

      sierpinski(points, iter);