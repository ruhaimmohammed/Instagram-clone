import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signIn({ providers }) {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-40 px-14 text-center">

                <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
                <p className="font-xs italic">This is not the REAL INSTAGRAM authorized app, its built for education purpose only</p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className="p-3 bg-red-400 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn;