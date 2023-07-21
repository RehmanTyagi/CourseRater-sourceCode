import Logo from './../../assets/logo-color-web.svg'

export default function BrandLogo({ height }) {
    return (
        <img style={height} src={Logo} alt="logo" />
    )
}