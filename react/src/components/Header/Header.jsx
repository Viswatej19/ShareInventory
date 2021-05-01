import React, { Component } from 'react'
import '../../plugins/fontawesome-free/css/all.min.css';
import '../../dist/css/adminlte.min.css';
import './font.css';
export class Header extends Component {
    render() {
        return (
            <div>
             
		
                {/* <!-- Navbar --> */}
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                {/* <!-- Left navbar links --> */}
                  <ul class="navbar-nav">
                    <li class="nav-item">
                    
                    </li>
                    <li class="nav-item d-none d-sm-inline-block"> 
                    
                    <a href="/" class="nav-link"><i class="fas fa-home"></i> Home</a>
                    </li>
                  </ul>
                </nav>
                {/* <!-- /.navbar --> */}
		
                <aside class="main-sidebar sidebar-dark-primary elevation-4" style = {{backgroundColor: '#676767'}}>
                {/* <!-- Brand Logo --> */}
                  <a href="/" class="brand-link">
                    <img src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/40390415410_4933f04732_b_660_240220093935.jpg"
                      alt=""
                              style={{backgroundColor: "white"}}
                      class="brand-image img-circle elevation-3"/>
                    <span class="brand-text font-weight-light">share Market</span>
                  </a>
                  {/* <!-- Sidebar --> */}
                  <div class="sidebar" style = {{backgroundColor: '#575757'}}>
                    <nav class="mt-2">
                      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item">
                        <a href="/add_product" class="nav-link">
                        <i class="fas fa-cart-arrow-down"></i>  
                          <p>Add Product</p>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a href="/sales" class="nav-link">
                        <i class="fas fa-scroll"></i>
                          <p class="text">Sales Details</p>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a href="/update_sales" class="nav-link">
                        <i class="fas fa-pencil-alt"></i>
                          <p class="text">Update Sales</p>
                        </a>
                        </li>
                        
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- /.sidebar --> */}
                </aside>
		
	
		
	 

            </div>
        )
    }
}

export default Header
