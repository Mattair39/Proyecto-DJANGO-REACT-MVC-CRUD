# Gestión de Libros - Proyecto MVC (React - Django)

El proyecto trata de una aplicación **CRUD** para la gestión de libros, desarrollada con **Python** (Django) en el backend y **React** en el frontend.

---

## Descripción del Proyecto

Este proyecto permite a los usuarios realizar la gestión de libros mediante una interfaz web. Las funcionalidades principales incluyen:

- Crear nuevos libros.
- Editar libros existentes.
- Eliminar libros.
- Listar libros con detalles como el título y el año de publicación.
  
El backend se encuentra construido con **Django** y utiliza una base de datos **SQLite** (por defecto) para almacenar los datos de los libros. El frontend está desarrollado con **React** utilizando **Vite** y utiliza `fetch` para interactuar con la API REST del backend.

---

## Tabla de Contenidos

1. [Instalación](#instalación)  
2. [Uso del Proyecto](#uso-del-proyecto)  
3. [Características](#características)  
4. [Contribución](#contribución)  
5. [Créditos](#créditos)  
6. [Licencia](#licencia)

---

## Instalación

### Requisitos previos

- **Node.js** y **yarn** (o **npm**) instalados para el frontend (Versión utilizada - **Node: v22.14.0**) (Versión utilizada - **yarn: 1.22.22**).
- **Python 3.8 o superior** instalado para el backend  (Versión utilizada: **3.13.0**).
- **Django**, **Django REST Framework** y **django-cors-headers** instalados en el backend.

La base de datos SQLite se utiliza por defecto y no requiere de configuraciones adicionales por parte del usuario.

### Pasos para instalar y ejecutar el proyecto

#### Configuración del Backend

1. Clonar el siguiente repositorio:
   ```bash
   git clone https://github.com/Mattair39/Proyecto-DJANGO-REACT-MVC-CRUD.git
   ```
2. Ubicarse en la carpeta principal del proyecto:
   ```bash
   cd ../django-react
   ```
3. Ir a la carpeta server:
   ```bash
   cd server
   ```
4. Instalar Django:
   ```bash
   pip install django
   ```
5. Instalar Django REST Framework:
   ```bash
   pip install djangorestframework
   ```
6. Instalar django-cors-headers:
   ```bash
   pip install django-cors-headers
   ```
7. Entrar a la carpeta newproject (donde se encuentra **manage.py**):
   ```bash
   cd newproject
   ```
8. Aplicar las migraciones:
   ```bash
   python manage.py migrate
   ```
9. Iniciar el servidor del backend:
   ```bash
   python manage.py runserver
   ```
El servidor estará disponible en **http://127.0.0.1:8000/**

---
#### Configuración del Frontend

1. Regresar a la carpeta raíz del proyecto y ubícarse en **client**:
   ```bash
   cd ../../../client
   ```
2. Crear la aplicación React con Vite (La app ya se encuentra creada - meramente demostrativo):
   ```bash
   yarn create vite app
   ```
   Seleccionar las siguientes opciones cuando se te solicite:

   - **Framework**: React
    
   - **Variante**: JavaScript
    
3. Entrar a la carpeta **app**:
   ```bash
   cd app
   ```
4. Instalar las dependencias:
   ```bash
   yarn
   ```
---
### Ejecución
#### Iniciar el Backend (Django)

1. Desde la carpeta server/newproject (donde se encuentra manage.py):
   ```bash
   python manage.py runserver
   ```
2. El servidor de Django estará disponible en **http://127.0.0.1:8000/**

#### Iniciar el Frontend (React)

1. Ir a la carpeta client/app y ejecutar:
   ```bash
   yarn dev
   ```
2. La aplicación de React estará disponible en **http://localhost:5173/**

---

## Uso del Proyecto

**1. Agregar un libro:**

Rellena los campos Título y Año de Publicación, luego haz clic en **“Agregar Libro”**.

**2. Ver la lista de libros:**

Se muestra un listado de todos los libros creados.

**3. Actualizar un libro:**

Ingresa el nuevo Título y/o Año de Publicación los campos de edición y haz clic en **“Actualizar”**. Los campos que se dejen vacíos conservarán su valor anterior.

**4. Eliminar un libro:**

Haz clic en **“Eliminar”** para quitar el libro de la lista.

---

## Características

- **Interfaz en modo oscuro**:
  - Diseño limpio y moderno desarrollado con React y CSS.
- **API RESTful**:
  - Endpoints para operaciones **CRUD (GET, POST, PUT, DELETE)**.
- **CORS habilitado**:
  - Permite la comunicación segura entre el frontend y el backend.
    
---

## Contribución

Para contribuir a este proyecto, se deben seguir estos:

1. Realizar un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/new-feature`).
3. Realiza tus cambios y haz un commit (`git commit -m "Add New Feature"`).
4. Haz un push a la rama (`git push origin feature/new-feature`).
5. Abrir un Pull Request.

---

## Créditos

Este proyecto fue desarrollado por:

- **Gabriel Arguello (Universidad de las Américas)**  
  - [GitHub](https://github.com/Mattair39)  

---

## Licencia

Este proyecto está licenciado bajo la [MIT License](https://choosealicense.com/licenses/mit/). Puedes usar, modificar y distribuir este proyecto libremente.

--- 
