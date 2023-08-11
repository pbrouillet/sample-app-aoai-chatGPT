import { config } from "dotenv";
import { UserInfo, ConversationRequest } from "./models";

export async function conversationApi(options: ConversationRequest, abortSignal: AbortSignal): Promise<Response> {
    debugger;
    console.log(import.meta.env)

    let endpointHost = import.meta.env.VITE_BACKEND_ENDPOINT;
    let conversationEndpoint = "/conversation";
    
    if (endpointHost) {
        conversationEndpoint = endpointHost.replace(/\/+$/, '') + conversationEndpoint;
    }

    const response = await fetch(conversationEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages: options.messages
        }),
        signal: abortSignal
    });

    return response;
}

export async function getUserInfo(): Promise<UserInfo[]> {
    const response = await fetch('/.auth/me');
    if (!response.ok) {
        console.log("No identity provider found. Access to chat will be blocked.")
        return [];
    }

    const payload = await response.json();
    return payload;
}