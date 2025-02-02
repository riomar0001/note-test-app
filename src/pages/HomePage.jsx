import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import NoteCard from "@/components/NoteCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("http://localhost:3000/notes");
      const data = await response.json();
      setNotes(data);
      setFilteredNotes(data);
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleSearch = () => {
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div className="flex justify-center items-center my-10 ">
      <Card className="w-1/2 shadow-lg">
        <CardHeader className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-y-2">
            <CardTitle>Welcome to your Notes App</CardTitle>
            <CardDescription>Made in React Js</CardDescription>
          </div>
          <Button onClick={() => navigate("/note/add")}>Add Notes</Button>
        </CardHeader>
        <CardContent className="border-t py-5">
          <div className="flex flex-col gap-y-3">
            <Label className="text-lg">Search</Label>
            <div className="flex flex-row gap-x-3">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes..."
              />
              <Button className="w-40" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>

          <div>
            {currentNotes.map((note) => (
              <NoteCard key={note.id} data={note} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    isActive={index + 1 === currentPage}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;
