"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams, notFound } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CopyIcon } from "@radix-ui/react-icons";
import Spinner from "@/components/registration/Spinner";

import { createPlayer } from "@/actions/player.actions";
import { playerSchema } from "@/validators/player.validator";
import shortUUID from "short-uuid";
import { copyToClipboard } from "@/lib/clipboard";

const VALORANT_RANKS = [
  "Unranked",
  "Iron",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Ascendant",
  "Immortal",
  "Radiant",
];

function RegistrationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (
    searchParams.get("create") !== "true" &&
    searchParams.get("create") !== "false"
  ) {
    notFound();
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [teamCodeDisabled, setTeamCodeDisabled] = useState<boolean>(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof playerSchema>>({
    resolver: zodResolver(playerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      discordId: "",
      riotId: "",
      rank: "Unranked",
      teamCode: "",
      note: "",
    },
  });

  function onReset(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    form.reset();
    setTeamCodeDisabled(false);
    setError("");
  }

  async function onSubmit(data: z.infer<typeof playerSchema>): Promise<void> {
    setLoading(true);
    setError("");

    try {
      const errorMessage: string = await createPlayer(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber ? data.phoneNumber : null,
          discordId: data.discordId ? data.discordId : null,
          riotId: data.riotId,
          rank: data.rank,
          teamCode: data.teamCode,
          note: data.note ? data.note : null,
        },
        {
          isNewTeam: teamCodeDisabled,
        }
      );

      if (errorMessage) {
        setError(errorMessage);
      } else {
        router.replace("/");

        toast({
          title: "Your registration is saved successfully",
          description: "Welcome to VALORESI",
          variant: "successful",
        });
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

  return (
    <section className="flex flex-col items-center justify-center">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Register</CardTitle>
          <CardDescription>Start the journey with us today.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col justify-center items-center"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-9">
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          First Name
                          <span className="text-primary font-bold">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Last Name
                          <span className="text-primary font-bold">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email<span className="text-primary font-bold">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Separator
                  orientation="vertical"
                  className="h-auto hidden md:block"
                />
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="discordId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discord ID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your discord id"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="riotId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Riot ID
                          <span className="text-primary font-bold">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your riot id" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rank"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Valorant Rank
                          <span className="text-primary font-bold">*</span>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your rank" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {VALORANT_RANKS.map((rank) => (
                              <SelectItem key={rank} value={rank}>
                                <div className="flex justify-center items-center gap-2">
                                  {rank === "Unranked" ? (
                                    <div className="w-5 h-5" />
                                  ) : (
                                    <Image
                                      src={`/images/ranks/${rank}.png`}
                                      alt={rank}
                                      width={256}
                                      height={256}
                                      className="w-5 h-5"
                                    />
                                  )}
                                  <p>{rank}</p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="teamCode"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center gap-6">
                          <FormLabel>
                            Team Code
                            <span className="text-primary font-bold">*</span>
                          </FormLabel>
                          <div className="flex gap-2 justify-center items-center">
                            <Button
                              disabled={teamCodeDisabled}
                              variant="secondary"
                              type="button"
                              onClick={(event) => {
                                event.preventDefault();
                                form.setValue("teamCode", shortUUID.generate());
                                form.clearErrors("teamCode");
                                setTeamCodeDisabled(true);
                              }}
                            >
                              Generate
                            </Button>
                            <Button
                              variant="outline"
                              type="button"
                              onClick={(event) => {
                                event.preventDefault();
                                copyToClipboard(field.value);

                                toast({
                                  title: "Team Code copied to clipboard",
                                  variant: "successful",
                                });
                              }}
                            >
                              <CopyIcon />
                            </Button>
                          </div>
                        </div>
                        <FormControl>
                          <Input
                            placeholder="Enter your team code"
                            {...field}
                            disabled={teamCodeDisabled}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem className="self-stretch">
                    <FormLabel>Anything to add?</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full pt-4 justify-between items-center">
                <Button
                  disabled={loading}
                  type="reset"
                  variant="outline"
                  onClick={onReset}
                >
                  Clear
                </Button>
                <Button disabled={loading} type="submit">
                  Submit
                </Button>
              </div>
              {loading && <Spinner />}
              {error && (
                <Label className="text-primary font-bold text-center">
                  {error}
                </Label>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default RegistrationForm;
