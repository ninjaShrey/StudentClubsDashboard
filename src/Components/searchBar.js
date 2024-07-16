import React, { useState } from 'react';
import axios from 'axios';
// import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?name=${searchTerm}`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="&#128269; Search for a student"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {students.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Club</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.club}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBar;
