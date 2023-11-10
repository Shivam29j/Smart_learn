import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "./InputControl.js";
import "./css/signup.css";
import { auth } from "./firebase.js";


const Signup = () => {
    const navigate = useNavigate();
    const [values , setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    //error come then function called
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitDisabled] = useState(false);


    const handleSubmit = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        setSubmitDisabled(true);

        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/");
            })
            .catch((error) => {
                setSubmitDisabled(false);
                setErrorMsg(error.message);
            });

    };


    return (
        <>
            <div className="container">
                <div className={"innerBox"}>
                    <h1 className={"heading"}>SignUp</h1>
                    <InputControl
                        label="Name"
                        placeholder="Enter your name"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, name: event.target.value }))
                        }
                    />
                    <InputControl
                        label="Email"
                        placeholder="Enter email address"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                    />
                    <InputControl
                        label="Password"
                        placeholder="Enter password"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, pass: event.target.value }))
                        }
                    />

                    <div className="footer">
                        <b className="error">{errorMsg}</b>
                        <button onClick={handleSubmit} disabled={submitButtonDisabled}>SignUp </button>

                        <p>
                            Already have an account?{" "}
                            <span>
                                <Link to="/login">Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Signup;