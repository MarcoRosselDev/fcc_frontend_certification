// Encuentra la medida en grados del angulo con la medida dada en radianes.

function radianGrados(radian) {
    result = Math.round(radian * (180/Math.PI))
    console.log(result);
}

// 17-      ( 5*pi ) / 3
radianGrados((Math.PI * 5) / 3) // 300

// 18-      3pi / 4
radianGrados((Math.PI * 3) / 4)
// 19-      5pi / 6
radianGrados((Math.PI * 5) / 6)
// 20-      -3pi / 2
radianGrados((Math.PI * -3) / 2)
// 21-      3
radianGrados(3)
// 22-      -2
radianGrados(-2)
// 23-      -1.2
radianGrados(-1.2)
// 24-      3.4
radianGrados(3.4)
// 25-      pi / 10
radianGrados((Math.PI) / 10)
// 26-      5pi / 18
radianGrados((Math.PI * 5) / 18)
// 27-      -2pi / 15
radianGrados((Math.PI * -2) / 15)
// 28-      -13pi / 12
radianGrados((Math.PI * -13) / 12)

/* 
300
135
150
-270
172
-115
-69
195
18
50
-24
-195
*/