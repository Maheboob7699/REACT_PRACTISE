function PropsPractise({name, onClick}){
    return(
        <>
         <h1>{name ? "Mehboob" : "Musharaf"}</h1>
         <button onClick={onClick}>clicked</button>
        </>
    )
}
export default PropsPractise