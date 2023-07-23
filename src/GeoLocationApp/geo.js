import { useState } from 'react'

function useGeolocationDetector() {
    const [position, setPosition] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    function getCurrentPosition() {
        if (!navigator.geolocation) return setError('your browser does not support Our System')

        setIsLoading(true)
        navigator.geolocation.getCurrentPosition(result => {
            const latitude = result.coords.latitude
            const longitude = result.coords.longitude
            setPosition({ latitude, longitude })
            setIsLoading(false)
        }, error => {
            setError(error.message)
            setIsLoading(false)
        })

    }
    return { position, isLoading, error, getCurrentPosition }
}

const LocationDetector = () => {
    const { position, isLoading, error, getCurrentPosition } = useGeolocationDetector()
    const { latitude, longitude } = position

    function handleLocationDetection() {
        getCurrentPosition()
    }


    return (
        <div>
            <button onClick={handleLocationDetection}>Get Location Info</button>
            {isLoading && <p>Location fetching is on the way</p>}
            {
                !isLoading && !error && !latitude && !longitude && <p>Your GPS position is will be shown here</p>
            }
            {
                error === 'Network error. Check DevTools console for more information.' ? 'Check Your Internet Connection!' : <p> {error}</p>
            }
            {
                latitude && longitude && <p>Your GPS position is:{latitude} {longitude}</p>
            }
        </div>
    )
}