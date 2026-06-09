import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  const filename = params.filename;

  const filePath = path.join(
    process.cwd(),
    "public",
    "product-images",
    filename
  );

  try {
    const file = await readFile(filePath);

    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": "image/png"
      }
    });
  } catch (err) {
    return new NextResponse(
      `Cannot read:\n${filePath}\n\n${String(err)}`,
      { status: 404 }
    );
  }
}