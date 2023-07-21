import './UserAuthForm.styles.scss'
import { FaUser } from 'react-icons/fa'
import Button from '../Button/Button.component'
import { useEffect, useRef, useState } from "react"
export default function UserAuthForm() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const formRef = useRef()
    const formAreaRef = useRef()

    const manageOutsideClick = (event) => {
        if (formRef.current?.contains(event.target)) {
            setIsFormOpen(isOpen => !isOpen)
        }
        else {
            setIsFormOpen(false)
        }
        if (formAreaRef.current?.contains(event.target)) {
            setIsFormOpen(true)
        }
    }

    useEffect(function () {
        document.addEventListener('click', manageOutsideClick)

        return () => document.removeEventListener('click', manageOutsideClick)
    }, [])

    return (
        <div className="user-auth-form">
            <span ref={formRef} className="user-panel-icon">
                <FaUser className="user-icon" />
                {
                    isFormOpen && <form ref={formAreaRef} className="auth-form">
                        <h4 className="form-title">Sign into account</h4>
                        <input type="text" placeholder="Your email" />
                        <input type="text" placeholder="Your Password" />
                        <Button btnContent='Login' />
                        <a className="forgot-link" href="link">Forgot Password?</a>
                        <a className="create-account-link" href="link">Create an account!</a>
                    </form>
                }
            </span>
        </div>
    )
}