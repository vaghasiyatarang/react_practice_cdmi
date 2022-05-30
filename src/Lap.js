const Lapimg ={
    height:"250px",
    width:"100%",
    marginTop:"100px",
    marginBottom:"100px",
}

function Lap(props)
{
    return(
        <>
              <div>
                <img src={require('./img/lap.jpg').default} style={Lapimg}></img>
            </div>
            <div>{props.name}</div>
        </>
    )
}
export default Lap;