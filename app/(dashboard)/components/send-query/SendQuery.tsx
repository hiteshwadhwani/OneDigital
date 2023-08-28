"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email("This is not a valid email"),
  message: z.string(),
});

const SendQuery = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="min-h-[100vh] h-fit">
      <div className="flex flex-col md:flex-row w-[80%] mx-auto pt-10 md:pt-20">
        <div className="uppercase leading-[101.3px] text-[70px] md:text-[100px] font-light w-full">
          send a <br className="hidden xl:block" /> query
        </div>
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px]">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#F7F7F7] border-none min-h-[60px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px]">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#F7F7F7] border-none min-h-[60px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px]">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-[#F7F7F7] border-none min-h-[165px]"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full rounded-none text-[20px] py-[20px] h-fit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
        <Button className="hidden md:flex mx-auto rounded-full border mt-10 border-black bg-white hover:bg-white text-black p-0 flex-row h-[100px] w-[352px] text-[40px] font-light">
          <span className="flex-1">Back to top </span>
          <div className="rounded-full border border-black w-[100px] h-full flex items-center justify-center p-3">
            {" "}
            <ArrowUp className="w-full h-full" strokeWidth={"1"} />{" "}
          </div>
        </Button>
    </div>
  );
};
export default SendQuery;
