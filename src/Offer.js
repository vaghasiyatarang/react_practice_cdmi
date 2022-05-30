const offhead ={
    textAlign:"center",
}
const offbox ={
    border :"1px solid black",
    borderRadius:"3%",
    height :"400px",
    width:"400px",
    margin:"20px",
    overflow:"hidden",
}
const img ={
    height:"75%",
    width:"100%",
    
}
const btn ={
    color:"white",
    backgroundColor:"#373576",
    padding:" 10px 30px",
    borderRadius:"7%",
    margin:"5px 40px"
}
const star ={
    height:"30px",
    paddingTop:"10px"
}

function Offer()
{
    return(
        <>
            <div style={{marginTop:"70px"}}>
                <div style={offhead}>- CREATIVE COURSE</div>    
                <h1 style={{textAlign:"center",marginTop:"0"}}>OFFERED COURSES</h1>
             </div>

            <div style={{display:"flex",marginLeft:"100px"}}>
                <div style={offbox}>
                    <img src={require('./img/off1.jpg').default} style={img}></img>
                    <h4 style={{margin:"5px", marginLeft:"20px"}}>Multimdia Courses</h4>
                    <hr style={{margin:"0"}}></hr>
                    <img src={require('./img/star.jpg').default} style={star}></img>
                    <input type="button" name="" value="Know more..!" style={btn}></input>
                </div>

                <div style={offbox}>
                <img src={require('./img/off2.jpg').default} style={img}></img>
                <h4 style={{margin:"5px", marginLeft:"20px"}}>UI/UX & Graphicsdesign</h4>
                <hr style={{margin:"0"}}></hr>
                    <img src={require('./img/star.jpg').default} style={star}></img>
                    <input type="button" name="" value="Know more..!" style={btn}></input>
                </div>

                <div style={offbox}>
                    <img src={require('./img/off3.jpg').default} style={img}></img>
                    <h4 style={{margin:"5px", marginLeft:"20px"}}>Programing IT</h4>
                    <hr style={{margin:"0"}}></hr>
                    <img src={require('./img/star.jpg').default} style={star}></img>
                    <input type="button" name="" value="Know more..!" style={btn}></input>
                 </div>

            </div>
            <div style={{display:"flex",marginLeft:"100px"}}>
                <div style={offbox}>
                    <img src={require('./img/off4.jpg').default} style={img}></img>
                    <h4 style={{margin:"5px", marginLeft:"20px"}}>Trendy Courses</h4>
                    <hr style={{margin:"0"}}></hr>
                    <img src={require('./img/star.jpg').default} style={star}></img>
                    <input type="button" name="" value="Know more..!" style={btn}></input>
                </div>

                <div style={offbox}>
                <img src={require('./img/off5.jpg').default} style={img}></img>
                <h4 style={{margin:"5px", marginLeft:"20px"}}>Civil-Meck.Engineering</h4>
                <hr style={{margin:"0"}}></hr>
                    <img src={require('./img/star.jpg').default} style={star}></img>
                    <input type="button" name="" value="Know more..!" style={btn}></input>
                </div>

                <div style={offbox}>
                    <img src={require('./img/off6.jpg').default} style={img}></img>
                    <h4 style={{margin:"5px", marginLeft:"20px"}}>Business Devlopment</h4>
                    <hr style={{margin:"0"}}></hr>
                    <img src={require('./img/star.jpg').default} style={star}></img>
                    <input type="button" name="" value="Know more..!" style={btn}></input>
                 </div>

            </div>
        </>
    )
}

export default Offer;