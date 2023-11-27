<?php
// Datos de conexión a la base de datos
$host = "localhost";
$usuario = "usuario_db";
$contrasena = "contrasena_db";
$nombre_bd = "mi_base_de_datos";

// Conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $contrasena, $nombre_bd);

// Verificar si hay errores de conexión
if (mysqli_connect_errno()) {
    echo "Error al conectar a la base de datos: " . mysqli_connect_error();
    exit();
}

// Verificar si la columna ya existe en la tabla
$queryVerificar = "SHOW COLUMNS FROM pedidos LIKE 'comprobante'";
$resultadoVerificar = mysqli_query($conexion, $queryVerificar);

if (mysqli_num_rows($resultadoVerificar) == 0) {
    // Agregar la nueva columna a la tabla
    $queryAgregarColumna = "ALTER TABLE pedidos ADD comprobante VARCHAR(255)";
    if (mysqli_query($conexion, $queryAgregarColumna)) {
        echo "La columna 'comprobante' se agregó correctamente a la tabla 'pedidos'.";
    } else {
        echo "Error al agregar la columna: " . mysqli_error($conexion);
        mysqli_close($conexion);
        exit();
    }
} else {
    echo "La columna 'comprobante' ya existe en la tabla 'pedidos'.";
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$direccion = $_POST['direccion'];
$correo = $_POST['correo'];

// Obtener el nombre del archivo de comprobante de pago
$nombreArchivo = $_FILES['comprobante']['name'];

// Mover el archivo a una ubicación deseada (por ejemplo, una carpeta "comprobantes" dentro del proyecto)
$directorioDestino = "comprobantes/";
$archivoDestino = $directorioDestino . $nombreArchivo;
move_uploaded_file($_FILES['comprobante']['tmp_name'], $archivoDestino);

// Insertar los datos en la base de datos
$queryInsertar = "INSERT INTO pedidos (nombre, direccion, correo, comprobante) VALUES ('$nombre', '$direccion', '$correo', '$archivoDestino')";

if (mysqli_query($conexion, $queryInsertar)) {
    echo "Los datos se guardaron correctamente en la tabla 'pedidos'.";
} else {
    echo "Error al guardar los datos: " . mysqli_error($conexion);
}

// Cerrar la conexión a la base de datos
mysqli_close($conexion);
?>
