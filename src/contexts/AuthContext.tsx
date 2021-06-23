import { createContext, ReactNode, useState, useEffect } from 'react';

import { firebase, auth } from '../services/firebase';

type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();

	useEffect(() => {
		// Boa prática - toda vez que declarar um eventListener, tem obrigação de se descadastrar. 
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				// Informações que vai pegar do user.
				const { displayName, photoURL, uid } = user

				// Se essas variáveis estiverem vazias da erro.
				if (!displayName || !photoURL) {
					throw new Error('Missing information from google account');
				}

				// Se existirem, passa as informações para a função setUser.
				setUser({
					id: uid,
					name: displayName,
					avatar: photoURL
				})
			}
		});

		return () => {
			unsubscribe();
		}
	}, [])

	// Faz login com a conta do google
	async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();
		const result = await auth.signInWithPopup(provider)

		if (result.user) {
			// Informações que vai pegar do user.
			const { displayName, photoURL, uid } = result.user

			// Se essas variáveis estiverem vazias da erro.
			if (!displayName || !photoURL) {
				throw new Error('Missing information from google account');
			}

			// Se existirem, passa as informações para a função setUser.
			setUser({
				id: uid,
				name: displayName,
				avatar: photoURL
			})
		}
	}

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}