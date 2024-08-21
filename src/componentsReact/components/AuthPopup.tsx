import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSENGERSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div className="w-full flex justify-center px-6">
      <Button
        onClick={logGoogleUser}
        variant="outline"
        className="w-full mb-6 flex items-center justify-center bg-[#1E1E1E] border-yellow-400 rounded-[6px]"
      >
        <FaGoogle className="mr-2 " />
        Login with Google
      </Button>
    </div>
  );
};

export default function AuthPopup() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Card className="p-6 bg-[#1E1E1E] rounded-xl my-8 border-none">
        <div className="flex flex-col lg:flex-row w-full ">
          <div className="flex flex-col  font-extrabold text-3xl mr-12 lg:w-[50%] lg:border-r-2 lg:border-yellow-400">
            <CardHeader className="my-0">
              Welcome to <span className="text-yellow-400">Taxi Buddy</span>
            </CardHeader>
            <CardDescription className="mx-6 my-2 lg:m-6 text-xl text-white font-semibold">
              Find people and go places,
              <span className="text-yellow-400"> together.</span>
            </CardDescription>
          </div>
          <div className="flex flex-col  items-center lg:w-[50%]">
            <CardHeader className="font-semibold text-2xl text-center">
              Register using your
              <div className="text-yellow-400">College Email</div>
            </CardHeader>
            <SignIn />
            <CardContent className="w-full flex flex-col justify-center   ">
              <div className="flex flex-row lg:justify-center  justify-center place-items-center text-[#8A8A8A] font-medium">
                <hr className="bg-[#8A8A8A] h-1 rounded-xl w-full mr-2"></hr> OR{" "}
                <hr className="bg-[#8A8A8A] h-1 rounded-xl w-full ml-2"></hr>
              </div>
              <Input
                type="email"
                placeholder="Email"
                className="mt-6 p-0 rounded-none bg-[#1e1e1e] focus-visible:ring-transparent bg-transparent ring-transparent border-transparent border-l-none border-2 border-b-[#8e8e8e] focus:border-b-yellow-400 hover:border-b-white"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Button className="mt-6 mx-auto bg-yellow-400  text-black font-semibold rounded-[6px] text-md">
                Register
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
