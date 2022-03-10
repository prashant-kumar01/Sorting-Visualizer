const ArrayBars=(props)=>{
    let style={
        backgroundColor:`${props.unsortedColor}`,
        height:`${props.value}px`,
        width:`${props.width}px`,
        display:"absolute",
        margin:"0 2px",
        marginTop:`${700-props.value}px`
    }
    return(
        <div style={{display:'inline-block'}}>
            <div style={style} className={props.class}></div>
        </div>
    )
}
export default ArrayBars;