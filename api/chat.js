export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const body = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return new Response(response.body, {
    headers: {
      "Content-Type": "text/event-stream"
    }
  });
}
