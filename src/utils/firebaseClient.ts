import { initializeApp, getApps, FirebaseOptions } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export default function createFirebaseApp() {
    const appCreds: FirebaseOptions = {
        apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
        appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
        authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
        measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
        messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET
    }

    if (!getApps().length) { 
        const app = initializeApp(appCreds);

        if (typeof window !== 'undefined') {
            getAnalytics()
        }

        return app;
    }
}