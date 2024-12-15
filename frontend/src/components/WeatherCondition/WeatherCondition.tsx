import './weather-condition-style.css';

type WeatherConditionProps = {
    detailLabel: string,
    detailValue: String
};

function WeatherCondition({detailLabel,detailValue}: WeatherConditionProps) {
  return (
    <div className="weather-condition">
        <p className="detail-label">{detailLabel}</p>
        <p className="detail-value">{detailValue}</p>
    </div>
  )
}

export default WeatherCondition;
