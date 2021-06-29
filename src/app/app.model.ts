export interface WeatherInfo {
    coord: WeatherCoordinate;
    weather: WeatherBasic[];
    base: string;
    main: WeatherMain;
    visibility: number;
    wind: WeatherWindData;
    dt: number;
    sys: WeatherSysInfo
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface WeatherCoordinate {
    lon: number;
    lat: number;
}
export interface WeatherBasic {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}
export interface WeatherWindData{
    speed: number;
    deg: number;
    gust: number;
}
export interface WeatherSysInfo {
    country: string;
    sunrise: number;
    sunset: number;
}
export interface APIError{
    code: string;
    message: string;
}
export interface ApiResponse {
    data: WeatherInfo
    error: APIError
}