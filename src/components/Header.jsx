'use client'
import React from 'react'
import { useStateContext } from '../../context/stateContext'

const Header = ({newsApiKey}) => {
    const [value,setValue]=React.useState('')
    const {searchContent}=useStateContext()
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center nav-tools">
                <h1>Compass</h1>
                <div className="position-relative">
                    <form action="" method="post">
                        <input type="text" name="query" value={value} onChange={(e)=>{
                            setValue(e.target.value)
                        }}/><input type="submit" value="Search" onClick={async(e)=>{
                            await searchContent(newsApiKey,e.target.value)
                        }}/>
                    </form>
                </div>
            </div>

        </header>
    )
}

export default Header
