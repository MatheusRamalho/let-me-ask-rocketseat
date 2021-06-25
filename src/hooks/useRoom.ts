import { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type Questions = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
    likeCount: number;
    hasLiked: boolean;
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
    likes: Record<string, {
        authorId: string;
    }>;
}>

export function useRoom(roomId: String) {
    const { user } = useAuth();
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                    likeCount: Object.values(value.likes ?? {}).length,
                    hasLiked: Object.values(value.likes ?? {}).some(like => like.authorId === user?.id)
                }
            })

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestion);
        })

        return () => {
            roomRef.off('value');
        }
    }, [roomId, user?.id]);

    return { questions, title }
}