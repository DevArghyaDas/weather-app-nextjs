export type LocationCordinateType = {
  latitude: number;
  longitude: number;
};

export interface WeatherDataResponseType {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  daily_units: DailyUnits;
  daily: Daily;
}
export interface CurrentUnits {
  time: string; // "iso8601"
  interval: string; // "seconds"
  surface_pressure: string; // e.g. "hPa"
  temperature_2m: string; // e.g. "°C"
  rain: string; // e.g. "mm"
  is_day: string; // empty string in example
}

/** Current conditions (snapshot) */
export interface Current {
  time: string; // ISO 8601 timestamp, e.g. "2025-08-25T13:00"
  interval: number; // e.g. 900
  surface_pressure: number;
  temperature_2m: number;
  rain: number;
  is_day: number; // 0 or 1 in your data; keep number to match payload
}

/** Units for the `daily` block */
export interface DailyUnits {
  time: string; // "iso8601"
  temperature_2m_max: string; // e.g. "°C"
  temperature_2m_min: string; // e.g. "°C"
}

/** Daily arrays (parallel arrays keyed by index) */
export interface Daily {
  time: string[]; // e.g. ["2025-08-25", ...]
  temperature_2m_max: number[]; // same length as time
  temperature_2m_min: number[]; // same length as time
}
