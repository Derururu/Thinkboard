import Navbar from "../components/Navbar.jsx";
import { useState, useEffect } from "react";
import RateLimitedUI from "../components/RatelimitedUI.jsx";
import axios from "axios";
import api from "../lib/axios.js";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard.jsx";
import NotesNotFound from "../components/NotesNotFound.jsx";

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const[notes, setNotes] = useState([]);
    const[loading, setIsLoading] = useState(true);

    useEffect(()=> {
        const fetchNotes = async () => {
            try {
                const res = await api.get("/notes");
                console.log(res.data);
                setNotes(res.data);
                setIsRateLimited(false);

                
            } catch (error) {
                console.log("Error fetching notes");
                console.log(error);
                if(error.response?.status === 429) {
                    setRateLimited(true);
                }
                else{
                    toast.error("Failed to load notes");
                }
            } finally {
                setIsLoading(false);
            }
        }
        fetchNotes();
    },[])

    return (
        <div className="min-h-screen">
            <Navbar />

            {isRateLimited && <RateLimitedUI />}

            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className="text-center text-sky-800 py-10">Loading...</div>}

                {notes.length===0 && !isRateLimited&& <NotesNotFound />}

                {notes.length >0 && !isRateLimited && (
                    <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) =>(
                            <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                        ))}
                    </div>
                )}

            </div>


        </div>
    )
}

export default HomePage