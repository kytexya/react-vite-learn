import React, { useState } from "react";
import {  Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";



    const UpdateUserModal = () => {
       
            const [fullName, setFullName] = useState("");
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [phone, setPhone] = useState("");
        
            const [isModalOpen, setIsModalOpen] = useState(true);

        const handleSubmitBtn = async () => {

            const res = await createUserAPI(fullName, email, password, phone);
            if (res.data) {
                notification.success({
                    message: "Create user successfully",
                    description: "User created successfully",
                })
                resetAndCloseModal();
                //await loadUser();
            } else {
                notification.error({
                    message: "Error create user",
                    description: JSON.stringify(res.message)
                })
            }

        }

        const resetAndCloseModal = () => {
            setFullName("");
            setEmail("");
            setPassword("");
            setPhone("");
            setIsModalOpen(false);
        }
            
        return (
            <Modal
                title="Update user"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal(false)}
                maskClosable={false}
                okText="Save"
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>Fullname</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
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
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value) }}
                        />
                    </div>

                </div>
            </Modal>
        )

    }

    export default UpdateUserModal;