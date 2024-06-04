import React, { useState } from 'react';
import { uploadData } from '../services/dataServices';

function UploadComponent() {
    const [file, setFile] = useState(null);

    const handleUpload = (event) => {
        event.preventDefault();
        uploadData(file);
    };

    return (
        <form onSubmit={handleUpload}>
            <input type = 'file' onChange = {(event) => setFile(event.target.files[0])} />
            <button type = 'submit'>Upload</button>
        </form>
    );
}

export default UploadComponent;