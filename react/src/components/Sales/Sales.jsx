import React, { Component } from 'react'
import Header from '../Header/Header'
import '../../plugins/fontawesome-free/css/all.min.css';
import '../../dist/css/adminlte.min.css';
import './font.css';
import Expire from '../Expire/Expire';
import axios from 'axios'
export class Sales extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/sales')
        .then(res=>{
            console.log(res);
            this.setState({posts:res.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    createPDF=()=> {
        console.log("in generate pdf")
       

        // CREATE A WINDOW OBJECT.
        var win = window.open('/table', '_blank', 'height=700,width=700');

       

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.
        
    }
    updatesales=()=> {
        let path = `/update_sales`;
        this.props.history.push(path);
      }
    render() {
        const {posts}=this.state;
        return (
            <div>
                <div class="hold-transition sidebar-mini">
                    
                    <div class="wrapper">
                    <Expire delay="500">
                    <div delay="2000" class="preloader flex-column justify-content-center align-items-center">
                        <img class="animation__shake" src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/40390415410_4933f04732_b_660_240220093935.jpg" alt="AdminLTELogo" height="60" width="60"/>
                    </div>
                    </Expire>
                    
                        <Header/>

                        <div class="content-wrapper">
                            
                            <section class="content-header">
                                <h1>Share Market Inventory Management</h1>
                            </section>
                            
                            <section class="content">
                                <div class="card">
                                    <div class="card-header">
                                    <h3 class="card-title">Sales Details</h3>
                                    
                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                        <i class="fas fa-minus"></i></button>
                                        <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i class="fas fa-times"></i></button>
                                    </div>
                                    </div>
                                    <div class="card-body table-responsive p-0" style={{height: "400px"}}>
                                        <table id="tab" class="table table-striped table-head-fixed text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th style={{width: "20%"}} >Purchase Date</th>
                                                    <th style={{width: "20%"}}  >Product ID</th>
                                                    <th style={{width: "20%"}}  >Unit Price</th>
                                                    <th style={{width: "20%"}}  >Quantity</th>
                                                    <th style={{width: "20%"}}  >Total Sales(in Rs)</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    posts.map((post)=>{
                                                        
                                                        return(
                                                            <tr key={post.product_id}>
                                                                <td>{post.purchase_date}</td>
                                                                <td>{post.product_id}</td>
                                                                <td>{post.unit_price}</td>
                                                                <td>{post.quantity}</td>
                                                                <td>{post.total_sales}</td>
                                                                
                                                                
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                
                                                
                                                
                                                
                                            </tbody>
                                        </table>
                                            
                                    </div>
                                </div>
                            </section>
                            <div  class="card-footer clearfix">
                                <button type="button" style={{backgroundcolor:"#12A3B6",float:"left"}} onClick={this.updatesales} class="btn btn-primary float-right"><i class="fas fa-plus"></i> Sales Update</button>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Sales
