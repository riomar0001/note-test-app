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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const UpdateNotes = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(title, body);

    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }),
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`http://localhost:3000/notes/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setBody(data.body);
    };

    fetchNote();
  }, [id]);

  return (
    <div className="flex justify-center items-center my-10 ">
      <Card className="w-1/2 shadow-lg">
        <CardHeader className="flex flex-col gap-y-5">
          <Button
            variant="outline"
            className="w-24"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </Button>

          <div className="flex flex-col gap-y-2">
            <CardTitle>Add New Note</CardTitle>
            <CardDescription>
              <p>
                Create a new note by filling out the form below. Make sure to
                save your note before leaving the page.
              </p>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="border-t p-5 ">
          <form className="flex flex-col gap-y-5" onSubmit={handleSave}>
            <div className="flex flex-col gap-y-5">
              <Label>Title</Label>
              <Input
                placeholder="Enter the title of the note"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label>Body</Label>
              <Textarea
                placeholder="Enter the body of the note"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="mt-5">
              Save Note
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateNotes;
