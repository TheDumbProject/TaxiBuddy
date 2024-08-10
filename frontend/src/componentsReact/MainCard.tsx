import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <CardTitle>Get Your Taxi Buddy</CardTitle>
        <CardDescription>Enter your Details Below</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div className="my-4 flex  justify-between gap-2 items-center">
                <Label htmlFor="from " className="w-10">
                  From:
                </Label>
                <Select>
                  <SelectTrigger id="from">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="IIITK">IIITK</SelectItem>
                    <SelectItem value="Kottayam">
                      Kottayam Railway Station
                    </SelectItem>
                    <SelectItem value="Cochin International Airport">
                      Cochin International Airport
                    </SelectItem>
                    <SelectItem value="Ernankulam Railway Station">
                      Ernakulam Railway Station
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="my-4 flex  justify-between gap-2 items-center">
                <Label htmlFor="to " className="w-10">
                  To:
                </Label>
                <Select>
                  <SelectTrigger id="to">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {" "}
                    <SelectItem value="IIITK">IIITK</SelectItem>
                    <SelectItem value="Kottayam">
                      Kottayam Railway Station
                    </SelectItem>
                    <SelectItem value="Cochin International Airport">
                      Cochin International Airport
                    </SelectItem>
                    <SelectItem value="Ernankulam Railway Station">
                      Ernakulam Railway Station
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
