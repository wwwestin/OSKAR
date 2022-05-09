import React from "react";
import "./App.css";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"

function Resources () {


return (
    <div className= "resourcesCard">
        <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src="https://d3i71xaburhd42.cloudfront.net/d0b80bf6abe6d51563730e50fd0ad914436d7a74/5-Figure3.1-1.png" />
                <Card.Body>
                    <Card.Title>Publications</Card.Title>
                        <Card.Text>
                            OSKAR was developed by Elaine Owen, MBE, MSc, SRP, MCSP. Below are links to her publications which led to the formulation of this method:
                        </Card.Text>
                </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://stax.strath.ac.uk/downloads/q811kj90x">Shank Angle to Floor Measures of Tuned Ankle-Foot Orthosis Footwear Combinations used with Children with Cerebral Palsy, Spina Bifida and Other Conditions</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://journals.sagepub.com/doi/10.3109/03093646.2010.485597?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed">The Importance of Being Earnest about Shank and Thigh Kinematics Especially When Using Ankle-Foot Orthoses</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://journals.sagepub.com/doi/10.3109/03093646.2010.503225?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed">The Effects of Tuning an Ankle-Foot Orthosis Footwear Combination on Kinematics and Kinetics of the Knee Joint of an Adult with Hemiplegia</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://nwaaop.files.wordpress.com/2020/03/10-owen-e-2014-apcp-jnl-ss-to-rrw-pt-1.pdf">From Stable Standing to Rock and Roll Walking (Part 1) The Importance of Alignment, Proportion and Profiles</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://nwaaop.files.wordpress.com/2020/03/11-owen-e-2014-apcp-jnl-ss-to-rrw-pt-2.pdf">From Stable Standing to Rock and Roll Walking (Part 2) Designing, Aligning and Tuning Orthoses for Standing Stepping and Gait</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="http://media.mycrowdwisdom.com.s3.amazonaws.com/aaop/Resources/JOP/2015/2015-16.pdf">A Proposed Clinical Algorithm For Dorsiflexion Free AFOFCS Based On Calf Muscle Length, Strength, Stiffness and Skeletal Alignment</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://pubmed.ncbi.nlm.nih.gov/28884616/">Effect of Walking in Footwear with Varying Heel Sole Differentials on Shank and Foot Segment Kinematics</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://pediatricapta.org/includes/fact-sheets/pdfs/Ankle-Foot%20Orthoses%20and%20Footwear%20for%20Children%20with%20Cerebral%20Palsy.pdf">Ankle-Foot Orthoses and Footwear for Children with Cerebral Palsy- Selecting Optimal Designs</a></ListGroupItem>
                <ListGroupItem><a className= "resourceLink" target="_blank" rel="noreferrer" href="https://pubmed.ncbi.nlm.nih.gov/35250237/">Comparison of Sagittal Plane Stiffness of Nonarticulated Pediatric Ankle-Foot Orthoses Designed to be Rigid</a></ListGroupItem>
        </ListGroup>
    </Card>
  </div>
    )
}

export default Resources;

