import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get('hub.verify_token') === process.env.VERIFY_TOKEN) {
    return new NextResponse(searchParams.get('hub.challenge'));
  }
  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(req) {
  const body = await req.json();
  console.log(JSON.stringify(body));
  return NextResponse.json({ status: 'ok' });
}