Feature: Regresión de API https://petstore.swagger.io/v2/pet

    Scenario: CP001 - Agregar una mascota
        Given Realizar un "POST" a la ruta "/v2/pet"
        When Validar status code "200"
        When Validar Schema del response

    Scenario: CP002 - Obtener una mascota existente 
        Given Realizar un "GET" a la ruta "/v2/pet/id"
        When Validar status code "200"
        When Validar Schema del response

    Scenario: CP003 - Modificar una mascota existente
        Given Realizar un "PUT" a la ruta "/v2/pet"
        When Validar status code "200"
        When Validar Schema del response