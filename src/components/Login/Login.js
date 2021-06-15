import React, { useContext, useState } from 'react';
import { ImgDiv, Form, LoginForm, SignUp, ApplicantForm, ClientForm, InputGroup, LoginContainer, Button } from './Login.elements';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Login = () => {
    const { setPannel } = useContext(UserContext);

    const [newUser, setNewUser] = useState(false);
    const [isClient, setIsClient] = useState(true);
    const [user, setUser] = useState({});
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (newUser) {
            handleSignUpUser();


        }
        else {
            handleSignIn();

        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(user);
        const userData = { ...user };
        userData[e.target.name] = e.target.value;
        setUser(userData);


    }

    const handleSignUpUser = () => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                updateUserName(user.name);
                toast.success('Successfully SignUp !');
                const userData = { ...user };
                userData.userClient = isClient;
                userData.data = {};
                getIdToken();
                uploadToServer(userData);
                history.replace(from);


            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }

    const uploadToServer = (data) => {
        fetch('http://localhost:5000/addUser', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => toast.error(err));
    }
    const updateUserName = (name) => {
        alert(name);
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        }).then(function () {
            toast.success(`welcome ${name} !`)
        }).catch(function (error) {
            toast.error(error);
        });
    }
    const handleSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                console.log(userCredential.user);
                toast.success(`Welcome ${userCredential.user.displayName}!`);
                getIdToken();
                pannelUpdater();
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                toast.error(errorMessage);
            });
    }
    const getIdToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            localStorage.setItem('idToken', JSON.stringify(idToken));
            pannelUpdater();
        }).catch(function (error) {
            // Handle error
        });
    }
    const pannelUpdater = () => {
        const token = localStorage.getItem('idToken');
        fetch(`http://localhost:5000/isClient?token=${token}`)
            .then(res => res.json())
            .then(data => {
                if (data.userClient) {
                    setPannel('client')
                }
                else {
                    setPannel('applicant')
                }
            })
    }



    return (
        <LoginContainer>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            <ImgDiv>
                {newUser ?
                    <>
                        <img src="https://i.imgur.com/cUKFyXF.jpg" alt="" />
                        <NavLink to='/login' onClick={() => setNewUser(false)}>
                            Existing user? Let's Login !
                </NavLink>
                    </>
                    :
                    <>
                        <img src="https://i.imgur.com/dg1bsmR.png" alt="" />
                        <NavLink to='/login' onClick={() => setNewUser(true)}>
                            New user? Let's SignUp !
                </NavLink>
                    </>

                }


            </ImgDiv>
            <Form onSubmit={handleSubmit}>
                {newUser ?

                    <SignUp>
                        <h1>Fill-up the form with yout information</h1>
                        <div className="toggleBar">
                            <p className={isClient ? "active" : null} onClick={() => setIsClient(true)}>Client</p>
                            <p className={!isClient ? "active" : null} onClick={() => setIsClient(false)}>Applicant</p>
                        </div>

                        {isClient ?
                            <ClientForm >

                                <InputGroup>
                                    <i class="far fa-user"></i>
                                    <input name='name' onChange={handleChange} type="text" placeholder="Your Name" required />
                                </InputGroup>
                                <InputGroup>
                                    <i class="far fa-envelope"></i>
                                    <input name='email' onChange={handleChange} type="email" placeholder="Email" required />
                                </InputGroup>
                                <InputGroup>
                                    <i class="fas fa-key"></i>
                                    <input name='password' onChange={handleChange} type="password" placeholder="Password" required />
                                </InputGroup>

                                <Button type="submit">
                                    Submit
                        </Button>

                            </ClientForm>
                            :
                            <ApplicantForm>
                                <InputGroup>
                                    <i class="far fa-envelope"></i>
                                    <input name='name' onChange={handleChange} type="text" placeholder="Your Name" required />
                                </InputGroup>
                                <InputGroup>
                                    <i class="far fa-envelope"></i>
                                    <input name='email' onChange={handleChange} type="email" placeholder="Email" required />
                                </InputGroup>
                                <InputGroup>
                                    <i class="fas fa-key"></i>
                                    <input name='password' onChange={handleChange} type="password" placeholder="Password" required />
                                </InputGroup>

                                <InputGroup>
                                    <i class="fas fa-key"></i>
                                    <input name='address' onChange={handleChange} type="text" placeholder="Your Address" required />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="">Date of Birth:</label>
                                    <input name='dateOfBirth' onFocus={handleChange} type="date" placeholder="" required />
                                </InputGroup>
                                <InputGroup>
                                    <p>Gender:</p>
                                    <select name='gender' onBlur={handleChange} placeholder="Gender" required >
                                        <option value="female">Male</option>
                                        <option selected value="male">Female</option>

                                    </select>
                                </InputGroup>

                                <Button type="submit">
                                    Submit
                        </Button>
                            </ApplicantForm>

                        }
                    </SignUp>
                    :
                    <LoginForm >
                        <h1>Login With Your Account</h1>

                        <InputGroup>
                            <i class="far fa-envelope"></i>
                            <input name='email' onChange={handleChange} type="email" placeholder="Email" required />
                        </InputGroup>
                        <InputGroup>
                            <i class="fas fa-key"></i>
                            <input name='password' onChange={handleChange} type="password" placeholder="Password" required />
                        </InputGroup>

                        <Button type="submit">
                            Login
                        </Button>

                    </LoginForm>

                }

            </Form>
            <button onClick={() => handleSignOut()} >  sign out</button>
        </LoginContainer>
    );
};

export const decodedUser = () => {
    const token = localStorage.getItem('idToken');
    if (!token) {
        return {
            isSignedIn: false
        };
    }
    else {
        const { name, email } = jwt_decode(token);
        return {
            isSignedIn: true,
            name: name,
            email: email,
        }
    }
}


export const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
        localStorage.removeItem('idToken');

        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

export default Login;