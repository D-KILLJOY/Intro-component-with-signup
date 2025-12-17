import { useState } from "react";
import errIcon from "./assets/images/icon-error.svg";

function App() {
    const [inputStatus, setInputStatus] = useState({
        firstName: { value: "", error: false },
        lastName: { value: "", error: false },
        email: { value: "", error: false },
        password: { value: "", error: false },
    });

    console.log(inputStatus.firstName);

    function formValidate(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <main className="bg-[url('./assets/images/bg-intro-mobile.png')] bg-c-Red-400 w-full min-h-screen flex justify-center items-center px-6 py-24">
            <div>
                <section className=" mb-15">
                    <h1 className="font-poppins-700 text-white text-3xl text-center mb-6">
                        Learn to code by watching others
                    </h1>
                    <p className="text-md font-poppins-500 text-center text-white">
                        {" "}
                        See how experienced developers solve problems in
                        real-time. Watching scripted tutorials is great, but
                        understanding how developers think is invaluable.
                    </p>
                </section>
                <section>
                    <div className="bg-c-Purple-700 rounded-xl py-6 px-15 mb-6 shadow-p-shadow">
                        <p className="text-white text-md text-center font-poppins-400 text-base">
                            <span className="font-poppins-700">
                                Try it free 7 days
                            </span>{" "}
                            then $20/mo. thereafter
                        </p>
                    </div>
                    <form
                        onSubmit={formValidate}
                        className="bg-white p-6 rounded-xl flex flex-col gap-4 shadow-p-shadow"
                    >
                        <div className="relative">
                            <input
                                name="firstName"
                                className={
                                    inputStatus.firstName.error === true
                                        ? "input__err"
                                        : " "
                                }
                                type="text"
                                placeholder={
                                    inputStatus.firstName.error === true
                                        ? ""
                                        : "First Name"
                                }
                            />

                            {inputStatus.firstName.error === true && (
                                <img
                                    src={errIcon}
                                    className="absolute bottom-1/2 right-3"
                                    alt=""
                                />
                            )}
                            {inputStatus.firstName.error === true && (
                                <p className="error__msg">
                                    {" "}
                                    First Name cannot be empty
                                </p>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                name="lastName"
                                className={
                                    inputStatus.lastName.error === true
                                        ? "input__err"
                                        : " "
                                }
                                type="text"
                                placeholder={
                                    inputStatus.lastName.error
                                        ? ""
                                        : "Last Name"
                                }
                            />
                            {inputStatus.lastName.error === true && (
                                <img
                                    src={errIcon}
                                    className="absolute bottom-1/2 right-3"
                                    alt=""
                                />
                            )}
                            {inputStatus.lastName.error === true && (
                                <p className="error__msg">
                                    {" "}
                                    Last Name cannot be empty
                                </p>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                name="email"
                                className={
                                    inputStatus.email.error === true
                                        ? "input__err"
                                        : " "
                                }
                                type="email"
                                placeholder={
                                    inputStatus.email.error === true
                                        ? ""
                                        : "Email Address"
                                }
                            />
                            {inputStatus.email.error === true && (
                                <img
                                    src={errIcon}
                                    className="absolute bottom-1/2 right-3"
                                    alt=""
                                />
                            )}
                            {inputStatus.email.error === true && (
                                <p className="error__msg">
                                    {" "}
                                    Looks like this is not an email
                                </p>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                name="password"
                                className={
                                    inputStatus.password.error === true
                                        ? "input__err"
                                        : " "
                                }
                                type="password"
                                placeholder={
                                    inputStatus.password.error === true
                                        ? ""
                                        : "Password"
                                }
                            />
                            {inputStatus.firstName.error === true && (
                                <img
                                    src={errIcon}
                                    className="absolute bottom-1/2 right-3"
                                    alt=""
                                />
                            )}
                            {inputStatus.firstName.error === true && (
                                <p className="error__msg">
                                    {" "}
                                    Password cannot be empty
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="border-c-Green-400 bg-c-Green-400 text-white uppercase font-poppins-500 py-4 rounded-lg shadow-g-shadow hover:bg-c-Green-400/70 cursor-pointer"
                        >
                            Claim your free trial
                        </button>
                        <p className="text-center text-xs font-poppins-500 px-2 text-c-Purple-350 leading-6">
                            By clicking the button, you are agreeing to our{" "}
                            <span className="text-c-Red-400 font-poppins-700">
                                Terms and Services
                            </span>
                        </p>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default App;
