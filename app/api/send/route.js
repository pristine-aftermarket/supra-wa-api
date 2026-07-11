import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const to = searchParams.get('to');
  const message = searchParams.get('message');
  const token = process.env.WA_TOKEN;

  const res = await fetch('https://graph.facebook.com/v19.0/110xxxxxxx/messages', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: to,
      text: { body: message }
    })
  });
  return NextResponse.json(await res.json());
}