import { signIn, signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='w-16 h-16 rounded-full border p-[2px]' src={ session ? session?.user?.image : "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} alt="profile" />

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{ session?.user?.username }</h2>
            <h3 className='text-sm'>{ session ? "Welcome to Instagram" : "Please sign in"}</h3>
        </div>

        <button onClick={ session ? signOut : signIn} className='text-blue-400 text-sm font-semibold ml-5'>
            { session ? "Sign out" : "Sign in"}
        </button>
  </div>;
}

export default MiniProfile;
