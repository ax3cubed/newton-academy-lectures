import { useEffect, useState } from "react"

export const Search = ({searchText,
    showOnlyProductInStock, OnSearchTextChange, OnProductInStockChange}) =>{

    return(
        <form>
            <input value={searchText} 
            onChange={(e) => OnSearchTextChange(e.target.value)}
            type="text" placeholder="Search...."/>
            <label>
                <input onChange={(e) => OnProductInStockChange(e.target.checked)} value={showOnlyProductInStock}  type="checkbox"/>
                <br></br>
                Only show products in Stock
            </label>
        </form>
    )
}