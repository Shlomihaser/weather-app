import { Skeleton } from "@mui/material"
import './loading-skelaton-style.css';

function LoadingSkeleton() {
  return (
    <main className="main">
      <div className="main-container weather-info skeleton-container">
        <div className="current-location skeleton-location">
          <Skeleton variant="text" width={120} height={24} style={{ marginBottom: '3px' }} />
          <Skeleton variant="text" width={80} height={18} style={{ marginBottom: '3px' }} />
          <Skeleton variant="text" width={140} height={18} style={{ marginBottom: '3px' }} />
        </div>
        
        <div className="skeleton-temperature">
          <Skeleton variant="rounded" width={150} height={150} />
          <Skeleton variant="text" width={100} height={20}/>
        </div>
  
        <div className="weather-conditions skeleton-weather-conditions">
          <Skeleton variant="rounded" width={70} height={40} />
          <Skeleton variant="rounded" width={70} height={40} />
          <Skeleton variant="rounded" width={70} height={40} />
        </div>
  
        <div className="hourly-forecast skeleton-hourly-forecast">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} variant="rounded" width={35} height={20} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default LoadingSkeleton;
