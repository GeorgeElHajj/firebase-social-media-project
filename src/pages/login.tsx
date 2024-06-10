import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };
  return (
    <div>
      <p>Please Sign in with Google</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}
