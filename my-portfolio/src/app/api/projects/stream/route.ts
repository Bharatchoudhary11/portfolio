import { getClient } from "@/lib/mongodb";

export async function GET() {
  const client = getClient();
  await client.connect();
  const changeStream = client
    .db(process.env.MONGODB_DB || "portfolio")
    .collection("projects")
    .watch([], { fullDocument: "updateLookup" });

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      changeStream.on("change", (change) => {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(change.fullDocument)}\n\n`)
        );
      });
    },
    cancel() {
      changeStream.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
