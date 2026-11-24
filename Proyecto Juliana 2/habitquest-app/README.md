# HabitQuest (React + Tailwind scaffold)

Quick scaffold of a React app with Tailwind and Firebase placeholders.

Setup

1. Open a terminal in `habitquest-app`.
2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

Notes
- This scaffold imports the existing `inicio.css` to keep the current visual quickly. Later convert pages into React components and migrate styles to Tailwind utilities.
- To enable Firebase auth, replace the placeholders in `src/firebase.js` with your Firebase project config and implement sign-up / sign-in flows.

Quick migration steps

1. Install deps in `habitquest-app`:

```bash
cd habitquest-app
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. To use Firebase auth:
- Create a Firebase project and enable Email/Password authentication.
- Copy the config into `src/firebase.js`.

This scaffold already includes sample `Register` and `Login` components and an `AuthContext` to manage user state.

Firebase and Firestore

- Enable Email/Password provider in Firebase Console.
- Create a Firestore database in test mode for development.
- Update `src/firebase.js` with your Firebase config.
- The app uses a `challenges` collection where each document has fields: `userId`, `title`, `freq`, `days`, `reward`, `createdAt`, `completed`.

Testing the full flow

1. Start dev server: `npm run dev`
2. Register a user via `/register`.
3. Go to `/dashboard` (protected) and create/mark retos in the landing or the Retos section.

Security

For production, set Firestore rules to restrict reads/writes to authenticated users and validate fields. Example rule snippet:

```
rules_version = '2';
service cloud.firestore {
	match /databases/{database}/documents {
		match /challenges/{ch} {
			allow read, write: if request.auth != null && request.auth.uid == request.resource.data.userId;
		}
	}
}
```

