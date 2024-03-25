<?php
// Simulação de consulta de CEP - neste exemplo, apenas retornamos um endereço fixo
$cep = $_GET["cep"];
if ($cep === "12345678") {
    echo "Rua Exemplo, 123 - Bairro Exemplo - Cidade Exemplo";
} else {
    echo "CEP não encontrado.";
}
?>
