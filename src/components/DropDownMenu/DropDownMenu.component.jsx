import styles from './DropDownMenu.styles.module.scss'
import { FaAngleRight } from 'react-icons/fa6'
import { useState, useRef, useEffect } from "react"
export default function DropDownMenu({ dropDownTitle, dropDownItems }) {
    const [isCategoryDropOpen, setIsCategoryDropOpen] = useState(false)
    const categoryRef = useRef()
    const menuRef = useRef()


    useEffect(function () {

        const manageOutsideClick = (event) => {
            if (categoryRef.current?.contains(event.target)) {
                setIsCategoryDropOpen(isOpen => !isOpen)
            } else {
                setIsCategoryDropOpen(false)
            }

        }

        document.addEventListener('click', manageOutsideClick)
        return () => document.removeEventListener('click', manageOutsideClick)
    })

    return (
        <div className={styles.drop_down_wrapper}>
            <div ref={categoryRef} className={styles.drop_down_title} > {dropDownTitle}</div>
            {
                isCategoryDropOpen &&
                <div ref={menuRef} className={styles.drop_down_list}>
                    {
                        dropDownItems.map(link => <li key={link}><a href="link">{link} <FaAngleRight /></a></li>)
                    }
                </div>
            }
        </div>
    )
}