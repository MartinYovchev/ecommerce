import { NextRequest } from 'next/server';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: { integration_check: 'accept_a_payment' },
    });

    return new Response(
      JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentIntent: paymentIntent.id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Stripe Payment Intent Error:', error);

    return new Response(
      JSON.stringify({ message: 'Failed to create payment intent' }),
      { status: 500 }
    );
  }
}
