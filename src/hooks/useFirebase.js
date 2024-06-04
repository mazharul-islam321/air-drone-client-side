import { useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [logInError, setLogInError] = useState("");
	const [loading, setLoading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInWithGoogle = (location, history) => {
		setLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				// console.log(user);

				// save user to the database
				saveUser(user.email, user.displayName, "PUT");

				setLogInError("");
				const destination = location?.state?.from || "/dashboard";
				history.replace(destination);
			})
			.catch((error) => {
				setLogInError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// user registration
	const handleUserRegister = (email, password, name, history) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((results) => {
				setError("");
				const newUser = { email, displayName: name };
				setUser(newUser);

				// save user to the database
				saveUser(email, name, "POST");

				// set name after register
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
				history.replace("/");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// user login
	const handleUserLogin = (email, password, location, history) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((results) => {
				const redirect_uri = location?.state?.from || "/dashboard";
				history.push(redirect_uri);
				setLogInError("");
			})
			.catch((error) => {
				setLogInError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// user state observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
		return () => unsubscribe;
	}, [auth]);

	// for admin
	useEffect(() => {
		fetch(`https://air-drone-server-side.vercel.app/users/${user.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user.email]);

	// user logout
	const logOut = (history) => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				history.replace("/");
			})
			.catch((error) => {
				// An error happened.
			})
			.finally(() => setLoading(false));
	};
	// save user to database
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch("https://air-drone-server-side.vercel.app/users", {
			method: method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then();
	};
	return {
		user,
		setLoading,
		admin,
		handleUserRegister,
		signInWithGoogle,
		logOut,
		handleUserLogin,
		loading,
		error,
		logInError,
	};
};

export default useFirebase;
