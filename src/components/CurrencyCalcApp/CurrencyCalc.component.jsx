import { useState, useEffect } from "react"

function CurrencySelector({ CurrencyValue, onCurrencySelection }) {

    const [curFrom, setCurFrom] = useState('')
    const [curTo, setCurTo] = useState('')
    const [amount, setAmount] = useState(0)
    const [convertedRate, setConvertedRate] = useState(0)
    useEffect(function () {
        async function currencyFetcher() {
            try {
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${curFrom}&to=${curTo}`)
                const data = await res.json()
                setConvertedRate(curFrom === curTo ? amount : data.rates[curTo])
            }
            catch (error) {
                console.error(error.message)
            }
        }
        currencyFetcher()
    }, [amount, curFrom, curTo])


    const handleCurrencySelection = (e) => {
        onCurrencySelection(e.target.value)
    }

    return (
        <select value={CurrencyValue} onChange={handleCurrencySelection}>
            <option value='ignore'>Select Currency</option>
            <option value='INR'>Indian Rupee</option>
            <option value='PKR'>Pakistan Rupee</option>
            <option value='USD'>US Dollar</option>
            <option value='CAD'>Canadian Dollar</option>
            <option value='EUR'>Euro</option>
            <option value='GBP'>Pound</option>
            <option value='HKD'>HKD</option>
        </select>
    )
}

function CurrencyInput({ onCurrencyAmount }) {
    return <input onChange={(e) => onCurrencyAmount(Number(e.target.value))} type="number" placeholder="type amount" />
}

function DisplayCurrencyRate({ displayableData }) {
    const { curFrom, curTo, convertedRate } = displayableData
    return <div>{!convertedRate ? 'Currency rate will be shown here' : `${curFrom} to ${curTo} amount is: ${convertedRate}`}</div>
}