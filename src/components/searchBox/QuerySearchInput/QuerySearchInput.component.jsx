import './QuerySearchInput.styles.scss'

export default function QuerySearchInput({ type, placeHolder, style }) {
    return <input className="query-search-input" style={style} type={type} placeholder={placeHolder} />
}