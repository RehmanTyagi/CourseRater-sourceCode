// import './Container.styles.scss'

export default function Container({ children, className, bgColor }) {
    return (
        <div style={bgColor} className={`container ${className}`}>
            {children}
        </div>
    )
}