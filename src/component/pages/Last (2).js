import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../com/PageHeader";
import QuickLinks from "../com/QuickLinks";
import "../css/Last.css";
import Assets from "../assets/Assets";
 import 'react-toastify/dist/ReactToastify.css';  
function Last() {
  const [linksData, setLinkData] = useState([
    { id: "workPreferenceDetails", label: "Career Preference", active: true },
    { id: "educationDetails", label: "Education", active: false },
    { id: "profileSummary", label: "Profile summary", active: false },
    { id: "personalDetails", label: "Personal Details", active: false },
    { id: "EmploymentDetails", label: "Employment Information", active: false },
    { id: "resume", label: "Resume", active: false },
  ]);

const [size, setSize] = useState(window.innerWidth > 768);
useEffect(() => {
  const handleResize = () => {
    setSize(window.innerWidth > 768);
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

const sectionRefs = useRef({
  workPreferenceDetails: React.createRef(),
  educationDetails: React.createRef(),
  profileSummary: React.createRef(),
  personalDetails: React.createRef(),
  EmploymentDetails: React.createRef(),
  resume: React.createRef(),
});

function handleButton(label) {
  setLinkData((prevLinks) =>
    prevLinks.map((link) =>
      link.label === label
        ? { ...link, active: true }
        : { ...link, active: false }
    )
  );

  const sectionId = linksData.find((link) => link.label === label)?.id;
  const targetSection = sectionRefs.current[sectionId];
  if (targetSection && targetSection.current) {
    targetSection.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// State to hold values of editable fields and resume file
const [formData, setFormData] = useState({
  careerPreference: { workStatus: 'Fresher', city: 'Chennai' },
  educationDetails: {
    postGraduate: { collegeName: 'XYZ University', course: 'MBA', specialization: 'Digital Marketing', certificate: true },
    underGraduate: { collegeName: 'ABC College', course: 'BBA', specialization: 'Business Administration', certificate: true },
  },
  profileSummary: 'Detail-oriented and data-driven Digital Marketing Analyst with a passion for leveraging analytical skills to optimize online marketing strategies.',
  personalDetails: { fatherOccupation: 'Engineer', motherOccupation: 'Teacher', siblings: 2, currentCity: 'Chennai', state: 'Tamil Nadu', readyToRelocate: true },
  employmentDetails: { companyName: 'ABC Corp.', domain: 'Digital Marketing', pfNumberPresent: true, companyLocation: 'Chennai', currentSalary: 600000, expectedSalary: 800000, yearsOfExperience: 3 },
  resume: null, // Store the uploaded file for resume
});

// State to toggle edit mode for sections
const [isEditing, setIsEditing] = useState({
  careerPreference: false,
  educationDetails: false,
  profileSummary: false,
  personalDetails: false,
  employmentDetails: false,
  resume: false, // For resume section
});

// Toggle edit mode for a section
const toggleEdit = (section) => {
  setIsEditing((prevState) => ({
    ...prevState,
    [section]: !prevState[section],
  }));
};

// Handle save for each section
const handleSave = (section) => {
  setIsEditing((prevState) => ({
    ...prevState,
    [section]: false,
  }));
};

// Handle input change for editable fields
const handleInputChange = (section, field, value) => {
  if (field) {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  } else {
    setFormData((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  }
};

// Handle file upload for the resume section
const handleFileChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    resume: e.target.files[0], // Update the resume property in the state
  }));
};

 

  return (
    <>
      <PageHeader />
      <div className="">
      <div className="container flex-md-row my-5 about-contain">
  <div className="table-container">
    <table className="table table-bordered table-striped">
      <tbody>
        <tr>
          <td className="label">Name :</td>
          <td>Tina</td>
        </tr>
        <tr>
          <td className="label">E-mail :</td>
          <td>tina@gmail.com</td>
        </tr>
        <tr>
          <td className="label">Phone :</td>
          <td>093284181</td>
        </tr>
        <tr>
          <td className="label">Department :</td>
          <td>Marketing & Sales</td>
        </tr>
        <tr>
          <td className="label">Experience :</td>
          <td>5 years in SEO, PPC, and Content Marketing</td>
        </tr>
        <tr>
          <td className="label">Key Skills :</td>
          <td>SEO, Google Ads, Social Media Strategy, Analytics</td>
        </tr>
        <tr>
          <td className="label">Current Project :</td>
          <td>Leading a product launch campaign for XYZ Corp., optimizing digital channels for higher engagement and ROI.</td>
        </tr>
        <tr>
          <td className="label">Recent Achievement:</td>
          <td>Increased organic traffic by 30% through targeted SEO strategies and high-performing content.</td>
        </tr>
        <tr>
          <td className="label">Location :</td>
          <td>Chennai</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="container">
    <div className="video-container">
      <video className="video-player" controls>
        <source src={Assets.careervideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>


        <div className="container-fluid bg-dark text-white p-4 p-md-5 mt-3 w-100  ">
          <h1 className="texr-center">Career Objective</h1>
          <p className="text-left">
            Detail-oriented and data-driven Digital Marketing Analyst with a
            passion for leveraging analytical skills to optimize online
            marketing strategies. Seeking to contribute to a dynamic marketing
            team where I can utilize my expertise in data analysis, market
            research, and digital advertising to drive brand growth and improve
            campaign performance. Committed to staying ahead of industry trends
            and utilizing innovative techniques to enhance customer engagement
            and achieve business objectives.
          </p>
        </div>

        

        <div className="container row m-md-0 m-3">
          {size && (
            <div className="col-3">
              <aside
                className="w-100 justify-content-center"
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1000",
                }}
              > 
                <QuickLinks links={linksData} onSelectedLabels={handleButton} />
              </aside>
            </div>
          )}
 <div className="col-md-9 candidate-details" >
      <main>
        <div>
         <div>
          <div className="row ml-md-5">
            {/* Career Preference Section */}
            <div className="col-12 card m-2 p-3" id="workPreferenceDetails">
  <div className="d-flex justify-content-between">
    <h1 className="text-start">Career Preference</h1>
    {isEditing.careerPreference ? (
      <button className="btn btn-success " onClick={() => handleSave('careerPreference')}>Save</button>
    ) : (
      <button className="btn btn-primary" onClick={() => toggleEdit('careerPreference')}>
        <i className="fas fa-edit"></i>
      </button>
    )}
  </div>
  {isEditing.careerPreference ? (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Work status</h3>
        <input 
          type="text" 
          defaultValue={formData.careerPreference.workStatus} 
          onBlur={(e) => handleInputChange('careerPreference', 'workStatus', e.target.value)} 
        />
      </div>
      <div className="col-md-6 text-start">
        <h3>City</h3>
        <input 
          type="text" 
          defaultValue={formData.careerPreference.city} 
          onBlur={(e) => handleInputChange('careerPreference', 'city', e.target.value)} 
        />
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Work status</h3>
        <p>{formData.careerPreference.workStatus}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>City</h3>
        <p>{formData.careerPreference.city}</p>
      </div>
    </div>
  )}
</div>


      {/* Education Details Section */}
      <div className="col-12 card m-2 p-3" id="educationDetails">
  <div className="d-flex justify-content-between">
    <h1 className="text-start">Education</h1>
    {isEditing.educationDetails ? (
      <button className="btn btn-success" onClick={() => handleSave('educationDetails')}>Save</button>
    ) : (
      <button className="btn btn-primary" onClick={() => toggleEdit('educationDetails')}>
        <i className="fas fa-edit"></i>
      </button>
    )}
  </div>
  {isEditing.educationDetails ? (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Post Graduate - College Name</h3>
        <input 
          type="text" 
          defaultValue={formData.educationDetails.postGraduate.collegeName} 
          onBlur={(e) => handleInputChange('educationDetails', 'postGraduate', { 
            ...formData.educationDetails.postGraduate, 
            collegeName: e.target.value 
          })} 
        />
        <h3>Post Graduate - Course</h3>
        <input 
          type="text" 
          defaultValue={formData.educationDetails.postGraduate.course} 
          onBlur={(e) => handleInputChange('educationDetails', 'postGraduate', { 
            ...formData.educationDetails.postGraduate, 
            course: e.target.value 
          })} 
        />
        <h3>Post Graduate - Specialization</h3>
        <input 
          type="text" 
          defaultValue={formData.educationDetails.postGraduate.specialization} 
          onBlur={(e) => handleInputChange('educationDetails', 'postGraduate', { 
            ...formData.educationDetails.postGraduate, 
            specialization: e.target.value 
          })} 
        />
        <h3>Certificate</h3>
        <input 
          type="checkbox" 
          checked={formData.educationDetails.postGraduate.certificate} 
          onChange={(e) => handleInputChange('educationDetails', 'postGraduate', { 
            ...formData.educationDetails.postGraduate, 
            certificate: e.target.checked 
          })} 
        />
      </div>
      <div className="col-md-6 text-start">
        <h3>Under Graduate - College Name</h3>
        <input 
          type="text" 
          defaultValue={formData.educationDetails.underGraduate.collegeName} 
          onBlur={(e) => handleInputChange('educationDetails', 'underGraduate', { 
            ...formData.educationDetails.underGraduate, 
            collegeName: e.target.value 
          })} 
        />
        <h3>Under Graduate - Course</h3>
        <input 
          type="text" 
          defaultValue={formData.educationDetails.underGraduate.course} 
          onBlur={(e) => handleInputChange('educationDetails', 'underGraduate', { 
            ...formData.educationDetails.underGraduate, 
            course: e.target.value 
          })} 
        />
        <h3>Under Graduate - Specialization</h3>
        <input 
          type="text" 
          defaultValue={formData.educationDetails.underGraduate.specialization} 
          onBlur={(e) => handleInputChange('educationDetails', 'underGraduate', { 
            ...formData.educationDetails.underGraduate, 
            specialization: e.target.value 
          })} 
        />
        <h3>Certificate</h3>
        <input 
          type="checkbox" 
          checked={formData.educationDetails.underGraduate.certificate} 
          onChange={(e) => handleInputChange('educationDetails', 'underGraduate', { 
            ...formData.educationDetails.underGraduate, 
            certificate: e.target.checked 
          })} 
        />
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Post Graduate</h3>
        <p>College Name: {formData.educationDetails.postGraduate.collegeName}</p>
        <p>Course: {formData.educationDetails.postGraduate.course}</p>
        <p>Specialization: {formData.educationDetails.postGraduate.specialization}</p>
        <p>Certificate: {formData.educationDetails.postGraduate.certificate ? 'Yes' : 'No'}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Under Graduate</h3>
        <p>College Name: {formData.educationDetails.underGraduate.collegeName}</p>
        <p>Course: {formData.educationDetails.underGraduate.course}</p>
        <p>Specialization: {formData.educationDetails.underGraduate.specialization}</p>
        <p>Certificate: {formData.educationDetails.underGraduate.certificate ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )}
</div>

            {/* Profile Summary Section */}
            <div className="col-12 card m-2 p-3 text-left" id="profileSummary">
  <div className="d-flex justify-content-between">
    <h1 className="text-start">Profile Summary</h1>
    {isEditing.profileSummary ? (
      <button className="btn btn-success" onClick={() => handleSave('profileSummary')}>Save</button>
    ) : (
      <button className="btn btn-primary" onClick={() => toggleEdit('profileSummary')}>
        <i className="fas fa-edit"></i>
      </button>
    )}
  </div>
  {isEditing.profileSummary ? (
    <textarea
      className="form-control"
      defaultValue={formData.profileSummary}
      onBlur={(e) => handleInputChange('profileSummary', '', e.target.value)}
    />
  ) : (
    <p>{formData.profileSummary}</p>
  )}
</div>


        {/* Personal Details Section */}
        <div className="col-12 card m-2 p-3" id="personalDetails">
  <div className="d-flex justify-content-between">
    <h1 className="text-start">Personal Details</h1>
    {isEditing.personalDetails ? (
      <button className="btn btn-success" onClick={() => handleSave('personalDetails')}>Save</button>
    ) : (
      <button className="btn btn-primary" onClick={() => toggleEdit('personalDetails')}>
        <i className="fas fa-edit"></i>
      </button>
    )}
  </div>
  {isEditing.personalDetails ? (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Father's Occupation</h3>
        <input type="text" defaultValue={formData.personalDetails.fatherOccupation} onBlur={(e) => handleInputChange('personalDetails', 'fatherOccupation', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Mother's Occupation</h3>
        <input type="text" defaultValue={formData.personalDetails.motherOccupation} onBlur={(e) => handleInputChange('personalDetails', 'motherOccupation', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Siblings</h3>
        <input type="number" defaultValue={formData.personalDetails.siblings} onBlur={(e) => handleInputChange('personalDetails', 'siblings', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Current City</h3>
        <input type="text" defaultValue={formData.personalDetails.currentCity} onBlur={(e) => handleInputChange('personalDetails', 'currentCity', e.target.value)} />
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Father's Occupation</h3>
        <p>{formData.personalDetails.fatherOccupation}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Mother's Occupation</h3>
        <p>{formData.personalDetails.motherOccupation}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Siblings</h3>
        <p>{formData.personalDetails.siblings}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Current City</h3>
        <p>{formData.personalDetails.currentCity}</p>
      </div>
    </div>
  )}
</div>

 {/* Employement Details Section */}
<div className="col-12 card m-2 p-3" id="employmentDetails">
  <div className="d-flex justify-content-between">
    <h1 className="text-start">Employment Details</h1>
    {isEditing.employmentDetails ? (
      <button className="btn btn-success" onClick={() => handleSave('employmentDetails')}>Save</button>
    ) : (
      <button className="btn btn-primary" onClick={() => toggleEdit('employmentDetails')}>
        <i className="fas fa-edit"></i>
      </button>
    )}
  </div>
  {isEditing.employmentDetails ? (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Company Name</h3>
        <input type="text" defaultValue={formData.employmentDetails.companyName} onBlur={(e) => handleInputChange('employmentDetails', 'companyName', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Domain</h3>
        <input type="text" defaultValue={formData.employmentDetails.domain} onBlur={(e) => handleInputChange('employmentDetails', 'domain', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Job Title</h3>
        <input type="text" defaultValue={formData.employmentDetails.jobTitle} onBlur={(e) => handleInputChange('employmentDetails', 'jobTitle', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Years of Experience</h3>
        <input type="number" defaultValue={formData.employmentDetails.yearsOfExperience} onBlur={(e) => handleInputChange('employmentDetails', 'yearsOfExperience', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Location</h3>
        <input type="text" defaultValue={formData.employmentDetails.location} onBlur={(e) => handleInputChange('employmentDetails', 'location', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>PF Number Present</h3>
        <input type="checkbox" checked={formData.employmentDetails.pfNumberPresent} onChange={(e) => handleInputChange('employmentDetails', 'pfNumberPresent', e.target.checked)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Salary</h3>
        <input type="number" defaultValue={formData.employmentDetails.currentSalary} onBlur={(e) => handleInputChange('employmentDetails', 'currentSalary', e.target.value)} />
      </div>
      <div className="col-md-6 text-start">
        <h3>Employment Type</h3>
        <input type="text" defaultValue={formData.employmentDetails.employmentType} onBlur={(e) => handleInputChange('employmentDetails', 'employmentType', e.target.value)} />
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-md-6 text-start">
        <h3>Company Name</h3>
        <p>{formData.employmentDetails.companyName}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Domain</h3>
        <p>{formData.employmentDetails.domain}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Job Title</h3>
        <p>{formData.employmentDetails.jobTitle}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Years of Experience</h3>
        <p>{formData.employmentDetails.yearsOfExperience}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Location</h3>
        <p>{formData.employmentDetails.location}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>PF Number Present</h3>
        <p>{formData.employmentDetails.pfNumberPresent ? 'Yes' : 'No'}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Salary</h3>
        <p>{formData.employmentDetails.currentSalary}</p>
      </div>
      <div className="col-md-6 text-start">
        <h3>Employment Type</h3>
        <p>{formData.employmentDetails.employmentType}</p>
      </div>
    </div>
  )}
</div>

<div className="container mt-4">
      <div className="card p-4">
        <h2 className="text-start text-danger">Resume</h2>
        <div className="row">
          <div className="col-md-12">
            {isEditing.resume ? (
              <>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="form-control"
                />
                <button
                  onClick={() => handleSave('resume')}
                  className="btn btn-primary mt-2"
                >
                  Save Resume
                </button>
              </>
            ) : (
              <>
                <p>{formData.resume ? formData.resume.name : 'No file uploaded'}</p>
                <button
                  onClick={() => toggleEdit('resume')}
                  className="btn btn-outline-secondary"
                >
                  {formData.resume ? 'Change Resume' : 'Upload Resume'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>
    </div>



 
      </main>
    </div>
        </div>
      </div>
    </>
  );
}

export default Last;