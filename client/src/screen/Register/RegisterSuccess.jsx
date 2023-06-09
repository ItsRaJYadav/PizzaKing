



import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";
import axios from "axios"


const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
	const param = useParams();
  
	useEffect(() => {
    const apiUrl = process.env.NODE_ENV === 'production' ? 'https://pizzaking.onrender.com/api/users' : 'http://localhost:8080/api/users';
		const verifyEmailUrl = async () => {
			try {
				const url = `${apiUrl}/verify-email/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

  return (
    <>
      {validUrl ? (
        <div className="flex flex-col items-center justify-center py-16">
          <RiCheckboxCircleFill className="text-green-500 text-6xl mb-6" />
          <h1 className="text-3xl font-bold mb-6">Email verified successfully</h1>
          <Link to="/login">
            <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
              Login
            </button>
          </Link>
          {/* <img src="https://cdn-icons-png.flaticon.com/512/4192/4192775.png" alt="Success" className="mt-8 w-48" /> */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <RiErrorWarningFill className="text-red-500 text-6xl mb-6" />
          <h1 className="text-3xl font-bold mb-6">404 Not Found</h1>
          
        </div>
      )}
    </>
  );
};

export default EmailVerify;
