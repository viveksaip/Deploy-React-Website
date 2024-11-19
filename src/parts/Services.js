import React from 'react';
import '../App.css';  // Import your CSS

function Services() {

    return (
            
        <>
            <div className='hgreenServices'>
                <p>Services</p>
            </div>
        
            <div className='VScssContainer'>

                <div class="vertical_cylinder">
                    <p style={{fontWeight: 'bold', color: 'white' }} >Social Media Marketing/SEO</p>
                </div>

                <div class="vertical_cylinder" style={{marginTop: '100px'}}>
                    <p style={{fontWeight: 'bold', color: 'white'}} >App Development</p>
                </div>

                <div class="vertical_cylinder" style={{marginTop: '200px'}}>
                    <p style={{fontWeight: 'bold' , color: 'white'}} > Website Development</p>
                </div>

                <div class="vertical_cylinder" style={{marginTop: '100px'}}>
                    <p style={{fontWeight: 'bold', color: 'white'}} >Financials and GST</p>
                </div>

                <div class="vertical_cylinder">
                    <p style={{fontWeight: 'bold', color: 'white'}} >Sales and Lead Generation</p>
                </div>

            </div>
        
        </>

    );
}

export default Services;

