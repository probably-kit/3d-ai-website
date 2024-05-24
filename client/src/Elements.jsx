import React, { useState, useRef } from 'react';

function Button(props) {
    return (
        <button className="button" onClick={props.onClick}>
            <span>{props.text}</span>
        </button>
    );
}

function FileInput(props) {
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        const droppedFile = event.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div className={`FileInput ${dragActive ? 'drag-active' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
            <input
                type="file"
                className="form-input"
                onChange={handleFileChange}
                ref={inputRef}
                style={{ display: 'none' }}
            />
            <label className="form-label">{props.text}</label>
            <Button onClick={handleButtonClick} text="Browse" />
            {file && <p>Selected file: {file.name}</p>}
        </div>
    );
}

function Input(props) {
    return (
        <div className="Input">
            <input
                type="text"
                className="form-input"
                placeholder=" " // Add a placeholder to ensure :not(:placeholder-shown) works
            />
            <label className="form-label">{props.text}</label>
        </div>
    );
}


function Checkbox(props) {
    return (
        <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            {props.label}
        </label>
    );
}



export { Button, FileInput, Input, Checkbox };