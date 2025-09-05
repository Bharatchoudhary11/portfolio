import { getClient } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await getClient();
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
        changeStream.on("error", (error) => {
          console.error("Change stream error:", error);
          controller.error(error);
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
  } catch (error) {
    console.error("Error setting up stream:", error);
    return new Response("Stream setup failed", { status: 500 });
  }
}
