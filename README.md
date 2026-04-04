# Limpieza Hogar - Proyecto Bootcamp Semana 5

## Descripción
Aplicación para una empresa de limpieza de hogar que permite:

- Registrar clientes mediante un formulario.
- Buscar empleados disponibles.
- Visualizar información de la página principal con componentes reutilizables.
- Manejar estado global usando **Context API** (clientes, empleados, reservas).

## Tecnologías
- React + TypeScript  
- Context API  
- Tailwind CSS  
- React Router DOM  

## Instalación

1. Clonar el repositorio:  
```bash
git clone https://github.com/RehnieyAl/mini-proyecto-servicio-aseo.git
```


2. entrar a la carpeta:  
```bash
cd SERVICIO-ASEO
```

3. instalar dependencias:  
```bash
pnpm install
```
4. ejecutar aplicacion:
```bash
pnpm starter
```
## Funcionalidades
- **Formulario de clientes:** añadir nuevos clientes con nombre, teléfono y dirección.
- **Búsqueda de empleados:** permite buscar empleados disponibles por nombre. 
- **Página de inicio:** contiene información de la empresa y secciones reutilizables.
- **Estado global con Context API:** se usan contextos tipados para clientes, empleados y reservas.

## Estructura del proyecto
- `src/components/` → Componentes reutilizables (Navbar, Hero, Footer, ReservaFormulario, etc.)
- `src/context/` → Contextos para manejar reservas, clientes y empleados
- `src/pages/` → Páginas: Inicio, Empleados, QuienesSomos
- `src/services/` → Funciones de simulación de backend (CRUD)
- `src/types/` → Interfaces y tipos TypeScript
