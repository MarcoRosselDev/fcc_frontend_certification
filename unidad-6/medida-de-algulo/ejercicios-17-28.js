// Encuentra la medida en grados del angulo con la medida dada en radianes.

function radianGrados(radian) {
    result = Math.round(radian * (180/Math.PI))
    console.log(result);
}

// 17-      ( 5*pi ) / 3
radianGrados((Math.PI * 5) / 3) // 300