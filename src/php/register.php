<?php
// ⚠️ IMPORTANTE: NO poner NADA arriba de esto. Ni espacios.

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Responder preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'db_connection.php';

header("Content-Type: application/json; charset=UTF-8");

// Validar conexión
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB connection failed"]);
    exit();
}

// Leer JSON
$input = json_decode(file_get_contents("php://input"), true);

$username = trim($input["username"] ?? "");
$email = trim($input["email"] ?? "");
$password = trim($input["password"] ?? "");

// Validaciones
if ($username === "" || $email === "" || $password === "") {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit();
}

// Revisar duplicados
$stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result && $result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Username or email already exists"]);
    exit();
}

// Insertar
$passwordHash = password_hash($password, PASSWORD_BCRYPT);

$stmt = $conn->prepare("
    INSERT INTO users (username, password, email, created_by, created_at)
    VALUES (?, ?, ?, 'admin', NOW())
");

$stmt->bind_param("sss", $username, $passwordHash, $email);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "User registered successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Database error"]);
}

$stmt->close();
$conn->close();
?>
