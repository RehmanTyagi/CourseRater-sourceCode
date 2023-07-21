import './Button.style.scss'

export default function Button({ btnContent, className }) {
    return <button className={`button ${className}`}>{btnContent}</button>
}