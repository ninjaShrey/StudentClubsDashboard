import React, {useState} from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
export default function Page2() {

    const [formData,setFormData]=useState({
        name: '',
        hobbies: '',
        topics: '',
        participation: '',
        extracurriculars: '',
        time: ''

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted!'); 
    console.log('Form Data:', formData); 
        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            console.log('Prediction result:', data);
            
        } catch (error) {
            console.error('Error predicting club:', error);
            
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [text] = useTypewriter({
        words: ['Use My Club Predictor ML Tool'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });
    return (

        <div className="page2">
            <h1 className="typewriter-text">
                {text}
                <Cursor />
            </h1>

            <div className="form-container">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Hobbies:</label>
                        <select className="form-select" name="hobbies" value={formData.hobbies} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="Reading">Reading</option>
                            <option value="Sports">Sports</option>
                            <option value="Music">Music</option>
                            <option value="Coding">Coding</option>
                            <option value="Art">Art</option>
                            <option value="Volunteering">Volunteering</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Topics:</label>
                        <select className="form-select" name="topics" value={formData.topics} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="Science">Science</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Literature">Literature</option>
                            <option value="Social Studies">Social Studies</option>
                            <option value="Technology">Technology</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Participation:</label>
                        <select className="form-select" name="participation" value={formData.participation} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="Not interested">Not interested</option>
                            <option value="Somewhat interested">Somewhat interested</option>
                            <option value="Very interested">Very interested</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Extracurriculars:</label>
                        <select className="form-select" name="extracurriculars" value={formData.extracurriculars} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="debate">debate</option>
                            <option value="quiz">quiz</option>
                            <option value="NSS">NSS</option>
                            <option value="arts">arts</option>
                            <option value="hackathon">hackathon</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Time:</label>
                        <select className="form-select" name="time" value={formData.time} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="Less than 2 hours">Less than 2 hours</option>
                            <option value="2-4 hours">2-4 hours</option>
                            <option value="4-6 hours">4-6 hours</option>
                            <option value="More than 6 hours">More than 6 hours</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <input type="submit" className="btn btn-dark" />
                    </div>
                </form>
            </div>
        </div>

    )
}
