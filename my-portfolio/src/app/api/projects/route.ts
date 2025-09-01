import { NextResponse } from "next/server";
import { z } from "zod";
import { getCollection } from "@/lib/mongodb";

const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export async function GET() {
  try {
    const collection = await getCollection("projects");
    const projects = await collection.find().sort({ _id: -1 }).toArray();
    return NextResponse.json(projects);
  } catch (err) {
    console.error("Error fetching projects", err);
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = projectSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    const collection = await getCollection("projects");
    const { insertedId } = await collection.insertOne(parsed.data);
    return NextResponse.json({ _id: insertedId, ...parsed.data }, { status: 201 });
  } catch (err) {
    console.error("Error creating project", err);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
