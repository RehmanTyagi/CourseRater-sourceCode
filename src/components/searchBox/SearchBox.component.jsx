import './SearchBox.styles.scss'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import QuerySearchButton from "./QuerySearchButton/QuerySearchButton.component"
import QuerySearchInput from "./QuerySearchInput/QuerySearchInput.component"
export default function SearchBox({ className }) {
    return (
        <div className={`search-box ${className}`}>
            <QuerySearchInput type="text" placeHolder="Search Your Course" />
            <QuerySearchButton children={<FaMagnifyingGlass />} />
        </div>
    )
}