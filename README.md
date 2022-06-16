# OSKAR (Optimal Segmental Kinematics and Alignment Approach to Rehabilitation)

Based entirely on the comprehensive work of Elaine Owen MBE, MSc, SRP, MCSP. This web application is designed for healthcare practitioners to formulate orthotic brace configurations based on the highest/most current standards of evidence based practice. Upon selecting patient presentation(s), a brace configuration is algorithmically returned and saved to a healthcare practitioner.


## Description

This web application is designed for healthcare practitioners (Orthotists/Physical Therapists) to quickly and accurately return orthotic brace configurations based on patient presentation and the methodology derived and compiled by Elaine Owen MBE, MSc, SRP, MCSP. 

Healthcare practitioners can create their profile and log in using their provided credentials:

 ![](client/src/assets/home.png)

Patients can then be created using deindentified information, and patient presentation is then selected based on healthcare practitioner clinical findings:

 ![](client/src/assets/patientpres1.png)
 ![](client/src/assets/patientpres2.png)

 Orthotic brace recommendations are then returned based on selected patient presentation and saved to the healthcare practitioner's profile:

 ![](client/src/assets/savedpres.png)

 Additional functionality includes a Resources section that links to all of Elaine Owen's publicly available published works as well as healthcare practitioner login credential modification.

 Stack: 
 - Ruby on Rails
 - PostreSQL
 - Bcrypt
 - React.js
 - React Bootstrap

 Data Model:

![](client/src/assets/dbmodel.png)


## Getting Started

### Dependencies

* node.js
* react: "^17.0.2"
* react-dom: "^17.0.2"
* react-bootstrap: "^2.3.1"
* react-router-dom: "^6.2.2"
* react-scripts: "4.0.3"
* bootstrap: "^5.1.3"
* web-vitals": "^1.1.2"
* @testing-library/jest-dom: "^5.13.0"
* @testing-library/react: "^11.2.7"
* @testing-library/user-event: "^12.8.3"
* Ruby "2.7.4"
* Rails: '~> 6.1.3', '>= 6.1.3.2'
* PostreSQL: '~> 1.1'
* Puma: '~> 5.0'
* Bcrypt: '~> 3.1.7'
* Bootsnap: '>= 1.4.4'
* Active Model Serializers: "~> 0.10.12"


### Installing/Executing Program

#### **Clone this repository:**
```
git clone https://github.com/wwwestin/OSKAR.git
```
#### **Open text editor and install frontend dependencies:**
```
npm install
```
#### **Install backend dependencies:**
```
bundle install
```
#### **Create database:**
```
db:create
```
#### **Start backend server:**
```
rails s
```
#### **Start/open application:**
```
npm start
```

## Help

* Any and all troubleshooting inqueries: westin.h@gmail.com
* Will respond within (max) one business day

## Authors

Contributor name and contact info:

Westin Humble, MS, CPO (ABC Certified and ISPO Registered Prosthetist/Orthotist)
* https://github.com/wwwestin 
* https://www.linkedin.com/in/westinhumble/

## Version History

* 0.1.0
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

* A huge thanks and acknowledgement to Elaine Owen MBE, MSc, SRP, MCSP for her tireless and thorough work to systematize and standardize orthosis configuration and benefit thousands of patients across the globe!
