// Encuentra la medida en grados del angulo con la medida dada en radianes.

function radianGrados(radian) {
    result = Math.round(radian * (180/Math.PI))
    console.log(result);
}

// 17-      ( 5*pi ) / 3
radianGrados((Math.PI * 5) / 3) // 300

// 18-      3pi / 4
// 19-      5pi / 6
// 20-      -3pi / 2
// 21-      3
// 22-      -2
// 23-      -1.2
// 24-      3.4
// 25-      pi / 10
// 26-      5pi / 18
// 27-      -2pi / 15
// 28-      -13pi / 12