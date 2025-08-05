import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import $, { data } from 'jquery'
//import pic from '../images/team/team lead.jpg'
import './Lcard.css'
import SJ from '../images/SJ.jpg'
//import { useLocation } from 'react-router'

const AddImage =()=>{

 const isSignin = useSelector((state) => state.isSignin);
 const history = useHistory();
 const [status,setStatus]=useState('')
 const[image,setImage]=useState('')



//   if(isSignin.status === false){
//     alert('please signin first!!')
//     history.push('/user/login')
//   }

// useEffect(() => {
//     console.log(`All Learning License Details`)
//     getLearning()
//   }, [])


  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const SaveImage=()=>{
      console.log(isSignin.user.userId)
    const id = isSignin.user.email
    const data =new FormData()
    data.append('profile',image)
    data.append('email',id)
    console.log(image)
    console.log(id)
    axios.post(url + '/user/addimage',data).then((response) => {
        const res = response.data
        if (res.status === 'OK'){
            if(res.message==='Success')
            history.push('/user/home')

            else
            alert(res.message)
        }
         

        })

  }
  

 




return(
<div id='body'>

<div className="container-fluid p-1 my-3 bg-success text-white">
		<h1 style={{textAlign:"center"}}>eRTO System</h1>
		<p style={{textAlign:"center"}}>Welcome to the eRTO System.The
			place where transparency is the main moto.</p>
	</div>



	<nav
		className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
		<ul className="navbar-nav mr-auto">
			<li className="nav-item"><Link className="nav-link" to={ { pathname: "/user/home"}}>Home</Link></li>

			<li className="nav-item dropdown"><a
				className="nav-link dropdown-toggle active" href="#" id="navbardrop"
				data-toggle="dropdown"> License </a>
				<div className="dropdown-menu">

						<Link className="dropdown-item"  to={ { pathname: "/license/learning"}}>Learning License</Link>
       <Link className="dropdown-item"  to={ { pathname: "/license/permanent"}}>Permanent License</Link>
				</div></li>

			  <li class="nav-item "><Link className="nav-link"  to={ { pathname: "/user/mocktest"}}>MockTest</Link></li> 

			<li className="nav-item "><Link className="nav-link" to={ { pathname: "/user/status"}}>Status </Link></li>

		</ul>

		<ul className="navbar-nav ml-auto">
			<li className="nav-item"><a className="nav-link"
				href="/user/logout">
					<button type="button" className="btn btn-info btn-sm">Log Out</button>
			</a></li>

		</ul>
	</nav>


	<hr />

<br />

<div className="form-group text-body">
   {/* <h5 style="font-family:redressed,georgia,garamond,serif;"> */}
       <h5 style={{fontFamily:"redressed georgia garamond serif"}}> 
   <label for="passportImage">Upload Passport Size Photo:</label></h5>
    <input type="file" name="passportImage" className="form-control-file" id="passportImage" accept="image/png,image/jpeg" required="required" onChange={(event) => {
									setImage(event.target.value)
								  }}/>
  </div>
  <button className="btn btn-outline-success" onClick={SaveImage} >Upload Image</button>
</div>
)
}

export default AddImage