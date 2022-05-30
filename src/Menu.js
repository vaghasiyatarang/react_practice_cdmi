const menu ={
    color:"lightgreen",
    display:"flex",
    listStyle:"none",
    paddingRight:"10px",
    // fontSize:"20px";
    fontWeight:"700",
}
const creative ={
    width:"200px",
    color:"#372A69",
    paddingRight:"100px",
    paddingLeft:"100px",
    fontSize:"30px",
}

const mar ={
    padding:"10px",
}
const mainm={
    color:"black",
}
const sofac ={
    display:"none",
}

const submenu ={
    // display:"none",
    backgroundColor:"red",
}
const main={
    backgroundColor:"gold",
}
// const menu li a:hover submenu ={
//     backgroundColor:"white",
// }

function Menu() 
{
    return(
        
            <div style={main}>
                <ul style={menu}>
                    <li style={mar}>
                        <img src={require('./img/star.jpg').default} width="100%" style={creative}></img>   
                    </li>


                    <li style={mar}>
                        <a href="#" style={mainm}>Home
                        
                            <ul style={submenu}>
                                <li><a href="#">back</a></li>
                                <li><a href="#">next</a></li>
                            </ul>
                    
                        </a>
                    </li>


                    <li style={mar}>
                        <a href="#"  style={mainm}>COURSES</a>
                    </li>
                    <li style={mar}>
                        <a href="#" style={mainm}>COLLEGE COURSES</a>
                    </li>
                    <li style={mar}>
                        <a href="#" style={mainm}>ACTIVITIES</a>
                        <ul style={sofac}>
                            <li>Gallery</li>
                            <li>Events</li>
                        </ul>
                    </li>
                    <li style={mar}>
                        <a href="#" style={mainm}>BLOG</a>
                    </li>
                    <li style={mar}>
                        <a href="#" style={mainm}>KNOW US</a>
                    </li>
                    <li style={mar}>
                        <a href="#" style={mainm}>GET IN TOUCH</a>
                    </li>
                    <li style={mar}>
                        <a href="#" style={mainm}>STUDENT ZONE</a>
                    </li>
                </ul>
            </div>
        
    )
}
export default Menu;