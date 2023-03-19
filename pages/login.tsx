import React, { useState } from "react";
import { login, register } from "@/service/AuthService";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    const [view, setView] = useState<"log" | "reg">("log");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const togle = async () => {
        setView(view === "log" ? "reg" : "log");
    }

    const star = async () => {
        if (!email == !password) return;
        const action = view === "log" ? login : register;
        try {
            await action(email, password);
            router.replace("/");
        } catch (err){
            console.log(err);
        }
    }

    return <div>

    </div>;
}
