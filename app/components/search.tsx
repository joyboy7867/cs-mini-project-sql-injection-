"use client"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Search = () => {
    const [search, setsearch] = useState('')
    const change=(e:any)=>{
        
        setsearch(e.target.value)
        console.log(search)
    }
    return <div>
        <Input onChange={change} placeholder="Search" />

    </div>;
}


export default Search;