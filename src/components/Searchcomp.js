import React, { useEffect, useState, useRef  } from "react";
import "../components/Searchcomp.css";
import axios from "axios";
import { Link } from 'react-router-dom';


const Searchcomp = () => {
    const [employees, setEmployees] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [dropdownItems, setDropdownItems] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const searchDownRef = useRef(null); 
    const dropdownContainerRef = useRef(null);

    useEffect(() => {
        const searchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/search`, {
                    params: { query: searchQuery }
                });
                setDropdownItems(response.data);
            } catch (error) {
                setDropdownItems([{name:"No name found"}])
                console.error("Error fetching search data:", error);
            }
        };

        if (searchQuery) {
            searchData();
        }
        else{
            // setEmployees([]);
            setSelectedEmployee([]);
            setDropdownItems([])
        }
    }, [searchQuery]);

    useEffect(() => {
        if (focusedIndex !== -1 && dropdownContainerRef.current) {
            const focusedElement = dropdownContainerRef.current.children[focusedIndex];
            if (focusedElement) {
                const containerRect = dropdownContainerRef.current.getBoundingClientRect();
                const elementRect = focusedElement.getBoundingClientRect();
                if (elementRect.bottom > containerRect.bottom) {
                    dropdownContainerRef.current.scrollTop += elementRect.bottom - containerRect.bottom;
                } else if (elementRect.top < containerRect.top) {
                    dropdownContainerRef.current.scrollTop -= containerRect.top - elementRect.top;
                }
            }
        }
    }, [focusedIndex]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchDownRef.current && !searchDownRef.current.contains(event.target)) {
                setDropdownItems([]); // Hide the searchdown div
            }
        };

        document.addEventListener("mousedown", handleClickOutside); // Step 2: Add event listener

        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Step 3: Clean up
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown") {
                setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, dropdownItems.length - 1));
            } else if (event.key === "ArrowUp") {
                setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            } else if (event.key === "Enter" && focusedIndex !== -1) {
                handleItemSelect(dropdownItems[focusedIndex]);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [dropdownItems, focusedIndex]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleItemSelect = (employee) => {
        setSelectedEmployee(employee);
        setEmployees([employee]); 
    };


    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/delete/${id}`);
            console.log(response.data);
            setEmployees([]);
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };
  return (
    <div className="conatainer">
        <div>
            <h1 style={{ textAlign: "center" }}>Search</h1>
            <div className="mainsearch">
                <div class="searchBox">
                    <input
                    class="searchInput"
                    type="text"
                    name=""
                    placeholder="Search something"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    />
                    <button class="searchButton" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="auto"
                        viewBox="0 0 29 29"
                        fill="none"
                        className="svgsearch"
                    >
                    <g clip-path="url(#clip0_2_17)">
                    <g filter="url(#filter0_d_2_17)">
                        <path
                        d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        shape-rendering="crispEdges"
                        ></path>
                    </g>
                    </g>
                    <defs>
                    <filter
                        id="filter0_d_2_17"
                        x="-0.418549"
                        y="3.70435"
                        width="29.7139"
                        height="29.7139"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        ></feColorMatrix>
                        <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_17"
                        ></feBlend>
                        <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_17"
                        result="shape"
                        ></feBlend>
                    </filter>
                    <clipPath id="clip0_2_17">
                        <rect
                        width="28.0702"
                        height="28.0702"
                        fill="white"
                        transform="translate(0.403503 0.526367)"
                        ></rect>
                    </clipPath>
                    </defs>
                    </svg>
                    </button>
                    
                </div>
                {dropdownItems.length > 0 && (
                    <div className="searchdown" ref={searchDownRef} >                    {dropdownItems.map((item, index) => (
                        <div ref={dropdownContainerRef}>
                        <div key={index} onClick={() => handleItemSelect(item)} className={index === focusedIndex ? "highlighted" : ""}>
                        {item.name} 
                    </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
            
            
            <div className="empdata">
            {employees.map((employee, index) => (  
                
                <div className="empdetails">
                    <div style={{display:"flex"}}>
                        <label>Id</label>
                        <p>{employee.id}</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <label>Name</label>
                        <p>{employee.name}</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <label>Email</label>
                        <p>{employee.email}</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <label>Phone</label>
                        <p>{employee.phone}</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <label>Date</label>
                        <p>{employee.date}</p>
                    </div>
                    <div style={{width:"90%", height:'auto', display:"flex",justifyContent:"space-evenly"}}>
                    
                    <Link to={`/about/${employee.id}`} style={{width:'auto'}}>
                    <button class="edit-button">
                    <svg class="edit-svgIcon" viewBox="0 0 512 512">
                                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                    </svg>
                  </button>
                  </Link>
                  <button class="delete-button" onClick={() => deleteData(employee.id)}>
                  <svg class="delete-svgIcon" viewBox="0 0 448 512">
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                                  </svg>
                </button>
                                  
                    </div>

                    
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Searchcomp;
