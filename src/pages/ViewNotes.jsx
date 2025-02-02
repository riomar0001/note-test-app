import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ViewNotes = () => {
  const [note, setNote] = useState({});

  const { id } = useParams();


  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`http://localhost:3000/notes/${id}`);
      const data = await response.json();
      setNote(data);
    };

    fetchNote();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${note.id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="flex justify-center items-center my-10 ">
      <Card className="w-1/2 shadow-lg">
        <CardHeader className="flex flex-col gap-y-10">
          <div className="flex flex-row justify-between items-center">
            <Button
              variant="outline"
              className="w-24"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back
            </Button>
            <div className="flex flex-row gap-x-3">
              <Button
                className="w-24"
                onClick={() => {
                  navigate(`/note/update/${note.id}`);
                }}
              >
                Edit Note
              </Button>
              <Button
                variant="destructive"
                className="w-24"
                onClick={handleDelete}
              >
                Delete Note
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <CardTitle>{note.title}</CardTitle>
            <CardDescription>
              {new Date(note.createdAt).toLocaleDateString()}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="border-t p-5 ">
          <p>{note.body}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default ViewNotes;
