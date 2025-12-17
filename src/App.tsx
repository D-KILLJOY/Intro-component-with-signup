function App() {
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
                    <form className="bg-white p-6 rounded-xl flex flex-col gap-4 shadow-p-shadow">
                        <div>
                            <input type="text" placeholder="First Name" />
                            {
                                <p className="text-right font-poppins-600 italic text-c-Red-400/80 text-xs mt-2">
                                    {" "}
                                    First Name cannot be empty
                                </p>
                            }
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name" />
                        </div>

                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <button
                            type="button"
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
