// const Slider =(props) =>{
function Slider(props){

    return(
        <>
            
            <img src={require('./img/1.jpg').default} width="100%"></img>
            <div>{props.name}</div>
        </>
    )
}

export default Slider;