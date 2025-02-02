import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center  mt-52 ">
      <Card className="w-1/4 shadow-lg">
        <CardHeader>
          <CardTitle>404</CardTitle>
          <CardDescription>Not Found</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
        </CardContent>
        <CardFooter>
          <a href="/" className="text-blue-500">
            Go to Home
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
