# ReservacionCitasMedicas

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



Sistema de Gestión, Control y Reservación de Citas Médicas

Aplicación web desarrollada en Angular para la gestión eficiente de citas médicas, permitiendo el registro validado de pacientes y el control dinámico de estados de atención mediante una interfaz responsiva y modular.

---

##  Integrantes y Roles (Distribución del Trabajo)

*   **Valdizón (Coordinador/a)**: 
    *   Distribución y planificación de tareas del proyecto.
    *   Administración de la rama principal (`developer`) y revisión de conflictos.
    *   Verificación del cumplimiento de los requisitos técnicos y funcionales.
*   **Pedro**: 
    *   Desarrollo de la sección de **Listado de Citas**.
    *   Implementación de la visualización de datos, búsqueda, filtrado y control de estados (Atendida/Cancelada).
*   **Esteban (Diseño y Corrección de Errores)**: 
    *   Diseño y maquetación de la interfaz visual (estilos CSS/SCSS).
    *   Corrección integral de errores de compilación (`ngtsc`), rutas de componentes y esquemas modulares.
    *   Apoyo en la estructuración del formulario reactivo y validaciones de interfaz.

---

##  Planteamiento del Problema
Los centros médicos suelen lidiar con desorganización en la programación de citas, duplicidad de registros por documento de identificación (DPI), falta de control en los estados de atención (pacientes pendientes, atendidos o cancelados) y una interfaz poco intuitiva. Este sistema resuelve dicha problemática centralizando la información en tiempo real mediante un servicio reactivo (`RxJS` / `BehaviorSubject`), validaciones estrictas y una interfaz clara para el personal administrativo.