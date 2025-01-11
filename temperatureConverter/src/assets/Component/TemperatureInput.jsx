function TempInput({ temperature, changeTemperature }) {   
    return (
        <>
            <label>
                Temperature (°C):
                <input type="number" value={temperature} onChange={changeTemperature} />
            </label>
        </>
    )
}

export default TempInput