import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';    
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Content is required').min(10, 'Content must be at least 10 characters long'),
    });


    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema),

    });

    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: CreateFormData)  => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid
        });

       navigate('/');
    }

    return (
        <div>
            <h1>Create Post Page</h1>
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input type="text" placeholder="Title" {...register("title")} />
                { errors.title?.message && 
                <p>{errors.title?.message}</p>
                }
                <textarea placeholder="Content" {...register("description")}></textarea>
                {errors.description?.message && 
                    <p>{errors.description?.message}</p>
                }
                <input type="submit" value="Create Post" />
            </form>
        </div>
    );
};