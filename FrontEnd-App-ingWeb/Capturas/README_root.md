# Proyecto Web 6to - Sistema Integrado (Frontend & Backend)

Este repositorio contiene la aplicación web desarrollada para la asignatura de Ingeniería Web (6to Semestre). El proyecto se compone de un sistema de Frontend moderno construido con React, TypeScript y TailwindCSS, junto con una arquitectura de Microservicios Backend desarrollados en Java/Spring Boot.

---

## 📐 Arquitectura del Proyecto

```text
proyecto-web-6to/
├── FrontEnd-App-ingWeb/   # Aplicación cliente en React + Vite + TypeScript + TailwindCSS
└── Backend/              # Servicios del lado del servidor (Java / Spring Boot)
```

---

## 🚀 Tecnologías Utilizadas

### **Frontend (`/FrontEnd-App-ingWeb`)**
- **Core:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Lenguaje:** TypeScript / JavaScript (ES6+)
- **Estilos & UI:** 
  - [TailwindCSS v3](https://tailwindcss.com/)
  - Lucide React (Iconografía)
  - Inter Font Variable
  - Componentes accesibles y estilizados customizados (UI Kit propio con `clsx` y `tailwind-merge`)
- **Peticiones HTTP:** Axios con intercepción y manejo centralizado.
- **Autenticación & Vistas:** Formularios de Login, Registro y Panel de Administración con layout moderno (AuthLayout, PatternPanel, StatusBadge, etc.).

### **Backend (`/Backend`)**
- **Lenguaje/Framework:** Java / Spring Boot
- **Construcción & Gestión:** Maven (`mvnw`)
- **Arquitectura:** Microservicios organizados en `/Backend/services`

---

## 💻 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de contar con:
- [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/) o [bun](https://bun.sh/)
- [Java JDK](https://www.oracle.com/java/technologies/downloads/) (Versión 17 o superior para Spring Boot)

---

## ⚙️ Instrucciones de Instalación y Ejecución

### 1. Clonar el Repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd proyecto-web-6to
```

### 2. Ejecutar el Frontend
Navega a la carpeta del frontend e instala las dependencias:

```bash
cd FrontEnd-App-ingWeb
npm install
```

Inicia el servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible por defecto en `http://localhost:5173`.

### 3. Ejecutar el Backend
Navega a la carpeta del backend y ejecuta el servicio deseado con Maven:

```bash
cd Backend
./mvnw spring-boot:run
```

---

## 🎨 Características Destacadas del Frontend

- **Diseño Moderno:** Interfaz responsiva con soporte para patrones visuales, modo de autenticación limpio y estados de insignias (Status badges).
- **Componentización:** UI Kit modular y reutilizable (`Button`, `InputField`, `PasswordInput`, `SegmentedControl`, `Avatar`, `StatusBadge`, `Brand`).
- **Seguridad y Capas:** Estructura modular dividida por características (`features/auth`, `pages/AdminPage`).
