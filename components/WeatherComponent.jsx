import { getWeatherData } from '@/lib/weather-info';
import React from 'react';
import Card from './Card';
import Image from 'next/image';

const WeatherComponent = async ({ lat, lon }) => {

    const data = await getWeatherData(lat, lon);
    
    const { main, description } = data;

    return (
        <Card>
            <h6 className="feature-name">Current Weather</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icon_rain.png"
                    width={200}
                    height={200}
                    alt="rain icon"
                />
                <h3 className="feature-title">{main}</h3>
                <span className="feature-name">{description}</span>
            </div>
        </Card>
    );
};

export default WeatherComponent;