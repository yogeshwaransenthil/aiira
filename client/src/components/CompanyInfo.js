import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const CompanyInfo = () => {
  const [companyData, setCompanyData] = useState({
    companyName: '',
    industry: '',
    size: 'small',
    foundedYear: '',
    website: '',
    description: '',
    address: '',
    city: '',
    country: '',
    phone: '',
    email: '',
    logo: null,
    registrationNumber: '',
    taxId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyData(prev => ({
        ...prev,
        logo: file
      }));
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="company-info-container">
          <div className="page-header">
            <h1>Company Information</h1>
            <p>Manage your company details and preferences</p>
          </div>
          
          <form className="company-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={companyData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                />
              </div>

              <div className="form-group">
                <label>Industry</label>
                <select name="industry" value={companyData.industry} onChange={handleInputChange}>
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Company Size</label>
                <select name="size" value={companyData.size} onChange={handleInputChange}>
                  <option value="small">1-50 employees</option>
                  <option value="medium">51-200 employees</option>
                  <option value="large">201-1000 employees</option>
                  <option value="enterprise">1000+ employees</option>
                </select>
              </div>

              <div className="form-group">
                <label>Founded Year</label>
                <input
                  type="number"
                  name="foundedYear"
                  value={companyData.foundedYear}
                  onChange={handleInputChange}
                  placeholder="YYYY"
                />
              </div>

              <div className="form-group full-width">
                <label>Company Logo</label>
                <div className="logo-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    id="logo-input"
                  />
                  <label htmlFor="logo-input" className="upload-button">
                    {companyData.logo ? 'Change Logo' : 'Upload Logo'}
                  </label>
                </div>
              </div>

              {/* Add more form fields as needed */}
            </div>

            <div className="form-actions">
              <button type="submit" className="save-button">Save Changes</button>
              <button type="button" className="cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CompanyInfo; 