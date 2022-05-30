
const main ={
    backgroundColor:"#ECE6E6",
    height:"400px",
    width:"100%",
    display:"flex",
    
}

const one ={
    height:"400px",
    width:"400px",
    // border:"2px solid black",
    // position: "absolute",

    // top:"-100px",
    // zIndax:"-1",
}
// const two ={
//     height:"400px",
//     width:"500px",
//     position: "position: relative",
//     // left:"-20px",
//     // top:"-1px",
    
//     zIndax:"-1",
// }
// const dell ={
   

// }
const happy ={
    margin:"200px",
}
const alu ={
    color :"black",
}
function Hs()
{
    return(
        <>

            <div style={main}>
                
                    <div style={{width:"900px"}}>
                        <span style={happy}>HAPPY STUDENT</span>
                        <h2 style={alu}>ALUMANI SPEAK</h2>
                        <p>It was an amazing experience with Creative Design & Multimedia Institute(CDMI) for two years. I learned lots of new things that helped me expand my knowledge and enrich myself as a web Designer. Thanks to Creative Design & Multimedia Institute(CDMI).</p>
                    </div>
            
                <div>
                    <img src={require('./img/thumsup.png').default} style={one}></img>
                    {/* <img src={require('./img/cdmi.jpg').default} style={two}></img> */}
                </div>
            </div>
        </>
    )
}
export default Hs;