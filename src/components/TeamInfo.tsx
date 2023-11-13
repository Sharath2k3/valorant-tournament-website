"use client";

import React, { useState } from "react";

import { getTeam } from "@/actions/player.actions";
import { IPlayer } from "@/models/player.model";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/registration/Spinner";

function TeamInfo() {
  const [team, setTeam] = useState<IPlayer[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  async function search(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);
    setError("");
    setTeam([]);

    try {
      const response = await getTeam(inputValue);
      if (typeof response == "string") {
        setError(response as string);
      } else {
        setTeam(response as IPlayer[]);
      }
    } catch (e: any) {
      if (process.env.NODE_ENV === "production") {
        setError("Something went wrong!");
      } else {
        setError(e.message);
        console.log(e);
      }
    }

    setLoading(false);
  }

  function clear(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    setError("");
    setTeam([]);
    setInputValue("");
  }

  return (
    <div className="flex items-center justify-center max-w-1/2">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Find your team</CardTitle>
          <CardDescription>See your team members now</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="riot">Riot ID</Label>
              <Button disabled={loading} onClick={search} type="submit">
                {loading ? <Spinner /> : "Search"}
              </Button>
            </div>
            <div>
              <Input
                name="riot"
                id="riot"
                type="text"
                placeholder="Enter your riot id"
                disabled={loading}
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                disabled={loading}
                variant="secondary"
                type="reset"
                onClick={clear}
              >
                Clear
              </Button>
            </div>

            {team.length > 0 && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">First name</TableHead>
                    <TableHead className="text-center">Last name</TableHead>
                    <TableHead className="text-center">Riot ID</TableHead>
                    <TableHead className="text-center">Rank</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {team.map((player) => (
                    <TableRow key={player.riotId}>
                      <TableCell className="text-center">
                        {player.firstName}
                      </TableCell>
                      <TableCell className="text-center">
                        {player.lastName}
                      </TableCell>
                      <TableCell className="text-center">
                        {player.riotId}
                      </TableCell>
                      <TableCell className="text-center">
                        {player.rank}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            {error && (
              <div className="flex items-center justify-center">
                <Label className="text-primary font-bold text-center">
                  {error}
                </Label>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TeamInfo;
