import './Navbar.styles.scss'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Fragment, useState } from "react"
import BrandLogo from "../Logo/Logo.component"
import Button from "../Button/Button.component"
import Container from '../Container/Container.component'
import UserAuthForm from "../UserAuthForm/UserAuthForm.component"
import DropDownMenu from "../DropDownMenu/DropDownMenu.component"
import SearchBox from '../searchBox/SearchBox.component'

const DropDownOptions = ['Web Development', 'Digital Marketing', 'Video Editing', 'Photo Editing']

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <Container bgColor={{ backgroundColor: 'white' }} >
            <div className="navbar">
                <BrandLogo height={{ height: '35px' }} />
                <ul className={`list ${isMenuOpen ? 'active' : ''}`}>
                    <SearchBox className='search_bar' />
                    <DropDownMenu dropDownTitle='Categories' dropDownItems={DropDownOptions} />
                    <Button className='submit_review_btn' btnContent={<Fragment>Submit Review <AiOutlineFileAdd /></Fragment>} />
                    <UserAuthForm />
                </ul>
                {
                    isMenuOpen ? <FaXmark onClick={handleMobileMenu} className="menu_close_icon" /> : <FaBars onClick={handleMobileMenu} className="hamburger_menu_icon" />
                }
            </div>
        </Container>
    )
}
