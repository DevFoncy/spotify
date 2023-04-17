import React , { useState, useEffect} from 'react'
import { rangeService } from '../../domain/services/Range.service'

import SimpleRange from "./components/SimpleRange"
import ReactJson from 'react-json-view'

import { SimpleRangeModel } from "../../domain/models/SimpleRange"

import "./styles.css"

export const Exercise1 = () => {
  const [simpleRange, setSimpleRange] = useState<SimpleRangeModel>({min : 0, max: 100})
  const [json, setJson] = useState<{}>({})

  //Function to only show the response in json viewer
  const getJsonObject = async () => {
    const response = await (await fetch('https://demo7088036.mockable.io/slider')).json();
    setJson(response)
  }

  useEffect(() => {
    rangeService.getRange().then(setSimpleRange)
    getJsonObject()
  }, [])

  return (
    <div className='exercise-1'>
       <h1>Simple Range </h1>
       <p>Data provided from 
         <a href='https://demo7088036.mockable.io/slider' target={"_blank"} rel="noreferrer"> https://demo7088036.mockable.io/slider</a></p>
         <ReactJson src={json} theme="monokai" style={{width: "300px" , height: "auto" , margin: "auto", marginBottom: "10px", padding: "10px" }}/>
       <SimpleRange min={simpleRange.min} max={simpleRange.max}/>   
    </div>
  )
}