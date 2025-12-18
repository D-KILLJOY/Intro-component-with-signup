import { useState } from "react";
import errIcon from "./assets/images/icon-error.svg";

type FieldKey = "firstName" | "lastName" | "email" | "password";
type InputField = {
    value: string;
    error: boolean;
    errormsg: string;
};
type InputStatus = {
    firstName: InputField;
    lastName: InputField;
    email: InputField;
    password: InputField;
};

type formStat = "form" | "submitted";

function App() {
    const [signUpStatus, setSignUpStatus] = useState<formStat>("form");
    const [inputStatus, setInputStatus] = useState<InputStatus>({
        firstName: { value: "", error: false, errormsg: "" },
        lastName: { value: "", error: false, errormsg: "" },
        email: { value: "", error: false, errormsg: "" },
        password: { value: "", error: false, errormsg: "" },
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function updateInput(key: FieldKey, value: string) {
        setInputStatus((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                value,
            },
        }));
    }

    function formValidate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const updatedStatus = {
            firstName: {
                ...inputStatus.firstName,
                error:
                    inputStatus.firstName.value.trim() === "" ||
                    inputStatus.firstName.value.trim().length < 2,

                errormsg:
                    inputStatus.firstName.value.trim() === ""
                        ? "First Name cannot be empty"
                        : inputStatus.firstName.value.trim().length < 2
                          ? "First name must be at least 2 Characters long"
                          : "",
            },
            lastName: {
                ...inputStatus.lastName,
                error:
                    inputStatus.lastName.value.trim() === "" ||
                    inputStatus.lastName.value.trim().length < 2,
                errormsg:
                    inputStatus.lastName.value.trim() === ""
                        ? "Last Name cannot be empty"
                        : inputStatus.lastName.value.trim().length < 2
                          ? "Last Name must be at least 2 Characters long"
                          : "",
            },
            email: {
                ...inputStatus.email,
                error:
                    inputStatus.email.value.trim() === "" ||
                    !emailRegex.test(inputStatus.email.value.trim()),
                errormsg:
                    inputStatus.email.value.trim() === ""
                        ? "Email cannot be empty"
                        : emailRegex.test(inputStatus.email.value.trim())
                          ? ""
                          : "Looks like this is not an email",
            },
            password: {
                ...inputStatus.password,
                error:
                    inputStatus.password.value.trim() === "" ||
                    inputStatus.password.value.trim().length < 8,
                errormsg:
                    inputStatus.password.value.trim() === ""
                        ? "Password cannot be empty"
                        : inputStatus.password.value.trim().length < 8
                          ? "Password must be at least 8 Characters long"
                          : "",
            },
        };
        setInputStatus(updatedStatus);

        submitForm(updatedStatus);
    }

    function submitForm(status: InputStatus) {
        const allValid = Object.values(status).every(
            (field) => field.value.trim() !== "" && !field.error
        );

        if (allValid) {
            setSignUpStatus("submitted");
        }
    }

    return (
        <main className="bg-[url('./assets/images/bg-intro-mobile.png')] bg-no-repeat bg-center bg-cover bg-c-Red-400 w-full min-h-screen flex justify-center items-center px-6 py-24 md:p-24 md:bg-[url('./assets/images/bg-intro-desktop.png')]">
            <div className="lg:flex lg:items-center lg:gap-20 w-full max-w-300">
                <section className=" mb-15 text-center lg:w-full lg:text-left">
                    <h1 className="font-poppins-700 text-white text-3xl mb-6 lg:text-5xl lg:leading-15">
                        Learn to code by watching others
                    </h1>
                    <p className="text-md font-poppins-500  text-white lg:text-lg">
                        {" "}
                        See how experienced developers solve problems in
                        real-time. Watching scripted tutorials is great, but
                        understanding how developers think is invaluable.
                    </p>
                </section>
                <section className="lg:w-full">
                    <div className="bg-c-Purple-700 rounded-xl py-6 px-15 mb-6 shadow-p-shadow lg:px-2">
                        <p className="text-white text-md text-center font-poppins-400 text-base ">
                            <span className="font-poppins-700">
                                Try it free 7 days
                            </span>{" "}
                            then $20/mo. thereafter
                        </p>
                    </div>

                    {signUpStatus === "form" ? (
                        <form
                            onSubmit={formValidate}
                            className="bg-white p-6 rounded-xl flex flex-col gap-4 shadow-p-shadow md:p-10"
                        >
                            <div className="relative">
                                <input
                                    name="firstName"
                                    value={inputStatus.firstName.value}
                                    onChange={(e) =>
                                        updateInput(
                                            "firstName",
                                            e.currentTarget.value
                                        )
                                    }
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
                                        {inputStatus.firstName.errormsg}{" "}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    name="lastName"
                                    value={inputStatus.lastName.value}
                                    onChange={(e) =>
                                        updateInput(
                                            "lastName",
                                            e.currentTarget.value
                                        )
                                    }
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
                                        {inputStatus.lastName.errormsg}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    name="email"
                                    value={inputStatus.email.value}
                                    onChange={(e) =>
                                        updateInput(
                                            "email",
                                            e.currentTarget.value
                                        )
                                    }
                                    className={`${
                                        inputStatus.email.error === true
                                            ? "input__err red__text"
                                            : " "
                                    }`}
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
                                        {inputStatus.email.errormsg}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    name="password"
                                    value={inputStatus.password.value}
                                    onChange={(e) =>
                                        updateInput(
                                            "password",
                                            e.currentTarget.value
                                        )
                                    }
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
                                {inputStatus.password.error === true && (
                                    <img
                                        src={errIcon}
                                        className="absolute bottom-1/2 right-3"
                                        alt=""
                                    />
                                )}
                                {inputStatus.password.error === true && (
                                    <p className="error__msg">
                                        {inputStatus.password.errormsg}
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
                    ) : (
                        <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-2 text-center  md:py-10 md:px-5">
                            <h2 className="font-poppins-700 text-c-Green-400 text-xl">
                                Sign up Successfull!{" "}
                            </h2>
                            <p className="font-poppins-600 text-c-Purple-700 mb-10 text-sm">
                                Check your email to confirm your signup.
                            </p>
                            <p className="font-poppins-600 text-xs text-c-Red-400 capitalize">
                                Disclaimer: this is not a real signup, no data
                                was collected or saved and no email was sent.
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

export default App;
