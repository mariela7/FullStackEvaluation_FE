'use client';
import { useState } from 'react';
import styles from './page.module.css'


export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city) return;

    try {
      setError('');
      setWeather(null);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      );
      
      if (!res.ok) throw new Error('Ciudad no encontrada');
      const data = await res.json();
      setWeather({
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Consulta del clima</h1>

      <input
        type="text"
        placeholder="Ingresa una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.campo}
      />

      <button onClick={getWeather} className={styles.boton}>
        Buscar
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.resultado}>
          <p><strong>Temperatura:</strong> {weather.temp}°C</p>
          <p><strong>Humedad:</strong> {weather.humidity}%</p>
          <p><strong>Descripción:</strong> {weather.description}</p>
        </div>
      )}
    </main>
  );
}
