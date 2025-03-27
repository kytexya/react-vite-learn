import { Button, Input } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleClickBtn = () => {
        alert("User created successfully")
    }
    return (
        <div className="user-form" style={{margin: "20px 0"}}>
                <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
                    <div>
                        <span>Fullname</span>
                        <Input
                        value={fullName}
                        onChange={(event)=>{setFullName(event.target.value)}}
                         />
                    </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                     />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phoneNumber}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>
                <div>
                 <Button
                    onClick={handleClickBtn}
                    type="primary">create user</Button>
                </div>
                </div>
            </div>
    )

}

export default UserForm;