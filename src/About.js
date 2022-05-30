const one ={
    height:"400px",
    width:"850px",
    backgroundColor:"white",
    border:"1px solid white",
    boxShadow:"1px 1px 10px grey",
    borderRadius:"0 250px 250px 0",
    paddingLeft:"70px",
    paddingTop:"30px",
    zIndex:"1",
    
}
const main ={
    backgroundColor:"#FACD16",
    textAlign:"center",
    width:"150px",
    // marginLeft:"48%",
    borderRadius:"3px",
    padding:"17px 20px",
  }
  const two ={
      height:"350px",
      width:"550px",
      paddingTop:"30px",
      position: "absolute",
      right:"1px",
      top:"-5px",
      zIndax:"-1",
  }
  const extra ={
    display:"flex",
    // marginBottom:"",
    position: "relative",
  }

function About()
{
    return(
        <>
            <div style={extra}>
                <div style={one}>
                    <div style={{padding:"10px"}}>~ ABOUT US</div>
                    <div style={{fontWeight:"700",padding:"10px"}}>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</div>
                    <p style={{color:"#918B8B",textAlign:"justify", lineHeight:"20px",paddingRight:"50px",fontSize:"18px",margin:"0"}}>
                        Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 7 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                    </p>

                    <div style={{marginTop:"30px",marginBottom:"50px"}}>
                        <div style={main}>
                        <a style={{color:"white"}}>Enroll Now...! </a>
                        </div>
                    </div>
                </div>

                <div style={two}>
                    <img src={require('./img/cdmi.jpg').default} width="100%"></img>
                </div>
            </div>
            

        </>
    )
}
export default About;