import { PasswordGenerator } from "./PasswordGenerator";
import './Hasher.css'
import React from "react";
export const Hasher = () => {
  const [showPassword, setShowPassword] = React.useState("password");
  const [oldPass, setOldPass] = React.useState("");
  const [hashValue, setHashValue] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const handleShow = () => {setShowPassword(showPassword === "input" ? "password" : "input")}
  const handleCopy = () => {if(navigator.clipboard){navigator.clipboard.writeText(hashValue.replace("&amp", "&"))}}
  const handleEnhance = () => {
    setHashValue(ph.getPassword(oldPass, website))
  }
  console.log(oldPass, website)
  const ph = new PasswordGenerator(6,22);
  return (
    <div className="hasherCont">
      <h2>Password Hasher</h2>

      <div className="hasherInput">
        <div className={"inputFields"}>
          <label htmlFor={"website"}>Website:</label>
          <input 
            type={"input"} 
            name={"website"} 
            placeholder={"Optional..."}
            className={"webInput field"}
            value={website}
            onChange={()=>setWebsite(document.getElementsByClassName('webInput')[0].value)}
              
          />
        </div>

        <div>
          <div className={"inputFields"}>
            <label htmlFor={"in"}>Phrase: </label>
            <input 
              type={showPassword} 
              name={"in"} 
              className={"userInput field"}  
              placeholder={"Old Password..."} 
              value={oldPass} 
              onKeyDown={(evt)=>{if(evt.key === "Enter"){(handleEnhance())}}}
              onChange={()=>setOldPass(document.getElementsByClassName('userInput')[0].value)} 
            />
          </div>
          <div className={"buttonBox"}>
            <input type={"button"} value={showPassword === "password" ? "Show" : "Hide"} className={"button showPass"} onClick={handleShow} />
            <input type={"button"} value={"Enhance Password"} className={"button"} onClick={handleEnhance} />
          </div>
        </div>
      </div>

      <div className={"results"}>
        <p className={"result"}>{hashValue}</p>
        <input type={"button"} value={"Copy"} className={"button"} onClick={handleCopy} />
      </div>
    </div>
  )
}