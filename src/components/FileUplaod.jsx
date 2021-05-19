import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default ({
    onChange,
    placeholder
}) => {
    const onDrop = useCallback(acceptedFiles => {
        // setLogo(acceptedFiles[0]);
        onChange(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <a href="#c" className="btn btn-theme-2 w-100 pt-3 pb-3">{placeholder}</a>
            }
        </div>
    )
}

