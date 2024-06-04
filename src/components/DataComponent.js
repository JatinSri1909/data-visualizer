import React, { useEffect, useState } from 'react';
import { getData } from '../services/dataServices';

function DataComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(setData);
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div key = {item._id}>{item.name}</div>
            ))}
        </div>
    );
}

export default DataComponent;