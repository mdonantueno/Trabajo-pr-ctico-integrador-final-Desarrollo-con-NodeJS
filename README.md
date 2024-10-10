# API para Taller de Luthería

Esta es una API desarrollada en **Node.js** para gestionar un taller de luthería. La API permite llevar el control de reparaciones, insumos y clientes de manera eficiente y escalable.

## Cumplimiento de la Consigna

La API cumple con los siguientes puntos de la consigna:

1. **Uso de Node.js**: La aplicación está completamente desarrollada en Node.js, utilizando Express.js para manejar las rutas y mongoose para la interacción con la base de datos MongoDB.

2. **Manejo de Modelos**: Se han creado modelos para:
   - **Reparaciones**: Para gestionar todas las reparaciones realizadas en el taller.
   - **Insumos**: Para llevar un control de los insumos utilizados en las reparaciones.
   - **Clientes**: Para almacenar la información de los clientes que utilizan el servicio.

3. **Rutas RESTful**: La API ofrece rutas RESTful para realizar las siguientes operaciones:
   - **Reparaciones**:
     - Listar todas las reparaciones.
     - Crear una nueva reparación.
     - Modificar una reparación existente.
     - Borrar una reparación.

   - **Insumos**:
     - Listar todos los insumos.
     - Crear un nuevo insumo.
     - Modificar un insumo existente.
     - Borrar un insumo.

   - **Clientes**:
     - Listar todos los clientes.
     - Crear un nuevo cliente.
     - Modificar un cliente existente.
     - Borrar un cliente.

## Utilidad de la API

La API creada permite a los talleres de luthería gestionar de manera eficiente sus operaciones diarias. A través de la API, se puede:

- Mantener un registro de todas las reparaciones realizadas, incluyendo detalles como el cliente y el costo.
- Controlar el inventario de insumos utilizados, asegurando que siempre haya material disponible para las reparaciones.
- Gestionar la información de los clientes, facilitando el contacto y seguimiento.

## Requisitos

- Node.js (v14 o superior)
- MongoDB