import React, { useEffect, useState } from 'react';
import ClubChart from './ClubChart';

export default function Page3() {
    const [clubData, setClubData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/clubs")
            .then(response => response.json())
            .then(data => setClubData(data))
            .catch(error => console.error("Error fetching club data:", error));
    }, []);

    return (
        <div className="page3">
            <div className="row">
                <div className="col-md-6 chart-container">
                    <ClubChart clubData={clubData} />
                </div>
                <div className="col-md-6 text-container">
                    <h1 className='head'>Club-Wise Enrollment Tracker</h1>
                    <h3>Visualize real-time student enrollment numbers across all clubs.</h3>
                </div>
            </div>
        </div>
    );
}
