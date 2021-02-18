import React, { Component } from 'react'
import { Row, Col , Card,BackTop,Divider} from "antd"

export default class About extends Component {
     style = {
        height: 40,
        width: 90,
        lineHeight: "40px",
        borderRadius: 4,
        backgroundColor: "#006466",
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
      };
    render() {
       
        return (
              
               <div className="" >  
                 <br/>
                 <Row gutter={16}>
                   <Col span={8}>
                     <Card className = 'Card-Title' title={<h3><b>About Us</b></h3>} bordered={false} style={{height: "350px"}}>
                       <p className = 'Card-contatnt'>MainToU is the first place to go once a tech issue occurred, it will help any company of any industry that faced a technical issue to register or login to the website and book an available appointment from the appointments calendar, and edit, cancel the booked appointment, with the ability to track the appointment status whether it’s confirmed, in progress or finished to be aware of any changes, MainToU will also have Tech Man who's responsible to maintain the issues and easily change the appointment status, with an Admin to manage the user privileges by adding, deleting a Tech Man or Maintenance Companies.</p>
                     </Card>
                   </Col>
                   <Col span={8}>
                     <Card className = 'Card-Title' title={<h3><b>Our Features</b></h3>}bordered={false}  style={{height: "350px"}}>
                       <ul className = 'Card-contatnt'>
                         <li>With ManiToU, dozens of services from registered and certified companies in the application. When placing your order, the options that suit you are present.</li>
                         <li>MainToU provides the client with maintenance services at the client's premises.</li>
                         <li>All maintenance done through the MainToU is performed by reliable technical men who are professionals in their field. We guarantee a full check of your issues until maintenance that done.</li>
                       </ul>       
                    </Card>
                   </Col>
                   <Col span={8}>
                    <Card className = 'Card-Title' title={<h3><b>Our Team</b></h3>} bordered={false}  style={{height: "350px"}}>
                    <ul className = 'Card-contatnt'>
                        <li>Abeer Albawardi</li>
                        <li>Assel Alqasem</li>
                        <li>Amani Alosaimi</li>
                        <li>Raghad Abu Mansour</li>
                        <li>Hind Alzahrani</li>
                    </ul>  
                    </Card>
                   </Col>  
               </Row>
              
            </div>  
          )
      } 
   }
