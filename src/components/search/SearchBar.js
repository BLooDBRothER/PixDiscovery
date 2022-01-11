import React, { useRef, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Dropdown from '../dropdown/Dropdown';

const dropDownItems = [
    {
        id: 1,
        type: "All"
    },
    {
        id: 2,
        type: "Photo"
    },
    {
        id: 3,
        type: "Illustration"
    },
    {
        id: 4,
        type: "Vector"
    },
]

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        dropdownRef.current.style.borderRadius = isOpen ? "0px 25px 0px 0px" : "0px 25px 25px 0";
        
    }, [isOpen])

    return (
        <form className='search-form'>
            <div className='search-input'>
                <input type="text" placeholder='Search Images powered By pixabay' className='search-input-value'  />
                <FaSearch className='search-input-ic'/>
            </div>
            <Dropdown
             classValue="search-dropdown"
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             items={dropDownItems}
             dropdownRef={dropdownRef}
             enableHoverEffect={true}
            />
        </form>
    )
}

export default SearchBar;