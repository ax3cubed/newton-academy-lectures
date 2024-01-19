
export const Search = ({doFilter}) =>{
    
    return(
        <form>
            <input onChange={() => doFilter(/*value1,value2*/)} type="text" placeholder="Search...."/>
            <label>
                <input type="checkbox"/>
                <br></br>
                Only show products in Stock
            </label>
        </form>
    )
}