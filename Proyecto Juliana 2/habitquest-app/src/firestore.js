import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot } from 'firebase/firestore'
import app from './firebase'

const db = getFirestore(app)

export async function addChallenge(userId, data){
  const col = collection(db, 'challenges')
  return await addDoc(col, {...data, userId})
}

export function subscribeUserChallenges(userId, cb){
  const q = query(collection(db,'challenges'), where('userId','==',userId), orderBy('createdAt','desc'))
  const unsub = onSnapshot(q, snap=>{
    const items = snap.docs.map(d=> ({id:d.id, ...d.data()}))
    cb(items)
  })
  return unsub
}

import { doc, updateDoc } from 'firebase/firestore'

export async function updateChallenge(challengeId, patch){
  const ref = doc(db, 'challenges', challengeId)
  return await updateDoc(ref, patch)
}
