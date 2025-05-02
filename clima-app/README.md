# Clima App - Prueba Técnica Frontend

Aplicación de clima desarrollada con Next.js que permite consultar el clima actual de cualquier ciudad usando la API de [OpenWeatherMap](https://openweathermap.org/). Incluye pruebas unitarias con Jest y React Testing Library.

---

## Funcionalidades

- Buscar clima por ciudad (temperatura, humedad, descripción)
- Manejo de errores si la ciudad no existe
- Pruebas unitarias para los casos clave
- Estilos limpios y centrado responsivo

---

## Requisitos

- Node.js >= 18
- Una cuenta gratuita en [OpenWeatherMap](https://openweathermap.org/)

---

## Configuración inicial

1. Clona el repositorio:

git clone https://github.com/mariela7/FullStackEvaluation_FE.git
cd clima-app

2. Instala dependencias:

npm install

3. Abre el archivo .env.local y agrega tu clave de API:

NEXT_PUBLIC_WEATHER_API_KEY=tu_clave_aqui

Puedes obtenerla desde: https://home.openweathermap.org/api_keys

## Ejecutar la app en desarrollo

npm run dev

Luego abre http://localhost:3000 en tu navegador.

## Ejecutar pruebas

npm test

Para ver la cobertura de código:

npm test -- --coverage

## Tecnologías utilizadas
- Next.js
- OpenWeatherMap API
- Jest
- React Testing Library

## Notas
- La app no funcionará sin una API key válida.
- La cobertura de código supera el 90%.